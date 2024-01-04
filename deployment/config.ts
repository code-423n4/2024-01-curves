import { DeployConfig } from "./tools";

export interface DeployConfigMap {
  [key: string]: {
    meta: DeployConfig;
  };
}

export enum ContractsKeys {
  Curves = "Curves",
  CurvesERC20Factory = "CurvesERC20Factory",
  FeeSplitter = "FeeSplitter",
}

export const deployConfigMap: DeployConfigMap = {
  [ContractsKeys.Curves]: {
    meta: {
      create2Salt: undefined,
      isUpgradable: false,
      key: ContractsKeys.Curves,
      name: "Curves",
      params: [],
    },
  },
  [ContractsKeys.CurvesERC20Factory]: {
    meta: {
      create2Salt: undefined,
      isUpgradable: false,
      key: ContractsKeys.CurvesERC20Factory,
      name: "CurvesERC20Factory",
      params: [],
    },
  },
  [ContractsKeys.FeeSplitter]: {
    meta: {
      create2Salt: undefined,
      isUpgradable: false,
      key: ContractsKeys.FeeSplitter,
      name: "FeeSplitter",
      params: [],
    },
  },
};
