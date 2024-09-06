"use client"
import React, { useState } from 'react';
import { Settings } from 'lucide-react';

type TaskBarProps = {
    ethPrice: number;
};

const TaskBar = ({ ethPrice }: TaskBarProps) => {
    // State for toggle button
    const [isTradeActive, setTradeActive] = useState(false);

    // Toggle function
    const handleToggle = () => {
        setTradeActive(!isTradeActive);
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black text-white py-2 px-4 flex items-center text-xs z-50 border-t border-b border-gray-800">
            {/* Left Section */}
            <div className="flex items-center space-x-2">
                {/* Live Data Active */}
                <div className="flex items-center text-green-500 font-semibold pr-2 border-r border-gray-700">
                    <span className="relative flex h-2.5 w-2.5 mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    LIVE DATA ACTIVE
                </div>

                {/* Discord Icon */}
                <a href="#" className="hover:text-blue-800 text-gray-400">
                    <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.075.075 0 0 0-.079.037 13.736 13.736 0 0 0-.6 1.235 18.635 18.635 0 0 0-5.502 0 12.636 12.636 0 0 0-.604-1.235.076.076 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.045-.319 13.579.099 18.057a.082.082 0 0 0 .031.055 20.06 20.06 0 0 0 5.993 3.033.078.078 0 0 0 .084-.027 14.978 14.978 0 0 0 1.273-1.655.077.077 0 0 0-.041-.11 13.222 13.222 0 0 1-1.9-.906.077.077 0 0 1-.008-.131 9.514 9.514 0 0 0 .38-.3.073.073 0 0 1 .078-.013c3.952 1.8 8.214 1.8 12.134 0a.073.073 0 0 1 .079.012c.12.1.248.21.381.301a.077.077 0 0 1-.006.13 12.317 12.317 0 0 1-1.902.905.077.077 0 0 0-.04.111c.408.617.86 1.161 1.269 1.654a.077.077 0 0 0 .083.028 20.013 20.013 0 0 0 6.002-3.034.076.076 0 0 0 .031-.054c.5-5.177-.811-9.673-3.549-13.661a.06.06 0 0 0-.031-.028zM8.02 15.331c-1.182 0-2.153-1.085-2.153-2.419s.957-2.418 2.153-2.418c1.204 0 2.17 1.1 2.153 2.419 0 1.334-.97 2.418-2.153 2.418zm7.979 0c-1.183 0-2.154-1.085-2.154-2.419s.956-2.418 2.153-2.418c1.204 0 2.17 1.1 2.153 2.419 0 1.334-.97 2.418-2.153 2.418z"
                        />
                    </svg>
                </a>

                {/* Twitter Icon */}
                <a href="#" className="hover:text-blue-500 text-gray-400 pr-1.5 border-r border-gray-700">
                    <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                    </svg>
                </a>

                {/* Ethereum Price */}
                <div className="flex items-center pr-2 border-r border-gray-700 text-gray-400 font-bold">
                    <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="#627EEA">
                        <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                    </svg>

                    ${ethPrice.toFixed(2)}
                </div>

                {/* Collect and Toggle Switch */}
                <div className="flex items-center border-r border-gray-700">
                    <span className={`uppercase font-semibold  ${isTradeActive ? 'text-gray-400' : 'text-white'}`}>
                        Collect
                    </span>
                    {/* Toggle Switch for Trade */}
                    <div className="flex items-center px-2">
                        <button
                            onClick={handleToggle}
                            className={`w-10 h-5 flex items-center rounded-full p-1 ${isTradeActive ? 'bg-Yellop' : 'bg-gray-600'
                                }`}
                        >
                            <div
                                className={`h-4 w-4 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${isTradeActive ? 'translate-x-5' : ''
                                    }`}
                            ></div>
                        </button>
                        <span className={`uppercase font-semibold ml-2 ${isTradeActive ? 'text-Yellop' : 'text-gray-400'}`}>
                            Trade
                        </span>
                    </div>
                </div>

                {/* Settings Button */}
                <button className="text-gray-400 hover:text-white">
                    <Settings size={16} />
                </button>
            </div>
        </div>
    );
};

export default TaskBar;