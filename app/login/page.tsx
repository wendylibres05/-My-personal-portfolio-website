"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { loginUser, getProfile, logoutUser, API_BASE_URL } from "@/lib/api";
import {
  LogIn,
  LogOut,
  CheckCircle2,
  AlertCircle,
  Lock,
  User,
  ShieldCheck,
  Terminal,
  ExternalLink,
  Users,
  Copy,
  Check,
} from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Authenticated State
  const [currentUser, setCurrentUser] = useState<{
    id?: number;
    username: string;
    role?: string;
  } | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [tokenCopied, setTokenCopied] = useState(false);
  const [profileVerified, setProfileVerified] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      const savedUserStr = localStorage.getItem("user");
      const savedUsername = localStorage.getItem("username");

      if (token) {
        setAccessToken(token);
        if (savedUserStr) {
          try {
            setCurrentUser(JSON.parse(savedUserStr));
          } catch {
            setCurrentUser({ username: savedUsername || "User" });
          }
        } else if (savedUsername) {
          setCurrentUser({ username: savedUsername });
        }

        // Verify token with /auth/me
        getProfile()
          .then((prof) => {
            setProfileVerified(true);
            setCurrentUser((prev) => ({
              ...prev,
              id: prof.userId,
              username: prof.username,
              role: prof.role,
            }));
          })
          .catch(() => {
            setProfileVerified(false);
          });
      }
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password.");
      return;
    }

    setLoading(true);

    try {
      const res = await loginUser(username.trim(), password);
      setAccessToken(res.accessToken);
      setCurrentUser(
        res.user || {
          username: username.trim(),
        },
      );
      setProfileVerified(true);
      setPassword("");
    } catch (err: any) {
      setError(err.message || "Invalid credentials. Please verify username and password.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
    setAccessToken(null);
    setProfileVerified(false);
  };

  const copyToken = () => {
    if (!accessToken) return;
    navigator.clipboard.writeText(accessToken);
    setTokenCopied(true);
    setTimeout(() => setTokenCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200 mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
          <span>JWT Authentication via NestJS Backend</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
          Sign In to Your Account
        </h1>
        <p className="text-sm text-slate-600 mt-2 max-w-lg mx-auto">
          Validates your credentials in MySQL and issues a secure JWT token for API authorization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left: Login Form / Logged In Card (7 cols) */}
        <div className="md:col-span-7">
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-sm border border-green-100 p-6 sm:p-8">
            {currentUser && accessToken ? (
              /* Already Signed In */
              <div className="space-y-6 animate-in fade-in">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-green-600 text-white font-bold text-lg flex items-center justify-center uppercase shadow-sm">
                      {currentUser.username[0] || "U"}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-800">
                        {currentUser.username}
                      </h2>
                      <div className="flex items-center gap-2 mt-0.5">
                        {currentUser.id && (
                          <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                            Account ID #{currentUser.id}
                          </span>
                        )}
                        <span className="text-xs font-medium text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                          {currentUser.role || "user"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 rounded-lg transition"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    Sign Out
                  </button>
                </div>

                {/* Session verification badge */}
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <div className="flex items-center gap-2 text-emerald-900 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Authentication Active</span>
                  </div>
                  <p className="text-xs text-emerald-800 mt-1">
                    Your session is authorized by the live backend.
                    {profileVerified && " Token verified successfully via /auth/me."}
                  </p>
                </div>

                {/* JWT Token snippet */}
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
                    <span>JWT Access Token</span>
                    <button
                      onClick={copyToken}
                      className="text-slate-500 hover:text-slate-800 inline-flex items-center gap-1 font-mono text-[11px]"
                    >
                      {tokenCopied ? (
                        <>
                          <Check className="w-3 h-3 text-green-600" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          Copy Token
                        </>
                      )}
                    </button>
                  </div>
                  <div className="p-3 bg-slate-900 text-slate-300 font-mono text-[11px] rounded-xl break-all line-clamp-3 select-all">
                    {accessToken}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href="/accounts"
                    className="flex-1 py-2.5 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded-xl transition text-center flex items-center justify-center gap-2"
                  >
                    <Users className="w-4 h-4" />
                    Browse All Accounts
                  </Link>
                  <Link
                    href="/register"
                    className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm rounded-xl transition text-center"
                  >
                    Create Another Account
                  </Link>
                </div>
              </div>
            ) : (
              /* Sign In Form */
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="p-2.5 bg-green-100 text-green-700 rounded-xl">
                    <LogIn className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-800">User Sign In</h2>
                    <p className="text-xs text-slate-500">
                      Enter your MySQL username and password
                    </p>
                  </div>
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Sign In Failed</p>
                      <p className="mt-0.5">{error}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
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
                        placeholder="Enter your username"
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
                        placeholder="Enter your password"
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
                        Authenticating...
                      </>
                    ) : (
                      <>
                        <LogIn className="w-4 h-4" />
                        Sign In
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
                  Don't have an account yet?{" "}
                  <Link href="/register" className="font-semibold text-green-700 hover:underline">
                    Create an account here
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Postman & API Guide (5 cols) */}
        <div className="md:col-span-5 space-y-4">
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-5 h-5 text-slate-700" />
              <h3 className="font-bold text-sm text-slate-800">Postman Equivalent</h3>
            </div>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Test signing in directly through Postman:
            </p>

            <div className="space-y-2 text-xs font-mono bg-slate-900 text-slate-200 p-3.5 rounded-xl overflow-x-auto">
              <div className="text-amber-400 font-bold">
                POST <span className="text-slate-300 font-normal">{API_BASE_URL}/auth/login</span>
              </div>
              <div className="text-slate-400 text-[11px] pt-1">Headers:</div>
              <div className="text-cyan-300 text-[11px]">Content-Type: application/json</div>
              <div className="text-slate-400 text-[11px] pt-1">Body (raw JSON):</div>
              <pre className="text-emerald-400 text-[11px] leading-tight">
{`{
  "username": "your_username",
  "password": "your_password"
}`}
              </pre>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-800 mb-1">Testing Protected Routes</h4>
              <p className="text-xs text-slate-500 mb-2">
                Use the returned <code>accessToken</code> in the Authorization header:
              </p>
              <div className="p-2.5 bg-slate-100 rounded-lg font-mono text-[11px] text-slate-700 break-all">
                Authorization: Bearer &lt;accessToken&gt;
              </div>
            </div>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5">
            <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1">
              Live Token Flow
            </h4>
            <p className="text-xs text-emerald-800 leading-relaxed">
              Upon successful login, the NestJS backend signs a JWT payload containing your <strong>Account ID</strong>, <strong>Username</strong>, and <strong>Role</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
