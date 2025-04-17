"use client";
import React, { useState } from "react";
import "../../Pages/freelistingform/freelistingform.css";

const ContactPerson = ({ setKey }) => {
  const [formData, setFormData] = useState({
    title: "Mr",
    firstName: "",
    lastName: "",
    contactNumber: "",
    alternateNumbers: [],
    whatsappNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const addAlternateNumber = () => {
  //   if (formData.alternateNumbers.length < 3) {
  //     setFormData({
  //       ...formData,
  //       alternateNumbers: [...formData.alternateNumbers, ""],
  //     });
  //   }
  // };

  // const handleAlternateNumberChange = (index, value) => {
  //   const updatedNumbers = [...formData.alternateNumbers];
  //   updatedNumbers[index] = value;
  //   setFormData({ ...formData, alternateNumbers: updatedNumbers });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setKey("business");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5 className="section-title">
        Fill Your Contact Details<sup>*</sup>
      </h5>

      <div className="mb-3">
        <label className="form-label">
          Title<sup>*</sup>
        </label>
        <select className="form-control" name="title" onChange={handleChange}>
          <option>Mr</option>
          <option>Ms</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">
          First Name<sup>*</sup>
        </label>
        <input
          type="text"
          className="form-control"
          name="firstName"
          onChange={handleChange}
          // required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Last Name<sup>*</sup>
        </label>
        <input
          type="text"
          className="form-control"
          name="lastName"
          onChange={handleChange}
          // required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Contact Number<sup>*</sup>
        </label>
        <input
          type="tel"
          className="form-control"
          name="contactNumber"
          onChange={handleChange}
          // required
        />
      </div>

      {/* {formData.alternateNumbers.map((num, index) => (
        <div className="mb-3" key={index}>
          <input
            type="tel"
            className="form-control"
            placeholder="Alternative number"
            value={num}
            onChange={(e) => handleAlternateNumberChange(index, e.target.value)}
          />
        </div>
      ))}

      <button
        type="button"
        className="btn btn-secondary mb-3"
        onClick={addAlternateNumber}
        disabled={formData.alternateNumbers.length >= 3}
      >
        Add Another Number
      </button> */}

      <div className="mb-3">
        <label className="form-label">
          WhatsApp Number<sup>*</sup>
        </label>
        <input
          type="tel"
          // required
          className="form-control"
          name="whatsappNumber"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Email<sup>*</sup>
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          onChange={handleChange}
          // required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100 py-3">
        Next
      </button>
    </form>
  );
};

export default ContactPerson;
