"use client";
import { useState } from "react";
import Link from "next/link";

const categories = [
    {
        name: "Vegetables",
        hasDropdown: true,
        items: [
            { name: "Tomato", weight: "-25 kg" },
            { name: "Spinach", weight: "-52 kg" },
            { name: "Broccoli", weight: "-40 kg" },
        ]
    },
    {
        name: "Fruits",
        hasDropdown: true,
        items: [
            { name: "Apple", weight: "-25 kg" },
            { name: "Orange", weight: "-52 kg" },
            { name: "Mango", weight: "-40 kg" },
            { name: "Graps", weight: "-35 kg" },
        ]
    },
    {
        name: "Dry Fruits",
        weight: "-15 kg",
        hasDropdown: false,
    },
    {
        name: "Milk & Buttermilk",
        weight: "-27 ltr",
        hasDropdown: false,
    },
    {
        name: "Bakery",
        hasDropdown: true,
        items: [
            { name: "breads", weight: "-25 pack" },
            { name: "cakes", weight: "-52 pcs" },
            { name: "pastries", weight: "-40 pcs" },
            { name: "cookies", weight: "-35 pack" },
        ]
    }
];

const brands = [
    { name: "Zencart Dairy", image: "/images/1_3.jpg", active: true },
    { name: "Xeta Fruits", image: "/images/2_3.jpg", active: false },
    { name: "Pili Snack", image: "/images/3_2.jpg", active: false },
    { name: "Indiana Juice", image: "/images/4_2.jpg", active: false },
];

const weights = [
    { name: "500gm Pack", active: true },
    { name: "1kg Pack", active: false },
    { name: "2kg Pack", active: false },
    { name: "5kg Pack", active: false },
];

const colors = [
    { hex: "#c4d6f9", active: false },
    { hex: "#ff748b", active: false },
    { hex: "#000000", active: false },
    { hex: "#2bff4a", active: true },
    { hex: "#ff7c5e", active: false },
    { hex: "#f155ff", active: false },
    { hex: "#ffef00", active: false },
    { hex: "#c89fff", active: false },
    { hex: "#7bfffa", active: false },
    { hex: "#56ffc1", active: false },
    { hex: "#ffdb9f", active: false },
    { hex: "#9f9f9f", active: false },
];

export default function ShopSidebar() {
    // Manage which category dropdowns are open. Default Vegetables to true.
    const [openCats, setOpenCats] = useState({ "Vegetables": true });

    // Manage state for brand checkboxes
    const [activeBrands, setActiveBrands] = useState(["Zencart Dairy"]);
    const toggleBrand = (name) => {
        setActiveBrands(prev =>
            prev.includes(name) ? prev.filter(b => b !== name) : [...prev, name]
        );
    };

    // Manage state for weight checkboxes
    const [activeWeights, setActiveWeights] = useState(["500gm Pack"]);
    const toggleWeight = (name) => {
        setActiveWeights(prev =>
            prev.includes(name) ? prev.filter(w => w !== name) : [...prev, name]
        );
    };

    // Manage state for color checkboxes
    const [activeColors, setActiveColors] = useState(["#2bff4a"]);
    const toggleColor = (hex) => {
        setActiveColors(prev =>
            prev.includes(hex) ? prev.filter(c => c !== hex) : [...prev, hex]
        );
    };

    const toggleCat = (name, e) => {
        e.preventDefault();
        setOpenCats(prev => ({ ...prev, [name]: !prev[name] }));
    };

    return (
        <div className="sp-shop-sidebar">
            <div id="shop_sidebar">
                <div className="sp-sidebar-wrap">
                    {/* Category Block */}
                    <div className="sp-sidebar-block drop">
                        <div className="sp-sb-title">
                            <h3 className="sp-sidebar-title">Category</h3>
                        </div>
                        <div className="cat-list">
                            {categories.map((cat, i) => (
                                <div className={`sp-sb-block-content ${i === 0 ? 'p-t-15' : ''}`} key={cat.name}>
                                    <ul>
                                        <li>
                                            {cat.hasDropdown ? (
                                                <>
                                                    <a
                                                        href="#!"
                                                        className={`sp-sidebar-block-item main drop ${openCats[cat.name] ? 'show' : ''}`}
                                                        onClick={(e) => toggleCat(cat.name, e)}
                                                    >
                                                        {cat.name}
                                                    </a>
                                                    <ul className="sp-cat-sub-dropdown" style={{ display: openCats[cat.name] ? 'block' : 'none' }}>
                                                        {cat.items.map((item) => (
                                                            <li key={item.name}>
                                                                <div className="sp-sidebar-sub-item">
                                                                    <Link href="/shop">{item.name} <span>{item.weight}</span></Link>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </>
                                            ) : (
                                                <Link href="/shop" className="sp-sidebar-block-item main">
                                                    {cat.name}<span>{cat.weight}</span>
                                                </Link>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Brand Block */}
                    <div className="sp-sidebar-block">
                        <div className="sp-sb-title">
                            <h3 className="sp-sidebar-title">Brand</h3>
                        </div>
                        <div className="sp-sb-block-content brand">
                            <ul>
                                {brands.map((brand) => {
                                    const isActive = activeBrands.includes(brand.name);
                                    return (
                                        <li className={isActive ? "active" : ""} key={brand.name}>
                                            <div className="sp-sidebar-block-item" onClick={() => toggleBrand(brand.name)} style={{ cursor: "pointer" }}>
                                                <img src={brand.image} alt="vendor" />
                                                <a href="#!" onClick={(e) => e.preventDefault()}>
                                                    <span>{brand.name}</span>
                                                </a>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Weight Block */}
                    <div className="sp-sidebar-block">
                        <div className="sp-sb-title">
                            <h3 className="sp-sidebar-title">Weight</h3>
                        </div>
                        <div className="sp-sb-block-content">
                            <ul className="weight">
                                {weights.map((weight) => {
                                    const isActive = activeWeights.includes(weight.name);
                                    return (
                                        <li key={weight.name}>
                                            <div className="sp-sidebar-block-item" onClick={() => toggleWeight(weight.name)} style={{ cursor: "pointer" }}>
                                                <input type="checkbox" checked={isActive} readOnly />
                                                <a href="#!" onClick={(e) => e.preventDefault()}>{weight.name}</a>
                                                <span className="checked"></span>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Color Block */}
                    <div className="sp-sidebar-block color-block sp-sidebar-block-clr">
                        <div className="sp-sb-title">
                            <h3 className="sp-sidebar-title">Color</h3>
                        </div>
                        <div className="sp-sb-block-content">
                            <ul>
                                {colors.map((color, idx) => {
                                    const isActive = activeColors.includes(color.hex);
                                    return (
                                        <li className={isActive ? "active" : ""} key={idx}>
                                            <div className="sp-sidebar-block-item" onClick={() => toggleColor(color.hex)} style={{ cursor: "pointer" }}>
                                                <input type="checkbox" checked={isActive} readOnly />
                                                <span className="sp-clr-block" style={{ backgroundColor: color.hex, border: color.hex === '#fff' ? '1px solid #ddd' : 'none' }}></span>
                                                <span className="checked"></span>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
