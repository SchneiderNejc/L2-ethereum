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

    sepolia: {
      // Ethereum Sepolia
      url: process.env.SEPOLIA_RPC,
      accounts: [process.env.PRIVATEKEY],
    },
    linea: {
      // Linea testnet
      url: process.env.LINEA_RPC,
      accounts: [process.env.PRIVATEKEY],
    },
    polygon: {
      // Polygon Amoy
      url: process.env.AMOY_RPC,
      accounts: [process.env.PRIVATEKEY],
    },
    base: {
      // Base testnet
      url: process.env.BASE_RPC,
      accounts: [process.env.PRIVATEKEY],
    },
    blast: {
      // Blast Sepolia
      url: process.env.BLAST_RPC,
      accounts: [process.env.PRIVATEKEY],
    },

    avalanche: {
      // Avalanche C-Chain Fuji
      url: process.env.AVALANCHE_RPC,
      accounts: [process.env.PRIVATEKEY],
    },
    starknet: {
      // Starknet Sepolia
      url: process.env.STARKNET_RPC,
      accounts: [process.env.STARKKEY],
    },
    bsc: {
      // BSC testnet
      url: process.env.BSC_TESTNET,
      accounts: [process.env.PRIVATEKEY],
    },
    mantle: {
      // Mantle Sepolia
      url: process.env.MANTLE_RPC,
      accounts: [process.env.PRIVATEKEY],
    },
    celo: {
      // Celo Alfajores
      url: process.env.CELO_RPC,
      accounts: [process.env.PRIVATEKEY],
    },
  },
};
