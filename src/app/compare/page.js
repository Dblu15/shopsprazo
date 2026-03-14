import Link from "next/link";

export const metadata = {
    title: "Compare Products - Sprazo",
    description: "Compare products side by side on Sprazo",
};

export default function ComparePage() {
    const products = [
        {
            name: "Fresh Strawberry",
            price: "$45",
            category: "Fruites",
            availability: "In Stock",
            availClass: "stock",
            location: "Online",
            brand: "Sevan Fruits",
            sku: "SP5687",
            quantity: "1 Pack",
            weight: "1 Kg",
            mainImg: "/images/1_5.jpg",
            hoverImg: "/images/2_5.jpg",
            flag: "New"
        },
        {
            name: "Fresh Cauliflower",
            price: "$10",
            category: "Vegetables",
            availability: "Out Of Stock",
            availClass: "not-stock",
            location: "In Store , Online",
            brand: "Bhisma Organics",
            sku: "SP3547",
            quantity: "1 Pack",
            weight: "10 Kg",
            mainImg: "/images/3_5.jpg",
            hoverImg: "/images/4_5.jpg",
            flag: null
        },
        {
            name: "walnut dry fruit",
            price: "$55",
            category: "Dry Fruit",
            availability: "In Stock",
            availClass: "stock",
            location: "Online",
            brand: "Arab Nuts",
            sku: "SP7542",
            quantity: "2 Pack",
            weight: "500 g",
            mainImg: "/images/6_2.jpg",
            hoverImg: "/images/5_2.jpg",
            flag: null
        },
        {
            name: "Vegetable Pickles",
            price: "$67",
            category: "Pickles",
            availability: "In Stock",
            availClass: "stock",
            location: "In Store",
            brand: "Vedan Pickles",
            sku: "SP6584",
            quantity: "1 Pack",
            weight: "250 g",
            mainImg: "/images/9_1.jpg",
            hoverImg: "/images/9_1.jpg",
            flag: "sale"
        },
        {
            name: "Fresh Apples",
            price: "$42",
            category: "Fruits",
            availability: "Out Of Stock",
            availClass: "not-stock",
            location: "Online, In Store",
            brand: "Recun Farming",
            sku: "SP6485",
            quantity: "4 Pack",
            weight: "1 kg",
            mainImg: "/images/7_2.jpg",
            hoverImg: "/images/8_2.jpg",
            flag: null
        }
    ];

    return (
        <>
            {/* Breadcrumb */}
            <section className="sp-breadcrumb-2 margin-b-50">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-inner">
                                <h2 data-cursor="big" className="sp-breadcrumb-title">Compare</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li className="sp-breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li><i className="ri-arrow-right-double-fill"></i></li>
                                    <li className="sp-breadcrumb-item active">Compare Page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compare Section */}
            <section className="sp-compare-list padding-tb-50">
                <div className="container">
                    <h2 data-cursor="big" className="d-none">Compare</h2>
                    <div className="sp-compare-products mtb-minus-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                        <div className="row">
                            {products.map((product, idx) => (
                                <div key={idx} className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 col-xs-6 sp-col-5 sp-product-box pro-gl-content">
                                    <div className="sp-product-card">
                                        <a href="#" className="remove-product-compare"><i className="ri-close-large-line"></i></a>
                                        <div className="sp-pro-box">
                                            <div className="sp-pro-img">
                                                <a href="#">
                                                    <div className="inner-img">
                                                        {product.flag && (
                                                            <span className="flags">
                                                                <span>{product.flag}</span>
                                                            </span>
                                                        )}
                                                        <img className="main-img sp-product-img" src={product.mainImg} alt={product.name} />
                                                        <img className="hover-img" src={product.hoverImg} alt={product.name} />
                                                    </div>
                                                </a>
                                                <ul className="sp-pro-actions">
                                                    <li className="sp-btn-group">
                                                        <a href="#" className="sp-wishlist" title="Wishlist">
                                                            <i className="ri-heart-line"></i>
                                                        </a>
                                                    </li>
                                                    <li className="sp-btn-group">
                                                        <a href="#" className="sp-compare" title="Compare">
                                                            <i className="ri-repeat-line"></i>
                                                        </a>
                                                    </li>
                                                    <li className="sp-btn-group">
                                                        <a href="#" className="add-to-cart" title="Add To Cart">
                                                            <i className="ri-shopping-bag-4-line"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sp-compare-item">
                                                <ul>
                                                    <li><b>Name</b>{product.name}</li>
                                                    <li><b>Price</b>{product.price}</li>
                                                    <li><b>Category</b>{product.category}</li>
                                                    <li><b>Availability</b><span className={product.availClass}>{product.availability}</span></li>
                                                    <li><b>Location</b>{product.location}</li>
                                                    <li><b>Brand</b>{product.brand}</li>
                                                    <li><b>SKU</b>{product.sku}</li>
                                                    <li><b>Quantity</b>{product.quantity}</li>
                                                    <li><b>Weight</b>{product.weight}</li>
                                                    <li><b>Description</b><span className="desk">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
