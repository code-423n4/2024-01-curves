import { expect, use } from "chai";
import { solidity } from "ethereum-waffle";
use(solidity);
//@ts-ignore
import { parseEther } from "@ethersproject/units";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber } from "ethers";
//@ts-ignore
import { ethers } from "hardhat";

import { type Curves, Curves__factory } from "../contracts/types";
import { TradeEvent } from "../contracts/types/Curves";
import { deployCurveContracts } from "./test.helpers";

// FRIEND TECH PRICE hardcoded to guarantee keeping the same value after changes
const FRIEND_TECH_INITIAL_PRICE = "62500000000000";

describe("Frien-Tech Contract test", () => {
  let testContract: Curves, owner: SignerWithAddress, friend: SignerWithAddress, addrs: SignerWithAddress[];

  beforeEach(async () => {
    [owner, friend, ...addrs] = await ethers.getSigners();
    testContract = await deployCurveContracts();
  });

  describe("True", () => {
    it("Should be true", async () => {
      expect(true).to.equal(true);
    });
  });

  describe("Friend-tech test", () => {
    it("Should buy 1 tokens", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      const ownerBalance = await testContract.curvesTokenBalance(owner.address, owner.address);
      expect(ownerBalance).to.equal(1);
      const initialPrice = await testContract.getBuyPrice(owner.address, 1);
      expect(initialPrice).to.equal(FRIEND_TECH_INITIAL_PRICE);
    });

    it("Should fail if first buy is not 1 tokens ex 0", async () => {
      const tx = testContract.buyCurvesToken(owner.address, 0);
      expect(tx).to.be.reverted;
    });

    it("Should fail if first buy is not 1 tokens ex 1e18", async () => {
      const tx = testContract.buyCurvesToken(owner.address, parseEther("1"));
      expect(tx).to.be.reverted;
    });

    it("Should be able to buy and sell tokens by a friend", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      const initialPrice = await testContract.getBuyPrice(owner.address, 2);
      await testContract.connect(friend).buyCurvesToken(owner.address, 2, { value: initialPrice });

      const friendBalance = await testContract.curvesTokenBalance(owner.address, friend.address);
      expect(friendBalance).to.equal(2);

      const tx = await testContract.connect(friend).sellCurvesToken(owner.address, 1);
      const rec = await tx.wait();
      //@ts-ignore
      const trade = rec.events[0];
      const ICurves = Curves__factory.createInterface();
      //@ts-ignore
      const parsedEvent = ICurves.parseLog(trade) as TradeEvent;

      const friendBalance2 = await testContract.curvesTokenBalance(owner.address, friend.address);
      expect(friendBalance2).to.equal(1);
      expect(parsedEvent.args.ethAmount).to.equal(250000000000000);
      expect(parsedEvent.args.protocolEthAmount).to.equal(0);
      expect(parsedEvent.args.subjectEthAmount).to.equal(0);
    });

    it("Should process 0 price if I try to sell 0 tokens", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      const initialPrice = await testContract.getBuyPrice(owner.address, 2);
      await testContract.connect(friend).buyCurvesToken(owner.address, 2, { value: initialPrice });

      const friendBalance = await testContract.curvesTokenBalance(owner.address, friend.address);
      expect(friendBalance).to.equal(2);

      const tx = await testContract.connect(friend).sellCurvesToken(owner.address, 0);
      const rec = await tx.wait();
      //@ts-ignore
      const trade = rec.events[0];
      const ICurves = Curves__factory.createInterface();
      //@ts-ignore
      const parsedEvent = ICurves.parseLog(trade) as TradeEvent;

      const friendBalance2 = await testContract.curvesTokenBalance(owner.address, friend.address);
      expect(friendBalance2).to.equal(2);
      expect(parsedEvent.args.ethAmount).to.equal(0);
      expect(parsedEvent.args.protocolEthAmount).to.equal(0);
      expect(parsedEvent.args.subjectEthAmount).to.equal(0);
    });

    it("Should fail if I try to sell more tokens that I own", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      let price = await testContract.getBuyPrice(owner.address, 2);
      await testContract.connect(friend).buyCurvesToken(owner.address, 2, { value: price });
      price = await testContract.getBuyPrice(owner.address, 2);
      await testContract.connect(addrs[0]).buyCurvesToken(owner.address, 2, { value: price });

      const friendBalance = await testContract.curvesTokenBalance(owner.address, friend.address);
      expect(friendBalance).to.equal(2);

      const tx = testContract.connect(friend).sellCurvesToken(owner.address, 3);
      expect(tx).to.be.revertedWith("InsufficientBalance()");
    });
  });

  describe("Fees test", () => {
    it("Should correctly set and distribute fees on buyCurvesToken", async () => {
      const protocolFee = ethers.utils.parseEther("0.05"); // 5%
      const subjectFee = ethers.utils.parseEther("0.05"); // 5%
      const referralFee = ethers.utils.parseEther("0.0"); // 0%
      const holdersFee = ethers.utils.parseEther("0.0"); // 0%

      await testContract.setMaxFeePercent(protocolFee.add(subjectFee).add(referralFee));
      await testContract.setProtocolFeePercent(protocolFee, addrs[0].address);
      await testContract.setExternalFeePercent(subjectFee, referralFee, holdersFee);

      await testContract.buyCurvesToken(owner.address, 1);
      const buyPrice = await testContract.getBuyPrice(owner.address, 2);
      const expectedProtocolFee = buyPrice.mul(protocolFee).div(ethers.utils.parseEther("1"));
      const expectedSubjectFee = buyPrice.mul(subjectFee).div(ethers.utils.parseEther("1"));

      const initialBalanceAddr0 = await ethers.provider.getBalance(addrs[0].address);
      const initialBalanceOwner = await ethers.provider.getBalance(owner.address);

      const totalPayment = buyPrice.add(expectedProtocolFee).add(expectedSubjectFee);
      await testContract.connect(friend).buyCurvesToken(owner.address, 2, { value: totalPayment });

      const newBalanceAddr0 = await ethers.provider.getBalance(addrs[0].address);
      const newBalanceOwner = await ethers.provider.getBalance(owner.address);

      expect(newBalanceAddr0.sub(initialBalanceAddr0)).to.equal(expectedProtocolFee);
      expect(newBalanceOwner.sub(initialBalanceOwner)).to.equal(expectedSubjectFee);
    });

    it("Should correctly set and distribute fees on fee distributor", async () => {
      const protocolFee = ethers.utils.parseEther("0.05"); // 5%
      const subjectFee = ethers.utils.parseEther("0.05"); // 5%
      const referralFee = ethers.utils.parseEther("0.0"); // 0%
      const holdersFee = ethers.utils.parseEther("0.1"); // 10%

      await testContract.setMaxFeePercent(protocolFee.add(subjectFee).add(referralFee).add(holdersFee));
      await testContract.setProtocolFeePercent(protocolFee, addrs[0].address);
      await testContract.setExternalFeePercent(subjectFee, referralFee, holdersFee);

      await testContract.buyCurvesToken(owner.address, 1);
      const buyPrice = await testContract.getBuyPrice(owner.address, 2);
      const expectedProtocolFee = buyPrice.mul(protocolFee).div(ethers.utils.parseEther("1"));
      const expectedSubjectFee = buyPrice.mul(subjectFee).div(ethers.utils.parseEther("1"));
      const expectedHolderFee = buyPrice.mul(holdersFee).div(ethers.utils.parseEther("1"));

      const initialBalanceAddr0 = await ethers.provider.getBalance(addrs[0].address);
      const initialBalanceOwner = await ethers.provider.getBalance(owner.address);

      const totalPayment = buyPrice.add(expectedProtocolFee).add(expectedSubjectFee).add(expectedHolderFee);
      await testContract.connect(friend).buyCurvesToken(owner.address, 2, { value: totalPayment });

      const newBalanceAddr0 = await ethers.provider.getBalance(addrs[0].address);
      const newBalanceOwner = await ethers.provider.getBalance(owner.address);

      expect(newBalanceAddr0.sub(initialBalanceAddr0)).to.equal(expectedProtocolFee);
      expect(newBalanceOwner.sub(initialBalanceOwner)).to.equal(expectedSubjectFee);
    });
  });

  describe("Insufficient payment tests", () => {
    it("Should revert if insufficient ether is sent for buying tokens", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      const buyPrice = await testContract.getBuyPrice(owner.address, 2);

      const insufficientPayment = buyPrice.mul(99).div(100); // Decrease the buy price by a small amount

      const tx = testContract.connect(friend).buyCurvesToken(owner.address, 2, { value: insufficientPayment });
      await expect(tx).to.be.revertedWith("InsufficientPayment()");
    });
  });

  describe("Price calculation tests", () => {
    const computePrice = (supply: BigNumber, amount: BigNumber): BigNumber => {
      const one = BigNumber.from("1");
      const two = BigNumber.from("2");
      const six = BigNumber.from("6");
      const sixteenThousand = BigNumber.from("16000");

      const sum1 = supply.isZero()
        ? BigNumber.from("0")
        : supply.sub(one).mul(supply).mul(two.mul(supply).sub(one)).div(six);

      const sum2 =
        supply.isZero() && amount.eq(one)
          ? BigNumber.from("0")
          : supply
              .add(amount)
              .sub(one)
              .mul(supply.add(amount))
              .mul(two.mul(supply.add(amount).sub(one)).add(one))
              .div(six);

      return sum2.sub(sum1).mul(ethers.utils.parseEther("1")).div(sixteenThousand);
    };

    it("Should return expected price for different amounts of tokens", async () => {
      const amounts = [1, 2, 3, 5, 10, 50, 100].map((n) => BigNumber.from(n)); // test a variety of amounts

      await testContract.buyCurvesToken(owner.address, 1); // initialize
      for (const amount of amounts) {
        const contractPrice = await testContract.getBuyPrice(owner.address, amount);
        const expectedPrice = computePrice(BigNumber.from(1), amount);
        expect(contractPrice).to.equal(expectedPrice);
      }
    });
  });

  describe("Selling tokens edge cases", () => {
    beforeEach(async () => {
      await testContract.buyCurvesToken(owner.address, 1);
    });

    it("Should revert when trying to sell all existing tokens", async () => {
      const tx = testContract.sellCurvesToken(owner.address, 1);
      await expect(tx).to.be.revertedWith("LastTokenCannotBeSold()");
    });

    it("Should revert when trying to sell when there's only one token in existence", async () => {
      // Setup: Friend buys 1 token after the owner
      const buyPriceForFriend = await testContract.getBuyPrice(owner.address, 1);
      await testContract.connect(friend).buyCurvesToken(owner.address, 1, { value: buyPriceForFriend });

      // Now the friend tries to sell 2 tokens (which they don't have)
      const tx = testContract.connect(friend).sellCurvesToken(owner.address, 2);
      await expect(tx).to.be.revertedWith("LastTokenCannotBeSold()");
    });

    it("Should query sell price", async () => {
      // Setup: Friend buys 1 token after the owner
      const buyPriceForFriend = await testContract.getBuyPrice(owner.address, 1);
      await testContract.connect(friend).buyCurvesToken(owner.address, 1, { value: buyPriceForFriend });

      const sellPriceAfterFee = await testContract.connect(friend).getSellPriceAfterFee(owner.address, 1);
      await expect(sellPriceAfterFee).to.be.eq("62500000000000");
    });

    it("Should query buy price", async () => {
      // Setup: Friend buys 1 token after the owner
      const buyPriceForFriend = await testContract.getBuyPrice(owner.address, 1);
      await testContract.connect(friend).buyCurvesToken(owner.address, 1, { value: buyPriceForFriend });

      const sellPriceAfterFee = await testContract.connect(friend).getBuyPriceAfterFee(owner.address, 1);
      await expect(sellPriceAfterFee).to.be.eq("250000000000000");
    });
  });
});
