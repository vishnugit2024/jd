"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tabs, Tab } from "react-bootstrap";
import "./freelistingform.css";
import Image from "next/image";
import testImage from "../../Images/BusinessUpload.jpg";
import BusinessDetails from "@/app/Components/FreeListingform/BusinessDetails";
import ContactPerson from "@/app/Components/FreeListingform/ContactPerson";
import BusinessTiming from "@/app/Components/FreeListingform/BusinessTiming";
import BusinessCategory from "@/app/Components/FreeListingform/BusinessCategory";

const Page = () => {
  const [key, setKey] = useState("business");

  return (
    <>
      <section className="freelistingform-page-css">
        <div className="container">
          <div className="row">
            {/* Fixed Image Section */}
            <div className="col-md-6 d-none d-md-block">
              <div className="fixed-listing-image">
                <Image src={testImage} alt="Business" className="fixed-image" />
              </div>
            </div>

            {/* Form Section */}
            <div className="col-md-6">
              <h4 className="tab-form-title">
                Please Fill Your Business Details
              </h4>
              <div className="free-listing-multitab">
                <Tabs
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3 "
                >
                  <Tab eventKey="business" title="Business Details" className="tab-stlye">
                    <BusinessDetails setKey={setKey} />
                  </Tab>
                  <Tab eventKey="contact" title="Contact Person" className="tab-stlye">
                    <ContactPerson setKey={setKey} />
                  </Tab>
                  <Tab eventKey="timing" title="Business Timing" className="tab-stlye">
                    <BusinessTiming setKey={setKey} />
                  </Tab>
                  <Tab eventKey="category" title="Business Category" className="tab-stlye">
                    <BusinessCategory setKey={setKey} />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
