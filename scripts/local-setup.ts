import { ContractsKeys } from "../deployment/config";
import { deployContracts, postDeploy } from "../deployment/deploy";
import { getCurrentDeploy } from "../deployment/tools";
const hre = require("hardhat");
const ethernal = require("hardhat-ethernal");

const main = async () => {
  hre.ethernal.resetWorkspace("Local");

  await deployContracts();
  await postDeploy();
  const deploy = getCurrentDeploy(ContractsKeys.Curves);

  await hre.ethernal.push({
    address: deploy.address,
    name: "Curves",
    workspace: "Local", // Optional, will override the workspace set in hardhat.config for this call only
  });
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
