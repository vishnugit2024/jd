"use client";
import React, { useState } from "react";
import "../../Pages/freelistingform/freelistingform.css";
import Link from "next/link";

const BusinessTiming = ({ setKey }) => {
  const [timing, setTiming] = useState([
    { day: "Monday", openTime: "", closeTime: "", isOpen: false },
    { day: "Tuesday", openTime: "", closeTime: "", isOpen: false },
    { day: "Wednesday", openTime: "", closeTime: "", isOpen: false },
    { day: "Thursday", openTime: "", closeTime: "", isOpen: false },
    { day: "Friday", openTime: "", closeTime: "", isOpen: false },
    { day: "Saturday", openTime: "", closeTime: "", isOpen: false },
    { day: "Sunday", openTime: "", closeTime: "", isOpen: false },
  ]);

  const [allDaysTime, setAllDaysTime] = useState({
    openTime: "",
    closeTime: "",
  });

  // Handle individual day selection
  const handleToggleOpen = (index) => {
    const updatedTiming = [...timing];
    updatedTiming[index].isOpen = !updatedTiming[index].isOpen;
    setTiming(updatedTiming);
  };

  // Handle single day time change
  const handleChange = (index, field, value) => {
    const updatedTiming = [...timing];
    updatedTiming[index][field] = value;
    setTiming(updatedTiming);
  };

  // Apply time to all selected days
  const applyAllDaysTime = () => {
    const updatedTiming = timing.map((item) => ({
      ...item,
      openTime: item.isOpen ? allDaysTime.openTime : item.openTime,
      closeTime: item.isOpen ? allDaysTime.closeTime : item.closeTime,
    }));
    setTiming(updatedTiming);
  };

  // Select All Days Checkbox
  const handleSelectAll = () => {
    const allSelected = timing.every((item) => item.isOpen);
    const updatedTiming = timing.map((item) => ({
      ...item,
      isOpen: !allSelected,
    }));
    setTiming(updatedTiming);
  };

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setKey("upgrade");
  };

  return (
    <form onSubmit={handleSubmit} className="business-timing-container">
      <h5 className="section-title">
        Select Business Days & Timing<sup>*</sup>
      </h5>

      {/* Select All Button */}
      <div className="select-all-container">
        <input
          type="checkbox"
          onChange={handleSelectAll}
          checked={timing.every((item) => item.isOpen)}
        />
        <label className="ms-2">Select All Days</label>
      </div>

      {/* Opening and Closing Time for All */}
      <div className="all-days-time">
        {/* Open Time */}
        <div className="time-selection-div">
          <label>Open Time</label>
          <input
            type="time"
            className="form-control"
            required
            value={allDaysTime.openTime}
            onChange={(e) =>
              setAllDaysTime({ ...allDaysTime, openTime: e.target.value })
            }
          />
        </div>

        {/* Close Time */}
        <div className="time-selection-div">
          <label>Close Time</label>
          <input
            type="time"
            className="form-control"
            value={allDaysTime.closeTime}
            required
            onChange={(e) =>
              setAllDaysTime({ ...allDaysTime, closeTime: e.target.value })
            }
          />
        </div>

        {/* Apply to All Button */}
        <button
          type="button"
          className="btn btn-outline-primary apply-time-btn"
          onClick={applyAllDaysTime}
        >
          Apply to All
        </button>
      </div>

      {/* Individual Days Selection */}
      {timing.map((item, index) => (
        <div className="timing-row" key={index}>
          <input
            type="checkbox"
            checked={item.isOpen}
            onChange={() => handleToggleOpen(index)}
          />
          <label className="day-label">{item.day}</label>
          {item.isOpen && (
            <>
              <input
                type="time"
                className="form-control time-input"
                value={item.openTime}
                onChange={(e) =>
                  handleChange(index, "openTime", e.target.value)
                }
                required
              />
              <input
                type="time"
                className="form-control time-input"
                value={item.closeTime}
                onChange={(e) =>
                  handleChange(index, "closeTime", e.target.value)
                }
                required
              />
            </>
          )}
        </div>
      ))}

      <button type="submit" className="btn btn-primary  w-100 py-3">
        Next
      </button>
    </form>
  );
};

export default BusinessTiming;
