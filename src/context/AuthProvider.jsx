// src/context/AuthProvider.jsx
import React, { useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const LOGIN_URL = "https://lumenra.onrender.com/api/auth/login";
const FORGOT_PASSWORD_URL = "https://lumenra.onrender.com/api/auth/forgot-password";
const RESET_PASSWORD_URL = "https://lumenra.onrender.com/api/auth/reset-password";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("auth_token"));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      localStorage.setItem("auth_token", token);
    } else {
      localStorage.removeItem("auth_token");
      setUser(null);
    }
  }, [token]);

  const forgotPassword = async (email) => {
    setLoading(true);
    try {
      const res = await fetch(FORGOT_PASSWORD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send reset link");
      return { ok: true, data };
    } catch (err) {
      return { ok: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email, otp, newPassword) => {
    setLoading(true);
    try {
      const res = await fetch(RESET_PASSWORD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to reset password");
      return { ok: true, data };
    } catch (err) {
      return { ok: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, logout, forgotPassword, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
}