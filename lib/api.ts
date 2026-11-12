export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://backend-apje.onrender.com";

export interface UserAccount {
  id: number;
  username: string;
  role: string;
}

export async function fetchUsers(): Promise<UserAccount[]> {
  const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  const headers: Record<string, string> = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE_URL}/users`, {
    headers,
    cache: "no-store",
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || `Failed to fetch accounts (status: ${res.status})`);
  }

  return res.json();
}

export async function registerUser(username: string, password: string): Promise<UserAccount> {
  const res = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "Registration failed");
  }

  return res.json();
}

export async function loginUser(
  username: string,
  password: string,
): Promise<{ accessToken: string; refreshToken?: string }> {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || errorData.error || "Login failed");
  }

  const data = await res.json();
  if (data.error) {
    throw new Error(data.error);
  }

  if (typeof window !== "undefined" && data.accessToken) {
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("username", username);
  }

  return data;
}
