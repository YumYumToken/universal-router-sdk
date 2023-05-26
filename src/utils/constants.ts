import { BigNumber } from 'ethers'

export const UNIVERSAL_ROUTER_ADDRESS = (chainId: number): string => {
  switch (chainId) {
    case 1: // mainnet
      return '0x4C60051384bd2d3C01bfc845Cf5F4b44bcbE9de5'
    case 5: // goerli
      return '0x4648a43B2C14Da09FdF82B161150d3F634f40491'
    case 137: // polygon
      return '0x4C60051384bd2d3C01bfc845Cf5F4b44bcbE9de5'
    case 80001: // polygon mumbai
      return '0x4648a43B2C14Da09FdF82B161150d3F634f40491'
    case 10: // optimism
      return '0xb555edF5dcF85f42cEeF1f3630a52A108E55A654'
    case 420: // optimism goerli
      return '0x4648a43B2C14Da09FdF82B161150d3F634f40491'
    case 42161: // arbitrum
      return '0x4C60051384bd2d3C01bfc845Cf5F4b44bcbE9de5'
    case 421613: // arbitrum goerli
      return '0x4648a43B2C14Da09FdF82B161150d3F634f40491'
    case 42220: // celo
      return '0xC73d61d192FB994157168Fb56730FdEc64C9Cb8F'
    case 44787: // celo alfajores
      return '0x4648a43B2C14Da09FdF82B161150d3F634f40491'
    case 56: // binance smart chain
      return '0x5Dc88340E1c5c6366864Ee415d6034cadd1A9897'
    case 84531: // base goerli
      return '0x61bED6387A4181E11962441608C27cCafe23280A'
    case 369: // pulse
      return '0xE5417A52d9535f0069058324958Bf4d89E2e38A1'
    default:
      throw new Error(`Universal Router not deployed on chain ${chainId}`)
  }
}

export const WETH_ADDRESS = (chainId: number): string => {
  switch (chainId) {
    case 1: //mainnet
      return '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
    case 5: // goerli
      return '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6'
    case 137: // polygon
      return '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
    case 80001: // polygon mumbai
      return '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
    case 10: // optimism
      return '0x4200000000000000000000000000000000000006'
    case 420: // optimism goerli
      return '0x4200000000000000000000000000000000000006'
    case 42161: // arbitrum
      return '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'
    case 421613: // arbitrum goerli
      return '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3'
    case 56: // binance smart chain
      return '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    case 84531: // base goerli
      return '0x4200000000000000000000000000000000000006'
    case 369: // pulse
      return '0xA1077a294dDE1B09bB078844df40758a5D0f9a27'
    default:
      throw new Error(`WETH9 or UniversalRouter not deployed on chain ${chainId}`)
  }
}

export const PERMIT2_ADDRESS = (chainId: number | undefined): string => {
  switch (chainId) {
    case 369: // pulse
      return '0x6feb2EF9631649fE6e8B676D6c606410f2e1dbb7'
    default:
      return '0x000000000022D473030F116dDEE9F6B43aC78BA3'
  }
}
// export const PERMIT2_ADDRESS = '0x000000000022D473030F116dDEE9F6B43aC78BA3'

export const CONTRACT_BALANCE = BigNumber.from(2).pow(255)
export const ETH_ADDRESS = '0x0000000000000000000000000000000000000000'
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const MAX_UINT256 = BigNumber.from(2).pow(256).sub(1)
export const MAX_UINT160 = BigNumber.from(2).pow(160).sub(1)

export const SENDER_AS_RECIPIENT = '0x0000000000000000000000000000000000000001'
export const ROUTER_AS_RECIPIENT = '0x0000000000000000000000000000000000000002'

export const OPENSEA_CONDUIT_SPENDER_ID = 0
export const SUDOSWAP_SPENDER_ID = 1
