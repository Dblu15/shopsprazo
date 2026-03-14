"use client";
import React from 'react';
import Link from 'next/link';

export default function GroceryHero() {
    return (
        <section className="sp-hero">
            <div className="sp-icon-set">
                {/* Icons */}
                <img className="icon-1" src="/fonts/1_1.svg" alt="icons" />
                <img className="icon-2" src="/fonts/2_1.svg" alt="icons" />
                <img className="icon-3" src="/fonts/3_1.svg" alt="icons" />
                <img className="icon-4" src="/fonts/4_1.svg" alt="icons" />
                <img className="icon-5" src="/fonts/5_1.svg" alt="icons" />
                <img className="icon-6" src="/fonts/6_1.svg" alt="icons" />
                <img className="icon-7" src="/fonts/7_1.svg" alt="icons" />
                <img className="icon-8" src="/fonts/8.svg" alt="icons" />
                <img className="icon-9" src="/fonts/9.svg" alt="icons" />
                <img className="icon-10" src="/fonts/10.svg" alt="icons" />
                <img className="icon-11" src="/fonts/11.svg" alt="icons" />
                <img className="icon-12" src="/fonts/12.svg" alt="icons" />
                <img className="icon-13" src="/fonts/13.svg" alt="icons" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="sp-hero-details">
                            <h1 className="main-title" data-cursor="big" aria-label="Your One - Stop Shop For Quality Groceries" style={{ opacity: 1 }}>
                                <span style={{ display: "inline-block" }}>
                                    Your One - Stop Shop For
                                </span> <br style={{ display: "inline-block" }} />
                                Quality Groceries
                            </h1>
                            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="aos-init aos-animate">
                                Expand your business worldwide in just minutes with tailored currencies,<br />
                                languages, and customer experiences designed for every market.
                            </p>
                            <div className="sp-btns aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                <Link href="/shop" className="sp-btn-3">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="sp-info aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <ul>
                                <li><a href="javascript:void(0)"><img src="/images/1_1.png" alt="hero" /></a></li>
                                <li><a href="javascript:void(0)"><img src="/images/2_1.png" alt="hero" /></a></li>
                                <li><a href="javascript:void(0)"><img src="/images/3_2.png" alt="hero" /></a></li>
                                <li><a href="javascript:void(0)"><img src="/images/4_1.png" alt="hero" /></a></li>
                                <li className="add-icon"><a href="javascript:void(0)">+</a></li>
                            </ul>
                            <h6>500k +</h6>
                            <p>Happy Customer</p>
                        </div>
                        <div className="sp-rounded-circle aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                            <a href="#category">
                                <svg viewBox="0 0 100 100" width="130" height="130">
                                    <defs>
                                        <path id="circle" d=" M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0">
                                        </path>
                                    </defs>
                                    <text>
                                        <textPath href="#circle">
                                            FIND OUT MORE * FIND OUT MORE * FIND OUT MORE *
                                        </textPath>
                                    </text>
                                </svg>
                                <div className="inner-contact">
                                    <img src="/images/icon.png" alt="favicon" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
