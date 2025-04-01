import React from "react";
import "./blogpage.css";
import breadbg from "../../Images/bread.jpg";
import blogImage1 from "../../Images/blog1.jpg";
import blogImage2 from "../../Images/blog2.jpg";
import blogImage3 from "../../Images/blog3.jpg";
import blogImage4 from "../../Images/blog4.jpg";
import blogImage5 from "../../Images/blog5.jpg";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  const blogs = [
    {
      id: 1,
      title: "Professional Photoshoot Services",
      description:
        "High-quality images enhance brand presence and credibility.",
      image: blogImage1,
    },
    {
      id: 2,
      title: "Website & App Development",
      description:
        "A well-developed platform improves user experience and customer retention.",
      image: blogImage2,
    },
    {
      id: 3,
      title: "Creative Designing Services",
      description:
        "Strong visuals make brands stand out and boost recognition.",
      image: blogImage3,
    },
    {
      id: 4,
      title: "Digital Marketing Solutions",
      description:
        "SEO and social media marketing increase brand awareness and sales.",
      image: blogImage4,
    },
    {
      id: 5,
      title: "Content Creation & Branding",
      description:
        "Engaging content builds trust and strengthens brand identity.",
      image: blogImage5,
    },
  ];
  return (
    <>
      <section>
        <div className="all-breadcrumb">
          <Image
            src={breadbg}
            alt="Breadcrumb Background"
            layout="fill"
            objectFit="cover"
          />
          <div className="bread-overlay"></div>{" "}
          {/* Overlay should be separate */}
          <div className="container">
            <div className="bread-content">
              <h1>Stay Update With Trending Business Ideas 💡</h1>
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol>
                  <li>
                    <Link href="/" className="hover:text-blue-500">
                      Home
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-double-right"></i>
                  </li>
                  <li style={{ color: "var(--blue)" }}>Blog</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-main">
        <div className="container">
          <div className="row">
            {blogs.map((blog, index) => (
              <div key={index} className="col-md-4 gy-3">
                <div className="blog-card card">
                  <Image
                    src={blog.image}
                    className="blog-card-img"
                    alt={blog.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                    <Link
                      href={`../../Pages/blog/${blog.id}`}
                      className="login-btn"
                    >
                      Read More <i className="bi bi-arrow-right-circle "></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
