import { Figtree } from "next/font/google";
import "../globals.css";
import Navbar from "@/app/components/navigation/Navbar";
import Footer from "@/app/components/navigation/Footer";

const figtree = Figtree({
    variable: "--font-figtree",
    subsets: ["latin"],
});

export const metadata = {
    title: "SafeSwap Dashboard – Manage Your Escrows",
    description: "Manage your token escrows, view transaction history, and create new secure trades on SafeSwap.",
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