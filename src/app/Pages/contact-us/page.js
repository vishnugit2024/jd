"use client"
import React, { useState } from 'react';
import './contactus.css';
import Head from 'next/head';
import contactImage from "../../Images/contact-man.png";
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';

const Page = () => {
    const [captchaVerified, setCaptchaVerified] = useState(false);

    const handleCaptchaChange = (value) => {
        console.log("Captcha Value:", value);
        if (value) {
            setCaptchaVerified(true);
        } else {
            setCaptchaVerified(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaVerified) {
            alert("Please verify that you are not a robot.");
            return;
        }
        alert("Form submitted successfully!");
    };

    return (
        <>
            <Head>
                <title>Contact Us | Biziffy</title>
                <meta name="description" content="Get in touch with Biziffy for inquiries, support, or more information." />
                <meta name="keywords" content="Biziffy, Contact, Support, Inquiry" />
            </Head>
            <div className="contact-us-container">
                <div className="contact-us-wrapper">
                    <h1 className="contact-us-title">Contact <span style={{ color: "var(--blue)" }}> Us</span></h1>
                    <div className="contact-us-row">
                        <div className="contact-us-info">
                            <h4>Get in Touch</h4>
                            <p>Have questions? We&apos;re here to help. Reach out to us using the form or the details below.</p>
                            <ul className="contact-details">
                                <li><strong>Email:</strong> support@biziffy.com</li>
                                <li><strong>Phone:</strong> +91 97296 06097</li>
                                <li><strong>Address:</strong> Biziffy Internet Marketing Pvt. Ltd. Address: SCO-93,3rd Floor, Sector-7, Karnal, Haryana, Zip Code 132002.</li>
                            </ul>
                            <div className='contact-image'>
                                <Image src={contactImage} alt="Contact Us" />
                            </div>
                        </div>
                        <div className="contact-us-form-container">
                            <h4>Send Us a Message</h4>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-input" placeholder="Your Full Name" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email Address</label>
                                    <input type="email" className="form-input" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Phone Number</label>
                                    <input type="tel" className="form-input" placeholder="Your Phone Number" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">City</label>
                                    <select className="form-select" required>
                                        <option value="">Select City</option>
                                        <option value="">Delhi</option>
                                    </select>
                                </div>
                                {/* <div className="form-group">
                                    <label className="form-label">Business Name</label>
                                    <input type="text" className="form-input" placeholder="Your Business Name" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Subject</label>
                                    <input type="text" className="form-input" placeholder="Subject" />
                                </div> */}
                                <div className="form-group">
                                    <label className="form-label">Type of Inquiry</label>
                                    <select className="form-select" required>
                                        <option value="">Select Inquiry Type</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="advertising">Advertising</option>
                                        <option value="support">Support</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label><input type="checkbox" required /> I agree to the Terms &amp; Conditions and Privacy Policy</label>
                                </div>

                                <div className="form-group">
                                    <ReCAPTCHA
                                        sitekey="https://www.mediaman.in/"
                                        onChange={handleCaptchaChange}
                                    />
                                </div>

                                <div className="form-submit">
                                    <button type="submit" className="submit-button" disabled={!captchaVerified}>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
