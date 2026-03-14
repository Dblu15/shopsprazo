import { Suspense } from "react";
import ShopContent from "@/components/shop/ShopContent";

export const metadata = {
    title: "Shop List | Sprazo",
    description: "Browse our products in list view.",
};

export default function ShopListPage() {
    return (
        <Suspense fallback={<div className="container py-5 text-center">Loading shop...</div>}>
            <ShopContent defaultView="list" />
        </Suspense>
    );
}
