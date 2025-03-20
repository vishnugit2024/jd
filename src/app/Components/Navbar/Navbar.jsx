"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../Images/logo.jpg";
import "./navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="logo" width={120} height={40} />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="search">
          <input type="search" placeholder="Enter a website, business, or keyword" />
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          {/* Categories with Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <p>Categories <i className="bi bi-chevron-compact-down"></i></p>
            {showDropdown && (
              <div className="dropdown-menu">
                <p className="dropdown-title">Categories <Link href="/categories">View all categories →</Link></p>
                <ul className="dropdown-list">
                  <li> Art & Design</li>
                  <li className="active"> Autos & Vehicles</li>
                  <li> Baby & Kids</li>
                </ul>
              </div>
            )}
          </li>

          <li><Link href="/resources"><p>Resources</p></Link></li>
          <li><Link href="/about"><p>About Us</p></Link></li>
        </ul>

        {/* Login Section */}
        <div className="login-sec">
          <ul>
            <li><Link href="/business"><p>For Business</p></Link></li>
            <li><Link href="/review"><p>Write a Review</p></Link></li>
            <li><button className="blue-btn">Log in</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
