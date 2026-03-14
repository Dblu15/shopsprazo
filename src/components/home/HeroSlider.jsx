"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import { heroSlides } from "@/data/mockData";

export default function HeroSlider() {
    return (
        <section className="sp-hero-2">
            <div className="sp-icon-set"></div>
            <div className="container">
                <div className="row">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        speed={500}
                        className="sp-hero-slide"
                    >
                        {heroSlides.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <div className="sp-hero-block">
                                    <div className="row">
                                        <div className="col-xl-7 col-lg-6">
                                            <div className="sp-hero-details sp-animation">
                                                <h1 data-cursor="big">
                                                    <span>{slide.subtitle}</span> <br />
                                                    {slide.title}
                                                </h1>
                                                <p>{slide.description}</p>
                                                <div className="sp-btns">
                                                    <Link href={slide.link} className="sp-btn-3">
                                                        Shop Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-lg-6 m-t-991">
                                            <div className="sp-slide-img">
                                                <div className="sp-slide-img-box">
                                                    <div className="shape"></div>
                                                    <img src={slide.image} alt="hero" />
                                                </div>
                                            </div>
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
