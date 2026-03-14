import ShopPage from "../page";

export const metadata = {
    title: "Shop Banner - Sprazo",
    description: "Shop products with banner Layout",
};

export default function ShopBannerPage() {
    // We can reuse the main ShopPage component and just add a banner at the top
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
            <ShopPage />
        </>
    );
}
