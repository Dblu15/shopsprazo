"use client";

export default function Newsletter() {
    return (
        <section className="sp-newsletter p-tb-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sp-newsletter-block">
                            <div className="sp-newsletter-detail">
                                <h2 data-cursor="big">Subscribe to our Newsletter</h2>
                                <p>Get the latest updates on new products and upcoming sales</p>
                                <form className="sp-newsletter-form">
                                    <input type="email" placeholder="Enter your email address..." className="form-control" />
                                    <button type="submit" className="sp-btn-1">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
