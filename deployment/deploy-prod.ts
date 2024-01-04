import { ethers, network } from "hardhat";

import { deployContracts, postDeploy } from "./deploy";

const main = async () => {
  if (!["mainnet"].includes(network.name)) throw Error(`Wrong network, you are in ${network.name}`);
  await deployContracts();
  await postDeploy();
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
