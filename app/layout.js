import "./globals.css";
//import Providers from "./providers/Providers";

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light">
        <body>
            {children}
        </body>
        </html>
    );
}