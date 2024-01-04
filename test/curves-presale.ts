import { expect, use } from "chai";
import { solidity } from "ethereum-waffle";
use(solidity);
import { HashZero } from "@ethersproject/constants";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
//@ts-ignore
import { ethers } from "hardhat";
import { MerkleTree } from "merkletreejs";

import { type Curves, CurvesERC20Factory } from "../contracts/types";
import { createMerkleTree, getProof, getRoot } from "../tools/merkletree";
import { buyToken } from "../tools/test.helpers";
import { deployCurveContracts } from "./test.helpers";
const DAY = 86400;

const getNow = async () => {
  const block = await ethers.provider.getBlock("latest");
  return block.timestamp;
};

const buyTokenWhitelisted = async (
  contract: Curves,
  token: SignerWithAddress,
  user: SignerWithAddress,
  amount: number,
  tree: MerkleTree,
) => {
  const price = await contract.getBuyPrice(token.address, amount);
  await contract
    .connect(user)
    .buyCurvesTokenWhitelisted(token.address, amount, getProof(tree, user.address), { value: price });
};

describe("Curves presale test", () => {
  let testContract: Curves, owner: SignerWithAddress, friend: SignerWithAddress, addrs: SignerWithAddress[];
  let tree: MerkleTree;

  beforeEach(async () => {
    [owner, friend, ...addrs] = await ethers.getSigners();
    testContract = await deployCurveContracts();

    tree = createMerkleTree([owner.address, addrs[0].address, addrs[1].address, addrs[2].address, addrs[3].address]);
  });

  describe("True", () => {
    it("Should be true", async () => {
      expect(true).to.equal(true);
    });
  });

  describe("Presale test", () => {
    it("Should be able to buy if is whitelisted", async () => {
      const now = await getNow();
      const startTime = now + DAY;

      await testContract.buyCurvesTokenForPresale(owner.address, 1, startTime, getRoot(tree), 5);
      await buyTokenWhitelisted(testContract, owner, owner, 2, tree);

      const ownerCurvesBalance = await testContract.curvesTokenBalance(owner.address, owner.address);
      expect(ownerCurvesBalance).to.equal(3);

      await buyTokenWhitelisted(testContract, owner, addrs[0], 2, tree);

      const userCurvesBalance = await testContract.curvesTokenBalance(owner.address, addrs[0].address);
      expect(userCurvesBalance).to.equal(2);

      const tx = buyTokenWhitelisted(testContract, owner, friend, 2, tree);
      await expect(tx).to.be.revertedWith("UnverifiedProof()");

      const tx2 = buyToken(testContract, owner, friend, 2);
      await expect(tx2).to.be.revertedWith("SaleNotOpen()");

      // wait for presale to end
      await ethers.provider.send("evm_increaseTime", [DAY]);

      const tx3 = buyTokenWhitelisted(testContract, owner, friend, 2, tree);
      await expect(tx3).to.be.revertedWith("PresaleUnavailable()");

      const tx4 = buyToken(testContract, owner, friend, 2);
      await expect(tx4).not.to.be.reverted;
    });

    it("Should fail if user is not whitelisted", async () => {
      const now = await getNow();
      const startTime = now + DAY;

      await testContract.buyCurvesTokenForPresale(owner.address, 1, startTime, getRoot(tree), 5);
      await buyTokenWhitelisted(testContract, owner, owner, 2, tree);

      const ownerCurvesBalance = await testContract.curvesTokenBalance(owner.address, owner.address);
      expect(ownerCurvesBalance).to.equal(3);

      await buyTokenWhitelisted(testContract, owner, addrs[0], 2, tree);

      const tx = buyTokenWhitelisted(testContract, owner, friend, 2, tree);
      await expect(tx).to.be.revertedWith("UnverifiedProof()");
    });

    it("Should fail if presale ends and try to buy with whitelist", async () => {
      const now = await getNow();
      const startTime = now + DAY;

      await testContract.buyCurvesTokenForPresale(owner.address, 1, startTime, getRoot(tree), 5);
      await buyTokenWhitelisted(testContract, owner, owner, 2, tree);

      const ownerCurvesBalance = await testContract.curvesTokenBalance(owner.address, owner.address);
      expect(ownerCurvesBalance).to.equal(3);

      await buyTokenWhitelisted(testContract, owner, addrs[0], 2, tree);

      const userCurvesBalance = await testContract.curvesTokenBalance(owner.address, addrs[0].address);
      expect(userCurvesBalance).to.equal(2);

      // wait for presale to end
      await ethers.provider.send("evm_increaseTime", [DAY]);

      const tx3 = buyTokenWhitelisted(testContract, owner, friend, 2, tree);
      await expect(tx3).to.be.revertedWith("PresaleUnavailable()");

      const tx4 = buyToken(testContract, owner, friend, 2);
      await expect(tx4).not.to.be.reverted;
    });

    it("Should fail if is not whitelisted if try to buy presale", async () => {
      const now = await getNow();
      const startTime = now + DAY;

      await testContract.buyCurvesTokenForPresale(owner.address, 1, startTime, getRoot(tree), 5);
      await buyTokenWhitelisted(testContract, owner, owner, 2, tree);

      const ownerCurvesBalance = await testContract.curvesTokenBalance(owner.address, owner.address);
      expect(ownerCurvesBalance).to.equal(3);

      const tx = buyTokenWhitelisted(testContract, owner, friend, 2, tree);
      await expect(tx).to.be.revertedWith("UnverifiedProof()");

      // wait for presale to end
      await ethers.provider.send("evm_increaseTime", [DAY]);

      const tx2 = buyToken(testContract, owner, friend, 2);
      await expect(tx2).not.to.be.reverted;
    });

    it("Should fail if try to buy more than max allowed", async () => {
      const now = await getNow();
      const startTime = now + DAY;

      await testContract.buyCurvesTokenForPresale(owner.address, 1, startTime, getRoot(tree), 5);
      await buyTokenWhitelisted(testContract, owner, owner, 2, tree);

      await buyTokenWhitelisted(testContract, owner, addrs[0], 2, tree);

      const tx = buyTokenWhitelisted(testContract, owner, addrs[0], 4, tree);

      await expect(tx).to.be.revertedWith("ExceededMaxBuyAmount()");
    });

    it("Should update whitelist", async () => {
      const now = await getNow();
      const startTime = now + DAY;

      await testContract.buyCurvesTokenForPresale(owner.address, 1, startTime, HashZero, 5);
      await testContract.setWhitelist(getRoot(tree));
      await buyTokenWhitelisted(testContract, owner, owner, 2, tree);

      const ownerCurvesBalance = await testContract.curvesTokenBalance(owner.address, owner.address);
      expect(ownerCurvesBalance).to.equal(3);

      await buyTokenWhitelisted(testContract, owner, addrs[0], 2, tree);

      const userCurvesBalance = await testContract.curvesTokenBalance(owner.address, addrs[0].address);
      expect(userCurvesBalance).to.equal(2);

      const tx = buyTokenWhitelisted(testContract, owner, friend, 2, tree);
      await expect(tx).to.be.revertedWith("UnverifiedProof()");

      const tx2 = buyToken(testContract, owner, friend, 2);
      await expect(tx2).to.be.revertedWith("SaleNotOpen()");

      // wait for presale to end
      await ethers.provider.send("evm_increaseTime", [DAY]);

      const tx3 = buyTokenWhitelisted(testContract, owner, friend, 2, tree);
      await expect(tx3).to.be.revertedWith("PresaleUnavailable()");

      const tx4 = buyToken(testContract, owner, friend, 2);
      await expect(tx4).not.to.be.reverted;
    });

    it("Should fail if try to update whitelist and somebody already bought", async () => {
      const now = await getNow();
      const startTime = now + DAY;

      await testContract.buyCurvesTokenForPresale(owner.address, 1, startTime, getRoot(tree), 5);
      await buyTokenWhitelisted(testContract, owner, owner, 2, tree);

      const tx = testContract.setWhitelist(getRoot(tree));
      await expect(tx).to.be.revertedWith("CurveAlreadyExists()");
    });
  });
});
