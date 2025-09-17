import React from "react";
import { CheckCircle, Trophy } from "lucide-react";
import aboutBg from "@/components/svg/bg-about.svg";

const AboutBusiness: React.FC = () => {
    return (
        <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-r from-black via-blue-900 to-indigo-900 text-white py-20">
            {/* Background overlay */}
            <img
                src={aboutBg}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
            />

            <div className="relative container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-4xl font-bold text-white mb-6">
                        The Power Of Business <br /> Management Solutions.
                    </h2>
                    <p className="text-lg text-gray-300 mb-10">
                        Lorem ipsum dolor sit amet consectetur. Diam lectus ridiculus dui
                        nisl lultrices. Id sapien nec mi quisque elementum tortor.
                    </p>

                    {/* Features */}
                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <CheckCircle className="w-6 h-6 text-blue-500 mt-1" />
                            <div>
                                <h4 className="text-xl font-semibold">
                                    Competitive Pricing Strategies
                                </h4>
                                <p className="text-gray-400 text-base">
                                    Lorem Ipsum Dolor Sit Amet Consectetur. Purus Faucibus Pretium
                                    Egravida Nisl. Vel Sodales Nullam Mauris Dolor Erat.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <CheckCircle className="w-6 h-6 text-blue-500 mt-1" />
                            <div>
                                <h4 className="text-xl font-semibold">
                                    Better Than Google Analytics
                                </h4>
                                <p className="text-gray-400 text-base">
                                    Lorem Ipsum Dolor Sit Amet Consectetur. Purus Faucibus Pretium
                                    Egravida Nisl. Vel Sodales Nullam Mauris Dolor Erat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Images + Card */}
                <div className="relative grid grid-cols-2 gap-6">
                    {/* Left tall image */}
                    <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://images.pexels.com/photos/1181343/pexels-photo-1181343.jpeg"
                            alt="Business person working"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right stack */}
                    <div className="flex flex-col gap-6">
                        <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.pexels.com/photos/3184610/pexels-photo-3184610.jpeg"
                                alt="Team member smiling"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Card below image */}
                        <div className="flex items-center bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                            <Trophy className="w-8 h-8 mr-4" />
                            <div>
                                <h5 className="font-semibold">
                                    Provide best Services <br /> for your Agency
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Logos Section */}
            {/* <div className="relative container mx-auto px-6 lg:px-20 mt-20 text-center">
                <h3 className="text-3xl font-bold text-white mb-10">
                    More than 12,500 Teams use Agentix Digital Agency
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                        alt="Google"
                        className="h-10 mx-auto hover:grayscale-0 transition"
                    />
                    <img
                        src="https://cdn.worldvectorlogo.com/logos/microsoft-6.svg"
                        alt="Microsoft"
                        className="h-10 "
                    />
                    <img
                        src="https://cdn.worldvectorlogo.com/logos/spotify-2.svg"
                        alt="Spotify"
                        className="h-10 mx-auto hover:grayscale-0 transition"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                        alt="Amazon"
                        className="h-10 mx-auto hover:grayscale-0 transition"
                    />
                    <img
                        src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg"
                        alt="Netflix"
                        className="h-10 mx-auto hover:grayscale-0 transition"
                    />
                    <img
                        src="https://cdn.worldvectorlogo.com/logos/airbnb-2.svg"
                        alt="Airbnb"
                        className="h-10 mx-auto hover:grayscale-0 transition"
                    />
                    <img
                        src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
                        alt="Slack"
                        className="h-10 mx-auto hover:grayscale-0 transition"
                    />
                    <img
                        src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
                        alt="Shopify"
                        className="h-10 mx-auto hover:grayscale-0 transition"
                    />
                </div>
            </div> */}
            {/* Logos Section */}
<div className="relative container mx-auto px-6 lg:px-20 mt-20 text-center">
  <h3 className="text-3xl font-bold text-white mb-10">
    More Than 12,500 Teams Use Agentix Digital Agency
  </h3>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
    {[
      { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", name: "Logo Ipsum" },
      { src: "https://cdn.worldvectorlogo.com/logos/microsoft-6.svg", name: "Dummy Logo" },
      { src: "https://cdn.worldvectorlogo.com/logos/spotify-2.svg", name: "Digital Dummy" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", name: "Logo Text" },
      { src: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg", name: "Company Name" },
      { src: "https://cdn.worldvectorlogo.com/logos/airbnb-2.svg", name: "Brand Name" },
      { src: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg", name: "Logo Name" },
      { src: "https://cdn.worldvectorlogo.com/logos/shopify.svg", name: "Dummy Logo" },
    ].map((logo, i) => (
      <div
        key={i}
        className="bg-black/30 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-black/50 transition"
      >
        <img
          src={logo.src}
          alt={logo.name}
          className="h-10 mb-3 object-contain hover:grayscale-0 transition"
        />
        <p className="text-gray-300 text-sm">{logo.name}</p>
      </div>
    ))}
  </div>
</div>



        </section>
    );
};

export default AboutBusiness;
