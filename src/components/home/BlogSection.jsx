"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import { blogPosts } from "@/data/mockData";

export default function BlogSection() {
    return (
        <section className="sp-blog padding-tb-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="container">
                <div className="row">
                    <div className="section-detail centerd">
                        <div className="sp-title">
                            <p><img src="/fonts/15.svg" alt="" />Blog</p>
                            <h2 data-cursor="big">Latest Blog Posts</h2>
                        </div>
                    </div>
                </div>
                {/* Blog slider */}
                <div className="sp-blog-slider">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={24}
                        loop={true}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        speed={500}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                        }}
                    >
                        {blogPosts.map((post) => (
                            <SwiperSlide key={post.id} className="sp-blog-slide">
                                <div className="sp-blog-box">
                                    <div className="sp-blog-img">
                                        <Link href={`/blog/${post.id}`}>
                                            <img src={post.image} alt={post.title} />
                                        </Link>
                                    </div>
                                    <div className="sp-blog-detail">
                                        <div className="sp-blog-info">
                                            <p className="sp-post">
                                                <Link href={`/blog/${post.id}`}>{post.category}</Link>- {post.date}
                                            </p>
                                            <h3>
                                                <Link href={`/blog/${post.id}`}>{post.title}</Link>
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
