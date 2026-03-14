"use client";
import Link from "next/link";
import { useState } from "react";

export default function FaqPage() {
    const [openItems, setOpenItems] = useState({ 0: true, 5: true });

    const toggleItem = (idx) => {
        setOpenItems(prev => ({ ...prev, [idx]: !prev[idx] }));
    };

    const faqsLeft = [
        {
            question: "What is the multi vendor services?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            question: "How to buy many products at a time?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            question: "Refund policy for customer.",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            question: "Exchange policy for customer.",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an Ipsum has been the industry's unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            question: "Give a way products available.",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an Ipsum has been the industry's standard dummy text ever since the 1500s. Unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    ];

    const faqsRight = [
        {
            question: "Refund policy for customer.",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            question: "Exchange policy for customer.",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an Ipsum has been the industry's unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            question: "How to buy many products at a time?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            question: "Give a way products available.",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an Ipsum has been the industry's standard dummy text ever since the 1500s. Unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            question: "What is the multi vendor services?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem unknown printer took a galley of type and scrambled it to make a type specimen book."
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
                                <h2 className="sp-breadcrumb-title">FAQ Page</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li className="sp-breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li><i className="ri-arrow-right-double-fill"></i></li>
                                    <li className="sp-breadcrumb-item active">FAQ Page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="sp-faq padding-tb-50">
                <div className="container">
                    <div className="row">
                        <div className="section-detail centerd">
                            <div className="sp-title">
                                <p><img src="/fonts/15.svg" alt="" />Frequently Asked Questions</p>
                                <h2 data-cursor="big">Customer Service Management</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <div className="col-lg-6">
                            <div className="sp-accordion style-1">
                                {faqsLeft.map((faq, idx) => (
                                    <div className="sp-accordion-item" key={idx}>
                                        <h4 className="sp-accordion-header" onClick={() => toggleItem(idx)}>
                                            {faq.question}
                                        </h4>
                                        <div className={`sp-accordion-body${openItems[idx] ? ' show' : ''}`}>
                                            {faq.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6 m-t-991">
                            <div className="sp-accordion style-1">
                                {faqsRight.map((faq, idx) => {
                                    const key = idx + 5;
                                    return (
                                        <div className="sp-accordion-item" key={key}>
                                            <h4 className="sp-accordion-header" onClick={() => toggleItem(key)}>
                                                {faq.question}
                                            </h4>
                                            <div className={`sp-accordion-body${openItems[key] ? ' show' : ''}`}>
                                                {faq.answer}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
