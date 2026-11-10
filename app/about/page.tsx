import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4 py-8">

            {/* Profile Picture Container */}
            <div className="relative mb-6">
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

            {/* Decorative Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-800 text-sm font-medium mb-6 shadow-sm">
                <Sparkles className="h-4 w-4 text-yellow-500" />
                <span> Huānyíng lái dào wǒ de shùwè zuòpǐn jí</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight max-w-3xl mb-4">
                wǒ shì <span className="text-yellow-500">Wendy Libres</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
                An Information Systems student passionate about building functional and creative web applications using modern technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 text-slate-900 font-medium shadow-sm hover:bg-yellow-500 transition-colors"
                >
                    <span>Learn More About Me</span>
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
