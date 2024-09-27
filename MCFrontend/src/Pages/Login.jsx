import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate an API call with hardcoded credentials
    setTimeout(() => {
      setLoading(false);

      // Admin login credentials
      const adminEmail = "admin@example.com";
      const adminPassword = "adminpass";

      // User login credentials (example)
      const userEmail = "test@example.com";
      const userPassword = "password123";

      if (email === adminEmail && password === adminPassword) {
        alert("Admin Login Successful!");
        navigate("/admindash"); // Redirect to admin dashboard
      } else if (email === userEmail && password === userPassword) {
        alert("User Login Successful!");
        navigate("/home"); // Redirect to home page for users
      } else {
        setError("Invalid email or password. Please try again.");
      }
    }, 2000);
  };

  const handleAdminClick = (e) => {
    e.preventDefault();
    alert("Please contact the admin to create a new account."); // Show alert message
    window.location.href = "mailto:admin@example.com?subject=Request%20for%20New%20Account"; // Open default mail client with subject
  };

  return (
    <div className="container-fluid position-relative d-flex p-0" style={{ height: "100vh" }}>
      {/* Spinner Start */}
      {loading && (
        <div
          id="spinner"
          className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {/* Spinner End */}

      {/* Login Start */}
      <div className="container-fluid bg-dark d-flex justify-content-center align-items-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <div className="bg-white rounded p-4 p-sm-5 my-4 mx-3">
            <div className="d-flex flex-column align-items-center mb-3">
              <h3 className="text-danger fw-bold fs-1">Promco 2.0</h3>
              <h3 className="text-dark fw-normal fs-3 mt-2">Login</h3>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control bg-dark text-light"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="floatingInput" className="text-primary">
                  Email address
                </label>
              </div>

              <div className="form-floating mb-4 position-relative">
                <input
                  type={showPassword ? "text" : "password"} // Toggle between text and password
                  className="form-control bg-dark text-light"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="floatingPassword" className="text-primary">
                  Password
                </label>
                <span
                  className="position-absolute end-0 top-50 translate-middle-y me-3"
                  style={{ cursor: "pointer", color: "white" }} // White color for the icon
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle icon */}
                </span>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-dark py-3 w-100 mb-4"
                style={{ color: "white" }}
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </form>
            <p className="text-center mb-0 text-dark">
              Don't have an Account?{" "}
              <a href="" className="text-danger" onClick={handleAdminClick}>
                Admin
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Login End */}
    </div>
  );
};

export default Login;
