"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tabs, Tab } from "react-bootstrap";
import "./freelistingform.css";
import Image from "next/image";
import BusinessDetails from "@/app/Components/FreeListingform/BusinessDetails";
import ContactPerson from "@/app/Components/FreeListingform/ContactPerson";
import BusinessTiming from "@/app/Components/FreeListingform/BusinessTiming";
import BusinessCategory from "@/app/Components/FreeListingform/BusinessCategory";
import UpgradeListing from "@/app/Components/FreeListingform/UpgradeListing";

import contactImage from "../../Images/Step1.png";
import businessImage from "../../Images/Step2.png";
import categoryImage from "../../Images/Step3.png";
import timingImage from "../../Images/Step3.png";
import upgradeImage from "../../Images/Step4.png";

const Page = () => {
  const [key, setKey] = useState("contact");

  const tabImages = {
    contact: contactImage,
    business: businessImage,
    category: categoryImage,
    timing: timingImage,
    upgrade: upgradeImage,
  };

  return (
    <>
      <section className="freelistingform-page-css">
        <div className="container">
          <div className="row">
            {/* Fixed Image Section */}
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <Image
                src={tabImages[key]}
                alt="Tab Illustration"
                className="tab-image"
              />
            </div>

            {/* Form Section */}
            <div className="col-md-6">
              <h4 className="tab-form-title">Please Fill Your Details</h4>
              <div className="free-listing-multitab">
                <Tabs activeKey={key} className="border-0">
                  <Tab eventKey="contact" className="tab-stlye">
                    <ContactPerson setKey={setKey} />
                  </Tab>
                  <Tab eventKey="business" className="tab-stlye">
                    <BusinessDetails setKey={setKey} />
                  </Tab>

                  <Tab eventKey="category" className="tab-stlye">
                    <BusinessCategory setKey={setKey} />
                  </Tab>
                  <Tab eventKey="timing" className="tab-stlye">
                    <BusinessTiming setKey={setKey} />
                  </Tab>
                  <Tab eventKey="upgrade" className="tab-stlye">
                    <UpgradeListing setKey={setKey} />
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
