'use client'
import React, { useState, useEffect } from 'react';
import {Menu, X, Home, Shield, HelpCircle, Phone, Wallet, ChevronDown, Eclipse} from 'lucide-react';
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { href: '#home', label: 'Home', icon: Home },
        { href: '#faq', label: 'FAQ', icon: HelpCircle },
        { href: '#features', label: 'Features', icon: Shield },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-[#0c0219]/50 backdrop-blur-lg border-b border-[#F0B90B]/5`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative">
                            <div className="w-10 h-10 bg-[#F0B90B] rounded-xl flex items-center justify-center">
                                <Eclipse className="w-6 h-6 text-[#0c0219]" />
                            </div>
                        </div>
                        <span className="text-2xl font-bold text-[#F0B90B]">
                            SafeSwap
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="group relative px-4 py-2 rounded-xl transition-all duration-300"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="flex items-center gap-2">
                                            <IconComponent className="w-4 h-4 text-[#B7BDC6] group-hover:text-[#F0B90B] transition-colors duration-300" />
                                            <span className="text-[#FFFFFF] group-hover:text-[#F0B90B] font-medium transition-colors duration-300">
                                                {item.label}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#F0B90B] to-[#FCD535] group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
                                    </a>
                                );
                            })}
                        </div>

                        {/* Connect Wallet Button & Mobile Menu Toggle */}
                        <div className="flex items-center gap-4">
                            {/* Connect Wallet Button */}
                            <Link href="#connect" className="bg-[#F0B90B] hover:bg-[#FCD535] text-[#0c0219] px-4 md:px-6 py-2.5 rounded-full font-bold text-sm transition-colors duration-200">
                                <div className="flex items-center gap-2">
                                    <Wallet className="w-4 h-4" />
                                    <span>Connect <span className="hidden md:inline">Wallet</span></span>
                                </div>
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={toggleMenu}
                                className="lg:hidden p-2 rounded-xl transition-colors duration-200"
                            >
                                <div className="relative w-6 h-6">
                                    <Menu className={`absolute inset-0 w-6 h-6 text-[#FFFFFF] transition-all duration-300 ${
                                        isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                                    }`} />
                                    <X className={`absolute inset-0 w-6 h-6 text-[#FFFFFF] transition-all duration-300 ${
                                        isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                                    }`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    isMenuOpen
                        ? 'max-h-96 opacity-100 pb-6'
                        : 'max-h-0 opacity-0 pb-0'
                }`}>
                    <div className="pt-4 space-y-2 bg-[#0c0219]/95 backdrop-blur-lg rounded-[20px] mt-2 border border-[#F0B90B]/10">
                        {navItems.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#0c0219] transition-all duration-300 transform hover:translate-x-2"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                        transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                                        opacity: isMenuOpen ? 1 : 0,
                                        transition: `all 0.3s ease-in-out ${index * 100}ms`
                                    }}
                                >
                                    <IconComponent className="w-5 h-5 text-[#B7BDC6] group-hover:text-[#F0B90B] transition-colors duration-300" />
                                    <span className="text-[#FFFFFF] group-hover:text-[#F0B90B] font-medium transition-colors duration-300">
                                        {item.label}
                                    </span>
                                    <ChevronDown className="w-4 h-4 text-[#B7BDC6] ml-auto transform group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                            );
                        })}

                        {/* Mobile Connect Wallet Button */}
                        <div className="p-2">
                            <Link
                                href="#connect"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full bg-[#F0B90B] hover:bg-[#FCD535] text-[#0c0219] px-6 py-3 rounded-xl font-bold text-sm transition-colors duration-200 block text-center"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <Wallet className="w-4 h-4" />
                                    <span>Connect Wallet</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            {isMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-[#0c0219]/90 backdrop-blur-sm -z-10"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </nav>
    );
};

export default Navbar;