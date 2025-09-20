import React, { ReactNode } from "react";

interface Section {
    heading: string;
    text: string | ReactNode; // Updated to accept JSX
    image?: string;
}

interface PortfolioTemplateProps {
    title: string;
    subtitle: string;
    bannerImage?: string;
    sections: Section[];
    ctaText?: string;
    ctaLink?: string;
}

const PortfolioTemplate: React.FC<PortfolioTemplateProps> = ({
    title,
    subtitle,
    bannerImage,
    sections,
    ctaText = "Start Your Project",
    ctaLink = "/contact",
}) => {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative min-h-[80vh] bg-gradient-to-r from-black via-blue-900 to-indigo-900 text-white overflow-visible">
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Hero Content */}
                <div className="relative z-20 max-w-3xl mx-auto text-center py-20">
                    <h1 className="text-4xl md:text-5xl font-bold mt-12">{title}</h1>
                    <p className="text-lg md:text-xl text-gray-200">{subtitle}</p>
                </div>

                {/* Banner Image overlapping hero */}
                {bannerImage && (
                    <div className="relative w-full flex justify-center">
                        <img
                            src={bannerImage}
                            alt={title}
                            className="w-[90%] max-w-4xl relative z-10"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                )}
            </section>

            {/* Content Sections */}
            <section className="py-20 max-w-6xl mx-auto px-6 space-y-20">
                {sections.map((section, idx) => (
                    <div
                        key={idx}
                        className={`grid md:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        <div>
                            <h2 className="text-2xl font-bold">{section.heading}</h2>
                            <div className="text-gray-600 leading-relaxed">
                                {section.text}
                            </div>
                        </div>
                        {section.image && (
                            <img
                                src={section.image}
                                alt={section.heading}
                                className="shadow-lg"
                            />
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
};

export default PortfolioTemplate;
