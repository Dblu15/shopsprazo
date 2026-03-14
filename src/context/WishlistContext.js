"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        try {
            const saved = localStorage.getItem("sp-wishlist");
            if (saved) setItems(JSON.parse(saved));
        } catch { }
    }, []);

    useEffect(() => {
        localStorage.setItem("sp-wishlist", JSON.stringify(items));
    }, [items]);

    const addItem = useCallback((product) => {
        setItems((prev) => {
            if (prev.find((i) => i.id === product.id)) return prev;
            return [...prev, product];
        });
    }, []);

    const removeItem = useCallback((id) => {
        setItems((prev) => prev.filter((i) => i.id !== id));
    }, []);

    const isInWishlist = useCallback(
        (id) => items.some((i) => i.id === id),
        [items]
    );

    return (
        <WishlistContext.Provider
            value={{ items, addItem, removeItem, isInWishlist, count: items.length }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    return useContext(WishlistContext);
}
