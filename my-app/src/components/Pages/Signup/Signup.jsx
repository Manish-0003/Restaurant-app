import React from "react";
import "./Signup.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { auth } from "../../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router";
import  {createUserWithEmailAndPassword} from "firebase/auth";

const Signup = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    setMsg("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMsg("Signup Successful! Congratulations!");
      navigate("/login");
    } catch (err) {
      setMsg("Signup Failed! Try another email.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <form className="signup-box" onSubmit={handleSignup}>
          <h2> Create an Account</h2>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Sign Up</button>
          <p className="message">{msg}</p>
          <p>
            Already have an account... ?
            <span className="link" onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
