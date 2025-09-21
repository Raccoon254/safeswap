'use client'
import React, { useState, useEffect } from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Twitter,
    MessageCircle,
    ArrowRight,
    Shield,
    Lock,
    Scale,
    HelpCircle,
    MessageSquare,
    Users,
    FileText,
    Eye,
    Cookie,
    AlertTriangle,
    Globe,
    ChevronDown, Eclipse
} from 'lucide-react';

const Footer = () => {
    const [hoveredSocial, setHoveredSocial] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [year, setYear] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        const date = new Date().getFullYear();
        setYear(date);

        const footerElement = document.getElementById('safeswap-footer');
        if (footerElement) observer.observe(footerElement);

        return () => observer.disconnect();
    }, []);

    const socialLinks = [
        { icon: Twitter, label: 'Twitter', href: '#', color: 'from-[#1DA1F2] to-[#0d8bd9]' },
        { icon: MessageCircle, label: 'Discord', href: '#', color: 'from-[#5865F2] to-[#4752C4]' },
        { icon: MessageSquare, label: 'Telegram', href: '#', color: 'from-[#0088cc] to-[#006699]' },
        { icon: Github, label: 'GitHub', href: '#', color: 'from-[#333] to-[#24292e]' }
    ];

    const platformLinks = [
        'How It Works',
        'Features',
        'Security',
        'Fees',
        'API Documentation'
    ];

    const supportLinks = [
        'Help Center',
        'Contact Us',
        'Dispute Resolution',
        'Report a Bug',
        'Community'
    ];

    const legalLinks = [
        'Terms of Service',
        'Privacy Policy',
        'Cookie Policy',
        'Disclaimer'
    ];

    return (
        <footer id="safeswap-footer" className="relative bg-[#0c0219]">
            <div className="relative z-10">

                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Brand Section */}
                        <div className={`lg:col-span-1 transform transition-all duration-1000 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`} style={{ transitionDelay: '200ms' }}>
                            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
                                <div className="relative">
                                    <div className="w-10 h-10 bg-[#F0B90B] rounded-xl flex items-center justify-center">
                                        <Eclipse className="w-6 h-6 text-[#0B0E11]" />
                                    </div>
                                </div>
                                <span className="text-2xl font-bold text-[#F0B90B]">
                                    SafeSwap
                                </span>
                            </div>
                            <p className="text-[#B7BDC6] mb-6 leading-relaxed">
                                Simple and secure token escrow platform.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-[#B7BDC6]">
                                <span>Built on</span>
                                <div className="flex items-center gap-1 text-[#F0B90B]">
                                    <div className="w-4 h-4 bg-gradient-to-r from-[#627EEA] to-[#8A92B2] rounded-full"></div>
                                    <span className="font-semibold">Ethereum</span>
                                </div>
                            </div>
                        </div>

                        {/* Links */}
                        <div className={`transform transition-all duration-1000 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`} style={{ transitionDelay: '400ms' }}>
                            <h4 className="text-lg font-bold text-[#FFFFFF] mb-6">
                                Links
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-[#B7BDC6] hover:text-[#F0B90B] transition-colors duration-200">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-[#B7BDC6] hover:text-[#F0B90B] transition-colors duration-200">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal & Contact */}
                        <div className={`transform transition-all duration-1000 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`} style={{ transitionDelay: '800ms' }}>
                            <h4 className="text-lg font-bold text-[#FFFFFF] mb-6 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-[#F0B90B]" />
                                Legal
                            </h4>
                            <ul className="space-y-3 mb-8">
                                {legalLinks.map((link, index) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-[#B7BDC6] hover:text-[#F0B90B] transition-colors duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            {/* Social Links */}
                            <div>
                                <h5 className="text-sm font-bold text-[#FFFFFF] mb-4">Join the Community</h5>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, index) => {
                                        const IconComponent = social.icon;
                                        return (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                className="p-3 rounded-xl bg-[#F0B90B] hover:bg-[#F0B90B]/10 text-[#0c0219] hover:ring hover:text-[#F0B90B] transition-colors duration-200"
                                                onMouseEnter={() => setHoveredSocial(index)}
                                                onMouseLeave={() => setHoveredSocial(null)}
                                            >
                                                <IconComponent className="w-5 h-5 transition-colors duration-200" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-[#2B3139]/10 bg-[#0c0219]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className={`flex flex-col md:flex-row justify-between items-center gap-4 transform transition-all duration-1000 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`} style={{ transitionDelay: '1000ms' }}>
                            <div className="text-[#B7BDC6] text-sm text-center md:text-left">
                                <p className="flex items-center gap-2">
                                    &copy; {year} SafeSwap. All rights reserved. Trade safely!
                                    <Shield className="w-4 h-4 text-[#F0B90B]" />
                                </p>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-[#B7BDC6]">
                                <div className="flex items-center gap-2">
                                    <Globe className="w-4 h-4" />
                                    <span>English</span>
                                    <ChevronDown className="w-3 h-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;