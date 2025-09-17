import { FC } from "react";
import { MonitorPlay, Clapperboard } from "lucide-react";

const AboutMore: FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-50 via-white to-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/4066041/pexels-photo-4066041.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About More"
              className="w-[400px] h-[400px] object-cover rounded-xl shadow-lg"
              />
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Digital Strategies Designed <br /> For Impact And Growth
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Arcu a neque sodales
              massa. Sollicitudin sed nunc cras massa leo mollis id nibh eget.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                  <MonitorPlay className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Motion Graphic Design And Animation
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas a non felis maximus iaculis ac sit amet.
                  </p>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                  <Clapperboard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Video Production And Marketing
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas a non felis maximus iaculis ac sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMore;
