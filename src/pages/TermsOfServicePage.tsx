import React from 'react';

const TermsOfServicePage: React.FC = () => (
  <div className="min-h-screen bg-white/80 backdrop-blur-md py-24 px-4">
    <div className="max-w-3xl mx-auto py-24">
      <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 border border-gray-100 mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-primary">Terms of Service</h1>
        <p className="mb-8 text-lg text-gray-700">Last updated: June 2024</p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-700">By accessing or using the AITISERVE website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use our site.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Use of Services</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>You agree to use our services only for lawful purposes.</li>
            <li>You must not misuse, disrupt, or attempt to gain unauthorized access to our systems.</li>
            <li>We reserve the right to modify or discontinue any part of our services at any time.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Intellectual Property</h2>
          <p className="text-gray-700">All content, trademarks, and data on this site are the property of AITISERVE or its licensors. You may not use, reproduce, or distribute any content without our written permission.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Limitation of Liability</h2>
          <p className="text-gray-700">AITISERVE is not liable for any damages arising from your use of our website or services. All services are provided "as is" without warranties of any kind.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Governing Law</h2>
          <p className="text-gray-700">These Terms are governed by the laws of Indonesia. Any disputes will be resolved in the courts of Indonesia.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Changes to Terms</h2>
          <p className="text-gray-700">We may update these Terms of Service from time to time. Changes will be posted on this page with an updated revision date.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
          <p className="text-gray-700">If you have any questions about these Terms, please contact us at <a href="mailto:hr@aitiserve.co.id" className="text-secondary underline">hr@aitiserve.co.id</a>.</p>
        </section>
      </div>
    </div>
  </div>
);

export default TermsOfServicePage; 