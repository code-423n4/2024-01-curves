//@ts-ignore
import { ContractFactory } from "@ethersproject/contracts";
import { utils } from "ethers";
import { DeployOptions, network, upgrades } from "hardhat";
const fs = require("fs");

export interface DeployConfig {
  create2Salt: string | undefined;
  isUpgradable: boolean;
  key: string;
  name: string;
  params: any[]; // if !undef then use as salt
}

export interface DeployData {
  abi: string;
  address: string;
  contractMeta: DeployConfig;
}

export interface ConfigData {
  [key: string]: DeployData;
}

const getOpt = (config: DeployConfig) => {
  // @dev: for now we are not using libs
  // const opt: DeployOptions = lib
  //   ? {
  //       unsafeAllow: ["external-library-linking"],
  //     }
  //   : { };
  if (config.create2Salt) {
    const deterministicDeployment = utils.formatBytes32String(`${config.create2Salt}${config.key}`);
    const opt: DeployOptions = {
      deterministicDeployment,
    };
    return opt;
  }

  return {} as DeployOptions;
};

export const deployContract = async (config: DeployConfig): Promise<DeployData | undefined> => {
  console.log(`Deploying contract ${config.key}`);

  const opt = getOpt(config);

  //@ts-ignore
  const Factory = (await ethers.getContractFactory(config.name)) as ContractFactory;

  let contract: any;
  let address: string = "";
  let abi: string = "";
  try {
    if (config.isUpgradable) {
      contract = await upgrades.deployProxy(Factory, [...config.params], {});
      address = contract.address;
      abi = JSON.parse(contract.interface.format("json").toString());
      const tx = contract.deployTransaction;
      await tx.wait();
    } else {
      const overrides = {
        gasLimit: 6000000,
        // gasPrice: utils.parseUnits("10", "gwei"),
        // value: utils.parseEther("0.1"), // Set an explicit gas limit
      };

      const tx = await Factory.deploy(...config.params, overrides);
      contract = await tx.deployed();
      address = contract.address;
      abi = JSON.parse(contract.interface.format("json").toString());
    }

    console.log(`Contract address: ${address}`);

    const data: DeployData = {
      abi,
      address,
      contractMeta: config,
    };
    saveDeployInfo(network.name, data);
    return data;
  } catch (e) {
    console.log(e);
  }
  return undefined;
};

export const getDeployFileName = (network: string) => `deployed/deployments.${network}.json`;

export const getCurrentDeployByNetwork = (network: string) => {
  const rawdata = fs.readFileSync(getDeployFileName(network));
  const deployInfo: ConfigData = JSON.parse(rawdata);
  return deployInfo;
};

export const saveDeployInfo = (network: string, deployedData: DeployData) => {
  const prev = getCurrentDeployByNetwork(network) ?? {};
  prev[deployedData.contractMeta.key] = deployedData;

  fs.writeFileSync(getDeployFileName(network), JSON.stringify(prev));
};

export const getCurrentDeploy = (key: string, n: string = network.name) => {
  return getCurrentDeployByNetwork(n)[key];
};
