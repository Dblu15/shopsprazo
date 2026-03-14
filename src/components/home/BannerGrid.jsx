"use client";
import Link from "next/link";

export default function BannerGrid() {
    return (
        <section className="sp-banner p-tb-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 sp-banner-box m-b-30 mt-4 mt-lg-0">
                        <div className="sp-banner-block bnr-1" style={{ backgroundImage: "url('/images/1_1.jpg')" }}>
                            <div className="sp-banner-detail">
                                <span className="sp-banner-offer">30% OFF</span>
                                <h3>Fashion Collection</h3>
                                <p>Best trending fashion for summer</p>
                                <Link href="/shop" className="sp-btn-3">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 sp-banner-box m-b-30">
                        <div className="sp-banner-block bnr-2" style={{ backgroundImage: "url('/images/2_1.jpg')" }}>
                            <div className="sp-banner-detail">
                                <span className="sp-banner-offer">50% OFF</span>
                                <h3>New Arrivals</h3>
                                <p>Exclusive new collection available</p>
                                <Link href="/shop" className="sp-btn-3">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 sp-banner-box m-b-30">
                        <div className="sp-banner-block bnr-3" style={{ backgroundImage: "url('/images/3_1.jpg')" }}>
                            <div className="sp-banner-detail">
                                <span className="sp-banner-offer">20% OFF</span>
                                <h3>Premium Shoes</h3>
                                <p>Comfort meets style</p>
                                <Link href="/shop" className="sp-btn-3">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
