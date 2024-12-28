import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      {/* <p className="text-sm text-gray-600 mb-4">Effective Date: [Insert Date]</p> */}

      <section className="mb-6">
        <p>
          Welcome to the <strong>India Property Show</strong>! We value your trust and are
          committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and
          safeguard your information when you visit our website or engage with our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We collect the following types of information to provide you with the best possible experience:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Personal Information:</strong> When you register, inquire, or contact us, we may
            collect:
            <ul className="list-disc list-inside ml-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>City of residence</li>
              <li>Preferences regarding budget and property type</li>
            </ul>
          </li>
          <li>
            <strong>Non-Personal Information:</strong> We may collect data such as:
            <ul className="list-disc list-inside ml-4">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Pages visited</li>
              <li>Time spent on our website</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Facilitate property-related inquiries and services</li>
          <li>Respond to your questions and provide support</li>
          <li>Customize your experience on our platform</li>
          <li>Inform you about upcoming property events and offers</li>
          <li>Analyze website traffic and improve our services</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Sharing Your Information</h2>
        <p>
          We do not sell your personal information to third parties. However, we may share your
          information with:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Trusted real estate developers or partners for fulfilling your property-related requirements
          </li>
          <li>Service providers who assist us in operating the website or providing services</li>
          <li>
            Legal authorities if required by law or to protect our rights
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Cookies and Tracking Technologies</h2>
        <p>
          Our website uses cookies to enhance user experience. Cookies are small files stored on your
          device that help us:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Understand user preferences</li>
          <li>Provide personalized recommendations</li>
          <li>Analyze website performance</li>
        </ul>
        <p className="mt-2">
          You can manage or disable cookies in your browser settings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
        <p>
          We employ appropriate security measures to protect your data from unauthorized access,
          alteration, or disclosure. However, no method of transmission over the internet is 100%
          secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Access your personal data</li>
          <li>Request corrections or updates to your information</li>
          <li>Withdraw consent for data processing</li>
          <li>Delete your data, subject to legal and business requirements</li>
        </ul>
        <p className="mt-2">
          To exercise these rights, please contact us at <strong>info@indiapropertyshow.in</strong>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for their
          privacy practices, and we encourage you to review their privacy policies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with the updated effective date.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or how your data is handled,
          feel free to reach out to us:
        </p>
        <ul className="list-disc list-inside">
          <li>Email:info@indiapropertyshow.in</li>
          <li>Phone:+91 9845114655</li>
          <li>Address: alsaqer tower sharjah road dubai</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
