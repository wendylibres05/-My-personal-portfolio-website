import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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

                {/* Navigation Bar — links to all your pages */}
                <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-yellow-100">
                    <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                        <Link href="/" className="font-bold text-xl text-yellow-600">My Portfolio</Link>
                        <div className="flex items-center gap-8">
                            <Link href="/" className="text-slate-700 hover:text-yellow-600 transition-colors">Home</Link>
                            <Link href="/education" className="text-slate-700 hover:text-yellow-600 transition-colors">Education</Link>
                            <Link href="/hobbies" className="text-slate-700 hover:text-yellow-600 transition-colors">Hobbies</Link>
                            <Link href="/contact" className="text-slate-700 hover:text-yellow-600 transition-colors">Contact</Link>
                        </div>
                    </div>
                </nav>

                {/* Page Content — your about/education/hobbies/contact pages go here */}
                <main>{children}</main>
            </body>
        </html>
    );
}
