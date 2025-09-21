'use client'

import React from 'react';
import { Wallet, LogOut } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';

const WalletButton = () => {
    const { address, isConnected, isConnecting, connect, disconnect, formatAddress } = useWallet();

    if (isConnected && address) {
        return (
            <div className="flex items-center gap-2">
                {/* Connected Address Display */}
                <div className="hidden md:flex items-center gap-2 bg-[#0c0219]/80 border border-[#F0B90B]/20 px-3 py-2 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[#F0B90B] text-sm font-medium">
                        {formatAddress(address)}
                    </span>
                </div>

                {/* Disconnect Button */}
                <button
                    onClick={disconnect}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-full font-bold text-sm transition-colors duration-200 flex items-center gap-2"
                >
                    <LogOut className="w-4 h-4" />
                    <span className="hidden md:inline">Disconnect</span>
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={connect}
            disabled={isConnecting}
            className="bg-[#F0B90B] hover:bg-[#FCD535] disabled:opacity-50 disabled:cursor-not-allowed text-[#0c0219] px-4 md:px-6 py-2.5 rounded-full font-bold text-sm transition-colors duration-200"
        >
            <div className="flex items-center gap-2">
                <Wallet className="w-4 h-4" />
                <span>
                    {isConnecting ? 'Connecting...' : 'Connect'}
                    <span className="hidden md:inline"> Wallet</span>
                </span>
            </div>
        </button>
    );
};

export default WalletButton;