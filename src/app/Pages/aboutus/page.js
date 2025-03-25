import React from "react";
import "./aboutus.css";
import Image from "next/image";
import biziffyaboutus from "../../Images/AboutImg.jpg";
import countbgImage from "../../Images/aboutbgImage.png";
import count1 from "../../Images/linechart.gif";
import count2 from "../../Images/socialcare.gif";
import count3 from "../../Images/socialmedia.gif";
import count4 from "../../Images/target.gif";
import count5 from "../../Images/handshake.gif";
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
                  is a reviews platform by everyday people, for everyday people.
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
                  We are a platform that connects smart buyers with trustworthy
                  businesses.
                </h1>
                <p className="biziffy-about-text">
                  Are you looking to expand your business reach and gain maximum
                  visibility? Biziffy.com offers Bulk Advertisement & Business
                  Listing services, providing the perfect solution for promoting
                  your brand across Biziffy platforms and ensuring that your
                  business gets the attention it deserves.
                </p>
                <p className="biziffy-about-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi excepturi rerum explicabo praesentium corrupti minima
                  nam totam similique! Minima dolorum possimus commodi facere
                  fugit harum cupiditate voluptas nobis. Blanditiis ducimus,
                  magni officia eum soluta amet eveniet commodi repudiandae
                  quibusdam sit!
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
                <p className="about-page-count-text m-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  quibusdam necessitatibus repudiandae et suscipit id beatae
                  sunt unde nesciunt, iure cupiditate magni. Illum, tempore
                  enim? Reprehenderit perspiciatis eveniet ratione minus.
                </p>
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

      <section></section>
    </>
  );
};

export default page;
