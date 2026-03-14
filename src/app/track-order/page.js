import Link from "next/link";

export const metadata = {
    title: "Track Order - Sprazo",
    description: "Track your Sprazo order status",
};

export default function TrackOrderPage() {
    return (
        <>
            {/* Breadcrumb */}
            <section className="sp-breadcrumb-2 margin-b-50">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-inner">
                                <h2 data-cursor="big" className="sp-breadcrumb-title">Track Order Page</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li className="sp-breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li><i className="ri-arrow-right-double-fill"></i></li>
                                    <li className="sp-breadcrumb-item active">Track Order</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Track Order Section */}
            <section className="sp-track-order padding-tb-50">
                <div className="container">
                    <div className="row">
                        <div className="section-detail centerd">
                            <div className="sp-title">
                                <p><img src="/fonts/15.svg" alt="" />Track Order</p>
                                <h2 data-cursor="big">After Quality check, your product will soon dispatched</h2>
                            </div>
                        </div>
                    </div>
                    <div className="sp-track-list" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <div className="sp-track-block done">
                            <div className="sp-step-icon">
                                <i className="ri-shield-check-line"></i>
                            </div>
                            <h6>Order<br />confirmed</h6>
                        </div>
                        <div className="sp-track-block done">
                            <div className="sp-step-icon">
                                <i className="ri-settings-5-line"></i>
                            </div>
                            <h6>Processing<br />order</h6>
                        </div>
                        <div className="sp-track-block active">
                            <div className="sp-step-icon">
                                <i className="ri-gift-line"></i>
                            </div>
                            <h6>Quality<br />check</h6>
                        </div>
                        <div className="sp-track-block">
                            <div className="sp-step-icon">
                                <i className="ri-truck-line"></i>
                            </div>
                            <h6>Product<br />dispatched</h6>
                        </div>
                        <div className="sp-track-block">
                            <div className="sp-step-icon">
                                <i className="ri-home-4-line"></i>
                            </div>
                            <h6>Product<br />delivered</h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
