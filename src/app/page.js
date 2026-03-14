import HeroSlider from "@/components/home/HeroSlider";
import LabelMarquee from "@/components/home/LabelMarquee";
import FashionCategory from "@/components/home/fashion/FashionCategory";
import FashionAbout from "@/components/home/fashion/FashionAbout";
import FashionBanners from "@/components/home/fashion/FashionBanners";
import ProductTabs from "@/components/home/ProductTabs";
import FashionServices from "@/components/home/fashion/FashionServices";
import FashionCollection from "@/components/home/fashion/FashionCollection";
import FashionVendor from "@/components/home/fashion/FashionVendor";
import FashionDeal from "@/components/home/fashion/FashionDeal";
import FashionTestimonial from "@/components/home/fashion/FashionTestimonial";
import FashionBlog from "@/components/home/fashion/FashionBlog";
import FashionSubscribe from "@/components/home/fashion/FashionSubscribe";

export const metadata = {
  title: "Sprazo - Multipurpose eCommerce",
  description: "Sprazo - Best fashion and lifestyle collection online.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSlider />
      {/* 2. Label Marquee */}
      <LabelMarquee />
      {/* 3. Category Section */}
      <FashionCategory />
      {/* 4. About Section */}
      <FashionAbout />
      {/* 5. Banner Section */}
      <FashionBanners />
      {/* 6. Feature Products (Tabs) */}
      <ProductTabs />
      {/* 7. Service Section */}
      <FashionServices />
      {/* 8. Collection Section */}
      <FashionCollection />
      {/* 9. Vendor Section */}
      <FashionVendor />
      {/* 10. Deal Section */}
      <FashionDeal />
      {/* 11. Testimonial Section */}
      <FashionTestimonial />
      {/* 12. Blog Section */}
      <FashionBlog />
      {/* 13. Subscribe Section */}
      <FashionSubscribe />
    </>
  );
}
