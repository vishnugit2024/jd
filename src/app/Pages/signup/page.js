"use client";
import React, { useState } from "react";
import logo from "../../Images/logo.jpg";
import Image from "next/image";
import "../../Pages/login/login.css";
import Link from "next/link";
import Head from "next/head";

const Page = () => {
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
              <div className="login-welcome-image">
                <Image src={logo} alt="King Logo" />
              </div>
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

                <form>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="mb-3 login-input"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="login-input mb-3"
                  />
                  <div className="password-input mb-3 position-relative">
                    <input
                      type={showPassword.password ? "text" : "password"}
                      placeholder="Password"
                      className="login-input w-100"
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
                  <div className="password-input mb-3 position-relative">
                    <input
                      type={showPassword.confirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="login-input w-100"
                    />
                    <p
                      className="show-password-btn position-absolute"
                      style={{
                        top: "50%",
                        right: "15px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        togglePasswordVisibility("confirmPassword")
                      }
                    >
                      {showPassword.confirmPassword ? (
                        <i className="bi bi-eye"></i>
                      ) : (
                        <i className="bi bi-eye-slash"></i>
                      )}
                    </p>
                  </div>

                  <button className="login-btn w-100 mb-3">Get Started</button>

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
