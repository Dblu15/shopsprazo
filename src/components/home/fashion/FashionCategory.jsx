"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';

export default function FashionCategory() {
    const categories = [
        { id: 1, name: 'Shirts', image: '/images/1_2.jpg' },
        { id: 2, name: 'Watches', image: '/images/2_2.jpg' },
        { id: 3, name: 'Gowns', image: '/images/3.jpg' },
        { id: 4, name: 'Glasses', image: '/images/4.jpg' },
        { id: 5, name: 'Caps', image: '/images/5.jpg' },
        { id: 6, name: 'Shorts', image: '/images/6.jpg' },
        { id: 7, name: 'Jackets', image: '/images/7.jpg' },
        { id: 8, name: 'Shoes', image: '/images/8.jpg' }
    ];

    return (
        <section className="sp-category-2 p-tb-50" id="category">
            <div className="container">
                <div className="row">
                    <div className="section-detail centerd">
                        <div className="sp-title">
                            <p><img src="/fonts/15.svg" alt="" />Categories</p>
                            <h2 data-cursor="big">Featured Top Categories</h2>
                        </div>
                    </div>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    speed={1000}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        420: { slidesPerView: 3 },
                        768: { slidesPerView: 5 },
                        992: { slidesPerView: 6 },
                        1200: { slidesPerView: 8 }
                    }}
                    className="sp-category-slider"
                >
                    {categories.map((cat) => (
                        <SwiperSlide key={cat.id}>
                            <div className="sp-category-block">
                                <div className="category-detail">
                                    <div className="category-img">
                                        <img src={cat.image} alt="category" />
                                    </div>
                                    <div className="category-info">
                                        <h5><Link href="/shop">{cat.name}</Link></h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
