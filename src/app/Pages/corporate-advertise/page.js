"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CoprateAdvertise.css";
import Link from "next/link";
import Automobile from "../../Images/Automobile.jpg";
import Education from "../../Images/Education.jpg";
import Healthcare from "../../Images/Healthcare.jpg";
import Retail from "../../Images/LocalShops.webp";
import Estate from "../../Images/RealEstate.jpg";
import HomeServices from "../../Images/HomeServices.png";
import coprateAdvertise from "../../Images/CoprateAdversite.jpg";
import wideaudince from "../../Images/WideReach.jpg";
import costeffective from "../../Images/CostEffective.jpg";
import customize from "../../Images/CustomizePlanes.jpg";
import target from "../../Images/TargetAduince.jpg";
import moveintime from "../../Images/MoveInTime.jpg";
import Heading from "@/app/Components/Heading/SecHeading";
import HowItWorks from "@/app/Components/RoadMap/RoadMap";

function page() {
  const cards = [
    { id: 1, title: "Automobile ", image: Automobile, link: "/Automobile" },
    { id: 2, title: "Education ", image: Education, link: "/Education" },
    { id: 3, title: "Healthcare ", image: Healthcare, link: "/Healthcare" },
    { id: 4, title: "Retail & Local Shops", image: Retail, link: "/Retail" },
    { id: 5, title: "Real Estate ", image: Estate, link: "/Estate" },
    {
      id: 6,
      title: "coprate Services",
      image: HomeServices,
      link: "/HomeServices",
    },
  ];

  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <section className="coprate-page-hero-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="coprate-page-hero-content">
                <h1 className="coprate-page-hero-title">
                  Are you{" "}
                  <span style={{ color: "var(--blue)" }}>
                    looking to expand
                  </span>{" "}
                  business reach ?
                </h1>
                <p className="coprate-page-hero-subtitle">
                  <b>
                    Bizi<span style={{ color: "var(--blue)" }}>ff</span>y
                  </b>{" "}
                  offers Bulk Advertisement & Business Listing services.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="biziffy-coprate-image-div">
                <Image
                  src={coprateAdvertise}
                  alt="Biziffy coprate us"
                  className="biziffy-coprate-image"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="biziffy-coprate-content">
                <h1 className="biziffy-coprate-title">
                  We are a Bizi<span style={{ color: "var(--blue)" }}>ff</span>y
                  that offers Bulk Business Listing & Bulk Advertising Benefits.
                </h1>
                <p className="biziffy-coprate-text">
                  Looking for a way to grow your business and attract more
                  customers? Biziffy provides Bulk Advertisement & Business
                  Listing services that help you reach a wider audience&lsquo;
                  improve visibility&lsquo; and establish credibility in your
                  industry. Whether you're a startup or an established
                  business&lsquo; our platform ensures that your brand gets the
                  recognition it deserves.
                </p>
                <p className="biziffy-coprate-text">
                  In a competitive market&lsquo; having a strong online presence
                  is key to success. Biziffy&apos;s Bulk Business Listing
                  services allow you to feature your business on multiple
                  high-traffic directories&lsquo; search engines&lsquo; and
                  listing platforms. This ensures that potential customers can
                  easily find you when searching for relevant services. With
                  consistent and accurate business information&lsquo; your brand
                  becomes more discoverable&lsquo; leading to increased
                  inquiries and higher conversion rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="coprate-page-count-content">
                <h1 className="coprate-page-count-title">
                  Why Choose Bizi
                  <span style={{ color: "var(--blue)" }}>ff</span>y.com for Bulk
                  Advertising?
                </h1>
              </div>
              <div className="row coprate-why-choose-us-data align-items-center">
                <div className="col-md-4">
                  <div className="coprate-why-choose-div">
                    <Image
                      src={wideaudince}
                      alt="Corporate Image"
                      className="coprate-why-choose-img"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="coprate-why-choose-img-data">
                    <h5>1. Wider Audience Reach</h5>
                    <h4>
                      <i className="bi bi-graph-up-arrow"></i> Expand Your
                      Visibility
                    </h4>
                    <p>Showcase your brand across multiple Biziffy pages.</p>

                    <h4>
                      <i className="bi bi-people"></i> Reach More Customers
                    </h4>
                    <p>Get noticed by a larger audience on Biziffy.</p>

                    <h4>
                      <i className="bi bi-megaphone"></i> Boost Your Brand
                    </h4>
                    <p>Feature your business on high-traffic Biziffy pages.</p>

                    <h4>
                      <i className="bi bi-eye"></i> Maximize Exposure
                    </h4>
                    <p>Promote your brand on Biziffy diverse platform.</p>
                  </div>
                </div>
              </div>
              <div className="row coprate-why-choose-us-data align-items-center">
                <div className="col-md-8">
                  <div className="coprate-why-choose-img-data">
                    <h5>2. Cost-Effective Solutions</h5>
                    <h4>
                      <i className="bi bi-cash-stack"></i> Budget-Friendly
                      Promotion
                    </h4>
                    <p>Market your business without breaking the bank.</p>

                    <h4>
                      <i className="bi bi-graph-up"></i> High ROI Advertising
                    </h4>
                    <p>Maximize your reach while keeping costs low.</p>

                    <h4>
                      <i className="bi bi-megaphone"></i> Cost-Effective
                      Marketing
                    </h4>
                    <p>Affordable solutions tailored to your business needs.</p>

                    <h4>
                      <i className="bi bi-globe2"></i> Wide Visibility, Low Cost
                    </h4>
                    <p>Expand your audience without overspending.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="coprate-why-choose-div">
                    <Image
                      src={costeffective}
                      alt="Corporate Image"
                      className="coprate-why-choose-img"
                    />
                  </div>
                </div>
              </div>
              <div className="row coprate-why-choose-us-data align-items-center">
                <div className="col-md-4">
                  <div className="coprate-why-choose-div">
                    <Image
                      src={customize}
                      alt="Corporate Image"
                      className="coprate-why-choose-img"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="coprate-why-choose-img-data">
                    <h5>3. Customizable Packages</h5>

                    <h4>
                      <i className="bi bi-sliders"></i> Flexible Plans
                    </h4>
                    <p>Choose a package that fits your budget and goals.</p>

                    <h4>
                      <i className="bi bi-gear-wide-connected"></i> Tailored
                      Solutions
                    </h4>
                    <p>Customize your listing based on your business needs.</p>

                    <h4>
                      <i className="bi bi-briefcase"></i> Business-Friendly
                      Options
                    </h4>
                    <p>
                      Get a package designed to enhance your brand visibility.
                    </p>

                    <h4>
                      <i className="bi bi-stars"></i> Premium & Standard Plans
                    </h4>
                    <p>
                      Select from various plans to suit your advertising goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row coprate-why-choose-us-data align-items-center">
                <div className="col-md-8">
                  <div className="coprate-why-choose-img-data">
                    <h5>4. Targeted Marketing</h5>
                    <h4>
                      <i className="bi bi-geo-alt"></i> Location-Based Reach
                    </h4>
                    <p>Connect with customers in specific regions or cities.</p>

                    <h4>
                      <i className="bi bi-people"></i> Interest-Based Targeting
                    </h4>
                    <p>
                      Engage audiences who are interested in your products or
                      services.
                    </p>

                    <h4>
                      <i className="bi bi-bar-chart"></i> Demographic Focus
                    </h4>
                    <p>
                      Promote your business to the right age, gender, and
                      audience groups.
                    </p>

                    <h4>
                      <i className="bi bi-bullseye"></i> Smart Advertising
                    </h4>
                    <p>
                      Use data-driven strategies to attract potential customers.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="coprate-why-choose-div">
                    <Image
                      src={target}
                      alt="Corporate Image"
                      className="coprate-why-choose-img"
                    />
                  </div>
                </div>
              </div>
              <div className="row coprate-why-choose-us-data align-items-center">
                <div className="col-md-4">
                  <div className="coprate-why-choose-div">
                    <Image
                      src={moveintime}
                      alt="Corporate Image"
                      className="coprate-why-choose-img"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="coprate-why-choose-img-data">
                    <h5>5. Fast & Efficient Service</h5>

                    <h4>
                      <i className="bi bi-lightning"></i> Quick Turnaround
                    </h4>
                    <p>
                      Get your campaigns live in no time with our fast process.
                    </p>

                    <h4>
                      <i className="bi bi-gear"></i> Streamlined Execution
                    </h4>
                    <p>
                      Effortless setup and smooth handling of your advertising
                      needs.
                    </p>

                    <h4>
                      <i className="bi bi-clock"></i> Time-Saving Solutions
                    </h4>
                    <p>
                      We handle everything efficiently, so you can focus on
                      business growth.
                    </p>

                    <h4>
                      <i className="bi bi-rocket"></i> Instant Visibility
                    </h4>
                    <p>
                      Boost your brand's exposure quickly with our optimized
                      services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="coprate-category-section">
        <div className="container">
          <div className="coprate-page-count-content">
            <h1 className="coprate-page-count-title">
              Industries<span style={{ color: "var(--blue)" }}> We </span>Serve
            </h1>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="coprate-category-swiper"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <Link href={card.link} className="text-decoration-none">
                  <div className="coprate-category-card">
                    <Image
                      src={card.image}
                      alt={card.title}
                      priority
                      className="coprate-category-card-image"
                    />
                    <div className="card-body pt-2">
                      <h5 className="coprate-category-card-title">
                        {card.title}
                      </h5>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section>
        <div className="coprate-page-count-content">
          <h1 className="coprate-page-count-title">
            How<span style={{ color: "var(--blue)" }}> It </span>Works
          </h1>
        </div>
        <HowItWorks />
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="coprate-page-count-content">
                <h1 className="coprate-page-count-title">
                  Get Started{" "}
                  <span style={{ color: "var(--blue)" }}> Today </span>
                  with Bizi<span style={{ color: "var(--blue)" }}>ff</span>
                  y.com!
                </h1>
              </div>
              <div className="coprate-form-btn">
                <button className="login-btn mb-3" onClick={handleFormToggle}>
                  {showForm ? "Hide Form" : "Get Started Now"}
                </button>
              </div>

              {showForm && (
                <div className="card p-4 mb-4">
                  <h4 className="mb-3">Corporate Advertise</h4>
                  <form>
                    <div className="mb-3">
                      <label>Choose Box:</label>
                      <select className="form-select">
                        <option>Advertisement</option>
                        <option>Bulk Listing</option>
                      </select>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Business Name"
                        />
                      </div>

                      <div className="mb-3 col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Brand Name"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>

                      <div className="mb-3 col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label>Upload File</label>
                      <input type="file" className="form-control" />
                    </div>

                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Type your message"
                      ></textarea>
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Captcha"
                      />
                    </div>
                    <div className="coprate-form-btn">
                      <button type="submit" className="btn btn-success w-30">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
