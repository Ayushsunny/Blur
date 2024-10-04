"use client";
import React, { useState } from "react";
// import tronWeb from "../hooks/useTronLink"
import tronWeb from 'tronweb';

export default function AddTokenForm() {
    const [formData, setFormData] = useState({
        tokenName: "",
        tokenSymbol: "",
        description: "",
        totalSupply: "",
    });
    const [transactionId, setTransactionId] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            if (typeof window.tronLink === 'undefined') {
                alert('Please install TronLink extension');
                return;
            }
    
            const tronWeb = window.tronLink.tronWeb;
    
            if (!tronWeb) {
                alert('Please connect TronLink wallet');
                return;
            }
    
            const tokenData = {
                name: formData.tokenName,
                symbol: formData.tokenSymbol,
                description: formData.description,
                totalSupply: tronWeb.toSun(formData.totalSupply),
                issuer: tronWeb.defaultAddress.base58,
            };
    
            console.log("Sending token data to server:", tokenData);
    
            // Step 1: Create unsigned transaction from the server
            const createResponse = await fetch('/api/tronClient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'createToken',
                    data: tokenData,
                }),
            });
    
            if (!createResponse.ok) {
                const errorText = await createResponse.text();
                throw new Error(`Request failed: ${createResponse.status} ${errorText}`);
            }
    
            const createResult = await createResponse.json();
    
            if (!createResult.trx) {
                throw new Error('Invalid transaction data received from server');
            }
    
            // Step 2: Sign the unsigned transaction using TronLink
            const signedTx = await tronWeb.trx.signMessageV2(createResult.trx);
            console.log("Signed transaction:", signedTx);
    
            // Step 3: Send both the signed and unsigned transaction to the server to broadcast
            const broadcastResponse = await fetch('/api/tronClient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'broadcastToken',
                    data: {
                        trx: signedTx,
                        utrx: JSON.stringify(createResult.trx), // Unsigned transaction
                    },
                }),
            });
    
            if (!broadcastResponse.ok) {
                const errorText = await broadcastResponse.text();
                throw new Error(`Broadcast request failed: ${broadcastResponse.status} ${errorText}`);
            }
    
            const broadcastResult = await broadcastResponse.json();
            console.log("Broadcast result:", broadcastResult);
    
            setTransactionId(broadcastResult.add || broadcastResult.txID);
        } catch (error) {
            console.error("Error creating token:", error);
            alert(`Error creating token: ${error.message}`);
        }
    };
    

    return (
        <div className="min-h-screen bg-[#e4e1ce] flex justify-center items-center text-[#4f4f4f]">
            <div className="bg-[#9cbb46] p-6 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl text-center text-[#4f4f4f] font-bold mb-4">
                    Create Token
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-[#4f4f4f]" htmlFor="tokenName">
                            Token Name
                        </label>
                        <input
                            type="text"
                            name="tokenName"
                            value={formData.tokenName}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 border rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#4f4f4f]" htmlFor="tokenSymbol">
                            Token Symbol
                        </label>
                        <input
                            type="text"
                            name="tokenSymbol"
                            value={formData.tokenSymbol}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 border rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#4f4f4f]" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 border rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#4f4f4f]" htmlFor="totalSupply">
                            Total Supply
                        </label>
                        <input
                            type="number"
                            name="totalSupply"
                            value={formData.totalSupply}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 border rounded-md w-full"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-[#4f4f4f] text-white py-2 rounded-md hover:bg-[#3b3b3b] transition-colors"
                        >
                            Launch Token
                        </button>
                    </div>
                </form>

                {transactionId && (
                    <div className="mt-4 p-2 text-center text-white bg-green-500 rounded-md">
                        <p>Transaction ID: {transactionId}</p>
                    </div>
                )}
            </div>
        </div>
    );
}