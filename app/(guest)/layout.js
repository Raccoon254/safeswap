import { Figtree } from "next/font/google";
import "../globals.css";
import Navbar from "@/app/components/navigation/Navbar";
import Footer from "@/app/components/navigation/Footer";

const figtree = Figtree({
    variable: "--font-figtree",
    subsets: ["latin"],
});

export const metadata = {
    title: "SafeSwap – Secure Token Escrow with Built-in Dispute Resolution",
    description:
        "SafeSwap is a decentralized escrow platform for secure token trading with integrated chat and professional dispute resolution. Trade with confidence on Ethereum.",
    keywords: [
        "SafeSwap",
        "token escrow",
        "cryptocurrency escrow",
        "decentralized trading",
        "dispute resolution",
        "secure token exchange",
        "ethereum escrow",
        "crypto trading",
        "blockchain escrow",
        "DeFi trading"
    ],
    authors: [{ name: "SafeSwap Team" }],
    metadataBase: new URL("https://safeswap.app"),
    openGraph: {
        title: "SafeSwap – Secure Token Escrow with Built-in Dispute Resolution",
        description:
            "Trade tokens safely with smart contract escrow, built-in chat, and professional dispute resolution. Join thousands of users who trust SafeSwap.",
        url: "https://safeswap.app",
        siteName: "SafeSwap",
        images: [
            {
                url: "/safeswap-banner.jpg",
                width: 1200,
                height: 630,
                alt: "SafeSwap secure token escrow platform",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "SafeSwap – Secure Token Escrow with Built-in Dispute Resolution",
        description:
            "The most secure way to trade tokens. Decentralized escrow with chat and dispute resolution built-in.",
        images: ["/safeswap-banner.jpg"],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
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