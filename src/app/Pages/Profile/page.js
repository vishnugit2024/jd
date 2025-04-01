'use client';
import React from 'react';
import profileImage from '../../Images/gourav.jpg';
import Image from 'next/image';
import Link from 'next/link';
import './profile.css';

const ProfilePage = () => {
    const userProfile = {
        name: 'Maria Fernanda',
        userType: 'Premium User',
        plans: 'Premium',
        email: 'gouravpanchal80107@gmail.com',
        mobile: '9131904943',
        address: 'Digi India Solution, Rohini Sector 24',
        city: 'Rampura',
        state: 'Bhagalpura',
        planDetail: [
            'Featured Business Listing',
            'Business Description & Contact Details',
            '5 Product/Service Listings',
            'Social Media Links',
            'Inquiry Form Integration',
        ],
    };

    return (
        <section className='profile-section'>
            <div className='container text-center py-4'>
                <h3 className='heading-title'>Profile</h3>
                <p className='text-center m-0'>View All Your Profile Details Here.</p>
            </div>
            
            <div className='container mt-4'>
                <div className='row g-4'>
                    {/* Profile Image & Basic Info */}
                    <div className='col-lg-4 col-md-5 text-center'>
                        <div className='profile-image-main'>
                            <Image src={profileImage} alt='Profile' className='profile-img' />
                            <h3>{userProfile.name}</h3>
                            <p className='text-success m-0'>{userProfile.userType}</p>
                        </div>
                    </div>

                    {/* Profile Details */}
                    <div className='col-lg-8 col-md-7'>
                        <div className='profile-details'>
                            <h5>Bio & Other Details</h5>
                            <hr />
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <p><strong>Name:</strong> {userProfile.name}</p>
                                    <p><strong>Email:</strong> {userProfile.email}</p>
                                    <p><strong>Mobile No.:</strong> {userProfile.mobile}</p>
                                    <p><strong>Address:</strong> {userProfile.address}</p>
                                </div>
                                <div className='col-sm-6'>
                                    <p><strong>City:</strong> {userProfile.city}</p>
                                    <p><strong>State:</strong> {userProfile.state}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Plan Details */}
                    <div className='col-12'>
                        <div className='profile-plan-table p-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h3>My Plan</h3>
                                <h1 className='text-primary'>Premium Plan</h1>
                                <h3 className='text-warning'>₹2999</h3>
                            </div>
                            <hr />
                            <div>
                                <h5>Plan Details:</h5>
                                <ul className='plan-list'>
                                    {userProfile.planDetail.map((item, index) => (
                                        <li key={index}><i className='bi bi-check-circle text-success'></i> {item}</li>
                                    ))}
                                </ul>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between'>
                                <h5 className='m-0'>Plan Status:</h5>
                                <p className='text-success m-0'>Active <i className='bi bi-check-circle'></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;