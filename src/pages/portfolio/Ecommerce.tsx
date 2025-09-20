import React from "react";
import PortfolioTemplate from "@/components/portfolioComponents/PortfolioTemplate";

const Ecommerce: React.FC = () => {
  return (
    <PortfolioTemplate
      title="E-commerce Solutions"
      subtitle="Designing seamless shopping experiences."
      bannerImage="https://images.unsplash.com/photo-1581090700227-962f0332b0cb?auto=format&fit=crop&w=800&q=60"
      sections={[
        {
          heading: "Project Overview",
          text: `The digital landscape is constantly evolving. Our client faced low visibility and stagnant leads,
struggling to reach their target audience effectively. Our team crafted a strategy to transform
their online presence and drive measurable results.`,
          image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
        },
        {
          heading: "Project Details",
          text: (
            <div className="flex flex-wrap gap-4 mt-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Published: July 9, 2024
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Branding
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                Digital Marketing
              </span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                Lifestyle
              </span>
            </div>
          ),
        },
        {
          heading: "The Challenge",
          text: `Our client had limited engagement across social media channels, low organic search traffic,
and an unclear branding message. The need was for a cohesive marketing strategy that would drive leads,
improve visibility, and strengthen brand awareness.`,
          image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
        },
        {
          heading: "Our Strategy",
          text: `We developed a multi-channel marketing plan combining SEO optimization, targeted PPC campaigns,
social media engagement, and content marketing. A detailed analytics system was set up to measure performance
and refine campaigns continuously.`,
          image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
        },
        {
          heading: "The Solution",
          text: `By analyzing user behavior and segmenting target audiences, we created personalized ad campaigns
and engaging content. SEO improvements and high-performing landing pages ensured higher conversions
and better search engine rankings.`,
          image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51",
        },
        {
          heading: "The Impact",
          text: `Within three months, leads increased by 150%, click-through rates improved significantly,
and the client achieved a stronger online presence. Cost-per-click decreased by 25%, demonstrating
the effectiveness of a data-driven digital marketing approach.`,
          image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop",
        },
        {
          heading: "Building a Successful Client-Agency Relationship",
          text: `Collaboration and transparency were at the core of this project. Regular updates, performance
reports, and strategy sessions helped the client feel confident and involved, ensuring the success
of the campaigns and long-term partnership.`,
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
        },
      ]}
      ctaText="Start Your Digital Campaign"
      ctaLink="/contact"
    />
  );
};

export default Ecommerce;
