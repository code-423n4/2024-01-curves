import { expect, use } from "chai";
import { solidity } from "ethereum-waffle";
use(solidity);
import { parseEther } from "@ethersproject/units";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
//@ts-ignore
import { ethers } from "hardhat";

import { type FeeSplitter, type MockCurvesForFee, type MockERC20 } from "../contracts/types";
import { FeesClaimedEvent } from "../contracts/types/FeeSplitter";

describe("Fee token holders test", () => {
  let testContract: FeeSplitter;
  let mockCurves: MockCurvesForFee;
  let mockCurveToken: MockERC20;
  let mockCurveToken2: MockERC20;
  let owner: SignerWithAddress, friend: SignerWithAddress, addrs: SignerWithAddress[];

  beforeEach(async () => {
    [owner, friend, ...addrs] = await ethers.getSigners();

    const MockCurvesForFee = await ethers.getContractFactory("MockCurvesForFee");
    //@ts-ignore
    mockCurves = await MockCurvesForFee.deploy();

    const MockERC20 = await ethers.getContractFactory("MockERC20");
    //@ts-ignore
    mockCurveToken = await MockERC20.deploy("Test", "TST", 0);

    //@ts-ignore
    mockCurveToken2 = await MockERC20.deploy("Test2", "TST2", 0);

    const TestContract = await ethers.getContractFactory("FeeSplitter");
    //@ts-ignore
    testContract = await TestContract.deploy();

    testContract.setCurves(mockCurves.address);
  });

  describe("True", () => {
    it("Should be true", async () => {
      expect(true).to.equal(true);
    });
  });

  describe("Fee Splitter", () => {
    it("Should split fees between token holders proportionally", async () => {
      await mockCurveToken.mint(owner.address, 1000);
      await testContract.onBalanceChange(mockCurveToken.address, owner.address);
      await testContract.addFees(mockCurveToken.address, { value: parseEther("1") });

      const claimable = await testContract.getClaimableFees(mockCurveToken.address, owner.address);
      expect(claimable).to.equal(parseEther("1"));

      await mockCurveToken.mint(friend.address, 1000);
      await testContract.onBalanceChange(mockCurveToken.address, friend.address);
      await testContract.addFees(mockCurveToken.address, { value: parseEther("1") });

      const claimable2 = await testContract.getClaimableFees(mockCurveToken.address, owner.address);
      expect(claimable2).to.equal(parseEther("1.5"));

      const claimable3 = await testContract.getClaimableFees(mockCurveToken.address, friend.address);
      expect(claimable3).to.equal(parseEther("0.5"));
    });

    it("Should split fees between token holders proportionally after someone claim", async () => {
      await mockCurveToken.mint(owner.address, 1000);
      await testContract.onBalanceChange(mockCurveToken.address, owner.address);
      await testContract.addFees(mockCurveToken.address, { value: parseEther("1") });

      const claimable = await testContract.getClaimableFees(mockCurveToken.address, owner.address);
      expect(claimable).to.equal(parseEther("1"));

      const tx = testContract.claimFees(mockCurveToken.address);
      await expect(tx)
        .to.emit(testContract, "FeesClaimed")
        .withArgs(mockCurveToken.address, owner.address, parseEther("1"));

      await mockCurveToken.mint(friend.address, 1000);
      await testContract.onBalanceChange(mockCurveToken.address, friend.address);
      await testContract.addFees(mockCurveToken.address, { value: parseEther("1") });

      const claimable2 = await testContract.getClaimableFees(mockCurveToken.address, owner.address);
      expect(claimable2).to.equal(parseEther("0.5"));

      const claimable3 = await testContract.getClaimableFees(mockCurveToken.address, friend.address);
      expect(claimable3).to.equal(parseEther("0.5"));
    });

    it("Should query owned tokens", async () => {
      await mockCurveToken.mint(owner.address, 1000);
      await testContract.onBalanceChange(mockCurveToken.address, owner.address);
      await testContract.addFees(mockCurveToken.address, { value: parseEther("1") });

      await mockCurveToken2.mint(owner.address, 1000);
      await testContract.onBalanceChange(mockCurveToken2.address, owner.address);
      await testContract.addFees(mockCurveToken2.address, { value: parseEther("3") });

      const tokenList = await testContract.getUserTokens(owner.address);
      expect(tokenList.length).to.equal(2);
      expect(tokenList[0]).to.equal(mockCurveToken.address);
      expect(tokenList[1]).to.equal(mockCurveToken2.address);
    });

    it("Should query owned tokens and balance", async () => {
      await mockCurveToken.mint(owner.address, 1000);
      await testContract.onBalanceChange(mockCurveToken.address, owner.address);
      await testContract.addFees(mockCurveToken.address, { value: parseEther("1") });

      await mockCurveToken2.mint(owner.address, 1000);
      await testContract.onBalanceChange(mockCurveToken2.address, owner.address);
      await testContract.addFees(mockCurveToken2.address, { value: parseEther("3") });

      const tokenDataList = await testContract.getUserTokensAndClaimable(owner.address);
      expect(tokenDataList.length).to.equal(2);
      const tokenData1 = tokenDataList[0];
      expect(tokenData1.token).to.equal(mockCurveToken.address);
      expect(tokenData1.claimableFees).to.equal(parseEther("1"));

      const tokenData2 = tokenDataList[1];
      expect(tokenData2.token).to.equal(mockCurveToken2.address);
      expect(tokenData2.claimableFees).to.equal(parseEther("3"));
    });

    it("Should claim tokens in a batch", async () => {
      await mockCurveToken.mint(owner.address, 1000);
      await testContract.onBalanceChange(mockCurveToken.address, owner.address);
      await testContract.addFees(mockCurveToken.address, { value: parseEther("1") });

      await mockCurveToken2.mint(owner.address, 1000);
      await testContract.onBalanceChange(mockCurveToken2.address, owner.address);
      await testContract.addFees(mockCurveToken2.address, { value: parseEther("3") });

      const claimable = await testContract.getClaimableFees(mockCurveToken.address, owner.address);
      expect(claimable).to.equal(parseEther("1"));

      const claimable2 = await testContract.getClaimableFees(mockCurveToken2.address, owner.address);
      expect(claimable2).to.equal(parseEther("3"));

      const tx = await testContract.batchClaiming([mockCurveToken.address, mockCurveToken2.address]);
      const receipt = await tx.wait();

      expect(receipt.events?.length).to.equal(2);
      //@ts-ignore
      const event1: FeesClaimedEvent = receipt.events[0];
      expect(event1.args.token).to.equal(mockCurveToken.address);
      expect(event1.args.amount).to.equal(parseEther("1"));

      //@ts-ignore
      const event2: FeesClaimedEvent = receipt.events[1];
      expect(event2.args.token).to.equal(mockCurveToken2.address);
      expect(event2.args.amount).to.equal(parseEther("3"));

      const claimable3 = await testContract.getClaimableFees(mockCurveToken.address, owner.address);
      expect(claimable3).to.equal(parseEther("0"));

      const claimable4 = await testContract.getClaimableFees(mockCurveToken2.address, owner.address);
      expect(claimable4).to.equal(parseEther("0"));
    });
  });
});
