"use client";

import { useState } from "react";
import Link from "next/link";
import { registerUser, API_BASE_URL } from "@/lib/api";
import {
  UserPlus,
  CheckCircle2,
  AlertCircle,
  Lock,
  User,
  ArrowRight,
  Database,
  Terminal,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [createdUser, setCreatedUser] = useState<{
    id: number;
    username: string;
    role: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setCreatedUser(null);

    if (!username.trim() || !password.trim()) {
      setError("Please provide both a username and password.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please re-enter.");
      return;
    }

    if (password.length < 4) {
      setError("Password should be at least 4 characters long.");
      return;
    }

    setLoading(true);

    try {
      const result = await registerUser(username.trim(), password);
      setCreatedUser(result);
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      setError(err.message || "Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200 mb-3">
          <Database className="w-3.5 h-3.5 text-green-600" />
          <span>Connected to MySQL Database via NestJS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
          Create New Account
        </h1>
        <p className="text-sm text-slate-600 mt-2 max-w-lg mx-auto">
          Registers a new user record into the MySQL database with bcrypt password hashing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Registration Form (7 cols) */}
        <div className="md:col-span-7">
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-sm border border-green-100 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="p-2.5 bg-green-100 text-green-700 rounded-xl">
                <UserPlus className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-800">Account Registration</h2>
                <p className="text-xs text-slate-500">
                  Fill in your credentials to get an Account ID
                </p>
              </div>
            </div>

            {/* Success Alert */}
            {createdUser && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 animate-in fade-in">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm">Account Created in MySQL!</h3>
                    <p className="text-xs text-emerald-800 mt-1">
                      Your account was assigned{" "}
                      <span className="font-mono font-bold px-1.5 py-0.5 bg-emerald-100 rounded text-emerald-950">
                        Account ID #{createdUser.id}
                      </span>{" "}
                      for username <strong className="text-emerald-950">"{createdUser.username}"</strong>.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-emerald-200">
                      <Link
                        href="/login"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition shadow-xs"
                      >
                        Sign In Now <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="/accounts"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white text-emerald-800 border border-emerald-300 rounded-lg hover:bg-emerald-50 transition"
                      >
                        View Account Directory
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Error Alert */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Registration Failed</p>
                  <p className="mt-0.5">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Username
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Choose a username (e.g. wendy05)"
                    required
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter password"
                    required
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold text-sm rounded-xl shadow-sm transition flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Saving to MySQL...
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />
                    Register Account
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-green-700 hover:underline">
                Sign In here
              </Link>
            </div>
          </div>
        </div>

        {/* Right Info: Postman / Backend integration guide (5 cols) */}
        <div className="md:col-span-5 space-y-4">
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-5 h-5 text-slate-700" />
              <h3 className="font-bold text-sm text-slate-800">Postman Equivalent</h3>
            </div>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              You can trigger the exact same MySQL user registration using Postman:
            </p>

            <div className="space-y-2 text-xs font-mono bg-slate-900 text-slate-200 p-3.5 rounded-xl overflow-x-auto">
              <div className="text-amber-400 font-bold">
                POST <span className="text-slate-300 font-normal">{API_BASE_URL}/auth/register</span>
              </div>
              <div className="text-slate-400 text-[11px] pt-1">Headers:</div>
              <div className="text-cyan-300 text-[11px]">Content-Type: application/json</div>
              <div className="text-slate-400 text-[11px] pt-1">Body (raw JSON):</div>
              <pre className="text-emerald-400 text-[11px] leading-tight">
{`{
  "username": "wendy05",
  "password": "mypassword123"
}`}
              </pre>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                Bcrypt Hashing: Cost 10
              </span>
              <a
                href={`${API_BASE_URL}`}
                target="_blank"
                rel="noreferrer"
                className="text-green-700 hover:underline inline-flex items-center gap-1"
              >
                API Info <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5">
            <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1">
              Live Database Integration
            </h4>
            <p className="text-xs text-emerald-800 leading-relaxed">
              When an account is created, MySQL automatically increments the primary key and returns the unique <strong>Account ID</strong>. You can verify it immediately on the{" "}
              <Link href="/accounts" className="font-bold underline text-emerald-950">
                Accounts Page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
