import { expect, use } from "chai";
import { solidity } from "ethereum-waffle";
use(solidity);
import { parseEther } from "@ethersproject/units";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
//@ts-ignore
import { ethers } from "hardhat";

import { type Curves, CurvesERC20__factory, CurvesERC20Factory, ERC20__factory } from "../contracts/types";
import { TradeEvent } from "../contracts/types/Curves";
import { buyToken } from "../tools/test.helpers";
import { deployCurveContracts } from "./test.helpers";

describe("Curves ERC20 test", () => {
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

  describe("ERC20 test", () => {
    it("Should be able to withdraw", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      await buyToken(testContract, owner, owner, 2);

      const tx = testContract.withdraw(owner.address, 2);
      await expect(tx).to.emit(testContract, "TokenDeployed");

      const keyTokenAddress = (await testContract.externalCurvesTokens(owner.address)).token;
      const keyToken = ERC20__factory.connect(keyTokenAddress, owner);

      expect(await keyToken.name()).to.equal("Curves 1");
      expect(await keyToken.symbol()).to.equal("CURVES1");
      expect(await keyToken.totalSupply()).to.equal(parseEther("2"));

      const ownerBalance = await keyToken.balanceOf(owner.address);
      expect(ownerBalance).to.equal(parseEther("2"));
      const ownerCurvesBalance = await testContract.curvesTokenBalance(owner.address, owner.address);
      expect(ownerCurvesBalance).to.equal(1);

      const lockedBalance = await testContract.curvesTokenBalance(owner.address, testContract.address);
      expect(lockedBalance).to.equal(2);
    });

    it("Should store the correct data", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      await buyToken(testContract, owner, owner, 2);

      const tx = testContract.withdraw(owner.address, 2);
      await expect(tx).to.emit(testContract, "TokenDeployed");

      const tokenMetadata = await testContract.externalCurvesTokens(owner.address);

      expect(await tokenMetadata.name).to.equal("Curves 1");
      expect(await tokenMetadata.symbol).to.equal("CURVES1");
      expect(await tokenMetadata.token).to.be.properAddress;

      const reverseTokenMetadata = await testContract.externalCurvesToSubject(tokenMetadata.token);
      expect(reverseTokenMetadata).to.equal(owner.address);
    });

    it("Should be able to mint with name and withdraw", async () => {
      await testContract.buyCurvesTokenWithName(owner.address, 1, "TestERC20", "TEST");
      await buyToken(testContract, owner, owner, 2);

      await testContract.withdraw(owner.address, 2);

      const keyTokenAddress = (await testContract.externalCurvesTokens(owner.address)).token;
      const keyToken = ERC20__factory.connect(keyTokenAddress, owner);

      expect(await keyToken.name()).to.equal("TestERC20");
      expect(await keyToken.symbol()).to.equal("TEST");
      expect(await keyToken.totalSupply()).to.equal(parseEther("2"));

      const ownerBalance = await keyToken.balanceOf(owner.address);
      expect(ownerBalance).to.equal(parseEther("2"));
      const ownerCurvesBalance = await testContract.curvesTokenBalance(owner.address, owner.address);
      expect(ownerCurvesBalance).to.equal(1);

      const lockedBalance = await testContract.curvesTokenBalance(owner.address, testContract.address);
      expect(lockedBalance).to.equal(2);
    });

    it("Should be able to deposit", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      await buyToken(testContract, owner, owner, 2);

      await testContract.withdraw(owner.address, 2);

      const keyTokenAddress = (await testContract.externalCurvesTokens(owner.address)).token;
      const keyToken = ERC20__factory.connect(keyTokenAddress, owner);

      await testContract.deposit(owner.address, parseEther("2"));

      const ownerBalance = await keyToken.balanceOf(owner.address);
      expect(ownerBalance).to.equal(parseEther("0"));
      const ownerCurvesBalance = await testContract.curvesTokenBalance(owner.address, owner.address);
      expect(ownerCurvesBalance).to.equal(3);

      const lockedBalance = await testContract.curvesTokenBalance(owner.address, testContract.address);
      expect(lockedBalance).to.equal(0);
    });

    it("Should revert if try to deposit non integer value", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      await buyToken(testContract, owner, owner, 2);

      await testContract.withdraw(owner.address, 2);

      const tx = testContract.deposit(owner.address, parseEther("1.5"));

      expect(tx).to.be.revertedWith("NonIntegerDepositAmount()");
    });

    it("Should revert if try to deposit more tokens than balance", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      await buyToken(testContract, owner, owner, 2);

      await testContract.withdraw(owner.address, 2);

      const tx = testContract.deposit(owner.address, parseEther("3"));

      expect(tx).to.be.revertedWith("InsufficientBalance()");
    });

    it("Should revert if somebody else want to mint ERC20", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      await buyToken(testContract, owner, owner, 2);

      await testContract.withdraw(owner.address, 2);

      const keyTokenAddress = (await testContract.externalCurvesTokens(owner.address)).token;
      const keyToken = CurvesERC20__factory.connect(keyTokenAddress, owner);
      const tx = keyToken.mint(owner.address, parseEther("2"));
      expect(tx).to.be.revertedWith("Ownable: caller is not the owner");
    });

    it("Should revert if somebody else want to burn ERC20", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      await buyToken(testContract, owner, owner, 2);

      await testContract.withdraw(owner.address, 2);

      const keyTokenAddress = (await testContract.externalCurvesTokens(owner.address)).token;
      const keyToken = CurvesERC20__factory.connect(keyTokenAddress, owner);
      const tx = keyToken.burn(owner.address, parseEther("2"));
      expect(tx).to.be.revertedWith("Ownable: caller is not the owner");
    });

    it("Should be able to deposit and sell", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      await buyToken(testContract, owner, owner, 2);

      await testContract.withdraw(owner.address, 2);

      const keyTokenAddress = (await testContract.externalCurvesTokens(owner.address)).token;
      const keyToken = CurvesERC20__factory.connect(keyTokenAddress, owner);

      const tx = await testContract.sellExternalCurvesToken(owner.address, parseEther("2"));

      const receipt = await tx.wait();
      //@ts-ignore
      const tradeEvent: TradeEvent = receipt.events?.find((e) => e.event === "Trade");

      expect(tradeEvent.args.trader).to.equal(owner.address);
      expect(tradeEvent.args.subject).to.equal(owner.address);
      expect(tradeEvent.args.isBuy).to.equal(false);
      expect(tradeEvent.args.tokenAmount).to.equal(2);
      expect(tradeEvent.args.ethAmount).to.equal("312500000000000");
      expect(tradeEvent.args.protocolEthAmount).to.equal(0);
      expect(tradeEvent.args.subjectEthAmount).to.equal(0);
      expect(tradeEvent.args.supply).to.equal(1);

      const ownerBalance = await keyToken.balanceOf(owner.address);
      expect(ownerBalance).to.equal(parseEther("0"));
      const ownerCurvesBalance = await testContract.curvesTokenBalance(owner.address, owner.address);
      expect(ownerCurvesBalance).to.equal(1);

      const lockedBalance = await testContract.curvesTokenBalance(owner.address, testContract.address);
      expect(lockedBalance).to.equal(0);
    });

    it("Should revert if you want to use a name already used", async () => {
      await testContract.connect(friend).buyCurvesToken(friend.address, 1);
      await buyToken(testContract, friend, owner, 2);
      await testContract.withdraw(friend.address, 2);

      const tx = testContract.buyCurvesTokenWithName(owner.address, 1, "Curves 1", "CURVES1");
      expect(tx).to.be.revertedWith("InvalidERC20Metadata()");
    });

    it("Should be able to change name and symbol", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      await testContract.setNameAndSymbol(owner.address, "TestERC20", "TEST");

      await buyToken(testContract, owner, owner, 2);
      await testContract.withdraw(owner.address, 2);

      const keyTokenAddress = (await testContract.externalCurvesTokens(owner.address)).token;
      const keyToken = ERC20__factory.connect(keyTokenAddress, owner);

      expect(await keyToken.name()).to.equal("TestERC20");
      expect(await keyToken.symbol()).to.equal("TEST");
    });

    it("Should be able to change name and symbol twice if is not minted", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      await testContract.setNameAndSymbol(owner.address, "TestERC20", "TEST");
      await testContract.setNameAndSymbol(owner.address, "TestERC202", "TEST2");

      await buyToken(testContract, owner, owner, 2);
      await testContract.withdraw(owner.address, 2);

      const keyTokenAddress = (await testContract.externalCurvesTokens(owner.address)).token;
      const keyToken = ERC20__factory.connect(keyTokenAddress, owner);

      expect(await keyToken.name()).to.equal("TestERC202");
      expect(await keyToken.symbol()).to.equal("TEST2");
    });

    it("Should use default name if no name is set", async () => {
      await testContract.buyCurvesToken(owner.address, 1);

      await buyToken(testContract, owner, owner, 2);
      await testContract.mint(owner.address);

      const keyTokenAddress = (await testContract.externalCurvesTokens(owner.address)).token;
      const keyToken = ERC20__factory.connect(keyTokenAddress, owner);

      expect(await keyToken.name()).to.equal("Curves 1");
      expect(await keyToken.symbol()).to.equal("CURVES1");
    });

    it("Should revert if try to set name and symbol after mint", async () => {
      await testContract.buyCurvesToken(owner.address, 1);
      await testContract.setNameAndSymbol(owner.address, "TestERC20", "TEST");

      await buyToken(testContract, owner, owner, 2);
      await testContract.withdraw(owner.address, 2);

      const keyTokenAddress = (await testContract.externalCurvesTokens(owner.address)).token;
      const keyToken = ERC20__factory.connect(keyTokenAddress, owner);

      expect(await keyToken.name()).to.equal("TestERC20");
      expect(await keyToken.symbol()).to.equal("TEST");

      const tx = testContract.setNameAndSymbol(owner.address, "TestERC20", "TEST");
      expect(tx).to.be.revertedWith("ERC20TokenAlreadyMinted()");
    });

    it("Should revert if try to set name and symbol other than subject", async () => {
      await testContract.buyCurvesToken(owner.address, 1);

      const tx = testContract.connect(friend).setNameAndSymbol(owner.address, "TestERC20", "TEST");
      expect(tx).to.be.revertedWith("UnauthorizedCurvesTokenSubject()");
    });

    it("Should set ERC20 factory", async () => {
      await testContract.setERC20Factory(friend.address);
      const factory = await testContract.curvesERC20Factory();
      expect(factory).to.equal(friend.address);
    });
  });
});
