import React, { useState, useEffect, useCallback } from 'react';
import { TronWeb } from 'tronweb';

import { Wallet } from "lucide-react";
import { tron } from '@/proto/tron';

// Global type definition for TronLink in the window object
declare global {
  interface Window {
    tronLink?: {
      tronWeb: any;
      request: (args: { method: string }) => Promise<string[]>;
      selectedAddress?: string;
    };
  }
}

// Type for account data (address, balance, network)
interface AccountType {
  address?: string;
  balance?: string;
  network?: string;
}

// Custom hook to manage TronLink connection
const useTronLink = () => {
  const [accountData, setAccountData] = useState<AccountType | null>(null); // Account details
  const [isConnected, setIsConnected] = useState(false); // Connection status

  // Function to connect to TronLink wallet
  const connectToTronLink = useCallback(async () => {
    if (typeof window !== 'undefined' && typeof window.tronLink !== "undefined") {
      try {
        // Request access to TronLink wallet
        await window.tronLink.request({ method: 'tron_requestAccounts' });
        // const address = window.tronLink.selectedAddress;

        // Initialize TronWeb instance
        // const tronWeb = new TronWeb({
        //   fullNode: 'https://api.nilex.io',
        //   solidityNode: 'https://api.nilex.io',
        //   eventServer: 'https://event.nilex.io',
        // });

        // Get balance and network details
        // const balance = await tronWeb.trx.getBalance(address);
        // const network = await tronWeb.trx.getCurrentBlock();

        // Update account data and connection state
        // setAccountData({
        //   address,
        //   balance: tronWeb.fromSun(balance).toString(),
        //   network: network.block_header.raw_data.timestamp.toString(),
        // });
        setIsConnected(true);
      } catch (error) {
        console.error("Error connecting to TronLink:", error);
      }
    } else {
      console.error("TronLink is not installed.");
    }
  }, []);

  // Automatically check connection on component mount
  useEffect(() => {
    const checkConnection = async () => {
      if (window.tronLink && window.tronLink.selectedAddress) {
        await connectToTronLink();
      }
    };
    checkConnection();
  }, [connectToTronLink]);

  return {
    accountData,
    setAccountData,
    isConnected,
    setIsConnected,
    connectToTronLink,
  };
};

// Generic Card component
const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-gray-800 rounded-md p-4 shadow-md">{children}</div>
);

// Card header
const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-lg font-medium mb-2">{children}</h3>
);

// Card content
const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="space-y-2">{children}</div>
);

// Generic Button component
const Button: React.FC<{
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ variant = 'primary', children, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 
      ${variant === 'primary' ? 'bg-orange-500 text-black hover:bg-orange-600' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
    {...props}
  >
    {children}
  </button>
);

// Dialog (popup) component
const Dialog: React.FC<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}> = ({ open, onOpenChange, children }) => (
  <div
    className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    onClick={() => onOpenChange(false)}
  >
    <div className="bg-gray-800 rounded-md p-6 shadow-md" onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  </div>
);

// Modal to show wallet details
const WalletModal: React.FC<{
  accountData: AccountType;
  onClose: () => void;
}> = ({ accountData, onClose }) => (
  <Dialog open={true} onOpenChange={onClose}>
    <CardContent>
      <CardHeader>Wallet Details</CardHeader>
      <p>Address: {accountData.address}</p>
      <p>Balance: {accountData.balance} TRX</p>
      <p>Network: {accountData.network}</p>
      <div className="flex justify-end mt-4">
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </div>
    </CardContent>
  </Dialog>
);
type WalletConnectButtonProps = {
  isConnected: boolean;
  connectToTronLink: () => Promise<void>;
  accountData: AccountType | null; // Update to allow null
  disconnectWallet: () => void;
};


// Wallet connection button with modal and dialog
const WalletConnectButton: React.FC<{
  isConnected: boolean;
  connectToTronLink: () => Promise<void>;
  accountData: AccountType | null;
  disconnectWallet: () => void;
}> = ({ isConnected, connectToTronLink, accountData, disconnectWallet }) => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isConnectionPopupOpen, setIsConnectionPopupOpen] = useState(false);

  // Handle wallet connect button click
  const handleWalletConnect = async () => {
    if (!isConnected) {
      setIsConnectionPopupOpen(true); // Show connect wallet dialog
    } else {
      setIsWalletModalOpen(true); // Show wallet details if already connected
    }
  };

  // Handle Tron connection
  const handleConnectToTron = async () => {
    await connectToTronLink();
    setIsConnectionPopupOpen(false); // Close popup after connecting
  };

  return (
    <>
      <button
        onClick={handleWalletConnect}
        className="bg-orange-500 text-black px-8 py-2 rounded-md text-xs font-semibold flex items-center space-x-2 hover:bg-white transition duration-300"
      >
        <Wallet className="h-5 w-5" />
        <span>{isConnected ? "CONNECTED" : "CONNECT WALLET"}</span>
      </button>

      {isConnectionPopupOpen && (
        <Dialog open={isConnectionPopupOpen} onOpenChange={setIsConnectionPopupOpen}>
          <CardContent>
            <CardHeader>Connect to Tron Wallet</CardHeader>
            <Button variant="primary" onClick={handleConnectToTron}>Connect Tron Wallet</Button>
          </CardContent>
        </Dialog>
      )}

      {isWalletModalOpen && (
        <WalletModal accountData={accountData} onClose={() => setIsWalletModalOpen(false)} />
      )}
    </>
  );
};

export { useTronLink, WalletConnectButton };
