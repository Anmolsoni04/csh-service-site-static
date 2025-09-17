import React from "react";

const PrivacyPolicyMain: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Intro */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Introduction</h2>
          <p>
            Cybershields Technology ("we," "our," or "us") is committed to
            protecting your privacy. This Privacy Policy describes how we
            collect, use, and safeguard your information when you visit our
            website or use our services.
          </p>
        </div>

        {/* Information We Collect */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Information We Collect
          </h2>
          <p>
            We may collect the following types of information when you interact
            with our website:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Personal Information:</strong> Such as your name, email,
              phone number, or company details when you fill out forms or
              contact us.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our
              website, including IP address, browser type, and browsing
              activity.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies and similar technologies
              to enhance your browsing experience and analyze website traffic.
            </li>
          </ul>
        </div>

        {/* How We Use Information */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Provide and improve our services.</li>
            <li>Communicate with you regarding inquiries or updates.</li>
            <li>Send newsletters, offers, and updates (if you opt in).</li>
            <li>Ensure security and prevent fraudulent activities.</li>
          </ul>
        </div>

        {/* Sharing of Information */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Sharing of Information
          </h2>
          <p>
            We do not sell or rent your personal data. However, we may share
            your information:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>With trusted service providers who assist in our operations.</li>
            <li>
              To comply with legal obligations, government requests, or enforce
              our policies.
            </li>
            <li>In the event of a business transfer such as a merger or acquisition.</li>
          </ul>
        </div>

        {/* Data Security */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Data Security
          </h2>
          <p>
            We use industry-standard measures to protect your data from
            unauthorized access, disclosure, or misuse. However, no online
            platform can be completely secure, and we cannot guarantee absolute
            security.
          </p>
        </div>

        {/* Your Rights */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Rights</h2>
          <p>
            Depending on your location, you may have rights under data
            protection laws, including:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>The right to access and receive a copy of your data.</li>
            <li>The right to request correction or deletion of your data.</li>
            <li>
              The right to opt out of receiving promotional communications.
            </li>
          </ul>
        </div>

        {/* Policy Updates */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. Updates will be
            posted on this page with a revised date.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please
            contact us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> hello@cybershields.com
            <br />
            <strong>Phone:</strong> +91 99999 99999
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyMain;
