import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blueImage from '../../Images/blue-bg.png';
import heroimage2 from '../../Images/heroimage2.png';
import './hero.css';

const Hero = () => {
    return (
        <section className='hero-main'>

            <div className="container">
                <div className="row align-items-center">
                    {/* Left Content */}
                    <div className="col-lg-7 col-md-12">
                        <div className="hero-content">
                            <h1 className='hero-title'>
                                Complete <span>Web Design</span> & Development
                            </h1>
                            <p className='hero-text'>
                                Say goodbye to sleepless nights over counterproductive 
                                communications between service providers. No more overbilling 
                                nightmares for services you’re not sure you need but have to pay for.
                            </p>
                            <div className='hero-buttons'>
                                <Link href="#" className="herobutton1">View All Categories</Link>
                                <Link href="#" className="herobutton2">Book a Free Consultation</Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Image */}
                    <div className="col-lg-5 col-md-12 d-flex justify-content-center position-relative">
                        <div className='hero-image-container'>
                            <Image
                                src={heroimage2}
                                alt="Hero Illustration"
                                layout="intrinsic"
                                className='hero-animated-image'
                            />
                            <Image
                                src={blueImage}
                                alt="Background Shape"
                                layout="intrinsic"
                                className='hero-background-shape'
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
