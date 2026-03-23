import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

const BASE_URL = "https://lumenra.onrender.com/api/auth";
const LOGIN_URL = `${BASE_URL}/login`;
const REGISTER_URL = `${BASE_URL}/register`;
const FORGOT_PASSWORD_URL = `${BASE_URL}/forgot-password`;
const VERIFY_OTP_URL = `${BASE_URL}/verify-otp`;
const RESET_PASSWORD_URL = `${BASE_URL}/reset-password`;
const PERSONALITY_CHECK_URL = `${BASE_URL}/personality-check`;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("auth_token"));
  const [loading, setLoading] = useState(false);

  // Sync token with localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem("auth_token", token);
    } else {
      localStorage.removeItem("auth_token");
      setUser(null);
    }
  }, [token]);

  // ---------------- LOGIN ----------------
  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await fetch(LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      setToken(data.token);
      setUser(data.user);
      return { ok: true };
    } catch (err) {
      return { ok: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // ---------------- REGISTER ----------------
  const register = async (userData) => {
    setLoading(true);
    try {
      const res = await fetch(REGISTER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.message || "Registration failed");

      setToken(data.token);
      setUser(data.user);
      return { ok: true, data };
    } catch (err) {
      return { ok: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // ---------------- PERSONALITY CHECK ----------------
  const personalityCheck = async (personalityData) => {
    
    setLoading(true);
    try {
      const res = await fetch(PERSONALITY_CHECK_URL, {
        method: "POST",
        headers: { 
         "Content-Type": "application/json",
         ...(token && { Authorization: `Bearer ${token}` })
        },
        body: JSON.stringify(personalityData),
      });

      const data = await res.json();

      if (res.status === 401) {
        logout(); // Token likely expired
        throw new Error("Session expired. Please login again.");
      }

      if (!res.ok) throw new Error(data.message || "Personality check failed");

      return { ok: true, data };
    } catch (err) {
      return { ok: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // ---------------- FORGOT PASSWORD ----------------
  const forgotPassword = async (email) => {
    setLoading(true);
    try {
      const res = await fetch(`${FORGOT_PASSWORD_URL}?t=${Date.now()}`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Cache-Control": "no-cache"
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Request failed");

      return { ok: true, data };
    } catch (err) {
      return { ok: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // ---------------- VERIFY OTP ----------------
  const verifyOTP = async (email, otp) => {
    setLoading(true);
    try {
      const res = await fetch(VERIFY_OTP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Invalid OTP");

      return { ok: true };
    } catch (err) {
      return { ok: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // ---------------- RESET PASSWORD ----------------
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

      return { ok: true };
    } catch (err) {
      return { ok: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // ---------------- LOGOUT ----------------
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("auth_token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
        forgotPassword,
        verifyOTP,
        resetPassword,
        personalityCheck,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
