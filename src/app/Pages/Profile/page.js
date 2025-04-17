"use client";
import React, { useState } from "react";
import profileImage from "../../Images/gourav.jpg";
import Image from "next/image";
import Link from "next/link";
import "./profile.css";
import EditProfile from "./edit-profile/page";
import AllEnquiry from "./all-enquiry/page";
import { toast, ToastContainer } from "react-toastify";
import Head from "next/head";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const userProfile = {
    name: "Maria Fernanda",
    userType: "Premium User",
    plans: "Premium",
    email: "gouravpanchal80107@gmail.com",
    mobile: "9131904943",
    address: "Digi India Solution, Rohini Sector 24",
    city: "Rampura",
    state: "Bhagalpura",
    planDetail: [
      "Featured Business Listing",
      "Business Description & Contact Details",
      "5 Product/Service Listings",
      "Social Media Links",
      "Inquiry Form Integration",
    ],
  };

  const [listings, setListings] = useState([
    {
      id: 1,
      title: "Awesome Cafe",
      address: "Bawana Delhi 110039",
      image: profileImage,
    },
  ]);
  const handleDelete = (id) => {
    toast.info(
      <div>
        <p>Are you sure you want to delete this listing?</p>
        <button
          onClick={() => confirmDelete(id)}
          className="btn btn-danger me-2"
        >
          Yes
        </button>
        <button onClick={toast.dismiss} className="btn btn-secondary">
          No
        </button>
      </div>,
      {
        width: 300,
        position: "top-center",
        autoClose: false, // Prevent auto-close
        closeOnClick: false,
        draggable: false,
      }
    );
  };

  const confirmDelete = (id) => {
    setListings((prevListings) =>
      prevListings.filter((listing) => listing.id !== id)
    );
    toast.dismiss(); // Close the toast after clicking Yes
    toast.success("Listing deleted successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <>
      <Head>
        <title>User Profile | Manage Business & Personal Info - Biziffy</title>
        <meta
          name="description"
          content="Manage your personal and business information with your Biziffy profile. Edit bio data, contact info, and business details to keep your profile updated."
        />
        <meta
          name="keywords"
          content="user profile, manage profile, edit business info, update biodata, personal details, business account, profile settings, biziffy account, update contact info, profile management, business profile, edit profile, company details, user dashboard, update email, change password, account preferences, business identity"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="User Profile | Biziffy" />
        <meta
          property="og:description"
          content="Access your Biziffy profile to manage your business and personal information. Keep your data up-to-date for better visibility and lead generation."
        />
        <meta property="og:url" content="https://biziffy.com/profile" />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Biziffy" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="User Profile | Biziffy" />
        <meta
          name="twitter:description"
          content="Log in to your Biziffy profile and manage your personal and business info with ease."
        />
        <meta name="twitter:creator" content="@biziffy" />
      </Head>

      <section className="profile-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 p-0">
              <div className="sidebar">
                <div className="d-grid justify-content-center text-center">
                  <Image
                    src={profileImage}
                    alt="Profile"
                    className="profile-img"
                  />
                  <h3 className="text-white">{userProfile.name}</h3>
                  <p className="text-warning m-0">{userProfile.userType}</p>
                </div>
                <hr className="text-white" />
                <div className="sidebar-button-main">
                  <button
                    className={`sidebar-tab ${
                      activeTab === "overview" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("overview")}
                  >
                    <i className="bi bi-person-circle"></i> Contact Info
                  </button>
                  <button
                    className={`sidebar-tab ${
                      activeTab === "edit" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("edit")}
                  >
                    <i className="bi bi-pencil-square"></i> Edit Profile
                  </button>
                  <button
                    className={`sidebar-tab ${
                      activeTab === "all-enquiry" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("all-enquiry")}
                  >
                    <i className="bi bi-info-circle"></i> All Enquiry
                  </button>

                  <button
                    className={`sidebar-tab ${
                      activeTab === "listing" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("listing")}
                  >
                    <i className="bi bi-list-task"></i> Listing
                  </button>
                  <button
                    className={`sidebar-tab ${
                      activeTab === "plan" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("plan")}
                  >
                    <i className="bi bi-pentagon-half"></i> My Plan
                  </button>
                  <button
                    className={`sidebar-tab ${
                      activeTab === "plan" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("plan")}
                  >
                    <i className="bi bi-patch-question"></i> Support
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-9 py-3 fix-scroll-height">
            {activeTab === "overview" && (
                <div className="profile-overview card border-0 rounded-4">
                  <div className="d-flex align-items-center">
                    <div className="profile-overview-main avatar bg-dark text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                      {userProfile.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="mb-1 text-dark fw-bold">
                        {userProfile.name}
                      </h5>
                      <p className="text-muted m-0">{userProfile.email}</p>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center p-3 bg-light rounded">
                        <i className="bi bi-phone fs-4 text-primary me-3"></i>
                        <div>
                          <small className="text-muted">Mobile</small>
                          <p className="fw-semibold mb-0">
                            {userProfile.mobile}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="d-flex align-items-center p-3 bg-light rounded">
                        <i className="bi bi-geo-alt fs-4 text-danger me-3"></i>
                        <div>
                          <small className="text-muted">Address</small>
                          <p className="fw-semibold mb-0">
                            {userProfile.address}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="d-flex align-items-center p-3 bg-light rounded">
                        <i className="bi bi-buildings fs-4 text-info me-3"></i>
                        <div>
                          <small className="text-muted">City</small>
                          <p className="fw-semibold mb-0">{userProfile.city}</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="d-flex align-items-center p-3 bg-light rounded">
                        <i className="bi bi-map fs-4 text-success me-3"></i>
                        <div>
                          <small className="text-muted">State</small>
                          <p className="fw-semibold mb-0">
                            {userProfile.state}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "edit" && (
                <div className="profile-edit">
                  <h3>Edit Profile</h3>
                  <p>Update your profile details below:</p>
                  <hr />

                  <form>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={userProfile.name}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue={userProfile.email}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Mobile</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={userProfile.mobile}
                      />
                    </div>
                    <button className="btn btn-primary">Save Changes</button>
                  </form>
                </div>
              )}

              {activeTab === "plan" && (
                <div className="profile-plan-table">
                  <h3>My Plan</h3>
                  <hr />

                  <div className="d-flex justify-content-between align-items-center">
                    <h1 className="text-primary">Premium Plan</h1>
                    <h3 className="text-warning">₹2999</h3>
                  </div>
                  <div>
                    <h5>Plan Details:</h5>
                    <ul className="plan-list">
                      {userProfile.planDetail.map((item, index) => (
                        <li key={index}>
                          <i className="bi bi-check-circle text-success"></i>{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="m-0">Plan Status:</h5>
                    <p className="text-success m-0">
                      Active <i className="bi bi-check-circle"></i>
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "listing" && (
                <div className="profile-plan-table">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>My Listing</h3>
                  </div>
                  <hr />
                  <ToastContainer />
                  {listings.length > 0 ? (
                    listings.map((listing) => (
                      <div className="profile-listing" key={listing.id}>
                        <div className="row listing-item">
                          <div className="col-md-3">
                            <Image
                              src={listing.image}
                              alt={listing.title}
                              className="listing-img"
                              width={150}
                              height={150}
                            />
                          </div>
                          <div className="col-md-9">
                            <h4 className="text-primary">{listing.title}</h4>
                            <p className="text-success">{listing.address}</p>
                            <Link
                              href="/Pages/free-listing#paidlisting"
                              className="login-btn me-2"
                            >
                              Advertise Now
                            </Link>
                            <button
                              href="/Pages/Profile/edit-profile"
                              className={`black-btn ${
                                activeTab === "edit-business" ? "active" : ""
                              }`}
                              onClick={() => setActiveTab("edit-business")}
                            >
                              Edit Business
                            </button>

                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(listing.id)}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="no-listing">
                      You have no listings. Please go to the listing page.
                    </p>
                  )}
                </div>
              )}

              {activeTab === "edit-business" && (
                <>
                  <EditProfile />
                </>
              )}
              {activeTab === "all-enquiry" && (
                <>
                  <AllEnquiry />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
