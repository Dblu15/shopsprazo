import Link from "next/link";

export const metadata = {
    title: "Forgot Password - Sprazo",
    description: "Reset your Sprazo account password",
};

export default function ForgotPage() {
    return (
        <>
            {/* Breadcrumb */}
            <section className="sp-breadcrumb margin-b-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-inner">
                                <h2 className="sp-breadcrumb-title">Forgot Page</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li className="sp-breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li><i className="ri-arrow-right-double-fill"></i></li>
                                    <li className="sp-breadcrumb-item active">Forgot Page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Forgot Section */}
            <section className="sp-forgot sp-login padding-tb-50">
                <div className="container">
                    <div className="sp-login-content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                        <div className="sp-login-box">
                            <div className="sp-login-wrapper">
                                <div className="sp-login-container">
                                    <div className="sp-login-form">
                                        <form>
                                            <span className="sp-login-wrap">
                                                <label>Email Address*</label>
                                                <input type="text" name="name" placeholder="Enter your email..." required />
                                            </span>
                                            <span className="sp-login-wrap sp-login-btn">
                                                <span><Link href="/register">Signup?</Link></span>
                                                <button className="sp-btn-1 btn" type="submit">Submit</button>
                                            </span>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sp-login-box d-n-991">
                            <div className="sp-login-img">
                                <img src="/images/2_11.jpg" alt="login" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
