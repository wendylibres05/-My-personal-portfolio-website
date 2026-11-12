import Link from "next/link";
import { Users, ArrowRight, Server, ShieldCheck, Database } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200 mb-4">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Connected to Render NestJS Backend
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
          Welcome! I'm <span className="text-green-600">Wendy</span> 👋
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Full-stack developer building modern web applications with{" "}
          <span className="font-semibold text-slate-800">Next.js</span> and{" "}
          <span className="font-semibold text-slate-800">NestJS</span>.
        </p>
      </div>

      {/* Featured Feature: Accounts & Database integration */}
      <div className="bg-white/90 backdrop-blur rounded-2xl shadow-sm border border-green-100 p-8 mb-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-xl text-green-700 shrink-0">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 px-2 py-0.5 rounded">
                Live Integration
              </span>
              <h2 className="text-2xl font-bold text-slate-800 mt-1">
                Account Management & User Directory
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                Create new accounts, store hashed passwords securely in MySQL, and view
                real-time account IDs and usernames directly from the live backend.
              </p>
            </div>
          </div>

          <Link
            href="/accounts"
            className="inline-flex items-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-xl shadow-sm transition shrink-0"
          >
            Manage Accounts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
          <div className="flex items-center gap-2.5 text-xs text-slate-600">
            <Database className="w-4 h-4 text-green-600 shrink-0" />
            <span>MySQL Database on Aiven / Cloud</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-600">
            <Server className="w-4 h-4 text-green-600 shrink-0" />
            <span>NestJS API on Render.com</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
            <span>JWT & Bcrypt Authentication</span>
          </div>
        </div>
      </div>

      {/* Quick navigation */}
      <h3 className="text-xl font-bold text-slate-800 mb-4">Explore Portfolio</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "About Me", href: "/about", desc: "Background & Bio" },
          { title: "Education", href: "/education", desc: "Academic journey" },
          { title: "Hobbies", href: "/hobbies", desc: "Interests & Passions" },
          { title: "Contact", href: "/contact", desc: "Get in touch" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="p-4 bg-white/70 hover:bg-white rounded-xl border border-slate-200/80 hover:border-green-300 transition hover:shadow-xs group"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-800 group-hover:text-green-600 transition">
                {item.title}
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
            </div>
            <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
