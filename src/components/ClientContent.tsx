// components/ClientContent.tsx
"use client";

import { useTronLink } from '../hooks/useTronLink';

export default function ClientContent({  }) {
  const { accountData, isConnected, connectToTronLink } = useTronLink();

  return (
    <>
      {isConnected ? (
        <div className="w-full max-w-4xl">
          <div className="bg-gray-800 text-white p-4 mb-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Wallet Information</h2>
            <p>Address: {accountData.address}</p>
            <p>Balance: {accountData.balance} TRX</p>
            <p>Network: {accountData.network}</p>
          </div>
        </div>
      ) : (
        <div className="text-white text-center">
          <p className="mb-4">Please connect your wallet to view collections</p>
          <button
            onClick={connectToTronLink}
            className="bg-orange-500 text-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-white transition duration-300"
          >
            Connect Wallet
          </button>
        </div>
      )}
    </>
  );
}






// // components/ClientContent.tsx
// "use client";

// import { useMetaMask } from '../hooks/useMetaCustomHooks';

// export default function ClientContent({  }) {
//   const { accountData, isConnected, connectToMetaMask } = useMetaMask();

//   return (
//     <>
//       {isConnected ? (
//         <div className="w-full max-w-4xl">
//           <div className="bg-gray-800 text-white p-4 mb-4 rounded-lg">
//             <h2 className="text-xl font-bold mb-2">Wallet Information</h2>
//             <p>Address: {accountData.address}</p>
//             <p>Balance: {accountData.balance} ETH</p>
//             <p>Chain ID: {accountData.chainId}</p>
//             <p>Network: {accountData.network}</p>
//           </div>
//         </div>
//       ) : (
//         <div className="text-white text-center">
//           <p className="mb-4">Please connect your wallet to view collections</p>
//           <button
//             onClick={connectToMetaMask}
//             className="bg-orange-500 text-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-white transition duration-300"
//           >
//             Connect Wallet
//           </button>
//         </div>
//       )}
//     </>
//   );
// }