import type { HardhatUserConfig } from 'hardhat/config'
import hardhatToolboxMochaEthersPlugin from "@nomicfoundation/hardhat-toolbox-mocha-ethers"

const config: HardhatUserConfig = {
  plugins: [
    hardhatToolboxMochaEthersPlugin
  ],
  solidity: {
    profiles: {
      default: {
        compilers: [
          {
            version: '0.7.6',
          },
          {
            version: '0.8.27',
          },
        ],
      },
      production: {
        version: '0.8.27',
        settings: {
          optimizer: {
            enabled: true,
            runs: 20,
          },
        },
      },
    },
  },
}

export default config
