"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function FashionTestimonial() {
    const testimonials = [
        { id: 1, name: 'Julien Marceaux', role: 'Customer', image: '/images/1_4.jpg' },
        { id: 2, name: 'Erik Halvorsen', role: 'Manager', image: '/images/2_4.jpg' },
        { id: 3, name: 'Camille Varelli', role: 'Customer', image: '/images/3_3.jpg' },
        { id: 4, name: 'Marco Alvarello', role: 'Marketing', image: '/images/4_3.jpg' }
    ];

    return (
        <section className="sp-testimonial padding-tb-50">
            <div className="container">
                <div className="row">
                    <div className="section-detail">
                        <div className="sp-title">
                            <p><img src="/fonts/15.svg" alt="" />Our Testimonial</p>
                            <h2 data-cursor="big">What Our Clients Say About Us</h2>
                        </div>
                    </div>
                </div>
                <div className="sp-testimonial-slider" style={{ position: 'relative' }}>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={24}
                        loop={true}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        speed={1000}
                        navigation={{
                            nextEl: '.custom-nav-next',
                            prevEl: '.custom-nav-prev',
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 }
                        }}
                    >
                        {testimonials.map((t) => (
                            <SwiperSlide key={t.id}>
                                <div className="sp-testimonial-box">
                                    <div className="sp-detail">
                                        <div className="sp-icon">
                                            <i className="ri-double-quotes-l"></i>
                                        </div>
                                        <div className="sp-user">
                                            <div className="user-name">
                                                <h5>{t.name}</h5>
                                                <p>{t.role}</p>
                                            </div>
                                            <img src={t.image} alt="user" />
                                        </div>
                                    </div>
                                    <div className="testimonial-text">
                                        <p>There are many variations of is passages of Lorem Ipsum available, but the and majority have suffered alteration in some form.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="owl-nav">
                        <button type="button" className="owl-prev custom-nav-prev"></button>
                        <button type="button" className="owl-next custom-nav-next"></button>
                    </div>
                </div>
            </div>
        </section>
    );
}
