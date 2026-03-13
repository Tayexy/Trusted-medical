import { Link } from "react-router-dom";
import blogPosts from "./blogData";

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold text-center mb-12">
        Trusted Medical Blog
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>

              <p className="text-gray-600 mb-4">{post.excerpt}</p>

              <Link
                to={`/blog/${post.id}`}
                className="text-blue-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}