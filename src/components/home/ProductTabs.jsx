"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/mockData";

const tabs = ["New Arrivals", "Best Sellers", "Top Rated", "Featured"];

export default function ProductTabs() {
    const [activeTab, setActiveTab] = useState(0);

    // Simulate different product sets per tab (in real app, filter by category)
    const getProducts = (tabIndex) => {
        const start = (tabIndex * 3) % products.length;
        const result = [];
        for (let i = 0; i < Math.min(10, products.length); i++) {
            result.push(products[(start + i) % products.length]);
        }
        return result;
    };

    return (
        <section className="sp-product-tab-2 p-tb-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="container">
                <div className="row">
                    <div className="section-detail centerd">
                        <div className="sp-title">
                            <p><img src="/fonts/15.svg" alt="" />Products</p>
                            <h2 data-cursor="big">Our Featured Products</h2>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="row">
                    <div className="col-12">
                        <ul className="nav nav-tabs sp-product-tab" role="tablist">
                            {tabs.map((tab, i) => (
                                <li className="nav-item" key={i}>
                                    <button
                                        className={`nav-link ${activeTab === i ? "active" : ""}`}
                                        onClick={() => setActiveTab(i)}
                                        type="button"
                                    >
                                        {tab}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Products Slider */}
                <div className="tab-content">
                    <div className="tab-pane fade show active">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={24}
                            loop={true}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            speed={500}
                            className="sp-product-slider"
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                420: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1200: { slidesPerView: 4 },
                                1400: { slidesPerView: 5 },
                            }}
                        >
                            {getProducts(activeTab).map((product, i) => (
                                <SwiperSlide key={`${activeTab}-${product.id}-${i}`}>
                                    <ProductCard product={product} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
