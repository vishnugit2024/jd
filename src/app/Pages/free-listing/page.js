"use client";
import React from "react";
import "./freeListing.css";
import { motion } from "framer-motion";
import ListingImage from "../../Images/Listing.jpg";
import Image from "next/image";
import Link from "next/link";
import paidlisting from "../../Images/paidlisting.jpg";
import Visibility from "../../Images/Visibility.jpg";
import Credibility from "../../Images/Credibility.jpg";
import Access from "../../Images/Access.jpg";
import EffectiveMarketing from "../../Images/EffectiveMarketing.jpg";

const page = () => {
  // ====== Card ================
  const cardData = [
    {
      title: "Increased Visibility",
      description:
        "Listing a business online enhances its visibility by making it accessible to a larger audience. Being present in search engine results and online directories allows the business to be discovered by more potential customers, both locally and pan India, ensuring 24/7 accessibility and increasing the chances of attracting new clients.",
      image: Visibility,
    },
    {
      title: "Cost-Effective Marketing",
      description:
        "Bizzify provide a cost-effective marketing strategy, allowing businesses to reach a broad audience without incurring advertising costs. By leveraging the platform's reach and SEO benefits, businesses can maximize their exposure and achieve a high return on investment, all while staying within budget.",
      image: EffectiveMarketing,
    },
    {
      title: "Easy Access",
      description:
        "Online listings at Bizzify make it easy for potential customers to find businesses through search engines and directories. With intuitive navigation and mobile-friendly designs, customers can quickly access business details, contact information, and services, enhancing convenience and user experience.",
      image: Access,
    },
    {
      title: "Enhanced Credibility",
      description:
        "Being listed on Bizzify boosts your business's credibility and trustworthiness. Your Business can gain confidence through verified information and reviews, leading to increased trust and a positive perception. This credibility encourages potential customers to choose the business over competitors.",
      image: Credibility,
    },
  ];

  // ============ Paid Listing Planes =====================

  const pricingPlans = [
    {
      name: "Basic Plan",
      price: "₹2,999/year",
      features: [
        "Featured Business Listing",
        "Business Description & Contact Details",
        "5 Product/Service Listings",
        "Social Media Links",
        "Inquiry Form Integration",
      ],
    },
    {
      name: "Standard Plan",
      price: "₹5,999/year",
      features: [
        "All Basic Plan Features",
        "10 Product/Service Listings",
        "Google Map Integration",
        "Business Logo & Cover Image",
        "Priority Search Ranking",
      ],
    },
    {
      name: "Premium Plan",
      price: "₹9,999/year",
      features: [
        "All Standard Plan Features",
        "20 Product/Service Listings",
        "Photo & Video Gallery",
        "Customer Reviews & Ratings",
        "Featured in Category Page",
      ],
    },
    {
      name: "Ultimate Plan",
      price: "₹14,999/year",
      features: [
        "All Premium Plan Features",
        "30 Product/Service Listings",
        "Dedicated Business Page",
        "SEO-Optimized Content",
        "Social Media Promotions",
      ],
    },
  ];

  // ======== Free Listing Process ===================

  const steps = [
    {
      id: 1,
      icon: "bi-person",
      title: "Simple Registration",
      description:
        "Businesses can sign up quickly using just their mobile number, bypassing lengthy forms and complicated procedures. This streamlined process allows them to join the platform and start listing their services in just a few clicks, making it fast and easy to get started.",
    },
    {
      id: 2,
      icon: "bi-pie-chart",
      title: "Profile Creation",
      description:
        "After registration, businesses can quickly create a detailed profile by providing essential information such as name, address, contact details, and business category. This user-friendly process ensures that the profile accurately represents the business, helping potential customers find the information they need.",
    },
    {
      id: 3,
      icon: "bi-images",
      title: "Visual Showcase",
      description:
        "Businesses can enhance their listings by uploading photos and videos, which are essential for showcasing products and services visually. High-quality images and engaging videos help attract more attention and give potential customers a better understanding of what the business offers, helping them stand out from competitors.",
    },
    {
      id: 4,
      icon: "bi-arrow-repeat",
      title: "Instant Updates",
      description:
        "Businesses can update their listings anytime to keep information accurate and relevant. This feature allows them to adjust contact details, addresses, or services as needed, ensuring their listings reflect the latest developments and promotions, thereby maintaining customer trust and engagement.",
    },
  ];
  return (
    <>
      <section className="some-page-hero-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="some-page-hero-content">
                {/* Animated Heading */}
                <motion.h1
                  className="some-page-hero-title"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  Connecting{" "}
                  <span style={{ color: "var(--blue)" }}>smart buyers</span> and
                  trustworthy businesses
                </motion.h1>

                {/* Animated Subtitle */}
                <motion.p
                  className="some-page-hero-subtitle"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
                >
                  <b>
                    Bizi<span style={{ color: "var(--blue)" }}>ff</span>y
                  </b>{" "}
                  is a Bulk Advertisement & Business Listing services Platform.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="biziffy-listing-image-div">
                <Image
                  src={ListingImage}
                  alt="Biziffy listing us"
                  className="biziffy-listing-image"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="biziffy-listing-content">
                <h1 className="biziffy-listing-title">
                  Get YOUR{" "}
                  <span style={{ color: "var(--blue)" }}>BUSINESS LISTED</span>{" "}
                  FOR FREE
                </h1>
                <motion.p
                  className="biziffy-listing-text"
                  initial={{ opacity: 0, x: -50 }} // Slide in from the right
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }} // Delay to make it smoother
                  viewport={{ once: true, amount: 0.2 }}
                >
                  Reach thousands of potential customers at no cost.
                </motion.p>
                <motion.p
                  className="biziffy-listing-text"
                  initial={{ opacity: 0, y: 50 }} // Slide in from the right
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }} // Delay to make it smoother
                  viewport={{ once: true, amount: 0.2 }}
                >
                  At Biziffy&lsquo; we offer businesses a simple and effective
                  way to connect with thousands of potential customers. Our
                  platform is designed to help you reach your target audience
                  and grow your business. Whether you are a small business or a
                  large corporation&lsquo; Biziffy can help you expand your
                  reach and attract more customers. With our easy-to-use
                  platform&lsquo; you can list your business&lsquo; showcase
                  your services&lsquo; and connect with potential customers.
                  Whether you choose our free listing option or upgrade to a
                  premium paid listing&lsquo; we make it easy for you to
                  showcase your business. our free listing allow you to create a
                  detailed profile&lsquo; showcase your services&lsquo; upload
                  photos and videos&lsquo; and reach a broad audience at no
                  cost. For those looking to boost visibility and access
                  additional features&lsquo; our paid listing provide top
                  placement&lsquo; enhanced profile options&lsquo; and exclusive
                  promotional opportunities.
                </motion.p>

                <Link href="/Pages/contact-us">
                  <button className="login-btn">Start Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="free-listing-sec-heading">
              <h1 className="free-listing-sec-title">
                Benefits OF{" "}
                <span style={{ color: "var(--blue)" }}> Online </span> Listing
              </h1>
            </div>

            {cardData.map((data, index) => (
              <div key={index} className="col-md-3 col-sm-4 py-4 mb-3">
                <div className="listing-business-card shadow-sm">
                  <div className="listing-card-img-top">
                    <Image src={data.image} alt={data.title} />
                  </div>
                  <div className="listing-card-body">
                    <h5 className="listing-card-title">{data.title}</h5>
                    <p className="listing-card-text text-dark">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Paidlisting my-4">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="biziffy-listing-image-div">
                <Image
                  src={paidlisting}
                  alt="Biziffy listing us"
                  className="biziffy-listing-image"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="biziffy-listing-content">
                <h1 className="biziffy-listing-title mt-1">
                  paid listing features at Bizi
                  <span style={{ color: "var(--blue)" }}>ff</span>y
                </h1>

                <motion.p
                  className="biziffy-listing-text"
                  initial={{ opacity: 0, y: 50 }} // Slide in from the right
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }} // Delay to make it smoother
                  viewport={{ once: true, amount: 0.2 }}
                >
                  Upgrade to a paid listing to enhance your business visibiliy
                  and attract more customers. With a paid listing&lsquo; you
                  will enjoy top placement in search results&lsquo; additional
                  features for your profile&lsquo; priority support&lsquo;
                  advaned analytics&lsquo; and exclusive promotional
                  opportunitie. Take advantage of these benefits to make your
                  business stand out. Upgrade now to get started.
                </motion.p>

                <ul className="biziffy-listing-ul">
                  <li>
                    <span>
                      <i className="bi bi-arrow-bar-right"></i>
                    </span>{" "}
                    Get featured at the top of search results.
                  </li>

                  <li>
                    <span>
                      <i className="bi bi-arrow-bar-right"></i>
                    </span>{" "}
                    include more photos&lsquo; and videos&lsquo; and detailed
                    information.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-arrow-bar-right"></i>
                    </span>{" "}
                    Receive faster and dedicated customers support.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-arrow-bar-right"></i>
                    </span>{" "}
                    Access detailed insights on customers interactions.
                  </li>
                  <li>
                    <span>
                      <i className="bi bi-arrow-bar-right"></i>
                    </span>{" "}
                    Benefit from special advertising opportunities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="free-listing-sec-heading">
              <h1 className="free-listing-sec-title">
                Premium <span style={{ color: "var(--blue)" }}> Business </span>{" "}
                Listing Packages
              </h1>
            </div>
            <div className="custom-table-wrapper">
              <table className="table table-bordered text-center shadow-lg">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Plan</th>
                    <th>Price</th>
                    <th>Features</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingPlans.map((plan, index) => (
                    <tr key={index} className="table-light">
                      <td className="fw-bold ">{plan.name}</td>
                      <td className="fw-bold text-primary">{plan.price}</td>
                      <td>
                        <ul className="list-unstyled text-start">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="mb-1">
                              ✅ {feature}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="alert alert-info text-center mt-4 fw-bold col-md-6">
              📢 Special Offer: Get 10% OFF on annual renewals!
            </div>
            <div className="alert alert-success text-center mt-4 fw-bold col-md-6">
              Ready to Grow Your Business? 🚀
            </div>
            <Link href="/Pages/login" className="text-decoration-none">
              <div className="alert alert-primary text-center mt-1 fw-bold">
                👉 Sign Up Now & Get Listed!
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <div className="container">
          <div className="row">
            <div className="free-listing-sec-heading">
              <h1 className="free-listing-sec-title">
                How To Do Free Listing at Bizi
                <span style={{ color: "var(--blue)" }}>ff</span>y.
              </h1>
            </div>

            <div className="listing-timeline">
            {steps.map((step, index) => (
              <div key={step.id} className={`step ${index % 2 === 0 ? "left" : "right"}`}>
                <div className="listing-step-icon">
                  <i className={`bi ${step.icon}`}></i>
                </div>
                <div className="listing-step-content">
                  <h3 className="listing-step-title">{step.title}</h3>
                  <p className="listing-step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
