export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://backend-apje.onrender.com";

export interface UserAccount {
  id: number;
  username: string;
  role: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken?: string;
  user?: UserAccount;
}

export interface UserProfile {
  userId: number;
  username: string;
  role: string;
}

export async function fetchUsers(): Promise<UserAccount[]> {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
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
    throw new Error(
      errorData.message || `Failed to fetch accounts (status: ${res.status})`,
    );
  }

  return res.json();
}

export async function registerUser(
  username: string,
  password: string,
): Promise<UserAccount> {
  const res = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
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
): Promise<AuthResponse> {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || errorData.error || "Login failed");
  }

  const data: AuthResponse = await res.json();
  if ((data as any).error) {
    throw new Error((data as any).error);
  }

  if (typeof window !== "undefined" && data.accessToken) {
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("username", username);
    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
    }
  }

  return data;
}

export async function getProfile(): Promise<UserProfile> {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  if (!token) {
    throw new Error("No authentication token found. Please sign in.");
  }

  const res = await fetch(`${API_BASE_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "Session expired or invalid token");
  }

  return res.json();
}

export function logoutUser(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    localStorage.removeItem("user");
  }
}
