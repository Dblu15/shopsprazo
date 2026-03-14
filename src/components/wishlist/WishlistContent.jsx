"use client";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function WishlistContent() {
    const { items, removeItem } = useWishlist();
    const { addItem } = useCart();

    const handleAddToCart = (item) => {
        addItem({ ...item, qty: 1 });
    };

    return (
        <>
            <section className="sp-breadcrumb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-detail">
                                <h2 data-cursor="big">Wishlist</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li><Link href="/">Home</Link></li>
                                    <li>Wishlist</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sp-wishlist-page p-tb-50">
                <div className="container">
                    <div className="row">
                        {items.length === 0 ? (
                            <div className="col-12 text-center py-5">
                                <i className="ri-heart-line text-muted mb-4" style={{ fontSize: "5rem" }}></i>
                                <h3 className="mb-3">Your wishlist is currently empty.</h3>
                                <p className="text-muted mb-4">Add your favorite items to your wishlist to easily find them later.</p>
                                <Link href="/shop" className="sp-btn-1">Return To Shop</Link>
                            </div>
                        ) : (
                            <div className="col-12">
                                <div className="table-responsive sp-wishlist-table-group">
                                    <table className="table table-bordered sp-wishlist-table">
                                        <thead>
                                            <tr>
                                                <th className="sp-cart-pro-name" colSpan="2">Product</th>
                                                <th className="sp-cart-pro-price">Price</th>
                                                <th className="sp-cart-pro-status">Stock Status</th>
                                                <th className="sp-cart-pro-add">Add to Cart</th>
                                                <th className="sp-cart-pro-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {items.map((item) => (
                                                <tr key={item.id}>
                                                    <td className="sp-cart-pro-img text-center" style={{ width: "100px" }}>
                                                        <Link href={`/product/${item.id}`}>
                                                            <img src={item.image} alt={item.name} className="img-fluid" style={{ maxWidth: "80px" }} />
                                                        </Link>
                                                    </td>
                                                    <td className="sp-cart-pro-name">
                                                        <Link href={`/product/${item.id}`}>{item.name}</Link>
                                                    </td>
                                                    <td className="sp-cart-pro-price">
                                                        <span className="amount">${item.price.toFixed(2)}</span>
                                                    </td>
                                                    <td className="sp-cart-pro-status">
                                                        <span className="text-success font-weight-bold">In Stock</span>
                                                    </td>
                                                    <td className="sp-cart-pro-add text-center">
                                                        <button className="sp-btn-3" onClick={() => handleAddToCart(item)}>
                                                            Add to Cart
                                                        </button>
                                                    </td>
                                                    <td className="sp-cart-pro-remove text-center">
                                                        <a href="#!" onClick={() => removeItem(item.id)} className="remove-item"><i className="ri-close-line text-danger"></i></a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
