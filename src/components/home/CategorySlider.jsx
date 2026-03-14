"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import { categories } from "@/data/mockData";

export default function CategorySlider() {
    return (
        <section className="sp-category-2 p-tb-50" id="category" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
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
                    speed={500}
                    className="sp-category-slider"
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        420: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        992: { slidesPerView: 5 },
                        1200: { slidesPerView: 6 },
                    }}
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
