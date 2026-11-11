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
                {/* ✅ Pastel Green Gradient Background — shows on ALL pages */}
                <div
                    className="fixed inset-0 -z-10"
                    style={{
                        background: "linear-gradient(120deg, #f0fdf4, #dcfce7, #e6fffa)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                    }}
                >
                    <div className="absolute inset-0 bg-white/60"></div>
                </div>

                {/* ✅ Navigation */}
                <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-green-100">
                    <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                        <Link href="/" className="font-bold text-xl text-green-600">My Portfolio</Link>
                        <div className="flex items-center gap-8">
                            <Link href="/" className="text-slate-700 hover:text-green-600 transition-colors">Home</Link>
                            <Link href="/about" className="text-slate-700 hover:text-green-600 transition-colors">About</Link>
                            <Link href="/education" className="text-slate-700 hover:text-green-600 transition-colors">Education</Link>
                            <Link href="/hobbies" className="text-slate-700 hover:text-green-600 transition-colors">Hobbies</Link>
                            <Link href="/contact" className="text-slate-700 hover:text-green-600 transition-colors">Contact</Link>
                        </div>
                    </div>
                </nav>

                {/* ✅ Page content */}
                <main>{children}</main>
            </body>
        </html>
    );
}
