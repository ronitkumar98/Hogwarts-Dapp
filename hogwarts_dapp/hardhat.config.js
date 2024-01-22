require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  defaultNetwork: "Ganache",
  networks: {
    hardhat: {
    },
    Ganache: {
      url: "http://127.0.0.1:7545"
    }
  },
  solidity: {
    version: "0.8.8",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}
