import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./blogdetails.css";
import breadbg from "../../../Images/bread.jpg";

const page = () => {
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

      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-data">
                <h4 className="blog-title">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aspernatur, ut!
                </h4>
                <p className="blog-paragrap">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, officia! Iusto, voluptatum quam ipsa delectus ut
                  perferendis velit ipsam nobis rem magnam blanditiis animi
                  nihil provident mollitia facilis quo eligendi libero ullam
                  iure qui possimus esse? Magnam at repellendus nihil?
                </p>
              </div>
              <div className="blog-Image">
                <Image
                  src={breadbg}
                  alt="Blog Image"
                  className="Details-Blog-Image img-fluid"
                />
              </div>
              <div className="blog-data">
                <p className="blog-paragrap">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate ipsa laborum eum cumque, amet earum vero cum
                  perferendis quam. Deserunt natus quod magni placeat
                  voluptatibus hic sint excepturi possimus eos aspernatur,
                  reprehenderit temporibus ad ullam, odit cumque consequuntur
                  aliquam iusto dignissimos. Assumenda molestiae aspernatur non?
                  Iure corrupti voluptatum quae saepe laborum nostrum?
                  Distinctio qui earum nostrum ullam ipsum laboriosam tenetur ex
                  dignissimos recusandae, culpa minus nisi blanditiis ea
                  asperiores mollitia modi natus tempore fugit. Qui possimus
                  suscipit minus ipsam! Praesentium aperiam ipsa in enim maiores
                  impedit suscipit placeat, nisi nesciunt nulla nobis, quam
                  dolores recusandae ab reprehenderit voluptatum libero officia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
