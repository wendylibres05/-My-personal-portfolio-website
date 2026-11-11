"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-[85vh] px-4 py-12">
            <div className="max-w-5xl mx-auto">

                {/* Badge & Heading — centered at top */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-800 text-sm font-medium mb-4 shadow-sm">
                        <Sparkles className="h-4 w-4 text-yellow-500" />
                        <span>Get to know me</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
                        About <span className="text-yellow-500">Me</span>
                    </h1>
                </div>

                {/* Two Column Layout — Image Left, Text Right */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Profile Picture — Left */}
                    <div className="flex justify-center md:justify-start">
                        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-yellow-200 shadow-lg ring-4 ring-yellow-100">
                            <Image
                                src="/profile.jpg"
                                alt="Wendy Libres"
                                width={320}
                                height={320}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </div>

                    {/* Introduction — Right */}
                    <div className="text-left space-y-6">
                        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                            Hi! I'm <strong>Wendy Libres</strong>, an Information Systems student from Pamukid, San Fernando, Camarines Sur, Philippines. I love exploring technology and learning how things work behind the screen.
                        </p>
                        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                            My journey in tech started with curiosity and a simple desire to create. Every day, I'm learning something new — whether it's writing code, designing websites, or understanding how computers think.
                        </p>
                        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                            This portfolio is my little corner on the internet where I share who I am, what I'm learning, and what I love doing. Thank you for visiting!
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
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

                </div>
            </div>
        </div>
    );
}
