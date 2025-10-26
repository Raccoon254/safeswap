import { Figtree } from "next/font/google";
import "../globals.css";
import Navbar from "@/app/components/navigation/Navbar";
import Footer from "@/app/components/navigation/Footer";

const figtree = Figtree({
    variable: "--font-figtree",
    subsets: ["latin"],
});

export const metadata = {
    title: {
        default: "Thraqs – Secure Escrow for Crypto, Social Accounts, Domains & More | KYC-Free Trading",
        template: "%s | Thraqs"
    },
    description:
        "Trade digital assets with confidence on Thraqs. Our smart escrow system locks funds until both parties fulfill the deal—protecting you from scams, chargebacks, and fraud. Buy and sell crypto, social media accounts, domains, and more. Fast, neutral, and KYC-free. Powered by SafeSwap.",
    keywords: [
        "Thraqs",
        "SafeSwap escrow",
        "digital asset escrow",
        "cryptocurrency escrow",
        "crypto escrow service",
        "social media account trading",
        "Instagram account escrow",
        "Twitter account escrow",
        "TikTok account trading",
        "domain name escrow",
        "NFT escrow",
        "smart contract escrow",
        "decentralized escrow",
        "P2P trading platform",
        "secure crypto trading",
        "KYC-free escrow",
        "anonymous trading",
        "dispute resolution crypto",
        "chargeback protection",
        "scam protection trading",
        "ethereum escrow",
        "blockchain escrow service",
        "DeFi escrow",
        "web3 trading",
        "trustless escrow",
        "escrow smart contract",
        "digital goods marketplace",
        "safe crypto exchange"
    ],
    authors: [
        { name: "KenTom", url: "https://kentom.co.ke" },
        { name: "Thraqs Team" }
    ],
    creator: "KenTom - https://kentom.co.ke",
    publisher: "SafeSwap",
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://thraqs.app"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Thraqs – Secure Escrow for Crypto, Social Accounts, Domains & More",
        description:
            "Buy and sell digital assets with confidence. Our smart escrow system locks funds until both parties fulfill the deal—protecting you from scams, chargebacks, and fraud. Fast, neutral, and KYC-free.",
        url: "https://thraqs.app",
        siteName: "Thraqs",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/seo/image/thrasq.png",
                width: 1200,
                height: 630,
                alt: "Thraqs - Secure escrow platform for digital assets including crypto, social accounts, and domains",
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Thraqs – Secure Escrow for Crypto, Social Accounts, Domains & More",
        description:
            "Trade digital assets safely. Smart escrow locks funds until both parties fulfill the deal. No KYC, no chargebacks, no scams.",
        images: ["/seo/image/thrasq.png"],
        creator: "@thraqs",
        site: "@thraqs",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/logo/logo.png", type: "image/png", sizes: "512x512" },
        ],
        shortcut: "/favicon.ico",
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },
    manifest: "/site.webmanifest",
    category: "finance",
    classification: "Decentralized Finance, Escrow Services, Digital Asset Trading",
    other: {
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "black-translucent",
        "format-detection": "telephone=no",
    },
};

export default function RootLayout({ children }) {
    return (
        <section
            className={`${figtree.variable} antialiased min-h-screen bg-[#0B0E11] text-[#FFFFFF]`}
        >
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </section>
    );
}