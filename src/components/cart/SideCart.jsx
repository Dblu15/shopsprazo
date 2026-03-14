"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function SideCart() {
    const { items, removeItem, updateQty, totalPrice, isCartOpen, setIsCartOpen } = useCart();

    return (
        <>
            <div
                className={`sp-side-cart-overlay ${isCartOpen ? "show" : ""}`}
                onClick={() => setIsCartOpen(false)}
            ></div>
            <div className={`sp-side-cart ${isCartOpen ? "sp-open-cart" : ""}`}>
                <div className="row h-full">
                    <div className="col-md-12 col-12">
                        <div className="sp-inner-cart">
                            <div className="sp-top-contact">
                                <div className="sp-cart-title">
                                    <h4>My cart</h4>
                                    <a href="#!" className="sp-cart-close" title="Close Cart" onClick={(e) => { e.preventDefault(); setIsCartOpen(false); }}></a>
                                </div>
                            </div>
                            <div className="sp-cart-box item">
                                <ul className="sp-cart-items">
                                    {items.length === 0 ? (
                                        <li className="sp-cart-empty">
                                            <p>Your cart is empty.</p>
                                        </li>
                                    ) : (
                                        items.map((item) => (
                                            <li className="cart-sidebar-list" key={item.id}>
                                                <a href="#!" className="cart-remove-item" onClick={(e) => { e.preventDefault(); removeItem(item.id); }}>
                                                    <i className="ri-close-line"></i>
                                                </a>
                                                <Link href={`/product/${item.id}`} className="sp-cart-pro-img">
                                                    <img src={item.image || "/images/11_1.jpg"} alt={item.name} />
                                                </Link>
                                                <div className="sp-cart-list-detail">
                                                    <Link href={`/product/${item.id}`} className="sp-cart-sub-title">
                                                        {item.name}
                                                    </Link>
                                                    <span className="cart-price">
                                                        <span>$</span><span className="new-price cart-item-price">{item.price.toFixed(2)}</span>
                                                        {` x ${item.qty}`}
                                                    </span>
                                                    <div className="sp-value">
                                                        <div className="qty-plus-minus">
                                                            <div className="dec sp-qtybtn" onClick={() => updateQty(item.id, item.qty - 1)}>-</div>
                                                            <input className="qty-input" type="text" name="sp-qtybtn" value={item.qty} readOnly />
                                                            <div className="inc sp-qtybtn" onClick={() => updateQty(item.id, item.qty + 1)}>+</div>
                                                        </div>
                                                        $<div className="sp-item-total">{(item.price * item.qty).toFixed(2)}</div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    )}
                                </ul>
                            </div>
                            {items.length > 0 && (
                                <div className="sp-bottom-cart">
                                    <div className="cart-sub-total">
                                        <table className="table cart-table">
                                            <tbody>
                                                <tr>
                                                    <td className="title">Sub-Total :</td>
                                                    <td className="cart-total-price">${totalPrice.toFixed(2)}</td>
                                                </tr>
                                                <tr>
                                                    <td className="title">VAT (20%) :</td>
                                                    <td className="price tax-price">${(totalPrice * 0.20).toFixed(2)}</td>
                                                </tr>
                                                <tr>
                                                    <td className="title">Total :</td>
                                                    <td className="price grand-total">${(totalPrice * 1.20).toFixed(2)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="cart-btn">
                                        <Link href="/cart" className="sp-btn-1" onClick={() => setIsCartOpen(false)}>
                                            View Cart
                                        </Link>
                                        <Link href="/checkout" className="sp-btn-2" onClick={() => setIsCartOpen(false)}>
                                            Checkout
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
