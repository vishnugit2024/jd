import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import profileImage from "../../Images/blog1.jpg";
import "./paid-listing.css";

const page = () => {
    const Arr = [
        {
            name: "Digi India Solution",
            location: "near Babosa Mandir in Rohini Sector 24",
            description: "is a delightful spot for delicious baked goods. The bakery offers a wide range of mouthwatering treats that ...",
            rating: 4.0,
            image: profileImage,
            link: "https://www.justdial.com"
        },
        {
            name: "Media Men Advertising",
            location: "near Babosa Mandir in Rohini Sector 24",
            description: "is a delightful spot for delicious baked goods. The bakery offers a wide range of mouthwatering treats that ...",
            rating: 4.0,
            reviews: 49974,
            image: profileImage,
            link: "https://www.justdial.com"
        },
        {
            name: "Digital Marketing Solutions",
            location: "near Babosa Mandir in Rohini Sector 24",
            description: "is a delightful spot for delicious baked goods. The bakery offers a wide range of mouthwatering treats that ...",
            rating: 4.0,
            reviews: 49974,
            image: profileImage,
            link: "https://www.justdial.com"
        },
        {
            name: "Ashrey Property Realtors",
            location: "near Babosa Mandir in Rohini Sector 24",
            description: "is a delightful spot for delicious baked goods. The bakery offers a wide range of mouthwatering treats that ...",
            rating: 4.0,
            reviews: 49974,
            image: profileImage,
            link: "https://www.justdial.com"
        },
    ];

    return (
        <section className="custom-section">
            <div className="container">
                {/* <h2 className="custom-title">Best Cake Shops in Rohini, Delhi - Justdial</h2> */}
                <div className="custom-row">
                    {Arr.map((shop, index) => (
                        <div key={index} className="custom-col">
                            <div>
                                <div className="listing-content">
                                    <Image src={shop.image} className="paid-listing-image" alt={shop.name} />
                                    <div className='d-grid'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <Link className='listing-brand-name' href={"#"}>Biziffy</Link>
                                            <span className='verified-text'><i className="bi bi-check-all"></i> Biziffy Verified</span>
                                        </div>
                                        <Link href={"https://digiindiasolution.com"}>digiindiasolution.com</Link>
                                    </div>
                                </div>
                                <div className="align-items-center">
                                    <Link href={shop.link} className="listing-title">{shop.name}</Link>
                                    <p className="listing-description">{shop.description.slice(0,90)}...</p>
                                </div>

                            </div>
                            <div className="listing-image">
                                <Image src={shop.image} className="paid-listing-image" alt={shop.name} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default page;
