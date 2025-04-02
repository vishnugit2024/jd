"use client";
import React, { useState } from "react";
import "../../Pages/freelistingform/freelistingform.css";
import Link from "next/link";

const BusinessCategory = () => {
  const [category, setCategory] = useState([]);
  const [businessImages, setBusinessImages] = useState([]);
  const [services, setServices] = useState("");
  const [about, setAbout] = useState("");
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
  });

  const handleSelectChange = (e) => {
    const selectedValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setCategory((prevCategories) => [
      ...new Set([...prevCategories, ...selectedValues]),
    ]);
  };

  const removeCategory = (categoryToRemove) => {
    setCategory(category.filter((cat) => cat !== categoryToRemove));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setBusinessImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  const removeImage = (index) => {
    setBusinessImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSocialLinkChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prevLinks) => ({ ...prevLinks, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      category,
      services,
      about,
      socialLinks,
      businessImages,
    };
    console.log("Submitted Data:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">
          Select Business Category <sup>*</sup>
        </label>
        <select className="form-control" required onChange={handleSelectChange}>
          <option value="">Select Your Category</option>
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
        <div className="mt-2">
          {category.map((cat) => (
            <span key={cat} className="badge bg-primary m-1 p-2">
              {cat}
              <button
                type="button"
                className="btn-close ms-2 bg-danger"
                onClick={() => removeCategory(cat)}
                aria-label="Remove"
              ></button>
            </span>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Services Provide <sup>*</sup>
        </label>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Services You Provide"
          value={services}
          onChange={(e) => setServices(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          About Your Business <sup>*</sup>
        </label>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Write about your business..."
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Social Media Links <span style={{ color: "red" }}>(Optional)</span>
        </label>
        {Object.keys(socialLinks).map((platform) => (
          <input
            key={platform}
            type="url"
            className="form-control mb-2"
            name={platform}
            placeholder={`${
              platform.charAt(0).toUpperCase() + platform.slice(1)
            } Profile Link`}
            value={socialLinks[platform]}
            onChange={handleSocialLinkChange}
          />
        ))}
      </div>

      <div className="mb-3">
        <label className="form-label">
          Upload Business Photos{" "}
          <span style={{ color: "red" }}>(Optional)</span>
        </label>
        <input
          type="file"
          className="form-control"
          multiple
          accept="image/*"
          onChange={handleImageChange}
        />
        <div className="image-preview-container mt-2">
          {businessImages.map((img, index) => (
            <div
              key={index}
              className="image-preview d-inline-block position-relative me-2"
            >
              <img
                src={img}
                alt={`Preview ${index}`}
                className="img-thumbnail"
                style={{ width: "100px", height: "100px" }}
              />
              <button
                type="button"
                className="btn-close position-absolute top-0 start-100 translate-middle bg-danger"
                onClick={() => removeImage(index)}
                aria-label="Remove"
              ></button>
            </div>
          ))}
        </div>
      </div>
<Link href="/Pages/freelistingform/freelistingformsuccess">
<button type="submit" className="btn btn-success w-100">
        Submit
      </button>
</Link>
    
    </form>
  );
};

export default BusinessCategory;
