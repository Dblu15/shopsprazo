"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ProductCard from '../../product/ProductCard';

export default function GroceryProductTabs() {
    const [activeTab, setActiveTab] = useState('newarrivals');

    // Dữ liệu mẫu tạm thời cho chức năng render (Giống với file HTML gốc)
    const newArrivals = [
        { id: 1, title: 'walnut dry fruit', price: '$5', image: '/images/6_2.jpg', hoverImage: '/images/5_2.jpg', category: 'Dry Fruit', rating: 2, stock: '2kg left', flags: [] },
        { id: 2, title: 'Vegetable Pickles', price: '$25', oldPrice: '$30', image: '/images/9_1.jpg', hoverImage: '/images/9_1.jpg', category: 'Pickles', rating: 5, flags: ['sale'] },
        { id: 3, title: 'Fresh Apples', price: '$10', oldPrice: '$12', image: '/images/7_2.jpg', hoverImage: '/images/8_2.jpg', category: 'Fruits', rating: 5, flags: [] },
        { id: 4, title: 'Fresh vegetables', price: '$15', image: '/images/1_5.jpg', hoverImage: '/images/2_5.jpg', category: 'vegetables', rating: 4, flags: ['New'] },
        { id: 5, title: 'Dates value fresh', price: '$8', oldPrice: '$10', image: '/images/3_3.jpg', hoverImage: '/images/4_3.jpg', category: 'Dry Fruits', rating: 5, flags: ['-10%'] }
    ];

    const swiperBreakpoints = {
        0: { slidesPerView: 1, spaceBetween: 15 },
        420: { slidesPerView: 2, spaceBetween: 24 },
        768: { slidesPerView: 3, spaceBetween: 24 },
        992: { slidesPerView: 4, spaceBetween: 24 },
        1200: { slidesPerView: 4, spaceBetween: 24 }
    };

    return (
        <section className="sp-product-tab sp-products padding-tb-50 aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="container">
                <div className="row">
                    <div className="section-detail detail-two">
                        <div className="sp-title">
                            <p><img src="/fonts/15.svg" alt="" />Feature Products</p>
                            <h2 data-cursor="big" aria-label="Our Features Collection" style={{ perspective: "500px" }}>
                                <div className="split-line" aria-hidden="true" style={{ position: "relative", display: "block", textAlign: "start" }}>
                                    <div aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>Our</div>{" "}
                                    <div aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>Features</div>{" "}
                                    <div aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>Collection</div>
                                </div>
                            </h2>
                        </div>
                        <div className="sp-tab">
                            <ul className="sp-pro-tab-nav nav" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className={`nav-link ${activeTab === 'newarrivals' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveTab('newarrivals'); }} href="#newarrivalstab" role="tab">New Arrivals</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className={`nav-link ${activeTab === 'bestsellers' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveTab('bestsellers'); }} href="#bestsellerstab" role="tab">Best Sellers</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className={`nav-link ${activeTab === 'toprates' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveTab('toprates'); }} href="#topratestab" role="tab">Top Rates</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row mtb-minus-12">
                    <div className="tab-content">
                        {/* 1st Product tab */}
                        <div className={`tab-pane fade ${activeTab === 'newarrivals' ? 'show active' : ''}`} id="newarrivalstab" role="tabpanel">
                            {activeTab === 'newarrivals' && (
                                <Swiper
                                    modules={[Autoplay]}
                                    loop={true}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    speed={1000}
                                    breakpoints={swiperBreakpoints}
                                    className="sp-product-slider"
                                >
                                    {newArrivals.map((product, index) => (
                                        <SwiperSlide key={index}>
                                            <ProductCard product={product} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </div>

                        {/* 2nd Product tab */}
                        <div className={`tab-pane fade ${activeTab === 'bestsellers' ? 'show active' : ''}`} id="bestsellerstab" role="tabpanel">
                            {activeTab === 'bestsellers' && (
                                <Swiper
                                    modules={[Autoplay]}
                                    loop={true}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    speed={1000}
                                    breakpoints={swiperBreakpoints}
                                    className="sp-product-slider"
                                >
                                    {[...newArrivals].reverse().map((product, index) => (
                                        <SwiperSlide key={`bs-${index}`}>
                                            <ProductCard product={product} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </div>

                        {/* 3rd Product tab */}
                        <div className={`tab-pane fade ${activeTab === 'toprates' ? 'show active' : ''}`} id="topratestab" role="tabpanel">
                            {activeTab === 'toprates' && (
                                <Swiper
                                    modules={[Autoplay]}
                                    loop={true}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    speed={1000}
                                    breakpoints={swiperBreakpoints}
                                    className="sp-product-slider"
                                >
                                    {[...newArrivals].sort(() => Math.random() - 0.5).map((product, index) => (
                                        <SwiperSlide key={`tr-${index}`}>
                                            <ProductCard product={product} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
