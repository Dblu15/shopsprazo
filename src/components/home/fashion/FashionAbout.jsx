"use client";
import React from 'react';
import Link from 'next/link';

export default function FashionAbout() {
    return (
        <section className="sp-about-2 padding-tb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="sp-img-set">
                            <div className="sp-img-box">
                                <img className="main-img" src="/images/3_1.jpg" alt="about" />
                                <div className="sp-detail">
                                    <div className="info">
                                        <h3>15+</h3>
                                        <p>Years<br />Experience</p>
                                    </div>
                                    <div className="sp-shap">
                                        <img src="/images/4_1.jpg" alt="about" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-detail">
                            <div className="sp-title">
                                <p><img src="/fonts/15.svg" alt="" />About Our Company</p>
                                <h2 data-cursor="big">We Provide Cost Effective Solution For You</h2>
                            </div>
                        </div>
                        <p>It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.</p>
                        <div className="sp-details">
                            <div className="list">
                                <div className="icon">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M47.4194 13.5484C50.0874 13.5484 52.2581 11.3777 52.2581 8.70968C52.2581 6.04162 50.0874 3.87097 47.4194 3.87097C44.7513 3.87097 42.5806 6.04162 42.5806 8.70968C42.5806 11.3777 44.7513 13.5484 47.4194 13.5484ZM47.4194 5.80646C49.02 5.80646 50.3226 7.10904 50.3226 8.70968C50.3226 10.3103 49.02 11.6129 47.4194 11.6129C45.8187 11.6129 44.5161 10.3103 44.5161 8.70968C44.5161 7.10904 45.8187 5.80646 47.4194 5.80646Z"></path>
                                        <path d="M53.3594 45.3377L52.1952 46.9248C47.0787 53.9003 38.8606 58.0645 30.2119 58.0645H29.1958C14.1648 58.0645 1.93548 45.8352 1.93548 30.8042C1.93947 27.0254 2.72716 23.2886 4.24879 19.8298C5.77041 16.3709 7.99289 13.2653 10.7758 10.709L13.2348 8.45516L11.9265 7.02774L9.46742 9.28258C6.48703 12.0203 4.10685 15.3464 2.47729 19.0508C0.847727 22.7552 0.00419829 26.7572 0 30.8042C0 46.9026 13.0974 60 29.1958 60H30.2119C39.4752 60 48.2768 55.5406 53.7561 48.0697L55.0258 46.3374L58.0645 48.1616V38.9361L50.3777 43.5484L53.3594 45.3377ZM56.129 42.3552V44.7426L54.1384 43.5484L56.129 42.3552ZM15.4839 3.87097H17.4194V5.80645H15.4839V3.87097ZM19.3548 1.93549H21.2903V3.87097H19.3548V1.93549Z"></path>
                                    </svg>
                                </div>
                                <div className="info">
                                    <h5>Worldwide Services</h5>
                                    <p>It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem</p>
                                </div>
                            </div>
                            <div className="list">
                                <div className="icon">
                                    <svg width="60" height="60" viewBox="-4 0 30 30" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <g>
                                                <g>
                                                    <polyline className="cls-1" points="21.5 0.5 10.5 0.5 0.5 0.5"></polyline>
                                                    <line className="cls-1" x1="21.5" x2="17" y1="0.5" y2="12.5"></line>
                                                    <line className="cls-1" x1="0.5" x2="5" y1="0.5" y2="12.5"></line>
                                                    <circle className="cls-1" cx="11" cy="20" r="9.5"></circle>
                                                    <line className="cls-1" x1="8" x2="9" y1="0.5" y2="10.5"></line>
                                                    <line className="cls-1" x1="14" x2="13" y1="0.5" y2="10.5"></line>
                                                    <path className="cls-1" d="M11.49,15.35l.91,2.59a.52.52,0,0,0,.46.36l2.64.11a.54.54,0,0,1,.3,1l-2.07,1.71a.58.58,0,0,0-.18.57l.72,2.66a.53.53,0,0,1-.79.6l-2.19-1.54a.51.51,0,0,0-.58,0L8.52,24.91a.53.53,0,0,1-.79-.6l.72-2.66a.58.58,0,0,0-.18-.57L6.2,19.37a.54.54,0,0,1,.3-1l2.64-.11a.52.52,0,0,0,.46-.36l.91-2.59A.52.52,0,0,1,11.49,15.35Z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className="info">
                                    <h5>Best Company Award Winner</h5>
                                    <p>It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem</p>
                                </div>
                            </div>
                        </div>
                        <div className="sp-read">
                            <Link href="/about" className="sp-btn-4">Read More <i className="ri-arrow-right-long-line"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
