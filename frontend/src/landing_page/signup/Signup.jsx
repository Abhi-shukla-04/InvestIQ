import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5174/signup",
        user
      );

      alert(res.data.message || "Account Created Successfully!");
    } catch (err) {
      console.log(err);
      alert("Signup Failed");
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">

        {/* Left Side */}

        <div className="col-lg-6 d-flex justify-content-center align-items-center bg-light">
          <img
            src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=900"
            alt="signup"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
          />
        </div>

        {/* Right Side */}

        <div className="col-lg-6 d-flex justify-content-center align-items-center">

          <div
            className="card shadow p-5"
            style={{ width: "430px", borderRadius: "20px" }}
          >

            <h2 className="mb-2">Create Account</h2>

            <p className="text-muted mb-4">
              Open your free InvestIQ account
            </p>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Mobile Number"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                className="btn btn-primary w-100"
                type="submit"
              >
                Create Account
              </button>

            </form>

            <hr />

            <p className="text-center mb-0">
              Already have an account?
              <Link
                to="/login"
                className="text-decoration-none ms-2"
              >
                Login
              </Link>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Signup;