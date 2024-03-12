require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.6.11",
  settings: {
    optimizer: {
      enabled: true,
      runs: 5000000,
      details: { yul: false },
    },
  },
  networks: {
    mainnet: {
      url: 'https://rpc2.archivenode.club',
      chainId: 648
    },
    testnetl1: {
      url: 'http://44.211.141.114:8545',
      chainId: 6480,
    },
    devl1: {
      url: 'http://88.99.94.109:8545',
      chainId: 6480000002
    },
  },
  etherscan: {
    apiKey: {
      mainnet: 'a',
      testnetl1: 'a',
    },
    customChains: [
      {
        network: 'testnetl1',
        chainId: 6480,
        urls: {
          apiURL: 'http://44.211.141.114/api/',
          browserURL: 'http://44.211.141.114/'
        }
      },
    ]
  }
};
