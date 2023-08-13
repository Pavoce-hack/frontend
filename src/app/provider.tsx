"use client";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { useEffect, useState, createContext } from "react";
import { configureChains, createConfig, WagmiConfig, useAccount } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const WalletContext = createContext("");
const Providers = ({ children }: { children: React.ReactNode }) => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const chains = [arbitrum, mainnet, polygon];
  const projectId = "773582bebd2977bef442cdd95e2ae138";
  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  const getAccount = () => {
    setWalletAddress(String(ethereumClient.getAccount().address));
  };

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <WalletContext.Provider value={walletAddress}>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </WalletContext.Provider>
  );
};

export default Providers;
