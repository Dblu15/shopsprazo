import Link from "next/link";

export const metadata = {
    title: "About Us - Sprazo",
    description: "Learn more about Sprazo and our mission to provide the best grocery shopping experience.",
};

export default function AboutPage() {
    return (
        <>
            {/* Breadcrumb */}
            <section className="sp-breadcrumb margin-b-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-inner">
                                <h2 className="sp-breadcrumb-title">About us Page</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li className="sp-breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li><i className="ri-arrow-right-double-fill"></i></li>
                                    <li className="sp-breadcrumb-item active">About us Page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="sp-about padding-tb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="sp-img-set">
                                <div className="sp-img-box">
                                    <img className="main-img" src="/images/1_8.jpg" alt="about" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
                                    <div className="sp-detail">
                                        <div className="info" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                            <h3>15+</h3>
                                            <p>Years<br />Experience</p>
                                        </div>
                                        <div className="sp-shap" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                            <img src="/images/2_7.jpg" alt="about" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-detail" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                <div className="sp-title">
                                    <p><img src="/fonts/15.svg" alt="" />About Our Company</p>
                                    <h2 data-cursor="big">We Provide Cost Effective Solution For You</h2>
                                </div>
                            </div>
                            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                It is a long established fact that a reader will be distracted the readable content of a page
                                when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.
                            </p>
                            <div className="sp-details">
                                <div className="list" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                    <div className="icon">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M47.4194 13.5484C50.0874 13.5484 52.2581 11.3777 52.2581 8.70968C52.2581 6.04162 50.0874 3.87097 47.4194 3.87097C44.7513 3.87097 42.5806 6.04162 42.5806 8.70968C42.5806 11.3777 44.7513 13.5484 47.4194 13.5484ZM47.4194 5.80646C49.02 5.80646 50.3226 7.10904 50.3226 8.70968C50.3226 10.3103 49.02 11.6129 47.4194 11.6129C45.8187 11.6129 44.5161 10.3103 44.5161 8.70968C44.5161 7.10904 45.8187 5.80646 47.4194 5.80646Z"></path>
                                            <path d="M59.9197 33.4306L58.769 28.8271C58.5083 27.7795 57.9044 26.8494 57.0536 26.185C56.2028 25.5207 55.154 25.1602 54.0745 25.1613H51.7123C51.3043 23.3204 50.6619 21.5394 49.801 19.8619L54.2206 14.3381C55.454 12.7923 56.1267 10.874 56.129 8.89645V8.70968C56.129 3.90677 52.2223 0 47.4193 0C42.6164 0 38.7097 3.90677 38.7097 8.70968V8.89645C38.7097 9.11032 38.7213 9.32226 38.7368 9.53419C35.9745 8.35593 33.0031 7.74637 30 7.74193C17.7261 7.74193 7.74194 17.7261 7.74194 30C7.74194 42.2739 17.7261 52.2581 30 52.2581C39.6677 52.2581 48.2652 45.9232 51.1887 36.7742H57.3087C57.7174 36.7734 58.1206 36.6797 58.4877 36.5002C58.8548 36.3206 59.1763 36.0599 59.4279 35.7378C59.6794 35.4157 59.8544 35.0406 59.9396 34.6409C60.0248 34.2412 60.018 33.8273 59.9197 33.4306Z"></path>
                                        </svg>
                                    </div>
                                    <div className="info">
                                        <h5>Worldwide Services</h5>
                                        <p>It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem</p>
                                    </div>
                                </div>
                                <div className="list" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                    <div className="icon">
                                        <svg width="800px" height="800px" viewBox="-4 0 30 30" xmlns="http://www.w3.org/2000/svg">
                                            <g data-name="Layer 2" id="Layer_2">
                                                <g id="Interface-Light">
                                                    <g id="interface-light-award-medal-1">
                                                        <polyline className="cls-1" points="21.5 0.5 10.5 0.5 0.5 0.5"></polyline>
                                                        <line className="cls-1" x1="21.5" x2="17" y1="0.5" y2="12.5"></line>
                                                        <line className="cls-1" x1="0.5" x2="5" y1="0.5" y2="12.5"></line>
                                                        <circle className="cls-1" cx="11" cy="20" r="9.5"></circle>
                                                        <line className="cls-1" x1="8" x2="9" y1="0.5" y2="10.5"></line>
                                                        <line className="cls-1" x1="14" x2="13" y1="0.5" y2="10.5"></line>
                                                        <path className="cls-1" d="M11.49,15.35l.91,2.59a.52.52,0,0,0,.46.36l2.64.11a.54.54,0,0,1,.3,1l-2.07,1.71a.58.58,0,0,0-.18.57l.72,2.66a.53.53,0,0,1-.79.6l-2.19-1.54a.51.51,0,0,0-.58,0L8.52,24.91a.53.53,0,0,1-.79-.6l.72-2.66a.58.58,0,0,0-.18-.57L6.2,19.37a.54.54,0,0,1,.3-1l2.64-.11a.52.52,0,0,0,.46-.36l.91-2.59A.52.52,0,0,1,11.49,15.35Z"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="info">
                                        <h5>Best Company Award Winner</h5>
                                        <p>It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sp-read" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                <a href="#" className="sp-btn-4">Read More <i className="ri-arrow-right-long-line"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="sp-testimonial padding-tb-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <div className="container">
                    <div className="row">
                        <div className="section-detail">
                            <div className="sp-title">
                                <p><img src="/fonts/15.svg" alt="" />Our Testimonial</p>
                                <h2 data-cursor="big">What Our Clients Say About Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-minus-24">
                        {[
                            { name: "Julien Marceaux", role: "Customer", text: "There are many variations of is passages of Lorem Ipsum available, but the and majority have suffered alteration in some form.", img: "/images/1_4.jpg" },
                            { name: "Erik Halvorsen", role: "Manager", text: "There are many variations of is passages of Lorem Ipsum available, but the and majority have suffered alteration in some form.", img: "/images/2_4.jpg" },
                            { name: "Camille Varelli", role: "Customer", text: "There are many variations of is passages of Lorem Ipsum available, but the and majority have suffered alteration in some form.", img: "/images/3_3.jpg" },
                            { name: "Marco Alvarello", role: "Marketing", text: "There are many variations of is passages of Lorem Ipsum available, but the and majority have suffered alteration in some form.", img: "/images/4_3.jpg" }
                        ].map((testimonial, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6 col-12 mb-24">
                                <div className="sp-testimonial-box">
                                    <div className="sp-detail">
                                        <div className="sp-icon">
                                            <i className="ri-double-quotes-l"></i>
                                        </div>
                                        <div className="sp-user">
                                            <div className="user-name">
                                                <h5>{testimonial.name}</h5>
                                                <p>{testimonial.role}</p>
                                            </div>
                                            <img src={testimonial.img} alt="user" />
                                        </div>
                                    </div>
                                    <div className="testimonial-text">
                                        <p>{testimonial.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="sp-team-section padding-tb-50">
                <div className="container">
                    <div className="row">
                        <div className="section-detail">
                            <div className="sp-title">
                                <p><img src="/fonts/15.svg" alt="" />Our Team</p>
                                <h2 data-cursor="big">Meet out expert team members</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-minus-24">
                        {[
                            { name: "Julien Marceaux", role: "Director", img: "/images/1_4.jpg" },
                            { name: "Erik Halvorsen", role: "Developer", img: "/images/2_4.jpg" },
                            { name: "Camille Varelli", role: "Marketing", img: "/images/3_3.jpg" },
                            { name: "Benjamin Martin", role: "Leader", img: "/images/4_3.jpg" }
                        ].map((member, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6 col-sm-6 col-12 mb-24">
                                <div className="sp-team-box">
                                    <div className="sp-team-img">
                                        <img src={member.img} alt="user" />
                                        <div className="sp-team-socials">
                                            <ul className="align-itesp-center">
                                                <li className="sp-social-link">
                                                    <a href="#"><i className="ri-twitter-line"></i></a>
                                                </li>
                                                <li className="sp-social-link">
                                                    <a href="#"><i className="ri-facebook-line"></i></a>
                                                </li>
                                                <li className="sp-social-link">
                                                    <a href="#"><i className="ri-linkedin-line"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sp-team-info">
                                        <h5>{member.name}</h5>
                                        <p>{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
