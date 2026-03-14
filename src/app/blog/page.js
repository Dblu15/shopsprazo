import { Suspense } from "react";
import BlogContent from "@/components/blog/BlogContent";

export const metadata = {
    title: "Blog | Sprazo",
    description: "Read the latest news and articles from Sprazo Blog.",
};

export default function BlogPage() {
    return (
        <Suspense fallback={<div className="container py-5 text-center">Loading blog...</div>}>
            <BlogContent />
        </Suspense>
    );
}
