// src/context/AuthProvider.jsx
import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

// ✅ Correct API URLs
const LOGIN_URL = "https://lumenra.onrender.com/api/auth/login";
const REGISTER_URL = "https://lumenra.onrender.com/api/auth/register";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("auth_token"));
  const [loading, setLoading] = useState(false);

  // Persist token in localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem("auth_token", token);
    } else {
      localStorage.removeItem("auth_token");
      setUser(null);
    }
  }, [token]);

  // Login function
  const login = async (email, password) => {
    setLoading(true);
    try {
      console.log("Logging in with:", { email, password });

      const res = await fetch(LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Login response:", data);

      // Backend may return code 403 in JSON even with HTTP 200
      if (data.code && data.code !== 200) {
        throw new Error(data.message || "Login failed");
      }

      if (!res.ok) throw new Error(data?.message || "Login failed");

      if (data.token) setToken(data.token);
      if (data.user) setUser(data.user);

      return { ok: true, data };
    } catch (err) {
      console.error("Login error:", err.message);
      return { ok: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (fullName, email, password) => {
    setLoading(true);
    try {
      console.log("Registering with:", { fullName, email, password });

      const res = await fetch(REGISTER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await res.json();
      console.log("Register response:", data);

      // Handle backend error codes
      if (data.code && data.code !== 200) {
        throw new Error(data.message || "Registration failed");
      }

      if (!res.ok) throw new Error(data?.message || "Registration failed");

      return { ok: true, data };
    } catch (err) {
      console.error("Register error:", err.message);
      return { ok: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}