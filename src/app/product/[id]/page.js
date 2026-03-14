import ProductDetailContent from "@/components/product/ProductDetailContent";
import { products } from "@/data/mockData";

export async function generateMetadata({ params }) {
    const id = (await params).id;
    const product = products.find((p) => p.id === parseInt(id)) || products[0];

    return {
        title: `${product.name} | Sprazo eCommerce`,
        description: `Buy ${product.name} from the ${product.category} category for only $${product.price} at Sprazo.`,
    };
}

export default async function ProductDetailPage({ params, searchParams }) {
    const id = (await params).id;
    const layout = (await searchParams)?.layout || "left";
    const product = products.find((p) => p.id === parseInt(id)) || products[0];
    const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 5);

    return <ProductDetailContent product={product} relatedProducts={relatedProducts} layout={layout} />;
}
