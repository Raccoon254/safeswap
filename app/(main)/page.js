'use client'
import React, {useState, useEffect} from 'react';
import {
    ArrowRight,
    Shield,
    MessageSquare,
    Scale,
    Wallet,
    ChevronDown,
    ChevronUp, Zap, Gamepad2, Gem, Spade, Coins
} from 'lucide-react';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import Link from "next/link";
import Image from "next/image";

const Landing = () => {
    const [visibleSections, setVisibleSections] = useState(new Set());
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        // Intersection Observer for animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => new Set([...prev, entry.target.id]));
                    }
                });
            },
            {threshold: 0.1}
        );

        const sections = document.querySelectorAll('[id]');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            icon: Shield,
            title: 'Secure Escrow',
            description: 'Smart contracts hold tokens until both parties agree'
        },
        {
            icon: Coins,
            title: 'Low Fees',
            description: 'Only 1% fee on successful trades, no hidden costs'
        },
        {
            icon: MessageSquare,
            title: 'Chat System',
            description: 'Communicate directly with your trading partner'
        },
        {
            icon: Scale,
            title: 'Dispute Resolution',
            description: 'Fair resolution when things go wrong'
        }
    ];

    const faqs = [
        {
            question: "How does the escrow work?",
            answer: "Tokens are locked in a smart contract until both parties confirm the trade is complete. No one can access the funds until terms are met."
        },
        {
            question: "What happens if there's a dispute?",
            answer: "Our dispute resolution system allows moderators to review evidence and make fair decisions based on the original agreement."
        },
        {
            question: "What tokens are supported?",
            answer: "We support all ERC-20 tokens on Ethereum. Just connect your wallet and start trading."
        },
        {
            question: "Are there any fees?",
            answer: "We charge a small 1% fee only when trades are successfully completed. No upfront costs."
        },
        {
            question: "Do I need to create an account?",
            answer: "No account needed. Just connect your wallet and start trading immediately."
        }
    ];

    return (
        <div className="min-h-screen bg-[#0c0219]">

            {/* Hero Section */}
            <section id="home"
                     className="relative p-1 py-6 md:py-40 overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:py-20 items-center">
                        {/* Left Content */}
                        <div className={`space-y-4 transform transition-all duration-1000 ${
                            visibleSections.has('home') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 text-sm font-medium border border-[#F0B90B]/10 ring ring-offset-2 ring-offset-[#0c0219] ring-[#F0B90B]/10 hover:ring-[#FCD535]/20
                                 text-[#F0B90B]  transition duration-300
                                 px-4 py-1.5 rounded-full w-fit">
                                    <Zap className="w-4 h-4"/>
                                    <span>The Future of Token Trading</span>
                                </div>

                                <h1 className="text-4xl pacifico md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-tight">
                                    Secure Token <span className="text-[#F0B90B]">Escrow</span>
                                </h1>

                                <p className="text-xl text-[#B7BDC6] leading-relaxed max-w-2xl mx-auto">
                                    Trade tokens safely with smart contract escrow. Your funds are protected until both
                                    parties confirm the exchange.
                                </p>
                            </div>

                            <div className="mt-6">
                                <Link
                                    href="/login"
                                    className="group w-fit border ring ring-offset-2 ring-offset-[#0c0219] border-[#F0B90B] hover:border-[#FCD535] ring-[#F0B90B]/30 hover:ring-[#FCD535]/40 bg-[#0c0219] hover:bg-gray-900
                                    text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl transform active:scale-95 flex items-center gap-3">
                                    <span>Connect Wallet</span>
                                    <Spade
                                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Hero Image */}
                        <div
                            className={`relative flex justify-center lg:justify-end transform transition-all duration-1000 ${
                                visibleSections.has('home') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`} style={{transitionDelay: '300ms'}}>
                            <div className="relative group">
                                <div
                                    className="absolute -inset-8 my-20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
                                <Image
                                    src="/crypto_narrow.png"
                                    width={600}
                                    height={400}
                                    alt="Gaming Controller"
                                    className="relative vignette w-full max-w-lg h-auto transform group-hover:scale-105 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Footer Credit Section */}
            <section className="py-8 border-t border-b border-gray-100/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <a
                        href="https://kentom.co.ke"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-3 text-gray-200 hover:text-purple-300 transition-all duration-500 transform hover:scale-105"
                    >
                        <div
                            className={`w-8 h-8 rounded-full group-hover:animate-spin-slow transition-transform duration-1000`}>
                            {/* Image slot - replace src with your image URL or use a default */}
                            <img
                                src="https://www.kentom.co.ke/logo-light.png" // Default placeholder; swap with actual image src
                                alt="kenTom Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-sm font-medium group-hover:underline underline-offset-4">
                            A kenTom Project
                        </span>
                        <ArrowRight
                            className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-0 group-hover:translate-x-1"/>
                    </a>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="relative pt-24 pb-20">
                <div className="relative z-10 md:py-44 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className={`space-y-8 transform transition-all duration-1000 ${
                            visibleSections.has('how-it-works') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
                                How It <span className="text-[#F0B90B]">Works</span>
                            </h2>
                            <p className="text-xl text-[#B7BDC6] leading-relaxed max-w-2xl mx-auto">
                                Our platform makes token trading simple and secure in just a few steps
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className={`transform transition-all duration-1000 ${
                            visibleSections.has('how-it-works') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`} style={{transitionDelay: '100ms'}}>
                            <div className="bg-[#0c0219] rounded-xl p-6 border border-[#2B3139] h-full">
                                <div
                                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F0B90B] text-[#0c0219] font-bold text-xl mb-4">1
                                </div>
                                <h3 className="text-lg font-bold text-[#FFFFFF] mb-3">Connect Wallet</h3>
                                <p className="text-[#B7BDC6]">Link your cryptocurrency wallet to access our platform's
                                    features securely.</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className={`transform transition-all duration-1000 ${
                            visibleSections.has('how-it-works') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`} style={{transitionDelay: '200ms'}}>
                            <div className="bg-[#0c0219] rounded-xl p-6 border border-[#2B3139] h-full">
                                <div
                                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F0B90B] text-[#0c0219] font-bold text-xl mb-4">2
                                </div>
                                <h3 className="text-lg font-bold text-[#FFFFFF] mb-3">Create Escrow</h3>
                                <p className="text-[#B7BDC6]">Specify trade terms and lock your tokens in our secure
                                    smart contract escrow.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className={`transform transition-all duration-1000 ${
                            visibleSections.has('how-it-works') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`} style={{transitionDelay: '300ms'}}>
                            <div className="bg-[#0c0219] rounded-xl p-6 border border-[#2B3139] h-full">
                                <div
                                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F0B90B] text-[#0c0219] font-bold text-xl mb-4">3
                                </div>
                                <h3 className="text-lg font-bold text-[#FFFFFF] mb-3">Complete Trade</h3>
                                <p className="text-[#B7BDC6]">After both parties confirm, tokens are automatically
                                    released to the recipient.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16 bg-[#0c0219]">
                <div className="max-w-7xl md:pb-40 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-12 transform transition-all duration-1000 ${
                        visibleSections.has('features') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
                            Simple Escrow Features
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div
                                    key={feature.title}
                                    className={`bg-[#0c0219] rounded-xl p-6 border border-[#2B3139] text-center transition-all duration-1000 ${
                                        visibleSections.has('features') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                                    style={{transitionDelay: `${index * 150}ms`}}
                                >
                                    <div
                                        className="inline-flex items-center justify-center w-12 h-12 bg-[#F0B90B] rounded-xl mb-4">
                                        <IconComponent className="w-6 h-6 text-[#0c0219]"/>
                                    </div>
                                    <h3 className="text-lg font-bold text-[#FFFFFF] mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[#B7BDC6] text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 bg-[#0c0219]">
                <div className="max-w-3xl nd:pb-40 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-12 transform transition-all duration-1000 ${
                        visibleSections.has('faq') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-[#0c0219] rounded-xl border overflow-clip border-[#2B3139] transition-all duration-1000 ${
                                    visibleSections.has('faq') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                                style={{transitionDelay: `${index * 100}ms`}}
                            >
                                <button
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#2B3139] transition-colors duration-200"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <span className="text-[#FFFFFF] font-medium">{faq.question}</span>
                                    {openFaq === index ? (
                                        <ChevronUp className="w-5 h-5 text-[#F0B90B]"/>
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-[#F0B90B]"/>
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-4 border-t border-[#2B3139]">
                                        <p className="text-[#B7BDC6] pt-4">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Simple CTA */}
            <section id="cta" className="py-16 bg-[#0c0219]">
                <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
                        Start Trading Safely
                    </h2>
                    <p className="text-lg text-[#B7BDC6] mb-8">
                        Connect your wallet and create your first escrow in seconds.
                    </p>
                    <button
                        className="bg-[#F0B90B] hover:bg-[#FCD535] text-[#0c0219] px-8 py-4 rounded-full font-bold text-lg transition-colors duration-200 flex items-center justify-center gap-3 mx-auto">
                        <Wallet className="w-5 h-5"/>
                        <span>Connect Wallet</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Landing;