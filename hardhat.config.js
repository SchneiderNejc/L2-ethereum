require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  etherscan: {
    apiKey: {
      arbitrumSepolia: process.env.ARBITRUM_API,
      optimismSepolia: process.env.OPTIMISM_API,
      polygonZkEVMTestnet: process.env.ZKEVM_API,
      sepolia: process.env.SEPOLIA_API,
      polygonAmoy: process.env.AMOY_API,
      baseSepolia: process.env.BASE_API,
      bscTestnet: process.env.BSC_API,

      // hardhat-verify not supported:
      //Linea
      //blast
      //starknet
      //mantle
      //celo
    },
  },
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    arbitrum: {
      url: process.env.ARBITRUM_RPC,
      accounts: [process.env.PRIVATEKEY],
    },
    optimism: {
      url: process.env.OPTIMISM_RPC,
      accounts: [process.env.PRIVATEKEY],
    },
    zkevm: {
      // Polygon Cordona
      url: process.env.ZKEVM_RPC,
      accounts: [process.env.PRIVATEKEY],
    },
  },
};
