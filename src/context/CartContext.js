"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load from localStorage
    useEffect(() => {
        try {
            const saved = localStorage.getItem("sp-cart");
            if (saved) setItems(JSON.parse(saved));
        } catch { }
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem("sp-cart", JSON.stringify(items));
    }, [items]);

    const addItem = useCallback((product, qty = 1) => {
        setItems((prev) => {
            const exists = prev.find((i) => i.id === product.id);
            if (exists) {
                return prev.map((i) =>
                    i.id === product.id ? { ...i, qty: i.qty + qty } : i
                );
            }
            return [...prev, { ...product, qty }];
        });
    }, []);

    const removeItem = useCallback((id) => {
        setItems((prev) => prev.filter((i) => i.id !== id));
    }, []);

    const updateQty = useCallback((id, qty) => {
        if (qty <= 0) {
            setItems((prev) => prev.filter((i) => i.id !== id));
        } else {
            setItems((prev) =>
                prev.map((i) => (i.id === id ? { ...i, qty } : i))
            );
        }
    }, []);

    const clearCart = useCallback(() => setItems([]), []);

    const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
    const totalPrice = items.reduce((sum, i) => sum + i.price * i.qty, 0);

    return (
        <CartContext.Provider
            value={{
                items, addItem, removeItem, updateQty, clearCart,
                totalItems, totalPrice,
                isCartOpen, setIsCartOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
