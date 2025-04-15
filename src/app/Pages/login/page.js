/* Login.js */
"use client";
import React, { useState } from "react";
import "./login.css";
import Link from "next/link";
import Head from "next/head";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" }); // clear error on change
  };

  const validate = () => {
    const newErrors = {};
    const { email, password } = formData;

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Sign-in data:", formData);
      // handle login logic here
    }
  };

  return (
    <>
      <Head>
        <title>User Login | Access Your Biziffy Account</title>
        <meta
          name="description"
          content="Securely log in to your Biziffy account to manage your business listing, update details, track leads, and more."
        />
        <meta
          name="keywords"
          content="Biziffy login, user login, business account login, access business profile, manage listing, login to dashboard, user dashboard, Biziffy user panel, client login, account access, edit business info, lead tracking login, secure login, business owner login, free business listing account, local SEO login, manage Biziffy account, login to manage leads, verify listing, login form Biziffy"
        />

        {/* Open Graph (for Facebook and social previews) */}
        <meta
          property="og:title"
          content="User Login | Biziffy Business Panel"
        />
        <meta
          property="og:description"
          content="Log in to your Biziffy business account and take control of your online presence. Update info, check performance, and more."
        />
        <meta property="og:url" content="https://biziffy.com/login" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Biziffy" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Login to Biziffy | Manage Your Business Online"
        />
        <meta
          name="twitter:description"
          content="Sign in to Biziffy and keep your business listing up-to-date. Track leads and get noticed by local customers."
        />
        <meta name="twitter:creator" content="@biziffy" />
      </Head>
      <section className="login-section">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-md-6 p-0">
              <div className="login-welcome-content  d-flex flex-column justify-content-center align-items-center h-100 px-4 position-relative login-welcome-bg">

                {/* Optional Floating Icon/Illustration */}
                <div className="login-welcome-icon">
                  <i className="bi bi-briefcase-fill fs-1  glow-icon"></i>
                </div>

                <div className="login-welcome-text text-center">
                <h1 className="display-5 fw-bold mb-3">
                  Welcome Back to Bizi<span style={{color:'var(--blue)'}}>ff</span>y
                </h1>
                  <p className="lead mb-2">
                    Manage your work like a pro — <br /> login to access your dashboard, tasks, and tools.
                  </p>
                  <p className="small fst-italic">
                    Trusted by hundreds of service providers. Be part of the future.
                  </p>
                </div>

                {/* Optional: Animated Background or glow effects */}
                <div className="animated-bg-gradient"></div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="auth-section">
                <div className="auth-card">
                  <div className="text-center mb-3">
                    <h4>Welcome Back!</h4>
                    <p>Sign in to continue</p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="login-input mb-3"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="text-danger">{errors.email}</p>}

                    <div className="password-input mb-3 position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="login-input w-100"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <p
                        className="show-password-btn position-absolute"
                        style={{
                          top: "50%",
                          right: "15px",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <i className="bi bi-eye"></i>
                        ) : (
                          <i className="bi bi-eye-slash"></i>
                        )}
                      </p>
                    </div>
                    {errors.password && <p className="text-danger">{errors.password}</p>}

                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="rememberMe"
                          name="remember"
                          checked={formData.remember}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                          Remember me
                        </label>
                      </div>
                      <Link
                        href="../../Pages/forgot-password"
                        className="text-decoration-none"
                      >
                        Forgot Password?
                      </Link>
                    </div>

                    <button type="submit" className="login-btn bg-primary text-white w-100">
                      Login
                    </button>

                    <p className="text-center">
                      Don’t have an account?{" "}
                      <Link href="../../Pages/signup" className="text-primary">
                        Register
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
