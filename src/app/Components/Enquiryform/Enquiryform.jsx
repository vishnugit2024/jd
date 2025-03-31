"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import './enquiryform.css'
import "../../Pages/contact-us/contactus.css"
const Enquiryform = () => {
    const [show, setShow] = useState(false);

    // Check if form was already submitted
    useEffect(() => {
        const isSubmitted = localStorage.getItem("contactFormSubmitted");
        if (!isSubmitted) {
            const timer = setTimeout(() => setShow(true), 5000); // Auto-open after 3 seconds
            return () => clearTimeout(timer);
        }
    }, []);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("contactFormSubmitted", "true");
        setShow(false);
        alert("Thank you for contacting us!");
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: show ? 1 : 0, y: show ? 0 : -50 }}
                transition={{ duration: 0.5 }}
                className={`modal fade ${show ? "show d-block" : ""}`}
                tabIndex="-1"
                style={{ backgroundColor: show ? "rgba(0,0,0,0.5)" : "transparent" }}
            >
                <div className="modal-dialog">
                    <div className="modal-content costom-modal-content">
                        <div className="modal-header">
                            <div>
                                <h5 className="modal-title">Enquiry Form</h5>
                                <p className="m-0">Fill this form and get chance to increase your business.</p>
                            </div>
                            <button
                                type="button"
                                className="btn-close-modal"
                                onClick={() => setShow(false)}
                            >
                                <i className="bi bi-x-octagon"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-input"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <textarea
                                        className="form-input"
                                        rows="4"
                                        placeholder="Write your message"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Enquiryform
