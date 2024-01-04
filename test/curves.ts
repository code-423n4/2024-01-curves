import { expect, use } from "chai";
import { solidity } from "ethereum-waffle";
use(solidity);
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
//@ts-ignore
import { ethers } from "hardhat";

import { type Curves } from "../contracts/types";
import { buyToken } from "../tools/test.helpers";
import { deployCurveContracts } from "./test.helpers";

describe("Curves Contract test", () => {
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
    it("Should be able to transfer tokens to a friend", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      await buyToken(testContract, owner, owner, 2);

      const friendBalance = await testContract.curvesTokenBalance(owner.address, friend.address);
      expect(friendBalance).to.equal(0);

      await testContract.transferCurvesToken(owner.address, friend.address, 2);

      const friendBalance2 = await testContract.curvesTokenBalance(owner.address, friend.address);
      expect(friendBalance2).to.equal(2);

      const ownerBalance = await testContract.curvesTokenBalance(owner.address, owner.address);
      expect(ownerBalance).to.equal(1);
    });

    it("Should emit event when transfer tokens to a friend", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      await buyToken(testContract, owner, owner, 2);

      const tx = testContract.transferCurvesToken(owner.address, friend.address, 2);

      expect(tx).to.emit(testContract, "Transfer").withArgs(owner.address, owner.address, friend.address, 2);
    });

    it("Should fail if I transfer more tokens I have", async () => {
      await testContract.buyCurvesToken(owner.address, 1);

      const friendBalance = await testContract.curvesTokenBalance(owner.address, friend.address);
      expect(friendBalance).to.equal(0);

      const tx = testContract.transferCurvesToken(owner.address, friend.address, 2);
      expect(tx).to.be.revertedWith("InsufficientBalance()");
    });

    it("Should keep the same price after transfer", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      await buyToken(testContract, owner, owner, 2);

      const priceBeforeTransfer = await testContract.getBuyPrice(owner.address, 2);

      await testContract.transferCurvesToken(owner.address, friend.address, 2);

      const priceAfterTransfer = await testContract.getBuyPrice(owner.address, 2);
      expect(priceBeforeTransfer).to.equal(priceAfterTransfer);
    });

    it("Should be able to transfer all my tokens to another wallet", async () => {
      const curves1 = addrs[0];
      const curves2 = addrs[1];
      const curves3 = addrs[2];

      // init all curves
      await testContract.buyCurvesToken(owner.address, 1);
      await testContract.connect(curves1).buyCurvesToken(curves1.address, 1);
      await testContract.connect(curves2).buyCurvesToken(curves2.address, 1);
      await testContract.connect(curves3).buyCurvesToken(curves3.address, 1);

      await buyToken(testContract, curves1, owner, 2);
      await buyToken(testContract, curves2, owner, 4);
      await buyToken(testContract, curves3, addrs[3], 2);

      await testContract.connect(addrs[3]).transferCurvesToken(curves3.address, owner.address, 2);

      await testContract.transferAllCurvesTokens(friend.address);

      const friendOwnerBalance = await testContract.curvesTokenBalance(owner.address, friend.address);
      expect(friendOwnerBalance).to.equal(1);
      const friendCurves1Balance = await testContract.curvesTokenBalance(curves1.address, friend.address);
      expect(friendCurves1Balance).to.equal(2);
      const friendCurves2Balance = await testContract.curvesTokenBalance(curves2.address, friend.address);
      expect(friendCurves2Balance).to.equal(4);
      const friendCurves3Balance = await testContract.curvesTokenBalance(curves3.address, friend.address);
      expect(friendCurves3Balance).to.equal(2);

      const ownerOwnerBalance = await testContract.curvesTokenBalance(owner.address, owner.address);
      expect(ownerOwnerBalance).to.equal(0);
      const ownerCurves1Balance = await testContract.curvesTokenBalance(curves1.address, owner.address);
      expect(ownerCurves1Balance).to.equal(0);
      const ownerCurves2Balance = await testContract.curvesTokenBalance(curves2.address, owner.address);
      expect(ownerCurves2Balance).to.equal(0);
      const ownerCurves3Balance = await testContract.curvesTokenBalance(curves3.address, owner.address);
      expect(ownerCurves3Balance).to.equal(0);
    });

    it("Should set Fee distributor", async () => {
      await testContract.setFeeRedistributor(friend.address);
      const factory = await testContract.feeRedistributor();
      expect(factory).to.equal(friend.address);
    });

    it("Should set referral", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      await testContract.setReferralFeeDestination(owner.address, friend.address);
      const referral = await testContract.referralFeeDestination(owner.address);
      expect(referral).to.equal(friend.address);
    });

    it("Should transfer ownership", async () => {
      const initialOwner = await testContract.owner();
      expect(initialOwner).to.equal(owner.address);

      await testContract.transferOwnership(friend.address);
      const newOwner = await testContract.owner();
      expect(newOwner).to.equal(friend.address);
    });
  });

  it("MockERC20 Just for test", async () => {
    const FakeERC20 = await ethers.getContractFactory("MockERC20");
    const fakeERC20 = await FakeERC20.deploy("Test", "TST", 18);

    const decimals = await fakeERC20.decimals();
    expect(decimals).to.equal(18);

    await fakeERC20.mint(owner.address, 1000);
    const balance = await fakeERC20.balanceOf(owner.address);
    expect(balance).to.equal(1000);
    const totalSupply = await fakeERC20.totalSupply();
    expect(totalSupply).to.equal(1000);

    await fakeERC20.burn(owner.address, 500);
    const balance2 = await fakeERC20.balanceOf(owner.address);
    expect(balance2).to.equal(500);
    const totalSupply2 = await fakeERC20.totalSupply();
    expect(totalSupply2).to.equal(500);
  });
});
