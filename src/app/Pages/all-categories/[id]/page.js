'use client';
import { useEffect, useState } from 'react';
import './page.css';
import gourav from '../../../Images/gourav.jpg';
import gourav2 from '../../../Images/gourav2.jpg';
import gourav3 from '../../../Images/gourav3.jpg';
import Image from 'next/image';
import Link from 'next/link';
import breadbg from "../../../Images/bread.jpg"

const page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showAllHours, setShowAllHours] = useState(false);

    const hours = [
        { day: 'Monday', open: '09:00 AM', close: '10.00 AM' },
        { day: 'Tuesday', open: '09:00 AM', close: '07:00 PM' },
        { day: 'Wednesday', open: '09:00 AM', close: '07:00 PM' },
        { day: 'Thursday', open: '09:00 AM', close: '07:00 PM' },
        { day: 'Friday', open: '09:00 AM', close: '07:00 PM' },
        { day: 'Saturday', open: '10:00 AM', close: '05:00 PM' },
        { day: 'Sunday', open: 'Closed', close: 'Closed' },
    ];

    const getCurrentDay = () => {
        const today = new Date().getDay();
        return today === 0 ? 6 : today - 1;
    };

    const isCurrentlyOpen = (openTime, closeTime) => {
        if (openTime === 'Closed') return false;
        const now = new Date();
        const current = now.getHours() * 60 + now.getMinutes();
        const [openHours, openMinutes] = openTime.split(/[: ]/);
        const [closeHours, closeMinutes] = closeTime.split(/[: ]/);

        const open = (parseInt(openHours) % 12 + (openTime.includes('PM') ? 12 : 0)) * 60 + parseInt(openMinutes);
        const close = (parseInt(closeHours) % 12 + (closeTime.includes('PM') ? 12 : 0)) * 60 + parseInt(closeMinutes);

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
            name: 'Pasricha Clinic',
            rating: 3.4,
            reviews: 5,
            address: 'Shop 20, C S C II, Sector XIII, Rohini, Delhi',
            phone: '+91 9810000000',
            description: 'Very polite and extremely knowledgeable doctor.',
            image: gourav,
            services: ['General Check-up', 'Vaccination', 'Health Consultation'],
            reviewsData: [
                { author: 'John Doe', comment: 'Excellent service and very polite staff.' },
                { author: 'Jane Smith', comment: 'The doctor is very knowledgeable and kind.' }
            ]
        },
        {
            id: 2,
            name: 'The Holistic Clinic',
            rating: 5.0,
            reviews: 86,
            address: 'Pkt 4, Ground Floor, Rohini, Delhi',
            phone: '+91 9810000122',
            description: 'On-site services with excellent care.',
            image: gourav2,
            services: ['Holistic Health Services', 'Yoga and Meditation', 'Nutritional Advice'],
            reviewsData: [
                { author: 'Emily Brown', comment: 'Amazing care and holistic approach!' },
                { author: 'Chris Wilson', comment: 'Best place for holistic health services.' }
            ]
        },
        {
            id: 3,
            name: 'Sharva Clinic',
            rating: 5.0,
            reviews: 75,
            address: '226 Ground Floor, Rohini, Delhi',
            phone: '+91 981004598',
            description: 'The doctor is very attentive and professional.',
            image: gourav3,
            services: ['Pediatrics', 'General Surgery', 'Orthopedics'],
            reviewsData: [
                { author: 'Mark Lee', comment: 'Highly professional and caring staff.' },
                { author: 'Sarah Johnson', comment: 'Would recommend to everyone!' }
            ]
        }
    ];
    const [activeTab, setActiveTab] = useState('overview');
    const [selected, setSelected] = useState(businesses[0]);

    const [newReview, setNewReview] = useState({ author: '', comment: '' });
    const [showForm, setShowForm] = useState(false);

    const handleAddReview = () => {
        if (newReview.author.trim() && newReview.comment.trim()) {
            const updatedReviews = [
                ...selected.reviewsData,
                { author: newReview.author, comment: newReview.comment },
            ];
            setSelected({ ...selected, reviewsData: updatedReviews });
            setNewReview({ author: '', comment: '' });
            setShowForm(false);
        } else {
            alert('Please fill in both fields.');
        }
    };

    return (
        <>
            <div className='all-breadcrumb'>
                <Image
                    src={breadbg}
                    alt="Breadcrumb Background"
                    layout="fill"
                    objectFit="cover"
                />
                <div className='bread-overlay'></div> {/* Overlay should be separate */}
                <div className='container'>
                    <div className='bread-content'>
                        <h1>Your One-Stop Destination for Local Businesses</h1>
                        <nav aria-label="Breadcrumb" className="mb-4">
                            <ol>
                                <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
                                <li><i className="bi bi-chevron-double-right"></i></li>
                                <li><Link href="/Pages/all-categories" className="hover:text-blue-500">Categories</Link></li>
                                <li><i className="bi bi-chevron-double-right"></i></li>
                                <li className="text-gray-800 font-semibold" style={{color:"var(--blue)"}}>Business Name</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <section className='business-listing-page'>
                <div className='container'>
                    <div className="business-listing-container">
                        <h5 className='text-dark'>
                            Business Category Name
                        </h5>
                        <div className="row">
                            <div className="col-md-5 left-panel">
                                {businesses.map((biz) => (
                                    <div
                                        key={biz.id}
                                        className={`business-card d-flex align-items-center gap-3 ${selected.id === biz.id ? 'active' : ''}`}
                                        onClick={() => setSelected(biz)}>
                                        <div>
                                            <Image src={biz.image} alt={biz.name} className="listing-image mb-2" />
                                        </div>
                                        <div>
                                            <h5>{biz.name}</h5>
                                            <div className='d-flex gap-2 align-items-center'>
                                                <p>{biz.rating} <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> {biz.reviews}</p>
                                                <span>|</span>
                                                <p>Web Designer</p>
                                            </div>
                                            <div className='d-flex gap-2 align-items-center'>
                                                <p>7 years in business</p>
                                                <span>|</span>
                                                <p>Karnal, Haryana</p>
                                            </div>
                                            <div className='d-flex gap-2 align-items-center'>
                                                <div className="opening-hours-container">
                                                    <p className={`status ${isOpen ? 'open' : 'closed'}`}>{isOpen ? 'Open Now' : 'Closed Now'}</p>
                                                </div>
                                                <span>|</span>
                                                <p>Phone: {biz.phone}</p>
                                            </div>
                                            <div className='d-flex gap-2 align-items-center'>
                                                <p>On Site Services</p>
                                                <span>|</span>
                                                <p>Online Appointment</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="col-md-7 right-panel">
                                <div className="details-card">
                                    <h3>{selected.name}</h3>
                                    <Image src={selected.image} alt={selected.name} className="business-detail-image mb-3" />
                                    <div className='d-flex gap-2 align-items-center'>
                                        <p>{selected.rating} <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> {selected.reviews}</p>
                                        <span>|</span>
                                        <p>Web Designer</p>
                                    </div>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <p>7 years in business</p>
                                        <span>|</span>
                                        <p>Karnal, Haryana</p>
                                    </div>
                                    {/* End of copied data */}
                                    <ul className="nav nav-tabs mt-3">
                                        <li className="nav-item">
                                            <button className={`nav-link listing-tabs-btn ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
                                                Overview
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button className={`nav-link ${activeTab === 'service' ? 'active' : ''}`} onClick={() => setActiveTab('service')}>
                                                Service
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button className={`nav-link ${activeTab === 'review' ? 'active' : ''}`} onClick={() => setActiveTab('review')}>
                                                Review
                                            </button>
                                        </li>
                                    </ul>

                                    <div className="tab-content mt-3">
                                        <div className={`tab-pane fade ${activeTab === 'overview' ? 'show active' : ''}`}>
                                            <div className='d-flex gap-2'>
                                                <div className="opening-hours-container">
                                                    <p onClick={() => setShowAllHours(!showAllHours)} className={`status ${isOpen ? 'open' : 'closed'}`}>{isOpen ? 'Open Now' : 'Closed Now'} <i className="bi bi-chevron-down"></i></p>
                                                    {showAllHours && (
                                                        <ul className="opening-hours-list">
                                                            {hours.map((item, index) => (
                                                                <li key={index} className={today === index ? 'today' : ''}>
                                                                    <span>{item.day}</span>
                                                                    <span>{item.open} - {item.close}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                                <span>|</span>
                                                <p>Phone: {selected.phone}</p>
                                            </div>
                                            <div className='d-flex gap-2 align-items-center'>
                                                <p>On Site Services</p>
                                                <span>|</span>
                                                <p>Online Appointment</p>
                                            </div>
                                            <div>
                                                <hr />
                                                <h6>
                                                    <b>Profile</b>
                                                </h6>
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
                                        <div className={`tab-pane fade ${activeTab === 'service' ? 'show active' : ''}`}>
                                            <ul className="service-list">
                                                {selected.services?.map((service, index) => (
                                                    <li key={index}>{service}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className={`tab-pane fade ${activeTab === 'review' ? 'show active' : ''}`}>
                                            <ul className="review-list">
                                                {selected.reviewsData?.map((review, index) => (
                                                    <li key={index}>
                                                        <span className='review-name'>
                                                            {review.author.charAt(0)}
                                                        </span>
                                                        <div>
                                                            <div className='review-comment-star'>
                                                                <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i>
                                                            </div>
                                                            {`"${review.comment}"`} {" "}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className='text-center'>
                                                <button className="login-btn mb-2" onClick={() => setShowForm(!showForm)}>
                                                    {showForm ? 'Hide Review Form' : 'Write a Review'} <i className="bi bi-pencil"></i>
                                                </button>

                                                {showForm && (
                                                    <div className="add-review">
                                                        <h4>Add a Review </h4>
                                                        <input
                                                            type="text"
                                                            placeholder="Your Name"
                                                            className="login-input mb-2"
                                                            value={newReview.author}
                                                            onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                                                        />
                                                        <textarea
                                                            placeholder="Your Comment"
                                                            className="login-input mb-2"
                                                            value={newReview.comment}
                                                            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                                        ></textarea>
                                                        <button className="btn btn-primary" onClick={handleAddReview}>Submit</button>
                                                    </div>
                                                )}

                                            </div>
                                        </div>

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