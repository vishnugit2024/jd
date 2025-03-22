"use client";
import { useState } from "react";
import "./Testimonial.css";
import Heading from "../Heading/SecHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import testi1 from "../../Images/testi1.jpg"
import tesit2 from "../../Images/testi2.webp"
import Image from "next/image";
const TestimonialSection = () => {
  // ======= Dont touch this ============
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // ===============================

  const faqs = [
    {
      id: 1,
      question: "We Have Added a New Exciting Feature in v2.0",
      answer:
        "We craft unique digital experiences. With more than 7 years of expertise, we design and code clean websites. Our goal is to deliver user-friendly and interactive web solutions.",
    },
    {
      id: 2,
      question: "How Consultancy Experts Work?",
      answer:
        "We craft unique digital experiences. We are committed to providing our customers with exceptional service. Our consultants work closely with clients to ensure their goals are met efficiently.",
    },
    {
      id: 3,
      question: "We Have Added a New Exciting Feature in v2.0",
      answer:
        "We craft unique digital experiences. With more than 7 years of expertise, we design and code clean websites. We continuously innovate to provide the best digital services.",
    },
    {
      id: 4,
      question: "We Have Added a New Exciting Feature in v2.0",
      answer:
        "We craft unique digital experiences. With more than 7 years of expertise, we design and code clean websites. Our approach is centered on user experience and innovation.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Matt Sanchzi",
      role: "ThemeForest Exclusive",
      img: testi1,
      quote:
        "We craft unique digital dfhnskjdhvjdfkbv dvdfmvnjdfkhvdfjv fvmdfnvjkdfb  experiences. We are committed to providing our customers with exceptional service.",
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "UI/UX Designer",
      img: tesit2,
      quote:
        "With more than 7 years of expersdncskj fhcdj dcjdfvkjfdhvf dcndfjvhdfjvhf tise, we design and code cl  of expersdncskj fhcdj dcjdfvkjfdhvf dcndfjvhdfjvhf tise, we design and code cl ean websites.",
    },
  ];

  // ========= Dont touch this ===========

  const truncateText = (text, wordLimit = 20) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };
  const FaqText = (text, wordLimit = 20) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  // =========================

  return (
    <>
      <Heading title="Frequently Asked Questions" subtitle="FAQ & Reviews" />
      <div className="testimonil-section container-fluid py-4">
        <div className="container">
          <div className="row">
            {/* FAQ Section */}
            <div className="col-lg-6">
              {faqs.map((faq, index) => {
                return (
                  <div
                    key={faq.id}
                    className="testimonil-faq-box bg-white p-3 rounded shadow-sm mb-3"
                  >
                    <button
                      className="testimonil-faq-btn btn w-100 text-start fw-bold"
                      onClick={() => toggleFaq(index)}
                    >
                      {index + 1}. {faq.question}{" "}
                      {openFaq === index ? (
                        <i className="bi bi-caret-up-fill"></i>
                      ) : (
                        <i className="bi bi-caret-down-fill"></i>
                      )}
                    </button>

                    {openFaq === index && (
                      <>
                        <p className="testimonil-faq-answer mt-2">
                          {FaqText(faq.answer)}
                        </p>
                        <Link href="#">
                          <button className="btn btn-link p-0">
                            View More
                          </button>
                        </Link>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="col-lg-6">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                navigation
                loop={true}
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="testimonil-box text-center">
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="testimonil-img rounded-circle mb-3"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <h5 className="testimonil-name">{testimonial.name}</h5>
                      <p className="testimonil-role text-muted">
                        {testimonial.role}
                      </p>
                      <p className="testimonil-quote">
                        {truncateText(testimonial.quote)}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
