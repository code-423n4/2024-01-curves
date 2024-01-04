export const getHardhatConfigScanners = () => ({
  apiKey: {
    // BSC
    bscTestnet: process.env.BSCSCAN_API_KEY || "",

    goerli: process.env.ETHERSCAN_API_KEY || "",

    mainnet: process.env.ETHERSCAN_API_KEY || "",

    // MATIC
    polygonMumbai: process.env.POLYGONSCAN_API_KEY || "",

    rinkeby: process.env.ETHERSCAN_API_KEY || "",

    // ROLL
    roll: process.env.ETHERSCAN_API_KEY || "",

    // ETH
    ropsten: process.env.ETHERSCAN_API_KEY || "",
  },
});
