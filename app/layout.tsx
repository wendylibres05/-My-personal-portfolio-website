// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Wendy Libres | My Portfolio",
    description: "My personal portfolio website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="relative min-h-screen">
                {/* Background Image — applies to ALL pages */}
                <div
                    className="fixed inset-0 -z-10"
                    style={{
                        backgroundImage: "url('/bg-pattern.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                    }}
                >
                    {/* Soft overlay so text is easy to read */}
                    <div className="absolute inset-0 bg-white/85"></div>
                </div>

                {children}
            </body>
        </html>
    );
}
