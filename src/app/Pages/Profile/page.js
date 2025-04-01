'use client';
import React, { useState } from 'react';
import profileImage from '../../Images/gourav.jpg';
import Image from 'next/image';
import Link from 'next/link';
import './profile.css';

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('overview');

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
            {/* <div className='container text-center py-2'>
                <h3 className='heading-title'>Profile</h3>
                <p className='text-center m-0'>View All Your Profile Details Here.</p>
            </div>
            <hr /> */}
            <div className='container'>
                <div className='row'>
                    {/* Sidebar with Tabs */}
                    <div className='col-md-3 p-0'>
                        <div className='sidebar'>
                            <div className='d-grid justify-content-center text-center'>
                                <Image src={profileImage} alt='Profile' className='profile-img' />
                                <h3 className='text-white'>{userProfile.name}</h3>
                                <p className='text-success m-0'>{userProfile.userType}</p>
                            </div>
                            <hr className='text-white' />
                            <button className={`sidebar-tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
                                <i className='bi bi-person-circle'></i> Overview
                            </button>
                            <button className={`sidebar-tab ${activeTab === 'edit' ? 'active' : ''}`} onClick={() => setActiveTab('edit')}>
                                <i className='bi bi-pencil-square'></i> Edit Profile
                            </button>
                            <button className={`sidebar-tab ${activeTab === 'plan' ? 'active' : ''}`} onClick={() => setActiveTab('plan')}>
                                <i className='bi bi-list-check'></i> My Plan
                            </button>
                            <button className={`sidebar-tab ${activeTab === 'plan' ? 'active' : ''}`} onClick={() => setActiveTab('plan')}>
                                <i className='bi bi-list-check'></i> Listing
                            </button>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className='col-md-9 p-3'>
                        {activeTab === 'overview' && (
                            <div className='profile-overview'>
                                <h3>Bio & Other Details:</h3>
                                <hr />
                                <div className='row mt-3'>
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
                        )}

                        {activeTab === 'edit' && (
                            <div className='profile-edit'>
                                <h3>Edit Profile</h3>
                                <p>Update your profile details below:</p>
                                <hr />

                                <form>
                                    <div className='mb-3'>
                                        <label className='form-label'>Name</label>
                                        <input type='text' className='form-control' defaultValue={userProfile.name} />
                                    </div>
                                    <div className='mb-3'>
                                        <label className='form-label'>Email</label>
                                        <input type='email' className='form-control' defaultValue={userProfile.email} />
                                    </div>
                                    <div className='mb-3'>
                                        <label className='form-label'>Mobile</label>
                                        <input type='text' className='form-control' defaultValue={userProfile.mobile} />
                                    </div>
                                    <button className='btn btn-primary'>Save Changes</button>
                                </form>
                            </div>
                        )}

                        {activeTab === 'plan' && (
                            <div className='profile-plan-table'>
                                <h3>My Plan</h3>
                                <hr />

                                <div className='d-flex justify-content-between align-items-center'>
                                    <h1 className='text-primary'>Premium Plan</h1>
                                    <h3 className='text-warning'>₹2999</h3>
                                </div>
                                <div>
                                    <h5>Plan Details:</h5>
                                    <ul className='plan-list'>
                                        {userProfile.planDetail.map((item, index) => (
                                            <li key={index}><i className='bi bi-check-circle text-success'></i> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h5 className='m-0'>Plan Status:</h5>
                                    <p className='text-success m-0'>Active <i className='bi bi-check-circle'></i></p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;