"use client";
import React, { useState } from 'react';
import './login.css';
import logo from '../../Images/logo.jpg';
import Image from 'next/image';
const AuthSection = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <>

      <div className="container py-3">
        <div className="row">
          <div className="col-md-6 p-0">
            <div className='login-welcome-content'>
              <div className='login-welcome-image'>
                <Image src={logo} alt="King Logo" />
              </div>
              <div className='login-welcome-text'>
                <h1>Welcome to Bizi<span style={{color:'var(--blue)'}}>ff</span>y</h1>
                <p>Biziffy is a platform that allows you to manage your tasks and projects in a simple way. It is a platform that allows you to manage your tasks and projects in a simple way.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="auth-section">
              <div className="auth-card">
                <div className="text-center mb-3">
                  <h4>{isRegister ? 'Register now' : 'Welcome Back!'}</h4>
                  <p>{isRegister ? 'Create an account to continue' : 'Sign in to continue'}</p>
                </div>

                <form>
                  {isRegister && (
                    <input type="text" placeholder="Full Name" className=" mb-3 login-input" />
                  )}
                  <input type="email" placeholder="Email" className="login-input mb-3" />
                  <input type="password" placeholder="Password" className="login-input mb-3" />

                  {isRegister && (
                    <input type="password" placeholder="Confirm Password" className="login-input mb-3" />
                  )}

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-decoration-none">Forgot Password?</a>
                  </div>

                  <button className="blue-btn w-100 mb-3">
                    {isRegister ? 'Get Started' : 'Login'}
                  </button>

                  <p className="text-center">
                    {isRegister ? 'Already have an account?' : 'Don’t have an account?'}{' '}
                    <span className="text-primary cursor-pointer" onClick={toggleForm}>
                      {isRegister ? 'Login' : 'Register'}
                    </span>
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

export default AuthSection;