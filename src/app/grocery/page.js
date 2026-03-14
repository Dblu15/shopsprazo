import GroceryHero from "@/components/home/grocery/GroceryHero";
import GroceryServices from "@/components/home/grocery/GroceryServices";
import GroceryCategory from "@/components/home/grocery/GroceryCategory";
import GroceryProductTabs from "@/components/home/grocery/GroceryProductTabs";
import GroceryTopVendor from "@/components/home/grocery/GroceryTopVendor";
import GroceryDeal from "@/components/home/grocery/GroceryDeal";
import GroceryPopularProducts from "@/components/home/grocery/GroceryPopularProducts";
import GroceryTestimonial from "@/components/home/grocery/GroceryTestimonial";
import GroceryBlog from "@/components/home/grocery/GroceryBlog";
import GrocerySubscribe from "@/components/home/grocery/GrocerySubscribe";

export const metadata = {
  title: "Sprazo - Grocery eCommerce",
  description: "Sprazo - Best grocery collection online. Get fresh and organic food.",
};

export default function GroceryPage() {
  return (
    <>
      <GroceryHero />
      <GroceryServices />
      <GroceryCategory />
      <GroceryProductTabs />
      <GroceryTopVendor />
      <GroceryDeal />
      <GroceryPopularProducts />
      <GroceryTestimonial />
      <GroceryBlog />
      <GrocerySubscribe />
    </>
  );
}
