"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function GroceryPopularProducts() {
    const swiperBreakpoints = {
        0: { slidesPerView: 1, spaceBetween: 24 },
        420: { slidesPerView: 2, spaceBetween: 24 },
        768: { slidesPerView: 3, spaceBetween: 24 },
        992: { slidesPerView: 4, spaceBetween: 24 },
        1200: { slidesPerView: 5, spaceBetween: 24 }
    };

    const popularProducts = [
        {
            id: 1,
            name: "Butternut squash Pumpkin",
            images: ["/images/28_1.jpg", "/images/29_1.jpg"],
            category: "vegetables",
            price: "$11",
            oldPrice: "$12",
            unit: "2 kg",
            rating: 4,
            flags: [{ label: "New", class: "" }]
        },
        {
            id: 2,
            name: "Fresh Pineapple",
            images: ["/images/14_1.jpg", "/images/15_1.jpg"],
            category: "Fruit",
            price: "$5",
            oldPrice: null,
            unit: "1 kg",
            left: "2kg left",
            rating: 2,
            flags: [{ label: "sale", class: "" }]
        },
        {
            id: 3,
            name: "Fresh Passion Fruit",
            images: ["/images/16.jpg", "/images/17.jpg"],
            category: "Fruits",
            price: "$25",
            oldPrice: "$30",
            unit: "2 kg",
            rating: 5,
            flags: []
        },
        {
            id: 4,
            name: "Organic Spinach Leaves",
            images: ["/images/18.jpg", "/images/19.jpg"],
            category: "vegetables",
            price: "$9",
            oldPrice: "$15",
            unit: "1 kg",
            rating: 5,
            flags: []
        },
        {
            id: 5,
            name: "Organic Tomato",
            images: ["/images/10_1.jpg", "/images/11_1.jpg"],
            category: "Vegetables",
            price: "$2",
            oldPrice: "$3",
            unit: "500g",
            rating: 3,
            flags: []
        },
        {
            id: 6,
            name: "Green leaves Coriander",
            images: ["/images/12_2.jpg", "/images/13_2.jpg"],
            category: "Vegetables",
            price: "$10",
            oldPrice: "$12",
            unit: "100g",
            rating: 4,
            flags: [{ label: "New", class: "" }]
        },
        {
            id: 7,
            name: "Fresh Raspberry",
            images: ["/images/24_1.jpg", "/images/25_1.jpg"],
            category: "Fruit",
            price: "$22",
            oldPrice: null,
            unit: "1 kg",
            left: "5kg left",
            rating: 2,
            flags: []
        },
        {
            id: 8,
            name: "Organic okra",
            images: ["/images/26_1.jpg", "/images/27_1.jpg"],
            category: "Vegetable",
            price: "$25",
            oldPrice: "$30",
            unit: "2 kg",
            rating: 5,
            flags: [{ label: "Hot", class: "" }]
        }
    ];

    return (
        <section className="sp-product-popular sp-products padding-tb-50 aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="container">
                <div className="row">
                    <div className="section-detail">
                        <div className="sp-title">
                            <p><img src="/fonts/15.svg" alt="" />Best Products</p>
                            <h2 data-cursor="big" aria-label="Most popular products" style={{ perspective: "500px" }}>
                                <div className="split-line" aria-hidden="true" style={{ position: "relative", display: "block", textAlign: "start" }}>
                                    <div aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>Most</div>{" "}
                                    <div aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>popular</div>{" "}
                                    <div aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>products</div>
                                </div>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="mtb-minus-12">
                    <div className="sp-popular-slider" style={{ position: 'relative' }}>
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            speed={1000}
                            navigation={{
                                nextEl: '.custom-nav-next-grocery-popular',
                                prevEl: '.custom-nav-prev-grocery-popular',
                            }}
                            breakpoints={swiperBreakpoints}
                        >
                        {popularProducts.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="sp-product-box">
                                    <div className="sp-product-card">
                                        <div className="sp-pro-box">
                                            <div className="sp-pro-img">
                                                {product.flags.length > 0 && (
                                                    <span className="flags">
                                                        {product.flags.map((flag, idx) => (
                                                            <span key={idx} className={flag.class}>{flag.label}</span>
                                                        ))}
                                                    </span>
                                                )}
                                                <a href="/product">
                                                    <div className="inner-img">
                                                        <img className="main-img sp-product-img" src={product.images[0]} alt={product.name} />
                                                        <img className="hover-img" src={product.images[1]} alt={product.name} />
                                                    </div>
                                                </a>
                                                <ul className="sp-pro-actions">
                                                    <li className="sp-btn-group">
                                                        <a href="#" className="sp-wishlist" title="Wishlist">
                                                            <i className="ri-heart-line"></i>
                                                        </a>
                                                    </li>
                                                    <li className="sp-btn-group">
                                                        <a href="#" className="sp-quickview-btn">
                                                            <i className="ri-eye-line"></i>
                                                        </a>
                                                    </li>
                                                    <li className="sp-btn-group">
                                                        <a href="#" className="sp-compare" title="Compare">
                                                            <i className="ri-repeat-line"></i>
                                                        </a>
                                                    </li>
                                                    <li className="sp-btn-group">
                                                        <a href="#" className="add-to-cart" title="Add To Cart">
                                                            <i className="ri-shopping-bag-4-line"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sp-pro-details">
                                                <div className="sp-pro-subtitle">
                                                    <a href="/shop">{product.category}</a>
                                                    <span className="sp-pro-rating">
                                                        {[...Array(5)].map((_, i) => (
                                                            <i key={i} className={`ri-star-fill ${i >= product.rating ? 'grey' : ''}`}></i>
                                                        ))}
                                                    </span>
                                                </div>
                                                <h4 className="sp-pro-title"><a href="/product">{product.name}</a></h4>
                                                <div className="sp-price">
                                                    <div className="inner-price">
                                                        <span className="new-price">{product.price}</span>
                                                        {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                                                        {product.left && <span className="item-left">{product.left}</span>}
                                                    </div>
                                                    <span className="last-items">{product.unit}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                        <div className="owl-nav">
                            <button type="button" className="owl-prev custom-nav-prev-grocery-popular"></button>
                            <button type="button" className="owl-next custom-nav-next-grocery-popular"></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
