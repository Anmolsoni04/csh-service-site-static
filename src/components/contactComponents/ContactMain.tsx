import React from "react";
import ContactButton from "./ContactButton";

const ContactMain: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-20 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side */}
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get In Touch With Us Today
            </h2>
            <p className="text-gray-600">
              Lorem suspend vivamus enim netus conval viverra iaculis erat
              auctor vulputate mollis eget porta.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                What Sets Your Agency Apart From Others In The Industry?
              </h3>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                What Is The Process For Initiating A Project With Your Agency?
              </h3>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Connect With Cybershields
          </h2>
          <p className="text-gray-600 mb-10">
            Lorem ipsum dolor sit amet consectetur. Amet ut mattis enim enim
            sagittis sed facilisis ornare nisi consectetur at massa.
          </p>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full border-b border-gray-300 p-3 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border-b border-gray-300 p-3 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone*"
              className="w-full border-b border-gray-300 p-3 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Subject*"
              className="w-full border-b border-gray-300 p-3 focus:outline-none focus:border-blue-500"
              required
            />
            <textarea
              placeholder="Message"
              className="w-full border-b border-gray-300 p-3 focus:outline-none focus:border-blue-500"
              rows={5}
            ></textarea>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="terms" className="w-4 h-4" />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                I agree to the{" "}
                <a href="#" className="text-blue-600 underline">
                  terms and conditions
                </a>
              </label>
            </div>

            <ContactButton />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
