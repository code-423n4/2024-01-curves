//@ts-ignore
import { ethers } from "hardhat";

import { ContractsKeys, deployConfigMap } from "./config";
import { deployContract, getCurrentDeploy } from "./tools";

const getDeploy = async (key: ContractsKeys, deploy: boolean) => {
  if (deploy) {
    await deployContract(deployConfigMap[key].meta);
  }
  return getCurrentDeploy(key);
};

const getContract = async (key: ContractsKeys) => {
  const data = await getDeploy(key, false);

  const factory = await ethers.getContractFactory(data.contractMeta.name);
  const contract = await factory.attach(data.address);
  return contract;
};

const deployCurves = async (): Promise<string> => {
  {
    const metaCurvesERC20Factory = deployConfigMap[ContractsKeys.CurvesERC20Factory].meta;
    await deployContract(metaCurvesERC20Factory);
  }
  {
    const metaFeeSplitter = deployConfigMap[ContractsKeys.FeeSplitter].meta;
    await deployContract(metaFeeSplitter);
  }
  {
    const curvesERC20Factory = await getContract(ContractsKeys.CurvesERC20Factory);
    const feeSplitter = await getContract(ContractsKeys.FeeSplitter);
    const metaCurves = deployConfigMap[ContractsKeys.Curves].meta;
    metaCurves.params = [curvesERC20Factory.address, feeSplitter.address];
    await deployContract(metaCurves);
  }
  return "";
};

export const deployContracts = async (): Promise<string> => {
  await deployCurves();
  console.log("all contracts succesfully deployed");
  return "";
};

export const postDeploy = async () => {
  console.log("post deploy routine done");
};
