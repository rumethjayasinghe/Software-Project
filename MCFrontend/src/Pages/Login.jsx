import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate an API call with hardcoded credentials
    setTimeout(() => {
      setLoading(false);
      if (email === "test@example.com" && password === "password123") {
        alert("Login Successful!");
        navigate("/home");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    }, 2000);
  };

  return (
    <div className="container-fluid position-relative d-flex p-0">
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
      <div className="container-fluid bg-dark">
        <div
          className="row h-100 align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div className="bg-white rounded p-4 p-sm-5 my-4 mx-3">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <h3 className="text-danger fw-bold">Promco 2.0</h3>
                <h3 className="text-dark fw-normal ms-2">Login</h3>
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
                  <label htmlFor="floatingInput" className="text-light">
                    Email address
                  </label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control bg-dark text-light"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="floatingPassword" className="text-light">
                    Password
                  </label>
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
                <a href="/admin" className="text-danger">
                  Admin
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Login End */}
    </div>
  );
};

export default Login;