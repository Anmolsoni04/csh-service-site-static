import React from "react";

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, category, title, excerpt, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="text-sm text-blue-600 font-semibold">{category}</span>
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <p className="text-gray-600 mt-2">{excerpt}</p>
        <a
          href={link}
          className="mt-4 inline-block text-blue-600 font-medium hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
