"use client";

import { useEffect, useState, useTransition } from "react";
import {
  fetchUsers,
  registerUser,
  loginUser,
  UserAccount,
  API_BASE_URL,
} from "@/lib/api";
import {
  UserPlus,
  Users,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Lock,
  User,
  Search,
  ExternalLink,
  ShieldCheck,
  LogIn,
  LogOut,
} from "lucide-react";

export default function AccountsPage() {
  const [users, setUsers] = useState<UserAccount[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [createSuccess, setCreateSuccess] = useState<string | null>(null);
  const [createError, setCreateError] = useState<string | null>(null);

  // Login states (optional testing)
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  const [loginMessage, setLoginMessage] = useState<string | null>(null);

  // Search filter
  const [searchQuery, setSearchQuery] = useState("");

  const loadAccounts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUsers();
      setUsers(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message || "Failed to load accounts from backend");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAccounts();
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("username");
      if (savedUser) setLoggedInUser(savedUser);
    }
  }, []);

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setCreateError("Please fill in both username and password.");
      return;
    }

    setSubmitting(true);
    setCreateError(null);
    setCreateSuccess(null);

    try {
      const created = await registerUser(username.trim(), password);
      setCreateSuccess(
        `Account #${created.id} created successfully for "${created.username}"!`,
      );
      setUsername("");
      setPassword("");
      // Reload accounts list
      await loadAccounts();
    } catch (err: any) {
      setCreateError(err.message || "Failed to create account.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginUsername.trim() || !loginPassword.trim()) {
      setLoginMessage("Please enter username and password.");
      return;
    }

    setLoggingIn(true);
    setLoginMessage(null);

    try {
      await loginUser(loginUsername.trim(), loginPassword);
      setLoggedInUser(loginUsername.trim());
      setLoginMessage(`Welcome back, ${loginUsername}! Logged in successfully.`);
      setLoginPassword("");
      await loadAccounts();
    } catch (err: any) {
      setLoginMessage(`Login failed: ${err.message}`);
    } finally {
      setLoggingIn(false);
    }
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("username");
    }
    setLoggedInUser(null);
    setLoginMessage("Logged out successfully.");
  };

  const filteredUsers = users.filter((u) => {
    const q = searchQuery.toLowerCase();
    return (
      u.username?.toLowerCase().includes(q) ||
      String(u.id).includes(q) ||
      u.role?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight flex items-center gap-2">
              <Users className="w-8 h-8 text-green-600" />
              Accounts & Users
            </h1>
            <p className="text-slate-600 mt-1">
              Create accounts and view all registered account IDs in your database.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200 self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>Live Backend:</span>
            <a
              href={API_BASE_URL}
              target="_blank"
              rel="noreferrer"
              className="font-mono underline flex items-center gap-1 hover:text-green-900"
            >
              backend-apje.onrender.com
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Create Account & Login (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Create Account Card */}
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-sm border border-green-100 p-6">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
              <div className="p-2 bg-green-100 rounded-lg text-green-700">
                <UserPlus className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-800">Create Account</h2>
                <p className="text-xs text-slate-500">
                  Register a new account into MySQL database
                </p>
              </div>
            </div>

            {createSuccess && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm flex items-start gap-2 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span>{createSuccess}</span>
              </div>
            )}

            {createError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-start gap-2 animate-in fade-in">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>{createError}</span>
              </div>
            )}

            <form onSubmit={handleCreateAccount} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Username
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username (e.g. wendy)"
                    required
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter secure password"
                    required
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-2.5 px-4 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-medium text-sm rounded-xl shadow-sm transition flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />
                    Create Account
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Quick Login Card */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-slate-200/80 p-6">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
                  <LogIn className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-800">
                    Test Sign In
                  </h2>
                  <p className="text-xs text-slate-500">
                    Verify account with JWT authentication
                  </p>
                </div>
              </div>

              {loggedInUser && (
                <button
                  onClick={handleLogout}
                  className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1 font-medium"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Log Out
                </button>
              )}
            </div>

            {loggedInUser ? (
              <div className="p-4 bg-green-50/70 border border-green-200 rounded-xl">
                <div className="flex items-center gap-2 text-green-800 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  Currently Authenticated
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Signed in as <span className="font-bold text-slate-800">{loggedInUser}</span>.
                  Your JWT access token is active.
                </p>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-3">
                {loginMessage && (
                  <p
                    className={`text-xs p-2 rounded-lg ${
                      loginMessage.includes("failed") || loginMessage.includes("Please")
                        ? "bg-red-50 text-red-600 border border-red-100"
                        : "bg-green-50 text-green-700 border border-green-100"
                    }`}
                  >
                    {loginMessage}
                  </p>
                )}
                <div>
                  <input
                    type="text"
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                    placeholder="Username"
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-400"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loggingIn}
                  className="w-full py-2 bg-slate-800 hover:bg-slate-900 text-white font-medium text-xs rounded-lg transition flex items-center justify-center gap-1.5"
                >
                  {loggingIn ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <LogIn className="w-3.5 h-3.5" />
                  )}
                  Sign In & Get Token
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: List of Account IDs (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-sm border border-green-100 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-700">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-slate-800">
                      Registered Accounts
                    </h2>
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      {users.length} {users.length === 1 ? "account" : "accounts"}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Showing list of account IDs, usernames, and roles
                  </p>
                </div>
              </div>

              <button
                onClick={loadAccounts}
                disabled={loading}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition disabled:opacity-50 self-start sm:self-auto"
              >
                <RefreshCw
                  className={`w-3.5 h-3.5 ${loading ? "animate-spin text-green-600" : ""}`}
                />
                Refresh List
              </button>
            </div>

            {/* Search Input */}
            <div className="mb-4 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by Account ID or Username..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-start gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Unable to load accounts</p>
                  <p className="text-xs mt-0.5 text-red-600">{error}</p>
                  <button
                    onClick={loadAccounts}
                    className="mt-2 text-xs font-semibold text-red-700 underline hover:text-red-800"
                  >
                    Click to try again
                  </button>
                </div>
              </div>
            )}

            {/* Loading State */}
            {loading && users.length === 0 ? (
              <div className="py-12 flex flex-col items-center justify-center text-slate-500">
                <RefreshCw className="w-8 h-8 text-green-500 animate-spin mb-2" />
                <p className="text-sm font-medium">Fetching accounts from database...</p>
                <p className="text-xs text-slate-400 mt-1">Connecting to {API_BASE_URL}</p>
              </div>
            ) : filteredUsers.length === 0 ? (
              <div className="py-12 text-center text-slate-500 border-2 border-dashed border-slate-200 rounded-xl">
                <Users className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <p className="font-medium text-slate-700">No accounts found</p>
                <p className="text-xs text-slate-400 mt-1">
                  {searchQuery
                    ? `No account matches "${searchQuery}"`
                    : "No accounts exist in the database yet. Create one on the left!"}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-600 text-xs uppercase tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Account ID</th>
                      <th className="px-4 py-3 font-semibold">Username</th>
                      <th className="px-4 py-3 font-semibold">Role</th>
                      <th className="px-4 py-3 font-semibold text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {filteredUsers.map((account) => (
                      <tr
                        key={account.id}
                        className="hover:bg-green-50/40 transition-colors"
                      >
                        {/* Account ID Badge */}
                        <td className="px-4 py-3.5 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-slate-100 text-slate-800 border border-slate-300/80 shadow-xs">
                            ID #{account.id}
                          </span>
                        </td>

                        {/* Username */}
                        <td className="px-4 py-3.5 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs uppercase">
                              {account.username?.[0] || "U"}
                            </div>
                            <span className="font-medium text-slate-800">
                              {account.username}
                            </span>
                          </div>
                        </td>

                        {/* Role */}
                        <td className="px-4 py-3.5 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                              account.role === "admin"
                                ? "bg-purple-100 text-purple-700 border border-purple-200"
                                : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                            }`}
                          >
                            {account.role || "user"}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="px-4 py-3.5 whitespace-nowrap text-right">
                          <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            Active
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
