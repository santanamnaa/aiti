import React from 'react';

const PrivacyPolicyPage: React.FC = () => (
  <div className="min-h-screen bg-white/80 backdrop-blur-md py-24 px-4">
    <div className="max-w-3xl mx-auto py-24">
      <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 border border-gray-100 mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-primary">Privacy Policy</h1>
        <p className="mb-8 text-lg text-gray-700">Last updated: June 2024</p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-gray-700">AITISERVE ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Personal identification information (name, email address, phone number, etc.)</li>
            <li>Usage data (pages visited, time spent, browser type, etc.)</li>
            <li>Any information you voluntarily provide via forms or contact methods</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>To provide, operate, and maintain our website and services</li>
            <li>To improve, personalize, and expand our offerings</li>
            <li>To communicate with you, including for customer service and updates</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Information Sharing</h2>
          <p className="text-gray-700">We do not sell or rent your personal information. We may share information with trusted partners who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
          <p className="text-gray-700">We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
          <p className="text-gray-700">You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:hr@aitiserve.co.id" className="text-secondary underline">hr@aitiserve.co.id</a>.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Changes to This Policy</h2>
          <p className="text-gray-700">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
          <p className="text-gray-700">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hr@aitiserve.co.id" className="text-secondary underline">hr@aitiserve.co.id</a>.</p>
        </section>
      </div>
    </div>
  </div>
);

export default PrivacyPolicyPage; 