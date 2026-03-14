"use client";
import Link from "next/link";
import { useState } from "react";

export default function ContactContent() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Add logic to send message here
    };

    return (
        <>
            <section className="sp-breadcrumb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-detail">
                                <h2 data-cursor="big">Contact Us</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li><Link href="/">Home</Link></li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sp-contact-page p-tb-50">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                            <div className="sp-contact-info-block text-center p-4 border rounded h-100">
                                <div className="icon mb-3">
                                    <i className="ri-map-pin-line text-primary" style={{ fontSize: "2rem" }}></i>
                                </div>
                                <h4>Office Address</h4>
                                <p className="text-muted mb-0">123 Fashion Street, New York, NY 10001, United States</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                            <div className="sp-contact-info-block text-center p-4 border rounded h-100">
                                <div className="icon mb-3">
                                    <i className="ri-phone-line text-primary" style={{ fontSize: "2rem" }}></i>
                                </div>
                                <h4>Call Us</h4>
                                <p className="text-muted mb-0">+1 (234) 567-890<br />+1 (987) 654-321</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="sp-contact-info-block text-center p-4 border rounded h-100">
                                <div className="icon mb-3">
                                    <i className="ri-mail-line text-primary" style={{ fontSize: "2rem" }}></i>
                                </div>
                                <h4>Email Us</h4>
                                <p className="text-muted mb-0">info@sprazo.com<br />support@sprazo.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="sp-contact-form bg-light p-4 p-md-5 rounded">
                                <h2 className="mb-4">Get In Touch</h2>
                                {submitted ? (
                                    <div className="alert alert-success">Your message has been sent successfully. We will get back to you soon!</div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label>Your Name *</label>
                                                <input type="text" className="form-control" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label>Your Email *</label>
                                                <input type="email" className="form-control" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label>Subject</label>
                                                <input type="text" className="form-control" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
                                            </div>
                                            <div className="col-12 mb-4">
                                                <label>Message *</label>
                                                <textarea className="form-control" rows="5" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="sp-btn-1 border-0">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sp-contact-map h-100 min-h-300">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528001099!2d-74.14483162657396!3d40.697631233306854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1683884814887!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: "400px" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
