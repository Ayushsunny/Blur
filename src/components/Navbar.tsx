"use client";
import React, { useState } from "react";
import { Search, Globe, Wallet, Bitcoin } from "lucide-react";
import { useMetaMask } from '../hooks/useMetaCustomHooks';


export default function Navbar() {
  const { isConnected, connectToMetaMask } = useMetaMask();
  const [selected, setSelected] = useState("");

  const handleSelect = (link: string) => {
    setSelected(link);
  };

  return (
    <nav className="bg-black text-gray-400 p-4 h-15 border-b-thin border-gray-300 border-opacity-30 sticky top-0 z-20">
      <div className="flex items-center justify-between max-w-full mx-auto">
        <div className="flex items-center space-x-6 ml-2">
          <span className="text-orange-500 font-bold text-xl">BLUR</span>
          <div className="flex space-x-4 text-xs font-semibold">
            {["TOKENS", "PORTFOLIO", "ACTIVITY", "LAUNCH"].map((link) => (
              <a
                key={link}
                href="#"
                className={`hover:text-white ${
                  selected === link ? "text-[#F6AE2D]" : ""
                }`}
                onClick={() => handleSelect(link)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="flex-grow flex justify-center text-gray-500">
          <div className="relative w-2/4">
            <input
              type="text"
              placeholder="Collections, wallets, or ENS"
              className="bg-black ring-1 ring-gray-700 text-white pl-10 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 w-full"
            />
            <Search className="absolute left-4 top-1.5 h-5 w-5 text-gray-300" />
          </div>
        </div>

        <div className="flex items-center space-x-4 mr-2">
          <Globe className="h-6 w-6 hover:text-white" />
          <div className="bg-blue-600 p-2 rounded-md text-white">
            <Bitcoin className="h-5 w-5" />
          </div>
          <button
            onClick={connectToMetaMask}
            className="bg-orange-500 text-black px-8 py-2 rounded-md text-xs font-semibold flex items-center space-x-2 hover:bg-white transition duration-300"
          >
            <Wallet className="h-5 w-5" />
            <span>{isConnected ? "CONNECTED" : "CONNECT WALLET"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};