"use client";

import { useState, useCallback, useEffect } from 'react';
import { ethers } from 'ethers';

export interface AccountType {
  address?: string;
  balance?: string;
  chainId?: string;
  network?: string;
}

export const useMetaMask = () => {
  const [accountData, setAccountData] = useState<AccountType>({});
  const [isConnected, setIsConnected] = useState(false);

  const connectToMetaMask = useCallback(async () => {
    if (typeof window !== 'undefined' && typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const address = accounts[0];
        const provider = new ethers.BrowserProvider(window.ethereum);
        const balance = await provider.getBalance(address);
        const network = await provider.getNetwork();
        
        setAccountData({
          address,
          balance: ethers.formatEther(balance),
          chainId: network.chainId.toString(),
          network: network.name,
        });
        setIsConnected(true);
      } catch (error: any) {
        console.error(`Error connecting to MetaMask: ${error?.message ?? error}`);
      }
    } else {
      console.error("MetaMask not installed");
    }
  }, []);

  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window !== 'undefined' && typeof window.ethereum !== "undefined" && window.ethereum.selectedAddress) {
        await connectToMetaMask();
      }
    };
    checkConnection();
  }, [connectToMetaMask]);

  return { accountData, isConnected, connectToMetaMask };
};