"use client";
import React from 'react';

export default function GrocerySubscribe() {
    return (
        <section className="sp-subscribe p-tb-50 aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="container">
                <div className="row">
                    <div className="section-detail centerd">
                        <div className="sp-title">
                            <p><img src="/fonts/15.svg" alt="" />Subscribe Now: Get Exclusive Updates and Content!</p>
                            <h2 data-cursor="big" aria-label="Stay Updated: Subscribe for Exclusive Content" style={{ perspective: "500px" }}>
                                <div className="split-line" aria-hidden="true" style={{ position: "relative", display: "block", textAlign: "center" }}>
                                    <div aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>Stay</div>{" "}
                                    <div aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>Updated:</div>{" "}
                                    <div aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>Subscribe</div>{" "}
                                    <div aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>for</div>{" "}
                                    <div aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>Exclusive</div>
                                </div>
                                <div className="split-line" aria-hidden="true" style={{ position: "relative", display: "block", textAlign: "center" }}>
                                    <div aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>Content</div>
                                </div>
                            </h2>
                        </div>
                    </div>
                    <div className="sp-subscribe-form">
                        <form>
                            <input type="text" placeholder="Enter your email" />
                            <a href="#" onClick={(e) => e.preventDefault()} className="sp-btn-4">Subscribe!</a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
