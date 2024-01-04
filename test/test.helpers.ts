//@ts-ignore
import { ethers } from "hardhat";

import { Curves } from "../contracts/types";

export const deployCurveContracts = async (): Promise<Curves> => {
  const CurvesERC20Factory = await ethers.getContractFactory("CurvesERC20Factory");
  //@ts-ignore
  const curvesERC20Factory = await CurvesERC20Factory.deploy();
  const FeeSplitter = await ethers.getContractFactory("FeeSplitter");
  //@ts-ignore
  const feeSplitter = await FeeSplitter.deploy();
  const TestContract = await ethers.getContractFactory("Curves");
  //@ts-ignore
  const testContract = await TestContract.deploy(curvesERC20Factory.address, feeSplitter.address);
  await feeSplitter.setCurves(testContract.address);
  await feeSplitter.setManager(testContract.address, true);

  return testContract;
};
