import Image from "next/image";
import { MessageSquare } from "lucide-react";

const Blog = () => {
  const blogsData = [
    {
      id: 1,
      image: "/images/blog/blog-1.png",
      title: "Why Lead Generation is Key for Business Growth",
      date: "July 24, 2019",
      author: "Admin",
      comments: 3,
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      id: 2,
      image: "/images/blog/blog-2.png",
      title: "Why Lead Generation is Key for Business Growth",
      date: "July 24, 2019",
      author: "Admin",
      comments: 3,
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      id: 3,
      image: "/images/blog/blog-3.png",
      title: "Why Lead Generation is Key for Business Growth",
      date: "July 24, 2019",
      author: "Admin",
      comments: 3,
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      id: 4,
      image: "/images/blog/blog-4.png",
      title: "Why Lead Generation is Key for Business Growth",
      date: "July 24, 2019",
      author: "Admin",
      comments: 3,
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-pink-500 text-sm font-medium tracking-wider uppercase mb-2">
            Blog
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Recent Blog
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {blogsData.map((blog) => (
            <div key={blog.id} className="group">
              {/* Blog Image */}
              <div className="relative w-full h-56 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blog Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
                  {blog.title}
                </h3>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-wide mb-3">
                  <span>{blog.date}</span>
                  <span>{blog.author}</span>
                  <span className="flex items-center gap-1">
                    <MessageSquare size={14} /> {blog.comments}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
