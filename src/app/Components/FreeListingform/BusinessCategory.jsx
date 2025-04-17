"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Pages/freelistingform/freelistingform.css";

const BusinessCategory = ({ setKey }) => {
  const [category, setCategory] = useState([]);
  const [businessImages, setBusinessImages] = useState([]);
  const [about, setAbout] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [input, setInput] = useState("");
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const res = await axios.get(
          "https://6800d7ffb72e9cfaf728eac6.mockapi.io/areapincode"
        );
        const areaList = res.data.map((user) => `${user.area} ${user.pincode}`);
        setAreas(areaList);
      } catch (error) {
        console.error("Error fetching areas:", error);
      }
    };
    fetchAreas();
  }, []);

  const handleSelectChange = (e) => {
    const values = Array.from(e.target.selectedOptions, (o) => o.value);
    setCategory((prev) => [...new Set([...prev, ...values])]);
  };

  const handleImageChange = (e) => {
    const imageUrls = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setBusinessImages((prev) => [...prev, ...imageUrls]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      if (!keywords.includes(input.trim()))
        setKeywords([...keywords, input.trim()]);
      setInput("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setKey("timing");
  };

  const removeItem = (list, setList, item) =>
    setList(list.filter((el) => el !== item));
  const removeByIndex = (list, setList, index) =>
    setList(list.filter((_, i) => i !== index));

  // ======= Service Area search =========
  const [serviceArea, setServiceArea] = useState([]);
  const [serviceAreainput, setServiceAreaInput] = useState("");

  const handleSelect = (area) => {
    if (!serviceArea.includes(area)) {
      setServiceArea([...serviceArea, area]);
    }
    setServiceAreaInput("");
  };

  const removeServiceAreaItem = (itemToRemove) => {
    setServiceArea(serviceArea.filter((item) => item !== itemToRemove));
  };

  const filteredAreas = areas.filter(
    (area) =>
      area.toLowerCase().includes(serviceAreainput.toLowerCase()) &&
      !serviceArea.includes(area)
  );

  const categories = [
    "Construction",
    "Real Estate",
    "Education",
    "Retail",
    "Healthcare",
    "Technology",
    "Finance",
    "Hospitality",
    "Automotive",
    "Manufacturing",
  ];

  return (
    <form onSubmit={handleSubmit}>
      <h5 className="section-title">
        Select Business Category<sup>*</sup>
      </h5>

      {/* Category Selection */}
      <div className="mb-3">
        <label className="form-label">
          Select Business Category <sup>*</sup>
        </label>
        <select className="form-control" required>
          <option value="">Select Your Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Subcategory Selection */}
      <div className="mb-3">
        <label className="form-label">
          Select Business SubCategory <sup>*</sup>
        </label>
        <select className="form-control" required onChange={handleSelectChange}>
          <option value="">Select Your SubCategory</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <div className="mt-2">
          {category.map((cat) => (
            <span key={cat} className="badge bg-primary m-1 p-2">
              {cat}
              <button
                type="button"
                className="btn-close ms-2 bg-danger"
                onClick={() => removeItem(category, setCategory, cat)}
                aria-label="Remove"
              />
            </span>
          ))}
        </div>
      </div>

      {/* Services Input */}
      <div className="mb-3">
        <label className="form-label">
          Business Services<sup>*</sup>
        </label>
        <input
          type="text"
          value={input}
          className="form-control"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Business Services"
        />
        <div className="mt-2">
          {keywords.map((keyword, index) => (
            <span key={index} className="badge bg-primary m-1 p-2">
              {keyword}
              <button
                type="button"
                className="btn-close ms-2 bg-danger"
                onClick={() => removeByIndex(keywords, setKeywords, index)}
                aria-label="Remove"
              />
            </span>
          ))}
        </div>
      </div>

      {/* Area Selection */}
      <div className="mb-3 position-relative">
        <label className="form-label">
          Services Area/Pincode<sup>*</sup>
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Services Area/Pincode"
          value={serviceAreainput}
          onChange={(e) => setServiceAreaInput(e.target.value)}
        />
        {serviceAreainput && filteredAreas.length > 0 && (
          <ul className="list-group position-absolute z-3 w-100">
            {filteredAreas.map((area) => (
              <li
                key={area}
                className="list-group-item list-group-item-action"
                onClick={() => handleSelect(area)}
                style={{ cursor: "pointer" }}
              >
                {area}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-2">
          {serviceArea.map((serarea) => (
            <span key={serarea} className="badge bg-primary m-1 p-2">
              {serarea}
              <button
                type="button"
                className="btn-close ms-2 bg-danger"
                onClick={() => removeServiceAreaItem(serarea)}
                aria-label="Remove"
              />
            </span>
          ))}
        </div>
      </div>

      {/* About Section */}
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

      {/* Image Upload */}
      <div className="mb-3">
        <label className="form-label">
          Upload Business Photos <span className="text-danger">(Optional)</span>
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
              />
              <button
                type="button"
                className="btn-close position-absolute top-0 start-100 translate-middle bg-danger"
                onClick={() =>
                  removeByIndex(businessImages, setBusinessImages, index)
                }
                aria-label="Remove"
              />
            </div>
          ))}
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-100 py-3">
        Next
      </button>
    </form>
  );
};

export default BusinessCategory;
