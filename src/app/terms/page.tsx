// app/terms/page.tsx
import React from "react";

export const metadata = {
  title: "Terms of Service — Atoms",
  description:
    "Terms of Service for Atoms. Learn about the rules and guidelines for using our website and services.",
};

const TermsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-gray-900/60 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-lg backdrop-blur-sm">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              Terms of Service
            </span>
          </h1>
          <p className="mt-3 text-gray-300">Last updated: August 10, 2025</p>
          <p className="mt-3 text-sm text-gray-400 max-w-2xl mx-auto">
            These Terms of Service govern your access to and use of Atoms
            website and services. By accessing or using our services, you agree to be bound by these Terms.
          </p>
        </header>

        <section className="space-y-8">
          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing or using any services provided by Atoms, 
              you agree to be bound by these Terms. If you do not agree to all of these Terms, 
              you may not use our services.
            </p>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">2. Description of Services</h2>
            <p className="text-gray-300 mb-3">
              Atoms provides various digital services including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Web and application development</li>
              <li>Content creation and ghostwriting</li>
              <li>Digital marketing and social media management</li>
              <li>Consulting and strategy services</li>
              <li>Other custom digital solutions</li>
            </ul>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">3. User Responsibilities</h2>
            <p className="text-gray-300 mb-3">
              When using our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Provide accurate and complete information when requested</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Not use our services for any illegal or unauthorized purpose</li>
              <li>Not interfere with or disrupt the service or servers</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">4. Intellectual Property</h2>
            <p className="text-gray-300 mb-3">
              All content and materials available through our services, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Text, graphics, logos, and images</li>
              <li>Software and source code</li>
              <li>Documentation and processes</li>
            </ul>
            <p className="text-gray-300 mt-3">
              are the property of Atoms or our licensors and are protected by copyright and other intellectual property laws.
            </p>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">5. Client Content & Projects</h2>
            <p className="text-gray-300 mb-3">
              For projects where we create custom work for clients:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Clients retain ownership of their original content and materials</li>
              <li>Upon full payment, clients receive ownership of the final deliverables</li>
              <li>We retain the right to display completed work in our portfolio unless otherwise agreed</li>
              <li>Any pre-existing materials we incorporate remain our property</li>
            </ul>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">6. Payments & Billing</h2>
            <p className="text-gray-300 mb-3">
              For paid services:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Prices are as quoted at time of purchase unless otherwise agreed</li>
              <li>Payment terms will be specified in your service agreement</li>
              <li>Late payments may incur additional charges</li>
              <li>We reserve the right to suspend services for unpaid accounts</li>
              <li>Refund policies vary by service and will be specified in your agreement</li>
            </ul>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">7. Confidentiality</h2>
            <p className="text-gray-300">
              We agree to keep confidential all non-public information you provide in connection with our services, 
              except where disclosure is required by law or with your permission. Similarly, you agree to keep 
              confidential any proprietary information we share with you about our processes and methods.
            </p>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">8. Termination</h2>
            <p className="text-gray-300 mb-3">
              Either party may terminate services:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>For paid services, according to the terms specified in your service agreement</li>
              <li>Immediately for material breach of these Terms</li>
              <li>At our discretion, if we believe you have violated these Terms</li>
            </ul>
            <p className="text-gray-300 mt-3">
              Upon termination, you must cease all use of our services and any outstanding payments become immediately due.
            </p>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">9. Disclaimers</h2>
            <p className="text-gray-300 mb-3">
              Our services are provided as is without warranties of any kind, either express or implied, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>We do not guarantee uninterrupted or error-free service</li>
              <li>Results may vary based on project specifics and client cooperation</li>
              <li>We are not responsible for third-party services or platforms</li>
              <li>Digital marketing results cannot be guaranteed</li>
            </ul>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">10. Limitation of Liability</h2>
            <p className="text-gray-300">
              To the maximum extent permitted by law, Atoms shall not be liable for any indirect, incidental, 
              special, consequential or punitive damages, or any loss of profits or revenues, whether incurred 
              directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information</li>
              <li>Any interruption or cessation of transmission to or from our services</li>
              <li>Any bugs, viruses, or similar that may be transmitted through our services</li>
            </ul>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">11. Changes to Terms</h2>
            <p className="text-gray-300">
              We reserve the right to modify these Terms at any time. We will provide notice of significant 
              changes through our website or by email. Your continued use of our services after changes 
              become effective constitutes acceptance of the new Terms.
            </p>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">12. Governing Law</h2>
            <p className="text-gray-300">
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], 
              without regard to its conflict of law provisions. Any disputes shall be resolved in the courts 
              of [Your Jurisdiction].
            </p>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">13. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              For any questions about these Terms, please contact us at:
            </p>
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4 text-gray-200">
              <p><strong>Atoms</strong></p>
              <p className="text-sm text-gray-300 mt-1">Email: <a className="text-sky-400 hover:underline" href="mailto:ashmes16@gmail.com">ashmes16@gmail.com</a></p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

export default TermsPage;