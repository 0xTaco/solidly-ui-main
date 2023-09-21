import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { NetworkConnector } from "@web3-react/network-connector";

const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  250: "https://rpc.ftm.tools",
  4002: "https://rpc.testnet.fantom.network",
  5: "https://rpc.ankr.com/eth_goerli"
};

let obj = {}
if(process.env.NEXT_PUBLIC_CHAINID == 5) {
  obj = { 5: RPC_URLS[5] }
} else {
  obj = { 5: RPC_URLS[5] }
}

export const network = new NetworkConnector({ urls: obj });

export const injected = new InjectedConnector({
  supportedChainIds: [parseInt(process.env.NEXT_PUBLIC_CHAINID)]
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    //250: RPC_URLS[250],
    5: RPC_URLS[5]
  },
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAINID),
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
});

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[process.env.NEXT_PUBLIC_CHAINID],
  appName: "Taco Dex",
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAINID),
});
