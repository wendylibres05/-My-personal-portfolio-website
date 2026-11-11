import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-4">
                        Get to know me
                    </span>
                    <h1 className="text-4xl font-bold text-slate-800">
                        About <span className="text-yellow-500">Me</span>
                    </h1>
                </div>

                {/* Content Container */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Profile Image — using your local file */}
                    <div className="flex-shrink-0">
                        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-yellow-200 shadow-lg">
                            <Image
                                src="/profile.jpg"
                                alt="Wendy Libres Profile"
                                width={256}
                                height={256}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Pastel Yellow Box — All Text Inside */}
                    <div className="bg-yellow-50/80 rounded-2xl p-8 shadow-sm border border-yellow-100">
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Hi! I'm <strong className="text-yellow-600">Wendy Libres</strong>, an Information Systems student from Pamukid, San Fernando, Camarines Sur, Philippines. I love exploring technology and learning how things work behind the screen.
                        </p>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            My journey in tech started with curiosity and a simple desire to create. Every day, I'm learning something new — whether it's writing code, designing websites, or understanding how computers think.
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                            This portfolio is my little corner on the internet where I share who I am, what I'm learning, and what I love doing. Thank you for visiting!
                        </p>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                    <Link
                        href="/education"
                        className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-medium rounded-full transition-colors shadow-sm"
                    >
                        My Education →
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-3 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 font-medium rounded-full transition-colors"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    );
}
