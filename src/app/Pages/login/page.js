/* Login.js */
"use client";
import React, { useState } from 'react';
import './login.css';
import logo from '../../Images/logo.jpg';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container py-3">
      <div className="row align-items-center">
        <div className="col-md-6 p-0">
          <div className='login-welcome-content'>
            <div className='login-welcome-image'>
              <Image src={logo} alt="King Logo" />
            </div>
            <div className='login-welcome-text'>
              <h1>Welcome to Bizi<span style={{color:'var(--blue)'}}>ff</span>y</h1>
              <p>Biziffy is a platform that allows you to manage your tasks and projects in a simple way.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="auth-section">
            <div className="auth-card">
              <div className="text-center mb-3">
                <h4>Welcome Back!</h4>
                <p>Sign in to continue</p>
              </div>

              <form>
                <input type="email" placeholder="Email" className="login-input mb-3" />

                <div className="password-input mb-3 position-relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="login-input w-100"
                  />
                  <p
                    className="show-password-btn position-absolute"
                    style={{ top: '50%', right: '15px', transform: 'translateY(-50%)' , cursor:'pointer'}}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ?  <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i> }
                    </p>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <Link href="../../Pages/forgot-password" className="text-decoration-none">Forgot Password?</Link>
                </div>

                <button className="login-btn w-100">Login</button>

                <p className="text-center">
                  Don’t have an account? <Link href="../../Pages/signup" className="text-primary">Register</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;