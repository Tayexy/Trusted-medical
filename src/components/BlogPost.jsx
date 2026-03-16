import React from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "./blogData";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <h2 className="text-center text-2xl mt-20">Post not found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      {/* Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover rounded-lg sm:h-64 md:h-full"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mt-8">
        {post.title}
      </h1>

      {/* Article */}
      <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mt-6">
        {post.content}
      </div>

      <Link
        to="/blog"
        className="inline-block mt-10 text-blue-600 hover:underline"
      >
        ← Back to Blog
      </Link>

    </div>
  );
}