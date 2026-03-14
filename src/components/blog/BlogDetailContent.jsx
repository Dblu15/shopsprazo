"use client";
import { Suspense } from "react";
import Link from "next/link";
import BlogSidebar from "@/components/blog/BlogSidebar";

export default function BlogDetailContent({ post, layout = "right" }) {
    const hasSidebar = layout !== "full";
    const sidebarPosition = layout;

    const sidebar = <div className="col-lg-4 col-md-12"><BlogSidebar /></div>;

    return (
        <>
            <section className="sp-breadcrumb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-detail">
                                <h2 data-cursor="big">Blog Detail</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li>{post.title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sp-blog-detail-page p-tb-50">
                <div className="container">
                    <div className="row">
                        {hasSidebar && sidebarPosition === "left" && sidebar}

                        <div className={hasSidebar ? "col-lg-8 col-md-12" : "col-12"}>
                            <div className="sp-blog-single">
                                <div className="sp-blog-img">
                                    <img src={post.image} alt={post.title} className="w-100" />
                                </div>
                                <div className="sp-blog-content mt-4">
                                    <div className="sp-blog-meta mb-3">
                                        <span className="sp-blog-category mr-3"><i className="ri-folder-2-line"></i> {post.category}</span>
                                        <span className="sp-blog-date"><i className="ri-calendar-event-line"></i> {post.date}</span>
                                        <span className="sp-blog-author ml-3"><i className="ri-user-line"></i> Admin</span>
                                    </div>
                                    <h2 className="mb-4">{post.title}</h2>
                                    <p className="lead mb-4">{post.excerpt}</p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                    <blockquote className="blockquote my-4">
                                        <p className="mb-0">"Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening."</p>
                                        <footer className="blockquote-footer mt-2">Coco Chanel</footer>
                                    </blockquote>

                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                                    {/* Tags & Share */}
                                    <div className="sp-blog-share mt-5 d-flex justify-content-between align-items-center">
                                        <div className="sp-blog-tags">
                                            <strong>Tags:</strong>
                                            <a href="#" className="badge badge-secondary ml-2">Fashion</a>
                                            <a href="#" className="badge badge-secondary ml-2">Style</a>
                                            <a href="#" className="badge badge-secondary ml-2">Trend</a>
                                        </div>
                                        <div className="sp-social-share">
                                            <strong>Share:</strong>
                                            <a href="#" className="ml-2"><i className="ri-facebook-fill"></i></a>
                                            <a href="#" className="ml-2"><i className="ri-twitter-fill"></i></a>
                                            <a href="#" className="ml-2"><i className="ri-pinterest-fill"></i></a>
                                        </div>
                                    </div>

                                    {/* Comments Form */}
                                    <div className="sp-blog-comments mt-5">
                                        <h3 className="mb-4">Leave a Comment</h3>
                                        <form className="sp-comment-form">
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <input type="text" className="form-control" placeholder="Your Name" />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <input type="email" className="form-control" placeholder="Your Email" />
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <textarea className="form-control" rows="5" placeholder="Your Comment"></textarea>
                                                </div>
                                                <div className="col-12">
                                                    <button type="button" className="sp-btn-1">Post Comment</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {hasSidebar && sidebarPosition === "right" && sidebar}
                    </div>
                </div>
            </section>
        </>
    );
}
