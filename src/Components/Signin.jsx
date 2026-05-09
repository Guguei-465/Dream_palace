import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {

  // FORM STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // STATUS STATES
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // NAVIGATION
  const navigate = useNavigate();

  // SIGNIN FUNCTION
  const handleSignin = async (e) => {

    e.preventDefault();

    // CLEAR OLD MESSAGES
    setError("");
    setSuccess("");

    // VALIDATION
    if (!email || !password) {

      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {

      // FORM DATA
      const formData = new FormData();

      formData.append("email", email);
      formData.append("password", password);

      // API REQUEST
      const response = await axios.post(
        "https://ryacksonfungo.alwaysdata.net/api/signin",
        formData
      );

      // SUCCESS LOGIN
      if (response.data.user) {

        setSuccess(
          "Login successful. Redirecting..."
        );

        // SAVE USER
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        setLoading(false);

        // REDIRECT
        setTimeout(() => {

          navigate("/GetProduct");

        }, 2000);

      } else {

        setError(
          response.data.message ||
          "Invalid credentials."
        );

        setLoading(false);
      }

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Something went wrong. Please try again."
      );

      setLoading(false);
    }
  };

  return (

    <div className="signin-page">

      {/* LOGIN CARD */}
      <div className="signin-card">

        {/* HEADER */}
        <div className="text-center mb-4">

          <h1 className="signin-title">
            Welcome Back
          </h1>

          <p className="signin-subtitle">
            Sign in to continue
          </p>

        </div>

        {/* SUCCESS */}
        {success && (
          <div className="signin-success">
            {success}
          </div>
        )}

        {/* ERROR */}
        {error && (
          <div className="signin-error">
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSignin}>

          {/* EMAIL */}
          <div className="mb-3">

            <label className="signin-label">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="form-control signin-input"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>

          {/* PASSWORD */}
          <div className="mb-4">

            <label className="signin-label">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="form-control signin-input"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="signin-btn"
          >
            {loading
              ? "Signing In..."
              : "Sign In"}
          </button>

        </form>

        {/* SIGNUP LINK */}
        <p className="signin-footer">

          Don’t have an account?{" "}

          <Link
            to="/Signup"
            className="signin-link"
          >
            Create One
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Signin;