import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  // FORM DATA
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // STATUS STATES
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SIGNUP
  const handleSubmit = async (e) => {
    e.preventDefault();

    // CLEAR OLD MESSAGES
    setError("");
    setSuccessMessage("");

    // VALIDATION
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password
    ) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      // CREATE FORMDATA
      const data = new FormData();

      data.append("username", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("password", formData.password);

      // SEND TO BACKEND
      const response = await axios.post(
        "https://ryacksonfungo.alwaysdata.net/api/signup",
        data
      );

      // SUCCESS
      if (response.data.success) {
        setSuccessMessage(
          "You have successfully signed up. Please login to your account."
        );

        // CLEAR FORM
        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
        });

        setLoading(false);

        // REDIRECT TO LOGIN
        setTimeout(() => {
          navigate("/Signin");
        }, 3000);

      } else {
        setError(
          response.data.message ||
          "Signup failed. Please try again."
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
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75))",
        padding: "20px",
      }}
    >
      {/* SIGNUP CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          background: "rgba(15, 23, 42, 0.75)",
          backdropFilter: "blur(14px)",
          borderRadius: "28px",
          padding: "40px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.45)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* HEADER */}
        <div className="text-center mb-4">
          <h1
            style={{
              color: "#ffffff",
              fontWeight: "700",
              marginBottom: "10px",
              fontSize: "38px",
            }}
          >
            Dream Palace
          </h1>

          <p
            style={{
              color: "#d4af37",
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Luxury Living Starts Here
          </p>
        </div>

        {/* SUCCESS MESSAGE */}
        {successMessage && (
          <div
            style={{
              background: "rgba(34,197,94,0.15)",
              color: "#4ade80",
              padding: "12px",
              borderRadius: "12px",
              marginBottom: "20px",
              textAlign: "center",
              fontSize: "14px",
              border: "1px solid rgba(74,222,128,0.3)",
            }}
          >
            {successMessage}
          </div>
        )}

        {/* ERROR MESSAGE */}
        {error && (
          <div
            style={{
              background: "rgba(239,68,68,0.15)",
              color: "#f87171",
              padding: "12px",
              borderRadius: "12px",
              marginBottom: "20px",
              textAlign: "center",
              fontSize: "14px",
              border: "1px solid rgba(248,113,113,0.3)",
            }}
          >
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit}>

          {/* FULL NAME */}
          <div className="mb-3">
            <label style={labelStyle}>
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
              style={inputStyle}
            />
          </div>

          {/* EMAIL */}
          <div className="mb-3">
            <label style={labelStyle}>
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
              style={inputStyle}
            />
          </div>

          {/* PHONE */}
          <div className="mb-3">
            <label style={labelStyle}>
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-control"
              style={inputStyle}
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <label style={labelStyle}>
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-control"
              style={inputStyle}
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              background:
                "linear-gradient(135deg, #d4af37, #f5d76e)",
              color: "#111",
              border: "none",
              padding: "15px",
              borderRadius: "50px",
              fontWeight: "700",
              fontSize: "15px",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "0.3s ease",
              boxShadow:
                "0 10px 25px rgba(212,175,55,0.35)",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>
        </form>

        {/* LOGIN LINK */}
        <p
          className="text-center mt-4"
          style={{
            color: "#cbd5e1",
            fontSize: "14px",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/Signin"
            style={{
              color: "#d4af37",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

// LABEL STYLE
const labelStyle = {
  color: "#ffffff",
  marginBottom: "8px",
  display: "block",
  fontSize: "14px",
};

// INPUT STYLE
const inputStyle = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "#fff",
  padding: "14px",
  borderRadius: "14px",
  fontSize: "14px",
};

export default Signup;