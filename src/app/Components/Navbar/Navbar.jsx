"use client";
import React, { useRef, useEffect, useState } from "react";
import "./navbar.css";
import Link from "next/link";
import logo from "../../Images/logo.jpg";
import Image from "next/image";
const Header = () => {
  const navbarCollapseRef = useRef(null);

  useEffect(() => {
    const handleDropdownClose = (event) => {
      if (
        navbarCollapseRef.current &&
        !navbarCollapseRef.current.contains(event.target)
      ) {
        const bsCollapse = new window.bootstrap.Collapse(
          navbarCollapseRef.current,
          {
            toggle: false,
          }
        );
        bsCollapse.hide();
      }
    };

    document.addEventListener("click", handleDropdownClose);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleDropdownClose);
    };
  }, []);

  const handleDropdownClick = (event) => {
    event.stopPropagation(); // Prevents the click event from closing the dropdown immediately
  };

  const [services, setServices] = useState(false);
  const [webdesign, setWebdesign] = useState(false);

  const handleMouseEnter = () => {
    setServices(true);
  };

  const handleRemoveSetService = () => {
    setServices(false);
  };

  const WebDesignhandleMouseEnter = () => {
    setWebdesign(true);
  };

  const handleRemovesetWebdesign = () => {
    setWebdesign(false);
  };

  const categories = [
    { name: "Art & Design", link: "/bulk-sms-promotion" },
    { name: "Digital Marketing", link: "/digital-marketing" },
    { name: "Web Development", link: "/web-development" },
    { name: "Graphic Design", link: "/graphic-design" },
    { name: "Content Writing", link: "/content-writing" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            ref={navbarCollapseRef}
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <input type="text" className="form-control me-2" placeholder="Enter a website, business, or keyword" />

              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="/about"
                  onClick={() => {
                    if (navbarCollapseRef.current) {
                      new window.bootstrap.Collapse(navbarCollapseRef.current, {
                        toggle: false,
                      }).hide();
                    }
                  }}
                >
                  About Us
                </Link>
              </li>
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleRemoveSetService}
                className={`nav-item webdesign ${services ? "active" : ""}`}
              >
                <Link className="nav-link" href="#" onClick={handleDropdownClick}>
                  Category <i className="bi bi-chevron-down"></i>
                </Link>
                <div className="dropMain">
                  <div className="container py-2">
                    <div className="row">
                      <p><b>Categories</b></p>
                      {categories.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-3 col-sm-4 col-4">
                          <div className="service">
                            <Link
                              href={service.link}
                              onClick={() => {
                                if (navbarCollapseRef.current) {
                                  new window.bootstrap.Collapse(navbarCollapseRef.current, {
                                    toggle: false,
                                  }).hide();
                                }
                                handleRemoveSetService();
                              }}
                            >
                              {/* <img src={service.image} alt={service.name} /> */}
                              <br />
                              <h6>{service.name}</h6>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="/dlt"
                  onClick={() => {
                    if (navbarCollapseRef.current) {
                      new window.bootstrap.Collapse(navbarCollapseRef.current, {
                        toggle: false,
                      }).hide();
                    }
                  }}
                >
                  Resources
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="/contact-us"
                  onClick={() => {
                    if (navbarCollapseRef.current) {
                      new window.bootstrap.Collapse(navbarCollapseRef.current, {
                        toggle: false,
                      }).hide();
                    }
                  }}
                >
                  About Us
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              {/* Buttons */}
              <Link href="#" className="register-btn me-2">Register</Link>
              <Link href="#" className="login-btn">Login</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
