"use client";
import React, { useState } from "react";
import logo from "../../Images/logo.jpg";
import Image from "next/image";
import "../../Pages/login/login.css";
import Link from "next/link";
import Head from "next/head";

const Page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on change
  };

  const validate = () => {
    const newErrors = {};
    const { fullName, email, phone, password, confirmPassword } = formData;

    if (!fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      // handle successful submission here
    }
  };
  return (
    <>
      <Head>
        <title>Sign Up | Create Your Free Biziffy Account</title>
        <meta
          name="description"
          content="Create your free Biziffy account today! List your business, manage your profile, and start generating high-quality leads through local SEO and digital visibility."
        />
        <meta
          name="keywords"
          content="sign up, register, create account, business listing registration, join biziffy, free account, business lead generation, digital business profile, local SEO account, register business, biziffy membership, new user registration, sign up for leads, business visibility, profile creation, free listing, digital marketing account, grow online presence"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Sign Up | Biziffy" />
        <meta
          property="og:description"
          content="Register for a free Biziffy account and start listing your business to generate leads and grow online."
        />
        <meta property="og:url" content="https://biziffy.com/signup" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Biziffy" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sign Up | Biziffy" />
        <meta
          name="twitter:description"
          content="Join Biziffy to promote your business online and connect with potential customers through local SEO."
        />
        <meta name="twitter:creator" content="@biziffy" />
      </Head>

      <div className="container py-3">
        <div className="row align-items-center">
          <div className="col-md-6 p-0">
            <div className="login-welcome-content">
              {/* <div className="login-welcome-image">
                <Image src={logo} alt="King Logo" />
              </div> */}
              <div className="login-welcome-text">
                <h1>
                  Welcome to Bizi
                  <span style={{ color: "var(--blue)" }}>ff</span>y
                </h1>
                <p>
                  Biziffy is a platform that allows you to manage your tasks and
                  projects in a simple way.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="auth-section">
              <div className="auth-card">
                <div className="text-center mb-3">
                  <h4>Register Now</h4>
                  <p>Create an account to continue</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="mb-3 login-input"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && <p className="validation-text">{errors.fullName}</p>}

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="login-input mb-3"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="validation-text">{errors.email}</p>}

                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone No."
                    className="login-input mb-3"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className="validation-text">{errors.phone}</p>}

                  <div className="password-input mb-3 position-relative">
                    <input
                      type={showPassword.password ? "text" : "password"}
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
                      onClick={() => togglePasswordVisibility("password")}
                    >
                      {showPassword.password ? (
                        <i className="bi bi-eye"></i>
                      ) : (
                        <i className="bi bi-eye-slash"></i>
                      )}
                    </p>
                  </div>
                  {errors.password && <p className="validation-text">{errors.password}</p>}

                  <div className="password-input mb-3 position-relative">
                    <input
                      type={showPassword.confirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="login-input w-100"
                      value={formData.confirmPassword}
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
                      onClick={() => togglePasswordVisibility("confirmPassword")}
                    >
                      {showPassword.confirmPassword ? (
                        <i className="bi bi-eye"></i>
                      ) : (
                        <i className="bi bi-eye-slash"></i>
                      )}
                    </p>
                  </div>
                  {errors.confirmPassword && (
                    <p className="validation-text">{errors.confirmPassword}</p>
                  )}

                  <button className="login-btn bg-dark text-white border-0 w-100 mb-3">
                    Get Started
                  </button>

                  <p className="text-center">
                    Already have an account?{" "}
                    <Link href="../../Pages/login" className="text-primary">
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
