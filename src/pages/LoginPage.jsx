import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";
import "../styles/Auth.css";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Login-க்கு முன்பு சென்றுகொண்டிருந்த page
  const from = location.state?.from || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("Login successful:", userCredential.user);

      alert("Login Successful! Welcome to StyleCart ❤️");

      // Login ஆனதும் முன்பு சென்ற page-க்கு திரும்பும்
      navigate(from, { replace: true });

    } catch (error) {
      console.error("Login Error:", error.code);

      if (error.code === "auth/invalid-credential") {
        setError("Invalid email or password!");
      } else if (error.code === "auth/user-not-found") {
        setError("Account not found. Please Sign Up.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password!");
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError(error.message);
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h2 className="auth-logo">🛍️ StyleCart</h2>

        <h1>Welcome Back!</h1>

        <p className="auth-subtitle">
          Login to your account and continue shopping.
        </p>

        <form onSubmit={handleLogin}>

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p style={{ color: "red" }}>{error}</p>
          )}

          <button
            type="submit"
            className="auth-btn"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login →"}
          </button>

        </form>

        <p className="auth-bottom">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>

        <button
          className="back-home"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

      </div>
    </div>
  );
}

export default LoginPage;