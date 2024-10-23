import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Updated user database with new users
const userDatabase = {
  "admin@example.com": { name: "John Doe", email: "admin@example.com", role: "admin" },
  "operator@example.com": { name: "Sam Peter", email: "operator@example.com", role: "operator" },
  "newadmin@example.com": { name: "Jane Smith", email: "newadmin@example.com", role: "admin" },
  "operator2@example.com": { name: "Emily Brown", email: "operator2@example.com", role: "operator" },
  "operator3@example.com": { name: "Michael Johnson", email: "operator3@example.com", role: "operator" },
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

      // Password validation for each user
      const validPassword = (email === "admin@example.com" && password === "adminpass") ||
                            (email === "operator@example.com" && password === "operatorpass") ||
                            (email === "newadmin@example.com" && password === "newadminpass") ||
                            (email === "operator2@example.com" && password === "operator2pass") ||
                            (email === "operator3@example.com" && password === "operator3pass");

      if (user && validPassword) {
        localStorage.setItem("user", JSON.stringify(user)); // Store user data in local storage
        alert(`${user.name} Login Successful!`);
        navigate("/home"); // Redirect to home page for all users
      } else {
        setError("Invalid email or password. Please try again.");
      }
    }, 2000);
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

      {/* Left Image Section */}
      <div className="container-fluid bg-white d-flex justify-content-center align-items-center position-relative">
        <a href="https://www.midassafety.com/" target="_blank" rel="noopener noreferrer" style={{ position: "absolute", top: "20px", left: "20px" }}>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJnqPdRz9GHb1ul3JuAkOy3q8JyesfaWBMw&s" 
            alt="Logo" 
            style={{ width: "80px", height: "80px" }} 
          />
        </a>
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <div className="bg-gray-100 rounded p-4 p-sm-5 my-4 mx-3 border border-dark"> {/* Added border class */}
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
