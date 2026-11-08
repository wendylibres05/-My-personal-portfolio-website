"use client";

import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-white py-24 px-4">
            <div className="max-w-4xl mx-auto">

                {/* Hero Section */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-bold text-blue-900 mb-8 tracking-tight">
                        Hi, I'm Wendy
                    </h1>

                    {/* Introduction Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-10 mb-10">
                        <p className="text-xl text-blue-800 leading-relaxed mb-4">
                            I am a type of college student studying the BSIS "Bachelor Science if Information System".
                        </p>
                        <p className="text-lg text-blue-700 leading-relaxed mb-4">
                            I have a passion for building beautiful, functional websites and discovering new technologies. I am currently working with Next.js and NestJS, expanding my skills with every project.
                        </p>
                        <p className="text-lg text-blue-700 leading-relaxed">
                            Outside of coding, I enjoy watching films, discovering good food, spending time by the sea, and getting lost in a good book.
                        </p>
                    </div>

                    <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-10"></div>

                    {/* Navigation Buttons — All Blue Theme */}
                    <div className="flex flex-wrap justify-center gap-5 mb-16">
                        <Link
                            href="/education"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300"
                        >
                            Education
                        </Link>
                        <Link
                            href="/hobbies"
                            className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium px-8 py-3 rounded-lg border border-blue-200 transition-all duration-300"
                        >
                            Hobbies & Interests
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-blue-800 hover:bg-blue-900 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300"
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Projects Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-10 text-center">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-4">My Projects</h2>
                    <p className="text-blue-600 mb-6">This portfolio marks the beginning of my journey. New projects will be shared here as I grow.</p>
                    <p className="text-blue-500 font-medium">Coming soon</p>
                </div>

                {/* Footer */}
                <div className="text-center mt-16 text-blue-500">
                    <p>Created by Wendy</p>
                    <p className="mt-1 text-sm">Learning, growing, and building every day</p>
                </div>

            </div>
        </div>
    );
}
