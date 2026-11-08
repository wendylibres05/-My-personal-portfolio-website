"use client";

import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 py-20 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Hero Section */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-6">
                        <span className="text-7xl">👋</span>
                    </div>

                    <h1 className="text-6xl font-bold text-gray-800 mb-6">
                        Welcome! I'm <span className="text-blue-600">Wendy</span> ✨
                    </h1>

                    <p className="text-2xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                        A passionate developer building beautiful things with
                        <span className="font-semibold text-blue-600"> Next.js</span> &
                        <span className="font-semibold text-indigo-600"> NestJS</span> 💻✨
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            Get to Know Me 🧑‍💻
                        </Link>
                        <Link href="/hobbies" className="bg-white hover:bg-gray-50 text-blue-600 font-semibold px-8 py-3 rounded-full border-2 border-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            See My Hobbies 💛
                        </Link>
                    </div>

                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                {/* Quick Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

                    {/* About Card */}
                    <Link href="/about" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                        <span className="text-5xl mb-4 block">👩‍💻</span>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">About Me</h3>
                        <p className="text-gray-500">My story, skills, and journey</p>
                    </Link>

                    {/* Education Card */}
                    <Link href="/education" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                        <span className="text-5xl mb-4 block">📚</span>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Education</h3>
                        <p className="text-gray-500">Where I learned and grew</p>
                    </Link>

                    {/* Hobbies Card */}
                    <Link href="/hobbies" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                        <span className="text-5xl mb-4 block">🎬</span>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Hobbies</h3>
                        <p className="text-gray-500">What I love doing</p>
                    </Link>

                </div>

                {/* Projects Section */}
                <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">My Projects 🚀</h2>
                    <p className="text-lg text-gray-500 mb-6">Exciting things are being built...</p>
                    <div className="inline-block bg-blue-50 px-6 py-3 rounded-full text-blue-600 font-medium">
                        ✨ Coming very soon! Stay tuned ✨
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-16 text-gray-500">
                    <p className="text-lg">Made with 💙 by Wendy</p>
                    <p className="mt-2">Building the future, one line of code at a time ✨</p>
                </div>

            </div>
        </div>
    );
}
