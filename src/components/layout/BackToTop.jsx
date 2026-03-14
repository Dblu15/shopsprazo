"use client";
import { useState, useEffect } from "react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <a
            href="#!"
            className={`back-to-top ${visible ? "active-progress" : ""}`}
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
            title="Back to Top"
        >
            <i className="ri-arrow-up-double-fill"></i>
            <div className="back-to-top-wrap">
                <svg viewBox="-1 -1 102 102">
                    <path
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        style={{
                            transition: "stroke-dashoffset 10ms linear",
                            strokeDasharray: "307.919, 307.919",
                            strokeDashoffset: "307.919"
                        }}
                    ></path>
                </svg>
            </div>
        </a>
    );
}
