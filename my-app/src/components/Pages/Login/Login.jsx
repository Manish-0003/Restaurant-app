import React from "react";
import "./Login.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useState } from "react";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth,googleProvider } from "../../../firebase";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h2>Login to Account</h2>

          {error && <p className="error-msg">{error}</p>}

          <input
            type="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Enter Your Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>

          <div className="divider">OR</div>

          <button className="google-btn" onClick={handleGoogleLogin}>
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
            />
            Login with Google
          </button>

          <p className="signup-link">
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")}>Signup</span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
