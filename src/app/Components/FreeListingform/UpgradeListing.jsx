"use client";
import React, { useState } from "react";
import "../../Pages/freelistingform/freelistingform.css";
import Link from "next/link";

const UpgradeListing = () => {
  const [formData, setFormData] = useState({
    direction: "",
    website: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="business-timing-container">
      <h5 className="section-title">Switch to Upgrade</h5>
      <p>
        <b>Exclusive Offer:</b> Upgrade to Premium now and enjoy priority
        ranking, verified trust, and more business leads!
      </p>

      {/* Google Map URL */}
      <div className="mb-3">
        <label className="form-label">Google Map URL</label>
        <input
          type="url"
          className="form-control"
          name="direction"
          value={formData.direction}
          onChange={handleChange}
        />
      </div>

      {/* Business Website URL */}
      <div className="mb-3">
        <label className="form-label">Business Website URL</label>
        <input
          type="url"
          className="form-control"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      {/* Social Media Links */}
      <div className="mb-3">
        <label className="form-label">
          Social Media Links <span style={{ color: "red" }}>(Optional)</span>
        </label>
        {["facebook", "instagram", "linkedin", "twitter"].map((platform) => (
          <input
            key={platform}
            type="url"
            className="form-control mb-2"
            name={platform}
            placeholder={`${
              platform.charAt(0).toUpperCase() + platform.slice(1)
            } Profile Link`}
            value={formData[platform]}
            onChange={handleChange}
          />
        ))}
      </div>

      <button type="submit" className="btn btn-warning w-100 fw-bold py-3">
        Switch to Upgrade
      </button>

      {/* Submit Without Upgrade */}
      <div className="mt-2">
        <Link href="/Pages/freelistingform/freelistingformsuccess" passHref>
          <button type="button" className="btn btn-success w-100 py-2">
            Submit without Upgrade
          </button>
        </Link>
      </div>
    </form>
  );
};

export default UpgradeListing;
