import React from "react";
import BlogCard from "./BlogCard";

// 12 blog cards with visible Unsplash images
const blogsData = [
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
    category: "Digital Marketing",
    title: "5 Strategies to Boost Your Social Media Presence",
    excerpt: "Discover how to increase engagement and grow your social media following using proven strategies.",
    link: "/blogs/social-media-strategies",
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    category: "Branding",
    title: "Building a Strong Brand Identity in 2025",
    excerpt: "Learn the key steps to creating a memorable brand identity that resonates with your audience.",
    link: "/blogs/brand-identity-2025",
  },
  {
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
    category: "SEO",
    title: "SEO Best Practices for Modern Websites",
    excerpt: "Optimize your website for search engines with these essential SEO tips and techniques.",
    link: "/blogs/seo-best-practices",
  },
  {
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    category: "Content Marketing",
    title: "Creating Engaging Content That Converts",
    excerpt: "Learn how to craft content that captures attention and drives action from your audience.",
    link: "/blogs/content-marketing-tips",
  },
  {
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800",
    category: "Marketing Strategy",
    title: "Effective Campaign Planning for Small Businesses",
    excerpt: "Step-by-step guide to planning marketing campaigns that deliver measurable results.",
    link: "/blogs/campaign-planning",
  },
  {
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51",
    category: "Branding",
    title: "Top Branding Mistakes to Avoid",
    excerpt: "Avoid these common mistakes when building your brand to ensure long-term success.",
    link: "/blogs/branding-mistakes",
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    category: "SEO",
    title: "How to Improve Your Website Rankings Fast",
    excerpt: "Techniques and tips to boost your SEO rankings quickly and effectively.",
    link: "/blogs/improve-seo-rankings",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    category: "Social Media",
    title: "The Ultimate Guide to Social Media Analytics",
    excerpt: "Track and measure your social media performance to make data-driven decisions.",
    link: "/blogs/social-media-analytics",
  },
  {
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    category: "Digital Marketing",
    title: "Email Marketing Techniques That Work in 2025",
    excerpt: "Boost engagement and conversions with these email marketing strategies.",
    link: "/blogs/email-marketing-2025",
  },
];


const BlogsMain: React.FC = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Latest <span className="text-blue-600">Blogs</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogsData.map((blog, idx) => (
          <BlogCard
            key={idx}
            image={blog.image}
            category={blog.category}
            title={blog.title}
            excerpt={blog.excerpt}
            link={blog.link}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogsMain;
