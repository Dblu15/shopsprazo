"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';

export default function FashionBanners() {
    const banners = [
        { id: 1, cls: 'bnr-4', text: "Women's Fashion 15% off" },
        { id: 2, cls: 'bnr-5', text: "Men's Fashion 35% off Discounts" },
        { id: 3, cls: 'bnr-6', text: "Kid's Fashion 20% off Discounts" }
    ];

    return (
        <section className="sp-banner-2 half-bg-2 p-t-100 p-b-50 m-t-50">
            <div className="container">
                <div className="row">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={24}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        speed={1000}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 2 }
                        }}
                        className="sp-banner-list"
                    >
                        {banners.map((banner) => (
                            <SwiperSlide key={banner.id}>
                                <div className={`item bnr ${banner.cls}`}>
                                    <div className="sp-details">
                                        <div className="btns">
                                            <Link href="/shop" className="btn sp-btn-1">Shop Now</Link>
                                            <a href="#" className="sp-wish"><i className="ri-heart-line"></i></a>
                                        </div>
                                        <div className="sp-bnr-text">
                                            <h3>
                                                <span className="text_bg">{banner.text}</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
