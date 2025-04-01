"use client";
import { useEffect, useState } from "react";
import "./businessListing.css";
import gourav from "../../Images/gourav.jpg";
import gourav2 from "../../Images/gourav2.jpg";
import gourav3 from "../../Images/gourav3.jpg";
import Image from "next/image";
import breadbg from "../../Images/HeroBanner.jpg";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAllHours, setShowAllHours] = useState(false);

  const hours = [
    { day: "Monday", open: "09:00 AM", close: "10.00 AM" },
    { day: "Tuesday", open: "09:00 AM", close: "07:00 PM" },
    { day: "Wednesday", open: "09:00 AM", close: "07:00 PM" },
    { day: "Thursday", open: "09:00 AM", close: "07:00 PM" },
    { day: "Friday", open: "09:00 AM", close: "07:00 PM" },
    { day: "Saturday", open: "10:00 AM", close: "05:00 PM" },
    { day: "Sunday", open: "Closed", close: "Closed" },
  ];

  const getCurrentDay = () => {
    const today = new Date().getDay();
    return today === 0 ? 6 : today - 1; // Adjust for Sunday
  };

  const isCurrentlyOpen = (openTime, closeTime) => {
    if (openTime === "Closed") return false;
    const now = new Date();
    const current = now.getHours() * 60 + now.getMinutes();
    const [openHours, openMinutes] = openTime.split(/[: ]/);
    const [closeHours, closeMinutes] = closeTime.split(/[: ]/);

    const open =
      ((parseInt(openHours) % 12) + (openTime.includes("PM") ? 12 : 0)) * 60 +
      parseInt(openMinutes);
    const close =
      ((parseInt(closeHours) % 12) + (closeTime.includes("PM") ? 12 : 0)) * 60 +
      parseInt(closeMinutes);

    return current >= open && current <= close;
  };

  useEffect(() => {
    const today = getCurrentDay();
    const { open, close } = hours[today];
    setIsOpen(isCurrentlyOpen(open, close));
  }, []);

  const today = getCurrentDay();

  const businesses = [
    {
      id: 1,
      name: "Pasricha Clinic",
      rating: 3.4,
      reviews: 5,
      address: "Shop 20, C S C II, Sector XIII, Rohini, Delhi",
      phone: "+91 9810000000",
      description: "Very polite and extremely knowledgeable doctor.",
      image: gourav,
      services: ["General Check-up", "Vaccination", "Health Consultation"],
      reviewsData: [
        {
          author: "John Doe",
          comment: "Excellent service and very polite staff.",
        },
        {
          author: "Jane Smith",
          comment: "The doctor is very knowledgeable and kind.",
        },
      ],
    },
    {
      id: 2,
      name: "The Holistic Clinic",
      rating: 5.0,
      reviews: 86,
      address: "Pkt 4, Ground Floor, Rohini, Delhi",
      phone: "+91 9810000122",
      description: "On-site services with excellent care.",
      image: gourav2,
      services: [
        "Holistic Health Services",
        "Yoga and Meditation",
        "Nutritional Advice",
      ],
      reviewsData: [
        {
          author: "Emily Brown",
          comment: "Amazing care and holistic approach!",
        },
        {
          author: "Chris Wilson",
          comment: "Best place for holistic health services.",
        },
      ],
    },
    {
      id: 3,
      name: "Sharva Clinic",
      rating: 5.0,
      reviews: 75,
      address: "226 Ground Floor, Rohini, Delhi",
      phone: "+91 981004598",
      description: "The doctor is very attentive and professional.",
      image: gourav3,
      services: ["Pediatrics", "General Surgery", "Orthopedics"],
      reviewsData: [
        {
          author: "Mark Lee",
          comment: "Highly professional and caring staff.",
        },
        { author: "Sarah Johnson", comment: "Would recommend to everyone!" },
      ],
    },
    {
      id: 4,
      name: "vishnu sahu",
      rating: 5.0,
      reviews: 75,
      address: "226 Ground Floor, Rohini, Delhi",
      phone: "+91 981004598",
      description: "The doctor is very attentive and professional.",
      image: gourav3,
      services: ["Pediatrics", "General Surgery", "Orthopedics"],
      reviewsData: [
        {
          author: "Mark Lee",
          comment: "Highly professional and caring staff.",
        },
        { author: "Sarah Johnson", comment: "Would recommend to everyone!" },
      ],
    },
    {
      id: 5,
      name: "mukesh mehar",
      rating: 5.0,
      reviews: 75,
      address: "226 Ground Floor, Rohini, Delhi",
      phone: "+91 981004598",
      description: "The doctor is very attentive and professional.",
      image: gourav3,
      services: ["Pediatrics", "General Surgery", "Orthopedics"],
      reviewsData: [
        {
          author: "Mark Lee",
          comment: "Highly professional and caring staff.",
        },
        { author: "Sarah Johnson", comment: "Would recommend to everyone!" },
      ],
    },
    {
      id: 6,
      name: "akash singh",
      rating: 5.0,
      reviews: 75,
      address: "226 Ground Floor, Rohini, Delhi",
      phone: "+91 981004598",
      description: "The doctor is very attentive and professional.",
      image: gourav3,
      services: ["Pediatrics", "General Surgery", "Orthopedics"],
      reviewsData: [
        {
          author: "Mark Lee",
          comment: "Highly professional and caring staff.",
        },
        { author: "Sarah Johnson", comment: "Would recommend to everyone!" },
      ],
    },
    {
      id: 7,
      name: "aman tiwari",
      rating: 5.0,
      reviews: 75,
      address: "226 Ground Floor, Rohini, Delhi",
      phone: "+91 981004598",
      description: "The doctor is very attentive and professional.",
      image: gourav3,
      services: ["Pediatrics", "General Surgery", "Orthopedics"],
      reviewsData: [
        {
          author: "Mark Lee",
          comment: "Highly professional and caring staff.",
        },
        { author: "Sarah Johnson", comment: "Would recommend to everyone!" },
      ],
    },
    {
      id: 8,
      name: "nitin rajroiya",
      rating: 5.0,
      reviews: 75,
      address: "226 Ground Floor, Rohini, Delhi",
      phone: "+91 981004598",
      description: "The doctor is very attentive and professional.",
      image: gourav3,
      services: ["Pediatrics", "General Surgery", "Orthopedics"],
      reviewsData: [
        {
          author: "Mark Lee",
          comment: "Highly professional and caring staff.",
        },
        { author: "Sarah Johnson", comment: "Would recommend to everyone!" },
      ],
    },
    {
      id: 9,
      name: "nikunj sharma",
      rating: 5.0,
      reviews: 75,
      address: "226 Ground Floor, Rohini, Delhi",
      phone: "+91 981004598",
      description: "The doctor is very attentive and professional.",
      image: gourav3,
      services: ["Pediatrics", "General Surgery", "Orthopedics"],
      reviewsData: [
        {
          author: "Mark Lee",
          comment: "Highly professional and caring staff.",
        },
        { author: "Sarah Johnson", comment: "Would recommend to everyone!" },
      ],
    },
    {
      id: 10,
      name: "deepak pandit",
      rating: 5.0,
      reviews: 75,
      address: "226 Ground Floor, Rohini, Delhi",
      phone: "+91 981004598",
      description: "The doctor is very attentive and professional.",
      image: gourav3,
      services: ["Pediatrics", "General Surgery", "Orthopedics"],
      reviewsData: [
        {
          author: "Mark Lee",
          comment: "Highly professional and caring staff.",
        },
        { author: "Sarah Johnson", comment: "Would recommend to everyone!" },
      ],
    },
  ];
  const [activeTab, setActiveTab] = useState("overview");
  const [selected, setSelected] = useState(businesses[0]);

  const [newReview, setNewReview] = useState({
    author: "",
    comment: "",
    rating: 0,
  });
  const [showForm, setShowForm] = useState(false);
  const [reviews, setReviews] = useState(selected.reviewsData || []);

  const handleAddReview = () => {
    if (newReview.author && newReview.comment) {
      setReviews([...reviews, newReview]);
      setNewReview({ author: "", comment: "", rating: 5 });
      setShowForm(false);
    } else {
      alert("Please fill in both fields.");
    }
  };
  const staticPhotos = [gourav, gourav2, gourav3, gourav, gourav2, gourav3];
  const [lightbox, setLightbox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightbox(true);
  };

  const closeLightbox = (event) => {
    if (
      event.target.classList.contains("lightbox-overlay") ||
      event.target.classList.contains("close-btn")
    ) {
      setLightbox(false);
    }
  };

  const visiblePhotos = showAll ? staticPhotos : staticPhotos.slice(0, 4);

  //   ==========About text slice method ================================

  const fullText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, velit doloribus? Sint doloribus quaerat excepturi explicabo, praesentium dolore cumque ratione consequatur possimus nisi eaque impedit neque exercitationem totam aspernatur, voluptates illo minus omnis dolor quibusdam? Iste dolore perspiciatis deleniti beatae excepturi soluta quasi doloribus, sunt, incidunt officiis ea vitae minima, ullam voluptates illum natus consequuntur enim et porro tenetur. Consequatur porro neque ducimus a temporibus debitis voluptatum, iste quisquam alias, deleniti nobis explicabo consectetur atque nam beatae quasi dolores, laudantium repellat quod fugiat dicta dolore. Impedit ex voluptatibus, molestias nihil, perferendis alias molestiae provident ab incidunt beatae, fuga dicta reiciendis.";
  const wordLimit = 30;
  const words = fullText.split(" ");
  const isLongText = words.length > wordLimit;
  const [expanded, setExpanded] = useState(false);

  const toggleText = () => {
    setExpanded(!expanded);
  };

  // const [selected, setSelected] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const handleExpand = (biz) => {
    setSelected(biz);
    setExpandedId(expandedId === biz.id ? null : biz.id);
  };
  return (
    <>
      <section className="business-listing-page">
        <div className="container">
          <div className="business-listing-container">
            <h5 className="text-dark">Business Category Name</h5>
            <div className="row">
              <div className="col-md-5 left-panel">
                <div className="col-5-scroll-css">
                  {businesses.map((biz) => {
                    const isOpen = true; // Isko actual logic ke sath replace karein
                    const isExpanded = expandedId === biz.id;

                    return (
                      <div key={biz.id}>
                        <div
                          className={`business-card gap-3 ${selected?.id === biz.id ? "active" : ""}`}
                          onClick={() => handleExpand(biz)}
                        >
                          <div>
                            <Image src={biz.image} alt={biz.name} className="listing-image" />
                          </div>
                          <div>
                            <h5>{biz.name}</h5>
                            <div className="d-flex gap-2 align-items-center">
                              <p>
                                {biz.rating} <i className="bi bi-star-fill"></i>{" "}
                                <i className="bi bi-star-fill"></i>{" "}
                                <i className="bi bi-star-fill"></i>{" "}
                                <i className="bi bi-star-fill"></i>{" "}
                                <i className="bi bi-star-fill"></i> {biz.reviews}
                              </p>
                              <span>|</span>
                              <p>Web Designer</p>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <p>7 years in business</p>
                              <span>|</span>
                              <p>Karnal, Haryana</p>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <div className="opening-hours-container">
                                <p className={`status ${isOpen ? "open" : "closed"}`}>
                                  {isOpen ? "Open Now" : "Closed Now"}
                                </p>
                              </div>
                              <span>|</span>
                              <p>Phone: {biz.phone}</p>
                            </div>
                          </div>
                        </div>

                        {/* Expanded Content */}
                        <div
                          className={`expanded-content d-block d-md-none ${isExpanded ? "show" : ""}`}
                        >
                          <div className="details-card">
                            <h3 className="m-0">{selected.name}</h3>
                            <div className="d-flex gap-2 align-items-center mb-3">
                              <p>
                                {selected.rating} <i className="bi bi-star-fill"></i>{" "}
                                <i className="bi bi-star-fill"></i>{" "}
                                <i className="bi bi-star-fill"></i>{" "}
                                <i className="bi bi-star-fill"></i>{" "}
                                <i className="bi bi-star-fill"></i> {selected.reviews}
                              </p>
                              <span>|</span>
                              <p>Web Designer</p>
                            </div>
                            <Image
                              src={selected.image}
                              alt={selected.name}
                              className="business-detail-image mb-3"
                            />
                            <div className="d-flex justify-content-left flex-wrap mb-3 gap-2">
                              <Link href={"#"} className="black-btn">
                                <i className="bi bi-crosshair"></i> Direction
                              </Link>
                              <Link href={"#"} className="black-btn">
                                <i className="bi bi-share"></i> Share
                              </Link>
                              <Link href={"#"} className="black-btn">
                                <i className="bi bi-telephone-outbound"></i> Call
                              </Link>
                              <Link href={"#"} className="black-btn">
                                <i className="bi bi-globe"></i> Website
                              </Link>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <p>7 years in business</p>
                              <span>|</span>
                              <p>Karnal, Haryana</p>
                            </div>
                            {/* End of copied data */}
                            <ul className="nav nav-tabs mt-3">
                              <li className="nav-item">
                                <button
                                  className={`nav-link listing-tabs-btn ${activeTab === "overview" ? "active" : ""
                                    }`}
                                  onClick={() => setActiveTab("overview")}
                                >
                                  Overview
                                </button>
                              </li>
                              <li className="nav-item">
                                <button
                                  className={`nav-link ${activeTab === "service" ? "active" : ""
                                    }`}
                                  onClick={() => setActiveTab("service")}
                                >
                                  Service
                                </button>
                              </li>
                              <li className="nav-item">
                                <button
                                  className={`nav-link ${activeTab === "review" ? "active" : ""
                                    }`}
                                  onClick={() => setActiveTab("review")}
                                >
                                  Review
                                </button>
                              </li>
                              <li className="nav-item">
                                <button
                                  className={`nav-link ${activeTab === "photos" ? "active" : ""
                                    }`}
                                  onClick={() => setActiveTab("photos")}
                                >
                                  Photos
                                </button>
                              </li>
                              <li className="nav-item">
                                <button
                                  className={`nav-link ${activeTab === "social" ? "active" : ""
                                    }`}
                                  onClick={() => setActiveTab("social")}
                                >
                                  Social Media
                                </button>
                              </li>
                            </ul>

                            <div className="tab-content mt-3">
                              <div
                                className={`tab-pane fade ${activeTab === "overview" ? "show active" : ""
                                  }`}
                              >
                                <div>
                                  <p>
                                    <b>About Us: </b>
                                    {expanded
                                      ? fullText
                                      : words.slice(0, wordLimit).join(" ") +
                                      (isLongText ? "..." : "")}
                                  </p>
                                  {isLongText && (
                                    <button
                                      onClick={toggleText}
                                      style={{
                                        border: "none",
                                        background: "none",
                                        color: "blue",
                                        cursor: "pointer",
                                      }}
                                    >
                                      {expanded ? "Read Less" : "Read More"} <i className="bi bi-arrow-right-circle"></i>
                                    </button>
                                  )}
                                </div>

                                <hr />

                                <div>
                                  <p>
                                    <b>Address : </b> Digi India Solution Rohini Sec 24
                                  </p>
                                </div>
                                <div className="d-flex gap-2">
                                  <div className="opening-hours-container">
                                    <p
                                      onClick={() => setShowAllHours(!showAllHours)}
                                      className={`status ${isOpen ? "open" : "closed"}`}
                                    >
                                      <b className="text-dark">Hours : </b>{" "}
                                      {isOpen ? "Open" : "Closed"}{" "}
                                      <i className="bi bi-chevron-down"></i>
                                    </p>
                                    {showAllHours && (
                                      <ul className="opening-hours-list">
                                        {hours.map((item, index) => (
                                          <li
                                            key={index}
                                            className={today === index ? "today" : ""}
                                          >
                                            <span>{item.day}</span>
                                            <span>
                                              {item.open} - {item.close}
                                            </span>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                </div>
                                <div>
                                  <p>
                                    <b>Phone : </b> {selected.phone}
                                  </p>
                                </div>
                                {/* <p><b>About Us : </b> {selected.phone}</p> */}
                                <hr />
                                <div className="tab-pane">
                                  <p>
                                    <b>Services</b>
                                  </p>
                                  <ul className="service-list">
                                    {selected.services?.map((service, index) => (
                                      <li key={index}>{service}</li>
                                    ))}
                                  </ul>
                                </div>
                                <hr />
                                <div className="tab-pane">
                                  <ul className="review-list">
                                    {selected.reviewsData?.map((review, index) => (
                                      <li key={index}>
                                        <span className="review-name">
                                          {review.author.charAt(0)}
                                        </span>
                                        <div>
                                          <div className="review-comment-star">
                                            <i className="bi bi-star-fill"></i>{" "}
                                            <i className="bi bi-star-fill"></i>{" "}
                                            <i className="bi bi-star-fill"></i>{" "}
                                            <i className="bi bi-star-fill"></i>{" "}
                                            <i className="bi bi-star-fill"></i>
                                          </div>
                                          {`"${review.comment}"`}{" "}
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <hr />
                                <div className="tab-pane">
                                  <h4>Photos</h4>
                                  <div className="photo-gallery d-flex flex-wrap gap-2">
                                    {visiblePhotos.map((photo, index) => (
                                      <Image
                                        key={index}
                                        src={photo}
                                        alt={`Photo ${index + 1}`}
                                        className="gallery-img"
                                        onClick={() => openLightbox(index)}
                                      />
                                    ))}
                                    {!showAll && staticPhotos.length > 4 && (
                                      <div
                                        className="plus-overlay"
                                        onClick={() => setShowAll(true)}
                                      >
                                        +{staticPhotos.length - 4}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <hr />
                                <div className="tab-pane">
                                  <h4>Social Media</h4>
                                  <div className="socialmedia-details">
                                    <div>
                                      <div className="social-icons">
                                        <Link href="#">
                                          <i className="bi bi-twitter"></i>
                                        </Link>
                                        <Link href="#">
                                          <i className="bi bi-facebook"></i>
                                        </Link>
                                        <Link href="#">
                                          <i className="bi bi-linkedin"></i>
                                        </Link>
                                        <Link href="#">
                                          <i className="bi bi-instagram"></i>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                className={`tab-pane fade ${activeTab === "service" ? "show active" : ""
                                  }`}
                              >
                                <ul className="service-list">
                                  {selected.services?.map((service, index) => (
                                    <li key={index}>{service}</li>
                                  ))}
                                </ul>
                              </div>

                              <div
                                className={`tab-pane fade ${activeTab === "review" ? "show active" : ""
                                  }`}
                              >
                                <ul className="review-list">
                                  {reviews.map((review, index) => (
                                    <li key={index}>
                                      <span className="review-name">
                                        {review.author.charAt(0)}
                                      </span>
                                      <div>
                                        <div className="review-comment-star">
                                          {[...Array(5)].map((_, i) => (
                                            <i
                                              key={i}
                                              className={
                                                i < review.rating
                                                  ? "bi bi-star-fill"
                                                  : "bi bi-star"
                                              }
                                            ></i>
                                          ))}
                                        </div>
                                        {`"${review.comment}"`}
                                      </div>
                                    </li>
                                  ))}
                                </ul>

                                <div className="text-center">
                                  <button
                                    className="login-btn mb-2"
                                    onClick={() => setShowForm(!showForm)}
                                  >
                                    {showForm ? "Hide Review Form" : "Write a Review"}{" "}
                                    <i className="bi bi-pencil"></i>
                                  </button>

                                  {showForm && (
                                    <div className="add-review">
                                      <h4>Add a Review</h4>
                                      <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="login-input mb-2"
                                        value={newReview.author}
                                        onChange={(e) =>
                                          setNewReview({
                                            ...newReview,
                                            author: e.target.value,
                                          })
                                        }
                                      />
                                      <textarea
                                        placeholder="Your Comment"
                                        className="login-input mb-2"
                                        value={newReview.comment}
                                        onChange={(e) =>
                                          setNewReview({
                                            ...newReview,
                                            comment: e.target.value,
                                          })
                                        }
                                      ></textarea>
                                      <div className="rating-selection">
                                        <p>
                                          <b>Select Rating:</b>
                                        </p>
                                        <div>
                                          {[...Array(5)].map((_, i) => (
                                            <i
                                              key={i}
                                              className={
                                                i < newReview.rating
                                                  ? "bi bi-star-fill"
                                                  : "bi bi-star"
                                              }
                                              onClick={() =>
                                                setNewReview({
                                                  ...newReview,
                                                  rating: i + 1,
                                                })
                                              }
                                            ></i>
                                          ))}
                                        </div>
                                      </div>
                                      <button
                                        className="btn btn-primary"
                                        onClick={handleAddReview}
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div
                                className={`tab-pane fade ${activeTab === "photos" ? "show active" : ""
                                  }`}
                              >
                                <h4>Photos</h4>
                                <div className="photo-gallery d-flex flex-wrap gap-2">
                                  {visiblePhotos.map((photo, index) => (
                                    <Image
                                      key={index}
                                      src={photo}
                                      alt={`Photo ${index + 1}`}
                                      className="gallery-img"
                                      onClick={() => openLightbox(index)}
                                    />
                                  ))}
                                  {!showAll && staticPhotos.length > 4 && (
                                    <div
                                      className="plus-overlay"
                                      onClick={() => setShowAll(true)}
                                    >
                                      +{staticPhotos.length - 4}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div
                                className={`tab-pane fade ${activeTab === "social" ? "show active" : ""
                                  }`}
                              >
                                <h4>Social Media</h4>
                                <div className="socialmedia-details">
                                  <div>
                                    <div className="social-icons">
                                      <Link href="#">
                                        <i className="bi bi-twitter"></i>
                                      </Link>
                                      <Link href="#">
                                        <i className="bi bi-facebook"></i>
                                      </Link>
                                      <Link href="#">
                                        <i className="bi bi-linkedin"></i>
                                      </Link>
                                      <Link href="#">
                                        <i className="bi bi-instagram"></i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {lightbox && (
                                <div
                                  className="lightbox-overlay fullscreen"
                                  onClick={closeLightbox}
                                >
                                  <button className="close-btn" onClick={closeLightbox}>
                                    &times;
                                  </button>
                                  <Swiper
                                    initialSlide={currentIndex}
                                    navigation
                                    keyboard={{ enabled: true }}
                                    modules={[Navigation, Keyboard]}
                                    className="lightbox-slider"
                                    onSwiper={(swiper) => swiper.slideTo(currentIndex, 0)}
                                  >
                                    {staticPhotos.map((photo, index) => (
                                      <SwiperSlide key={index}>
                                        <div className="fullscreen-image-wrapper">
                                          <Image
                                            src={photo}
                                            alt={`Slide ${index}`}
                                            className="lightbox-img"
                                          />
                                        </div>
                                      </SwiperSlide>
                                    ))}
                                  </Swiper>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="col-md-7 right-panel">
                <div className="details-card">
                  <h3 className="m-0">{selected.name}</h3>
                  <div className="d-flex gap-2 align-items-center mb-3">
                    <p>
                      {selected.rating} <i className="bi bi-star-fill"></i>{" "}
                      <i className="bi bi-star-fill"></i>{" "}
                      <i className="bi bi-star-fill"></i>{" "}
                      <i className="bi bi-star-fill"></i>{" "}
                      <i className="bi bi-star-fill"></i> {selected.reviews}
                    </p>
                    <span>|</span>
                    <p>Web Designer</p>
                  </div>
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    className="business-detail-image mb-3"
                  />
                  <div className="d-flex justify-content-left flex-wrap mb-3 gap-2">
                    <Link href={"#"} className="black-btn">
                      <i className="bi bi-crosshair"></i> Direction
                    </Link>
                    <Link href={"#"} className="black-btn">
                      <i className="bi bi-share"></i> Share
                    </Link>
                    <Link href={"#"} className="black-btn">
                      <i className="bi bi-telephone-outbound"></i> Call
                    </Link>
                    <Link href={"#"} className="black-btn">
                      <i className="bi bi-globe"></i> Website
                    </Link>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <p>7 years in business</p>
                    <span>|</span>
                    <p>Karnal, Haryana</p>
                  </div>
                  {/* End of copied data */}
                  <ul className="nav nav-tabs mt-3">
                    <li className="nav-item">
                      <button
                        className={`nav-link listing-tabs-btn ${activeTab === "overview" ? "active" : ""
                          }`}
                        onClick={() => setActiveTab("overview")}
                      >
                        Overview
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === "service" ? "active" : ""
                          }`}
                        onClick={() => setActiveTab("service")}
                      >
                        Service
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === "review" ? "active" : ""
                          }`}
                        onClick={() => setActiveTab("review")}
                      >
                        Review
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === "photos" ? "active" : ""
                          }`}
                        onClick={() => setActiveTab("photos")}
                      >
                        Photos
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === "social" ? "active" : ""
                          }`}
                        onClick={() => setActiveTab("social")}
                      >
                        Social Media
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content mt-3">
                    <div
                      className={`tab-pane fade ${activeTab === "overview" ? "show active" : ""
                        }`}
                    >
                      <div>
                        <p>
                          <b>About Us: </b>
                          {expanded
                            ? fullText
                            : words.slice(0, wordLimit).join(" ") +
                            (isLongText ? "..." : "")}
                        </p>
                        {isLongText && (
                          <button
                            onClick={toggleText}
                            style={{
                              border: "none",
                              background: "none",
                              color: "blue",
                              cursor: "pointer",
                            }}
                          >
                            {expanded ? "Read Less" : "Read More"} <i className="bi bi-arrow-right-circle"></i>
                          </button>
                        )}
                      </div>

                      <hr />

                      <div>
                        <p>
                          <b>Address : </b> Digi India Solution Rohini Sec 24
                        </p>
                      </div>
                      <div className="d-flex gap-2">
                        <div className="opening-hours-container">
                          <p
                            onClick={() => setShowAllHours(!showAllHours)}
                            className={`status ${isOpen ? "open" : "closed"}`}
                          >
                            <b className="text-dark">Hours : </b>{" "}
                            {isOpen ? "Open" : "Closed"}{" "}
                            <i className="bi bi-chevron-down"></i>
                          </p>
                          {showAllHours && (
                            <ul className="opening-hours-list">
                              {hours.map((item, index) => (
                                <li
                                  key={index}
                                  className={today === index ? "today" : ""}
                                >
                                  <span>{item.day}</span>
                                  <span>
                                    {item.open} - {item.close}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                      <div>
                        <p>
                          <b>Phone : </b> {selected.phone}
                        </p>
                      </div>
                      {/* <p><b>About Us : </b> {selected.phone}</p> */}
                      <hr />
                      <div className="tab-pane">
                        <p>
                          <b>Services</b>
                        </p>
                        <ul className="service-list">
                          {selected.services?.map((service, index) => (
                            <li key={index}>{service}</li>
                          ))}
                        </ul>
                      </div>
                      <hr />
                      <div className="tab-pane">
                        <ul className="review-list">
                          {selected.reviewsData?.map((review, index) => (
                            <li key={index}>
                              <span className="review-name">
                                {review.author.charAt(0)}
                              </span>
                              <div>
                                <div className="review-comment-star">
                                  <i className="bi bi-star-fill"></i>{" "}
                                  <i className="bi bi-star-fill"></i>{" "}
                                  <i className="bi bi-star-fill"></i>{" "}
                                  <i className="bi bi-star-fill"></i>{" "}
                                  <i className="bi bi-star-fill"></i>
                                </div>
                                {`"${review.comment}"`}{" "}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <hr />
                      <div className="tab-pane">
                        <h4>Photos</h4>
                        <div className="photo-gallery d-flex flex-wrap gap-2">
                          {visiblePhotos.map((photo, index) => (
                            <Image
                              key={index}
                              src={photo}
                              alt={`Photo ${index + 1}`}
                              className="gallery-img"
                              onClick={() => openLightbox(index)}
                            />
                          ))}
                          {!showAll && staticPhotos.length > 4 && (
                            <div
                              className="plus-overlay"
                              onClick={() => setShowAll(true)}
                            >
                              +{staticPhotos.length - 4}
                            </div>
                          )}
                        </div>
                      </div>
                      <hr />
                      <div className="tab-pane">
                        <h4>Social Media</h4>
                        <div className="socialmedia-details">
                          <div>
                            <div className="social-icons">
                              <Link href="#">
                                <i className="bi bi-twitter"></i>
                              </Link>
                              <Link href="#">
                                <i className="bi bi-facebook"></i>
                              </Link>
                              <Link href="#">
                                <i className="bi bi-linkedin"></i>
                              </Link>
                              <Link href="#">
                                <i className="bi bi-instagram"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade ${activeTab === "service" ? "show active" : ""
                        }`}
                    >
                      <ul className="service-list">
                        {selected.services?.map((service, index) => (
                          <li key={index}>{service}</li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`tab-pane fade ${activeTab === "review" ? "show active" : ""
                        }`}
                    >
                      <ul className="review-list">
                        {reviews.map((review, index) => (
                          <li key={index}>
                            <span className="review-name">
                              {review.author.charAt(0)}
                            </span>
                            <div>
                              <div className="review-comment-star">
                                {[...Array(5)].map((_, i) => (
                                  <i
                                    key={i}
                                    className={
                                      i < review.rating
                                        ? "bi bi-star-fill"
                                        : "bi bi-star"
                                    }
                                  ></i>
                                ))}
                              </div>
                              {`"${review.comment}"`}
                            </div>
                          </li>
                        ))}
                      </ul>

                      <div className="text-center">
                        <button
                          className="login-btn mb-2"
                          onClick={() => setShowForm(!showForm)}
                        >
                          {showForm ? "Hide Review Form" : "Write a Review"}{" "}
                          <i className="bi bi-pencil"></i>
                        </button>

                        {showForm && (
                          <div className="add-review">
                            <h4>Add a Review</h4>
                            <input
                              type="text"
                              placeholder="Your Name"
                              className="login-input mb-2"
                              value={newReview.author}
                              onChange={(e) =>
                                setNewReview({
                                  ...newReview,
                                  author: e.target.value,
                                })
                              }
                            />
                            <textarea
                              placeholder="Your Comment"
                              className="login-input mb-2"
                              value={newReview.comment}
                              onChange={(e) =>
                                setNewReview({
                                  ...newReview,
                                  comment: e.target.value,
                                })
                              }
                            ></textarea>
                            <div className="rating-selection">
                              <p>
                                <b>Select Rating:</b>
                              </p>
                              <div>
                                {[...Array(5)].map((_, i) => (
                                  <i
                                    key={i}
                                    className={
                                      i < newReview.rating
                                        ? "bi bi-star-fill"
                                        : "bi bi-star"
                                    }
                                    onClick={() =>
                                      setNewReview({
                                        ...newReview,
                                        rating: i + 1,
                                      })
                                    }
                                  ></i>
                                ))}
                              </div>
                            </div>
                            <button
                              className="btn btn-primary"
                              onClick={handleAddReview}
                            >
                              Submit
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade ${activeTab === "photos" ? "show active" : ""
                        }`}
                    >
                      <h4>Photos</h4>
                      <div className="photo-gallery d-flex flex-wrap gap-2">
                        {visiblePhotos.map((photo, index) => (
                          <Image
                            key={index}
                            src={photo}
                            alt={`Photo ${index + 1}`}
                            className="gallery-img"
                            onClick={() => openLightbox(index)}
                          />
                        ))}
                        {!showAll && staticPhotos.length > 4 && (
                          <div
                            className="plus-overlay"
                            onClick={() => setShowAll(true)}
                          >
                            +{staticPhotos.length - 4}
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className={`tab-pane fade ${activeTab === "social" ? "show active" : ""
                        }`}
                    >
                      <h4>Social Media</h4>
                      <div className="socialmedia-details">
                        <div>
                          <div className="social-icons">
                            <Link href="#">
                              <i className="bi bi-twitter"></i>
                            </Link>
                            <Link href="#">
                              <i className="bi bi-facebook"></i>
                            </Link>
                            <Link href="#">
                              <i className="bi bi-linkedin"></i>
                            </Link>
                            <Link href="#">
                              <i className="bi bi-instagram"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {lightbox && (
                      <div
                        className="lightbox-overlay fullscreen"
                        onClick={closeLightbox}
                      >
                        <button className="close-btn" onClick={closeLightbox}>
                          &times;
                        </button>
                        <Swiper
                          initialSlide={currentIndex}
                          navigation
                          keyboard={{ enabled: true }}
                          modules={[Navigation, Keyboard]}
                          className="lightbox-slider"
                          onSwiper={(swiper) => swiper.slideTo(currentIndex, 0)}
                        >
                          {staticPhotos.map((photo, index) => (
                            <SwiperSlide key={index}>
                              <div className="fullscreen-image-wrapper">
                                <Image
                                  src={photo}
                                  alt={`Slide ${index}`}
                                  className="lightbox-img"
                                />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
