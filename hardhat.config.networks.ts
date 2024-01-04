import type { NetworksUserConfig } from "hardhat/types";

export const getHardhatConfigNetworks = (PRIVATE_KEYS: string[]): NetworksUserConfig => ({
  // BSC
  // https://academy.binance.com/es/articles/connecting-metamask-to-binance-smart-chain
  // https://docs.binance.org/smart-chain/developer/deploy/hardhat.html
  bsctestnet: {
    accounts: PRIVATE_KEYS,
    chainId: 97,
    gas: "auto",
    gasMultiplier: 3,
    url: `https://rpc.ankr.com/bsc_testnet_chapel`,
  },

  docker: {
    url: "http://blockchain:8545",
  },

  // ETH
  goerli: {
    accounts: PRIVATE_KEYS,
    gas: "auto",
    gasMultiplier: 2,
    url: `https://rpc.ankr.com/eth_goerli`,
  },

  // HH
  hardhat: {
    // forking: {
    //   blockNumber: 14672712,
    //   url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
    // },
    accounts: [
      {
        balance: "100000000000000000000",
        privateKey: "0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d",
      },
      {
        balance: "110000000000000000000",
        privateKey: "0x6cbed15c793ce57650b9877cf6fa156fbef513c4e6134f022a85b1ffdd59b2a1",
      },
      {
        balance: "120000000000000000000",
        privateKey: "0x6370fd033278c143179d81c5526140625662b8daa446c22ee2d73db3707e620c",
      },
      {
        balance: "130000000000000000000",
        privateKey: "0x646f1ce2fdad0e6deeeb5c7e8e5543bdde65e86029e2fd9fc169899c440a7913",
      },
      {
        balance: "140000000000000000000",
        privateKey: "0xadd53f9a7e588d003326d1cbf9e4a43c061aadd9bc938c843a79e7b4fd2ad743",
      },
      {
        balance: "150000000000000000000",
        privateKey: "0x395df67f0c2d2d9fe1ad08d1bc8b6627011959b79c53d7dd6a3536a33ab8a4fd",
      },
    ],

    allowUnlimitedContractSize: true,

    chainId: 1337,

    mining: {
      auto: process.env.DOCKER === "true" ? false : true,
      interval: 5000,
    },
  },

  mainnet: {
    accounts: PRIVATE_KEYS,
    gas: "auto",
    gasMultiplier: 3,
    //@ts-ignore
    live: true,

    saveDeployments: true,
    timeout: 3600000,
    url: `https://rpc.ankr.com/eth`, //1hr
  },

  // MATIC
  "polygon-mumbai": {
    accounts: PRIVATE_KEYS,
    // gas: 5000000,
    // gasPrice: 80000000000,
    gas: "auto",

    gasMultiplier: 3,
    url: "https://rpc.ankr.com/polygon_mumbai",
  },

  // ARB
  rinkArby: {
    accounts: PRIVATE_KEYS,
    chainId: 421611,
    gas: "auto",
    gasMultiplier: 3,
    //@ts-ignore
    live: true,

    saveDeployments: true,
    url: "https://rinkeby.arbitrum.io/rpc",
  },

  // ROLL
  roll: {
    accounts: PRIVATE_KEYS,
    chainId: 1748,
    gas: "auto",
    gasMultiplier: 2,
    url: `https://roll.calderachain.xyz/http`,
  },
});
