'use client';
import { useState } from 'react';
import './businessListing.css';
import gourav from '../../Images/gourav.jpg';
import gourav2 from '../../Images/gourav2.jpg';
import gourav3 from '../../Images/gourav3.jpg';
import Image from 'next/image';

const Page = () => {
    const businesses = [
        {
            id: 1,
            name: 'Pasricha Clinic',
            rating: 3.4,
            reviews: 5,
            address: 'Shop 20, C S C II, Sector XIII, Rohini, Delhi',
            phone: '+91 9810000000',
            description: 'Very polite and extremely knowledgeable doctor.',
            image: gourav
        },
        {
            id: 2,
            name: 'The Holistic Clinic',
            rating: 5.0,
            reviews: 86,
            address: 'Pkt 4, Ground Floor, Rohini, Delhi',
            phone: '+91 9810000122',
            description: 'On-site services with excellent care.',
            image: gourav2
        },
        {
            id: 3,
            name: 'Sharva Clinic',
            rating: 5.0,
            reviews: 75,
            address: '226 Ground Floor, Rohini, Delhi',
            phone: '+91 981004598',
            description: 'The doctor is very attentive and professional.',
            image: gourav3
        }
    ];

    const obfuscateAddress = (address) => {
        const [firstWord, secondWord, ...rest] = address.split(' ');
        return `${firstWord} ${secondWord} **********`;
    };
    const obfuscatemobile = (address) => {
        const [firstWord, ...rest] = address.split(' ');
        return `${firstWord} **********`;
    };


    const [selected, setSelected] = useState(businesses[0]);

    return (
        <section className='business-listing-page'>
            <div className='container'>
            <nav aria-label="breadcrumb" className="breadcrumb-container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Business Listings</li>
                    </ol>
                </nav>
                <hr />
                <div className="business-listing-container">
                    <h5 className='text-dark'>
                        Business Category Name
                    </h5>
                    <div className="row">
                        <div className="col-md-3 left-panel">
                            {businesses.map((biz) => (
                                <div
                                    key={biz.id}
                                    className={`business-card ${selected.id === biz.id ? 'active' : ''}`}
                                    onClick={() => setSelected(biz)}
                                >
                                    <Image src={biz.image} alt={biz.name} className="listing-image mb-2" />
                                    <h5>{biz.name}</h5>
                                    <p className='m-0'>Address: {obfuscateAddress(biz.address)}</p>
                                    <p>
                                        Phone: {obfuscatemobile(biz.phone)}
                                    </p>
                                    <p>{biz.rating} <i className="bi bi-star-fill"></i> ({biz.reviews} reviews)</p>
                                </div>
                            ))}
                        </div>

                        <div className="col-md-6 right-panel">
                            <div className="details-card">
                                <Image src={selected.image} alt={selected.name} className="business-detail-image mb-3" />
                                <h3>{selected.name}</h3>
                                <p>Rating: {selected.rating} <i className="bi bi-star-fill"></i> ({selected.reviews} reviews)</p>
                                <p>Address: {selected.address}</p>
                                <p>Description: {selected.description}</p>
                                <div className='d-flex gap-2 align-items-center'>
                                <a className='detail-card-number' href={`tell:${selected.phone}`}>
                                    <i className="bi bi-telephone-outbound"></i> {selected.phone}
                                </a>
                                <a className='detail-card-whatsapp' href={`https://wa.me/${selected.phone}`} target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-whatsapp"></i> WhatsApp
                                </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 enquiry-panel">
                            <div className='enquiry-card text-center'>
                                <p>
                                    Get more list of businesses
                                </p>
                                <form>
                                    <input type="text" placeholder="Enter your name" className="mb-3" />
                                    <input type="number" placeholder="+91 0000 000 000" className="mb-3" />
                                    <input type="email" placeholder="Enter your email" className="mb-3" />
                                    <button className="enquiry-btn">Submit Enquiry <i className="bi bi-chevron-double-right"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;