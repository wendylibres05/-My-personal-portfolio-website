"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4 py-12">

            {/* Profile Picture */}
            <div className="relative mb-8">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-yellow-200 shadow-md ring-4 ring-yellow-100">
                    <Image
                        src="/profile.jpg"
                        alt="Wendy Libres"
                        width={176}
                        height={176}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-800 text-sm font-medium mb-6 shadow-sm">
                <Sparkles className="h-4 w-4 text-yellow-500" />
                <span>Get to know me</span>
            </div>

            {/* Main Content */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
                About <span className="text-yellow-500">Me</span>
            </h1>

            <div className="max-w-2xl space-y-6 mb-10">
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                    Hi! I'm <strong>Wendy Libres</strong>, an Information Systems student from Camarines Sur, Philippines. I love exploring technology and learning how things work behind the screen.
                </p>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                    My journey in tech started with curiosity and a simple desire to create. Every day, I'm learning something new — whether it's writing code, designing websites, or understanding how computers think.
                </p>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                    This portfolio is my little corner on the internet where I share who I am, what I'm learning, and what I love doing. Thank you for visiting!
                </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                    href="/education"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 text-slate-900 font-medium shadow-sm hover:bg-yellow-500 transition-colors"
                >
                    <span>My Education</span>
                    <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-100 text-amber-900 border border-amber-200 font-medium hover:bg-amber-200/60 transition-colors"
                >
                    Get in Touch
                </Link>
            </div>
        </div>
    );
}
