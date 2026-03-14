"use client";
import React from 'react';

export default function FashionSubscribe() {
    return (
        <section className="sp-subscribe p-tb-50">
            <div className="container">
                <div className="row">
                    <div className="section-detail centerd">
                        <div className="sp-title">
                            <p><img src="/fonts/15.svg" alt="" />Subscribe Now: Get Exclusive Updates and Content!</p>
                            <h2 data-cursor="big">Stay Updated: Subscribe for Exclusive Content</h2>
                        </div>
                    </div>
                    <div className="sp-subscribe-form">
                        <form>
                            <input type="text" placeholder="Enter your email" />
                            <a href="#" className="sp-btn-4">Subscribe!</a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
