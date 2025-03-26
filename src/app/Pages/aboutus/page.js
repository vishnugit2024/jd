import React from "react";
import "./aboutus.css";
import Image from "next/image";
import biziffyaboutus from "../../Images/AboutImg.jpg";
import biziffyaboutus1 from "../../Images/AboutImg1.jpg";
import countbgImage from "../../Images/aboutbgImage.png";
import count1 from "../../Images/linechart.gif";
import count2 from "../../Images/socialcare.gif";
import count3 from "../../Images/socialmedia.gif";
import count4 from "../../Images/target.gif";
import count5 from "../../Images/handshake.gif";
import Link from "next/link";
import diveImage from "../../Images/aboutImg2.png";
const page = () => {
  const countData = [
    { id: 1, image: count1, count: "100%", label: "Growth" },
    { id: 2, image: count2, count: "1M+", label: "Sellers" },
    { id: 3, image: count3, count: "50k+", label: "Wider Audience" },
    { id: 4, image: count4, count: "100%", label: "Targeted Marketing " },
    { id: 5, image: count5, count: "99.9%", label: "Satisfaction" },
  ];

  return (
    <>
      <section className="about-page-hero-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="about-page-hero-content">
                <h1 className="about-page-hero-title">
                  Connecting
                  <span style={{ color: "var(--blue)" }}> smart buyers </span>
                  and trustworthy businesses
                </h1>
                <p className="about-page-hero-subtitle">
                  <b>
                    Bizi<span style={{ color: "var(--blue)" }}>ff</span>y
                  </b>{" "}
                  is a Bulk Advertisement & Business Listing services Platform.
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
              <div className="biziffy-about-image-div">
                <Image
                  src={biziffyaboutus}
                  alt="Biziffy about us"
                  className="biziffy-about-image"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="biziffy-about-content">
                <h1 className="biziffy-about-title">
                  We are a Bizi<span style={{ color: "var(--blue)" }}>ff</span>y
                  that connects smart buyers with trustworthy businesses.
                </h1>
                <p className="biziffy-about-text">
                  Biziffy.com is designed to help businesses of all sizes expand
                  their reach and attract more customers. Whether you are a
                  small startup or a well-established enterprise&lsquo; our
                  platform provides a seamless way to list your business&lsquo;
                  showcase your services&lsquo; and connect with potential
                  clients. With a user-friendly interface and advanced
                  features&lsquo; Biziffy ensures that your business stands out
                  in the competitive market.
                </p>
                <p className="biziffy-about-text">
                  By leveraging our Bulk Advertisement & Business Listing
                  services&lsquo; you can increase your brand visibility across
                  multiple categories&lsquo; making it easier for customers to
                  find and engage with your business. Our platform allows you to
                  highlight essential details such as contact information&lsquo;
                  working hours&lsquo; and service offerings&lsquo; ensuring
                  that your potential customers have all the information they
                  need at their fingertips.
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
              <div className="about-page-count-content">
                <h1 className="about-page-count-title">
                  Why Bizi<span style={{ color: "var(--blue)" }}>ff</span>y?
                </h1>
              </div>

              <div className="about-page-count-data">
                <Image
                  src={countbgImage}
                  alt="Biziffy about us"
                  className="about-page-count-bg-image"
                />

                <div className="about-page-count-div">
                  {countData.map((item, index) => (
                    <div className="about-page-count" key={item.id}>
                      <Image
                        src={item.image}
                        alt={`count ${index + 1}`}
                        className="count-Image"
                      />
                      <h3>{item.count}</h3>
                      <h6>{item.label}</h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-4">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="biziffy-about-content">
                <h1 className="biziffy-about-title">
                  Maximize Your Business Visibility with Flexible Listing
                  Options with Bizi
                  <span style={{ color: "var(--blue)" }}>ff</span>y.
                </h1>
                <p className="biziffy-about-text">
                  Additionally&lsquo; Biziffy offers both free and premium
                  listing options&lsquo; giving businesses the flexibility to
                  choose the level of exposure that suits their needs. With
                  premium listings&lsquo; you get enhanced visibility&lsquo;
                  priority placement in search results&lsquo; and access to
                  exclusive promotional tools that help drive more traffic to
                  your business profile.
                </p>
                <p className="biziffy-about-text">
                  Our goal at Biziffy is to provide a hassle-free advertising
                  solution that maximizes your online presence and helps you
                  reach a broader audience. Whether you&apos;re looking to grow
                  locally or expand nationally&lsquo; Biziffy&apos;s powerful
                  platform is the ultimate tool to elevate your brand and drive
                  business growth.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="biziffy-about-image-div">
                <Image
                  src={biziffyaboutus1}
                  alt="Biziffy about us"
                  className="biziffy-about-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section my-4">
        <div className="container">
          <div className="row">
            <div className="about-dive-data-link position-relative">
              {/* Background Image in JSX */}
              <div className="about-dive-bg position-absolute w-100 h-100">
                <Image src={diveImage} alt="Dive Image" />
              </div>

              <div className="dive-title">
                <h4>
                  Dive into Bizi
                  <span style={{ color: "var(--blue)" }}>ff</span>y.{" "}
                  <span style={{ color: "var(--blue)" }}>
                    <i className="bi bi-stars"></i>
                  </span>
                </h4>
              </div>
              <div className="button-group">
                <Link href="#">
                  <button>SignIn/SignUp</button>
                </Link>
                <Link href="#">
                  <button>Free Listing</button>
                </Link>
                <Link href="#">
                  <button>Free Listing</button>
                </Link>
                <Link href="#">
                  <button>Free Listing</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
