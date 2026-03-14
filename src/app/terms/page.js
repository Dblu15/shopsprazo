import Link from "next/link";

export const metadata = {
    title: "Terms & Conditions - Sprazo",
    description: "Read the terms and conditions for using Sprazo",
};

export default function TermsPage() {
    const termsLeft = [
        {
            title: "Welcome to Sprazo Store.",
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text.</b>'
        },
        {
            title: "Sprazo Websites",
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text.</b>'
        },
        {
            title: "How browsing and vendor works?",
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text.</b>'
        },
        {
            title: "Becoming an vendor",
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text.</b>'
        }
    ];

    const termsRight = [
        {
            title: "How browsing and vendor works?",
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text.</b>'
        },
        {
            title: "Becoming an vendor",
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
            title: "How browsing and vendor works?",
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text.</b>'
        },
        {
            title: "Becoming an vendor",
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        }
    ];

    return (
        <>
            {/* Breadcrumb */}
            <section className="sp-breadcrumb margin-b-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-inner">
                                <h2 data-cursor="big" className="sp-breadcrumb-title">Terms Page</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li className="sp-breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li><i className="ri-arrow-right-double-fill"></i></li>
                                    <li className="sp-breadcrumb-item active">Terms Page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Terms Section */}
            <section className="sp-terms-conditions padding-tb-50">
                <div className="container">
                    <div className="row">
                        <div className="section-detail centerd">
                            <div className="sp-title">
                                <p><img src="/fonts/15.svg" alt="" />Terms &amp; Condition</p>
                                <h2 data-cursor="big">Please Read Carefully Before Using Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <div className="sp-common-wrapper">
                                {termsLeft.map((term, idx) => (
                                    <div key={idx} className="col-sm-12 sp-csp-block">
                                        <div className="sp-csp-block-inner">
                                            <h5 className="sp-csp-block-title">{term.title}</h5>
                                            <p dangerouslySetInnerHTML={{ __html: term.text }}></p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6 m-t-991" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            <div className="sp-common-wrapper">
                                {termsRight.map((term, idx) => (
                                    <div key={idx} className="col-sm-12 sp-csp-block">
                                        <div className="sp-csp-block-inner">
                                            <h5 className="sp-csp-block-title">{term.title}</h5>
                                            <p dangerouslySetInnerHTML={{ __html: term.text }}></p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
