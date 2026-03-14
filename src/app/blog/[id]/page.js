import { Suspense } from "react";
import BlogDetailContent from "@/components/blog/BlogDetailContent";
import { blogPosts } from "@/data/mockData";

export async function generateMetadata({ params }) {
    const id = (await params).id;
    const post = blogPosts.find((p) => p.id === parseInt(id)) || blogPosts[0];

    return {
        title: `${post.title} | Sprazo Blog`,
        description: `Read ${post.title} on Sprazo Blog.`,
    };
}

export default async function BlogDetailPage({ params, searchParams }) {
    const id = (await params).id;
    const layout = (await searchParams)?.layout || "right"; // default right sidebar for blog
    const post = blogPosts.find((p) => p.id === parseInt(id)) || blogPosts[0];

    return (
        <Suspense fallback={<div className="container py-5 text-center">Loading article...</div>}>
            <BlogDetailContent post={post} layout={layout} />
        </Suspense>
    );
}

