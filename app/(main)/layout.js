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
        default: "Dashboard – Manage Your Escrows | Thraqs",
        template: "%s | Thraqs Dashboard"
    },
    description: "Manage your digital asset escrows, view transaction history, and create new secure trades on Thraqs. Track crypto, social accounts, domains, and more in one place.",
    keywords: [
        "escrow dashboard",
        "manage escrow",
        "crypto trading dashboard",
        "digital asset management",
        "transaction history",
        "escrow tracking",
        "Thraqs dashboard"
    ],
    authors: [
        { name: "KenTom", url: "https://kentom.co.ke" },
        { name: "Thraqs Team" }
    ],
    creator: "KenTom - https://kentom.co.ke",
    publisher: "SafeSwap",
    robots: {
        index: false, // Dashboard pages should not be indexed
        follow: false,
        noarchive: true,
    },
    openGraph: {
        title: "Thraqs Dashboard – Manage Your Escrows",
        description: "Manage your digital asset escrows, view transaction history, and create new secure trades.",
        images: [
            {
                url: "/seo/image/thrasq.png",
                width: 1200,
                height: 630,
                alt: "Thraqs Dashboard",
            },
        ],
    },
};

export default function MainLayout({ children }) {
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