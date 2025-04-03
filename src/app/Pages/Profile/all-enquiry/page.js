import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './all-enquiry.css';

const Page = () => {
    const enquiries = [
        {
            srNo: 1,
            userName: 'Gourav Panchal',
            title: 'Web Development',
            name: 'Test',
            location: "Delhi, India",
            phone: '123-456-7890',
            message: 'Looking for advertising services',
            requirement: 'Call',
            date: '2025-04-03',
        },
        {
            srNo: 2,
            userName: 'Aman Tiwari',
            title: 'Front-end Developer',
            name: 'Test',
            location: "Delhi, India",
            phone: '987-654-3210',
            message: 'Looking for front-end project help',
            requirement: 'Email',
            date: '2025-04-02',
        },
    ];

    return (
        <section className="all-enquiry py-3">
            <div className="container">
            <h2 className="edit-profile-title">All Enquiries</h2>
            <hr />
                <div className="row">
                    {enquiries.map((enquiry, index) => (
                        <div key={index} className="col-md-6">
                            <div className="enquiry-card card border-0 shadow-sm p-4 rounded-4">
                                <div className="d-flex  justify-content-between mb-3">
                                    <div>
                                        <h5 className="user-name fw-bold text-primary">{enquiry.userName}</h5>
                                        <span className="badge bg-light text-dark">
                                            <i className="bi bi-geo-alt-fill text-danger me-1"></i> {enquiry.location}
                                        </span>
                                    </div>
                                    <span className="text-muted">{enquiry.date}</span>
                                </div>

                                <h6 className="enquiry-title text-dark fw-semibold">{enquiry.title}</h6>
                                <p className="enquiry-message text-muted">{enquiry.message}</p>

                                <div className="actions d-flex gap-3">
                                    <a href={`tel:${enquiry.phone}`} className="enquiry-call rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="bi bi-telephone"></i>
                                    </a>
                                    <a href={`mailto:test@example.com`} className="enquiry-msg rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="bi bi-envelope"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Page;
