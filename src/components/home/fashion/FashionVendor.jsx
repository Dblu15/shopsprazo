"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';

export default function FashionVendor() {
    const [activeTab, setActiveTab] = useState(0);

    const vendors = [
        {
            id: 1,
            name: 'A1 Superstore',
            desc: 'Trending fashion store with new clothes explore.',
            image: '/images/1_3.jpg',
            products: [
                { image: '/images/21.jpg', price: '$99', name: "Women's", sub: 'Jacket' },
                { image: '/images/22.jpg', price: '$130', name: 'Boots', sub: 'Shoes' },
                { image: '/images/23.jpg', price: '$56', name: 'Cowboy', sub: 'Hats' },
                { image: '/images/24.jpg', price: '$19', name: 'Long', sub: 'Shoes' },
                { image: '/images/25.jpg', price: '$25', name: 'leather', sub: 'belts' }
            ]
        },
        {
            id: 2,
            name: 'Xcart Store',
            desc: 'Explore more perfume fragnance with your style.',
            image: '/images/2_3.jpg',
            products: [
                { image: '/images/26.jpg', price: '$45', name: 'Perfume', sub: 'Bottle' },
                { image: '/images/27.jpg', price: '$89', name: 'Designer', sub: 'Bag' },
                { image: '/images/28.jpg', price: '$35', name: 'Lipstick', sub: 'Set' },
                { image: '/images/29.jpg', price: '$120', name: 'Watch', sub: 'Gold' },
                { image: '/images/30.jpg', price: '$25', name: 'Bracelet', sub: 'Silver' }
            ]
        },
        {
            id: 3,
            name: 'Minia Mart',
            desc: 'Get your stylish shoes with the minia mart store.',
            image: '/images/3_2.jpg',
            products: [
                { image: '/images/31.jpg', price: '$65', name: 'Running', sub: 'Shoes' },
                { image: '/images/32.jpg', price: '$55', name: 'Casual', sub: 'Sneakers' },
                { image: '/images/33.jpg', price: '$89', name: 'Formal', sub: 'Shoes' },
                { image: '/images/34.jpg', price: '$45', name: 'Sport', sub: 'Shoes' },
                { image: '/images/35.jpg', price: '$75', name: 'Boots', sub: 'Leather' }
            ]
        },
        {
            id: 4,
            name: 'Sprazo Shop',
            desc: 'Make your style with Sprazo glasses store at $99.',
            image: '/images/4_2.jpg',
            products: [
                { image: '/images/36.jpg', price: '$99', name: 'Sun', sub: 'Glasses' },
                { image: '/images/37.jpg', price: '$79', name: 'Reading', sub: 'Glasses' },
                { image: '/images/38.jpg', price: '$120', name: 'Designer', sub: 'Frames' },
                { image: '/images/39.jpg', price: '$55', name: 'Sports', sub: 'Glasses' },
                { image: '/images/40.jpg', price: '$89', name: 'Aviator', sub: 'Glasses' }
            ]
        }
    ];

    return (
        <section className="sp-vendor-tab padding-t-100 padding-b-50">
            <div className="container">
                <div className="row">
                    <div className="section-detail centerd">
                        <div className="sp-title">
                            <p><img src="/fonts/15.svg" alt="" />Browse The Collection</p>
                            <h2 data-cursor="big">Top Vendor</h2>
                        </div>
                    </div>
                </div>
                <div className="sp-vendor-list">
                    <ul className="nav nav-tabs" role="tablist">
                        {vendors.map((vendor, index) => (
                            <li className="nav-item" role="presentation" key={vendor.id}>
                                <a
                                    className={`nav-link ${index === activeTab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(index)}
                                    role="tab"
                                    style={{ cursor: 'pointer' }}
                                >
                                    <img className="nav-img" src={vendor.image} alt="vendor" />
                                    <div className="sp-tab">
                                        <h4>{vendor.name}</h4>
                                        <p>{vendor.desc}</p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="tab-content">
                        {vendors.map((vendor, index) => (
                            <div
                                key={vendor.id}
                                className={`tab-pane fade ${index === activeTab ? 'show active' : ''}`}
                                role="tabpanel"
                            >
                                <Swiper
                                    modules={[Autoplay]}
                                    spaceBetween={15}
                                    loop={true}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    speed={1000}
                                    breakpoints={{
                                        0: { slidesPerView: 1 },
                                        576: { slidesPerView: 2 },
                                        992: { slidesPerView: 3 }
                                    }}
                                    className="sp-pro-list"
                                >
                                    {vendor.products.map((product, pIndex) => (
                                        <SwiperSlide key={pIndex}>
                                            <Link className="product-box" href="/shop">
                                                <img src={product.image} alt="product" />
                                                <div className="sp-detail">
                                                    <h5 className="price">{product.price}</h5>
                                                    <h3><span className="text_bg2">{product.name}<br />{product.sub}</span></h3>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
