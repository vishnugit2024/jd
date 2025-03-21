"use client";
import { useState } from "react";
import "./Testimonial.css";
import Heading from "../Heading/SecHeading";
const TestimonialSection = () => {
  // FAQ Toggle States
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
   <>
     <div className="testimonil-section container-fluid">
<Heading title="What Our Clients Say" subtitle="FAQS & Reviews"/>
      <div className="container">
        <div className="row">
          {/* FAQ Section */}
          <div className="col-lg-4">
            {[
              {
                id: 1,
                question: "We Have Added a New Exciting Feature in v2.0",
                answer:
                  "We craft unique digital experiences. With more than 7 years of expertise, we design and code clean websites.",
              },
              {
                id: 2,
                question: "How Consultancy Experts Work?",
                answer:
                  "We craft unique digital experiences. We are committed to providing our customers with exceptional service.",
              },
              {
                id: 3,
                question: "We Have Added a New Exciting Feature in v2.0",
                answer:
                  "We craft unique digital experiences. With more than 7 years of expertise, we design and code clean websites.",
              },
            ].map((faq, index) => (
              <div
                key={faq.id}
                className="testimonil-faq-box bg-white p-3 rounded shadow-sm mb-3"
              >
                <button
                  className="testimonil-faq-btn btn w-100 text-start fw-bold"
                  onClick={() => toggleFaq(index)}
                >
                  {index + 1}. {faq.question} {openFaq === index ? "−" : "+"}
                </button>
                {openFaq === index && (
                  <p className="testimonil-faq-answer mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* Testimonial Section */}
          <div className="col-lg-8">
            <div
              id="testimonil-carousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {[
                  {
                    id: 1,
                    name: "Matt Sanchzi",
                    role: "ThemeForest Exclusive",
                    img: "https://randomuser.me/api/portraits/men/1.jpg",
                    quote:
                      "We craft unique digital experiences. We are committed to providing our customers with exceptional service.",
                  },
                  {
                    id: 2,
                    name: "Jane Doe",
                    role: "UI/UX Designer",
                    img: "https://randomuser.me/api/portraits/women/2.jpg",
                    quote:
                      "With more than 7 years of expertise, we design and code clean websites.",
                  },
                ].map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <div className="testimonil-box bg-white p-4 rounded text-center shadow-sm">
                      <img
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
                      <p className="testimonil-quote">{testimonial.quote}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#testimonil-carousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#testimonil-carousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default TestimonialSection;
