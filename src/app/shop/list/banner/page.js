import { Suspense } from "react";
import ShopContent from "@/components/shop/ShopContent";

export const metadata = {
    title: "Shop List Banner | Sprazo",
    description: "Browse our products in list view with banner.",
};

export default function ShopListBannerPage() {
    return (
        <>
            <section className="sp-shop-banner p-tb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div
                                className="sp-banner-block bnr-1"
                                style={{ backgroundImage: "url('/images/banner-1.jpg')", minHeight: "300px" }}
                            >
                                <div className="sp-banner-detail">
                                    <span className="sp-banner-offer">30% OFF</span>
                                    <h3>Fashion Collection</h3>
                                    <p>Best trending fashion for summer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Suspense fallback={<div className="container py-5 text-center">Loading shop...</div>}>
                <ShopContent defaultView="list" />
            </Suspense>
        </>
    );
}
