import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const userDatabase = {
  "test@example.com": { name: "Rashmi Rathnayaka", email: "test@example.com" },
  "admin@example.com": { name: "Admin User", email: "admin@example.com" },
  // Add more users as needed
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate an API call with hardcoded credentials
    setTimeout(() => {
      setLoading(false);

      const user = userDatabase[email];

      // Here you can implement your actual password checking logic
      const validPassword = (email === "admin@example.com" && password === "adminpass") ||
                            (email === "test@example.com" && password === "password123");

      if (user && validPassword) {
        localStorage.setItem("user", JSON.stringify(user)); // Store user data in local storage
        alert(`${user.name} Login Successful!`);
        navigate("/home"); // Redirect to home page for users
      } else {
        setError("Invalid email or password. Please try again.");
      }
    }, 2000);
  };

  const handleAdminClick = (e) => {
    e.preventDefault();
    alert("Please contact the admin to create a new account.");
    window.location.href = "mailto:admin@example.com?subject=Request%20for%20New%20Account";
  };

  return (
    <div className="container-fluid position-relative d-flex p-0" style={{ height: "100vh" }}>
      {loading && (
        <div id="spinner" className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
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
                <label htmlFor="floatingInput" className="text-primary">Email address</label>
              </div>

              <div className="form-floating mb-4 position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control bg-dark text-light"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="floatingPassword" className="text-primary">Password</label>
                <span
                  className="position-absolute end-0 top-50 translate-middle-y me-3"
                  style={{ cursor: "pointer", color: "white" }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {error && <div className="alert alert-danger" role="alert">{error}</div>}

              <button type="submit" className="btn btn-dark py-3 w-100 mb-4" style={{ color: "white" }} disabled={loading}>
                {loading ? "Loading..." : "Login"}
              </button>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
