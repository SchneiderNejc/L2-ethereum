require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  etherscan: {
    apiKey: {
      arbitrumSepolia: process.env.ARBITRUM_API,
      optimismSepolia: process.env.OPTIMISM_API,
      polygonZkEVMTestnet: process.env.ZKEVM_API,
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
