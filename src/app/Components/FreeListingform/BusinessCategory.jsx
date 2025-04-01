"use client";
import React, { useState } from "react";
import "../../Pages/freelistingform/freelistingform.css";

const BusinessCategory = ({ setKey }) => {
  const [category, setCategory] = useState("");
  const [businessImages, setBusinessImages] = useState([]);

  // Handle multiple image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setBusinessImages((prevImages) => [...prevImages, ...newImages]);
  };

  // Remove an image from preview
  const removeImage = (index) => {
    setBusinessImages(businessImages.filter((_, i) => i !== index));
  };

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setKey("success");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">
          Select Business Category <sup>*</sup>
        </label>
        <select
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select a Category</option>
          <option value="Construction">Construction</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Education">Education</option>
          <option value="Retail">Retail</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Technology">Technology</option>
          <option value="Finance">Finance</option>
          <option value="Hospitality">Hospitality</option>
          <option value="Automotive">Automotive</option>
          <option value="Manufacturing">Manufacturing</option>
        </select>
      </div>

      {/* Multiple Image Upload */}
      <div className="mb-3">
        <label className="form-label">
          Upload Business Photos<span style={{ color: "red" }}>(Optional)</span>
        </label>
        <input
          type="file"
          className="form-control"
          multiple
          accept="image/*"
          onChange={handleImageChange}
        />

        {/* Image Previews */}
        <div className="image-preview-container">
          {businessImages.map((img, index) => (
            <div key={index} className="image-preview">
              <img src={img} alt={`Preview ${index}`} />
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeImage(index)}
              >
                ✖
              </button>
            </div>
          ))}
        </div>
      </div>

      <button type="submit" className="btn btn-success w-100">
        Submit
      </button>
    </form>
  );
};

export default BusinessCategory;
