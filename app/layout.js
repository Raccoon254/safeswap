import "./globals.css";
import { Web3Provider } from "./providers/Web3Provider";

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light">
        <body>
            <Web3Provider>
                {children}
            </Web3Provider>
        </body>
        </html>
    );
}