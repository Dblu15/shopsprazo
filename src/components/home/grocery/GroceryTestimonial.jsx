"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function GroceryTestimonial() {
    const swiperBreakpoints = {
        0: { slidesPerView: 1, spaceBetween: 24 },
        768: { slidesPerView: 2, spaceBetween: 24 },
        992: { slidesPerView: 3, spaceBetween: 24 }
    };

    const testimonials = [
        {
            id: 1,
            name: "Camille Varelli",
            role: "Customer",
            image: "/images/3_3.jpg",
            text: "There are many variations of is passages of Lorem Ipsum available, but the and majority have suffered alteration in some form."
        },
        {
            id: 2,
            name: "Marco Alvarello",
            role: "Marketing",
            image: "/images/4_3.jpg",
            text: "There are many variations of is passages of Lorem Ipsum available, but the and majority have suffered alteration in some form."
        },
        {
            id: 3,
            name: "Julien Marceaux",
            role: "Customer",
            image: "/images/1_4.jpg",
            text: "There are many variations of is passages of Lorem Ipsum available, but the and majority have suffered alteration in some form."
        },
        {
            id: 4,
            name: "Erik Halvorsen",
            role: "Manager",
            image: "/images/2_4.jpg",
            text: "There are many variations of is passages of Lorem Ipsum available, but the and majority have suffered alteration in some form."
        }
    ];

    return (
        <section className="sp-testimonial padding-tb-50 aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="container">
                <div className="row">
                    <div className="section-detail">
                        <div className="sp-title">
                            <p><img src="/fonts/15.svg" alt="" />Our Testimonial</p>
                            <h2 data-cursor="big" aria-label="What Our Clients Say About Us" style={{ perspective: "500px" }}>
                                <div className="split-line" aria-hidden="true" style={{ position: "relative", display: "block", textAlign: "start" }}>
                                    <div aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>What</div>{" "}
                                    <div aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>Our</div>{" "}
                                    <div aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>Clients</div>{" "}
                                    <div aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>Say</div>{" "}
                                    <div aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>About</div>{" "}
                                    <div aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>Us</div>
                                </div>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="sp-testimonial-slider" style={{ position: 'relative' }}>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        speed={1000}
                        navigation={{
                            nextEl: '.custom-nav-next',
                            prevEl: '.custom-nav-prev',
                        }}
                        breakpoints={swiperBreakpoints}
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="sp-testimonial-box">
                                    <div className="sp-detail">
                                        <div className="sp-icon">
                                            <i className="ri-double-quotes-l"></i>
                                        </div>
                                        <div className="sp-user">
                                            <div className="user-name">
                                                <h5>{item.name}</h5>
                                                <p>{item.role}</p>
                                            </div>
                                            <img src={item.image} alt="user" />
                                        </div>
                                    </div>
                                    <div className="testimonial-text">
                                        <p>{item.text}</p>
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
