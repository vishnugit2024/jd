import React from 'react'
import profileImage from "../../Images/gourav.jpg"
import Image from 'next/image';
import './profile.css'
import Link from 'next/link';
const page = () => {

    const userProfile = {
        name: "Maria Fernanda",
        userType: "Premium User",
        plans: "Premium",
        email: "gouravpanchal80107@gmail.com",
        mobile: 9131904943,
        address: "digi india solution rohini sector 24",
        city: "rampura",
        state: "bhagalpura",
        planDetail: [
            "Featured Business Listing",
            "Business Description & Contact Details",
            "5 Product/Service Listings",
            "Social Media Links",
            "Inquiry Form Integration"
        ]
    };

    return (
        <>
            <section className='profile-section'>
                <div className="heading-container container">
                    <h3 className="heading-title text-white">Profile</h3>
                    <p className="heading-subtitle text-white m-0">View All Your Profile Detail Here.</p>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="profile-image-main">
                                <Image
                                    src={profileImage}
                                    alt="Profile"
                                    className="profile-img"
                                />
                                <h3>{userProfile.name}</h3>
                                <p className="text-success">{userProfile.userType}</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="profile-details">
                                <h5>Bio & Other Details</h5>
                                <hr className="border-light" />
                                <div className="row">
                                    <div className="col-md-6">
                                        <p><span>My Plans :</span> {userProfile.plans}</p>
                                        <p><span>Email :</span> {userProfile.email}</p>
                                        <p><span>Mobile No. :</span> {userProfile.mobile}</p>
                                        <p><span>Address :</span> {userProfile.address}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p><span>City :</span> {userProfile.city}</p>
                                        <p>
                                            <span>State :</span>
                                            <span className="ms-2">{userProfile.state}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 mt-3'>
                            <div className='profile-social-media'>
                                <h3>
                                    Social Media
                                </h3>
                                <div className='social-media-urls'>
                                    <Link href={'#'}>
                                        <i className='bi bi-facebook'></i>
                                    </Link>
                                    <Link href={'#'}>
                                        <i className='bi bi-whatsapp'></i>
                                    </Link>
                                    <Link href={'#'}>
                                        <i className='bi bi-instagram'></i>
                                    </Link>
                                    <Link href={'#'}>
                                        <i className='bi bi-youtube'></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mt-3'>
                            <div className='profile-plan-table'>
                                <div className='profile-head-plan'>
                                    <h3>
                                        My Plan
                                    </h3>
                                    <h1>
                                        Premium Plan
                                    </h1>
                                    <h3>
                                        2999 Rs.
                                    </h3>
                                </div>
                                <hr />
                                <div className='plan-status'>
                                    <div>
                                        <h5>
                                            Plan Detail :
                                        </h5>
                                    <div className='plan-status-active'>
                                        <ul>
                                            {userProfile.planDetail.map((item, index) => (
                                                <li key={index}>
                                                    <i className="bi bi-check-circle"></i> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='plan-status'>
                                    <div>
                                        <h5>
                                            Plan Status :
                                        </h5>
                                    </div>
                                    <div className='plan-status-active'>
                                        <p>
                                            Active <i className="bi bi-check-circle"></i>
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default page