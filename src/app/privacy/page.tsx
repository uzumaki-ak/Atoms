// // app/privacy/page.tsx
// import React from "react";

// export const metadata = {
//   title: "Privacy Policy — Atoms",
//   description:
//     "Privacy Policy for Atoms. Learn how we collect, use, store, and protect your information when you use our website and services.",
// };

// const PrivacyPage: React.FC = () => {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 py-16 px-4">
//       <div className="max-w-4xl mx-auto bg-gray-900/60 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-lg backdrop-blur-sm">
//         <header className="mb-8 text-center">
//           <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//             Privacy Policy
//           </h1>
//           <p className="mt-3 text-gray-300">Last updated: August 10, 2025</p>
//           <p className="mt-3 text-sm text-gray-400 max-w-2xl mx-auto">
//             This Privacy Policy explains how Atoms ("we", "us", or "our")
//             collects, uses, discloses, and safeguards your information when you
//             visit our website or use our services.
//           </p>
//         </header>

//         <section className="space-y-8">
//           <article>
//             <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
//             <p className="text-gray-300 mb-3">
//               We collect information that you provide directly (for example,
//               when you contact us, request a quote, or submit project files),
//               as well as certain information automatically as you navigate our
//               website.
//             </p>

//             <div className="mt-4 grid gap-4 md:grid-cols-2">
//               <div>
//                 <h3 className="font-medium text-gray-100">Personal Information</h3>
//                 <p className="text-gray-300 text-sm mt-1">
//                   Name, email address, phone number, billing/shipping address,
//                   and any other information you provide when requesting a
//                   quote or purchasing services.
//                 </p>
//               </div>

//               <div>
//                 <h3 className="font-medium text-gray-100">Project & Content Data</h3>
//                 <p className="text-gray-300 text-sm mt-1">
//                   Files, images, source code, brand assets, manuscripts,
//                   drafts, or any content you provide to us while delivering our
//                   services (web/app development, ghostwriting, social media,
//                   etc.).
//                 </p>
//               </div>

//               <div>
//                 <h3 className="font-medium text-gray-100">Device & Usage Data</h3>
//                 <p className="text-gray-300 text-sm mt-1">
//                   IP address, browser and device information, pages visited,
//                   referrer, and other analytics data collected automatically via
//                   cookies or similar technologies.
//                 </p>
//               </div>

//               <div>
//                 <h3 className="font-medium text-gray-100">Payment Information</h3>
//                 <p className="text-gray-300 text-sm mt-1">
//                   Payment and billing details required to complete purchases —
//                   these are processed by third-party payment processors and are
//                   not stored on our servers unless explicitly agreed.
//                 </p>
//               </div>
//             </div>
//           </article>

//           <article>
//             <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
//             <ul className="list-disc list-inside text-gray-300 space-y-2">
//               <li>To provide, operate, and maintain our services and websites.</li>
//               <li>To process orders, invoices, and payments.</li>
//               <li>To respond to your inquiries and provide customer support.</li>
//               <li>To deliver project work, store project files, and maintain backups.</li>
//               <li>To improve and personalise our services and website experience.</li>
//               <li>To send important updates, marketing communications (if you opt in), and legal notices.</li>
//               <li>To comply with legal obligations and enforce our terms of service.</li>
//             </ul>
//           </article>

//           <article>
//             <h2 className="text-xl font-semibold text-white mb-3">3. How We Share Information</h2>
//             <p className="text-gray-300 mb-3">
//               We do not sell or rent your personal information. We may share
//               information with:
//             </p>
//             <ul className="list-disc list-inside text-gray-300 space-y-2">
//               <li>
//                 <strong>Service Providers:</strong> hosting providers, payment processors,
//                 analytics services, file storage, and other vendors who help us
//                 deliver services.
//               </li>
//               <li>
//                 <strong>Business Partners:</strong> collaborators or contractors
//                 engaged on your project, with your consent when needed.
//               </li>
//               <li>
//                 <strong>Legal & Safety:</strong> when required by law, or to
//                 protect our rights, property, or safety.
//               </li>
//             </ul>
//           </article>

//           <article>
//             <h2 className="text-xl font-semibold text-white mb-3">4. Cookies & Tracking</h2>
//             <p className="text-gray-300 mb-3">
//               We use cookies, web beacons, and similar technologies to provide
//               and protect our services, analyze usage, and personalize content.
//               You can control cookie settings in your browser. Blocking certain
//               cookies may affect site functionality.
//             </p>
//           </article>

//           <article>
//             <h2 className="text-xl font-semibold text-white mb-3">5. Data Security</h2>
//             <p className="text-gray-300">
//               We implement reasonable technical and organizational measures to
//               protect your information — including TLS/SSL for data in transit,
//               access controls, and secure hosting. No method of transmission or
//               electronic storage is completely secure, so we cannot guarantee
//               absolute security.
//             </p>
//           </article>

//           <article>
//             <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention</h2>
//             <p className="text-gray-300">
//               We retain your personal and project data only as long as necessary
//               for the purposes described in this policy, or as required by law.
//               By default, project files and related communications are retained
//               for up to <strong>12 months</strong> after project completion unless you request earlier deletion.
//             </p>
//           </article>

//           <article>
//             <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
//             <p className="text-gray-300 mb-3">
//               Depending on your jurisdiction, you may have rights to access,
//               correct, export, or delete your personal information, or to
//               restrict certain processing. To exercise these rights, contact us
//               at the address below.
//             </p>
//           </article>

//           <article>
//             <h2 className="text-xl font-semibold text-white mb-3">8. Third-Party Links & Services</h2>
//             <p className="text-gray-300">
//               Our website may link to third-party sites (for example, payment
//               providers, analytics, or social platforms). We are not responsible
//               for their privacy practices. Please review their privacy policies
//               before providing personal data.
//             </p>
//           </article>

//           <article>
//             <h2 className="text-xl font-semibold text-white mb-3">9. International Transfers</h2>
//             <p className="text-gray-300">
//               If you are located outside the country where we operate, please
//               note that your data may be transferred to, stored, and processed
//               in a different jurisdiction. Where required, we take steps to
//               ensure appropriate safeguards are in place.
//             </p>
//           </article>

//           <article>
//             <h2 className="text-xl font-semibold text-white mb-3">10. Children</h2>
//             <p className="text-gray-300">
//               Our services are not intended for children under the age of 13.
//               We do not knowingly collect personal information from children
//               without parental consent. If you believe we have such data, contact
//               us and we will take steps to remove it.
//             </p>
//           </article>

//           <article>
//             <h2 className="text-xl font-semibold text-white mb-3">11. Changes to This Policy</h2>
//             <p className="text-gray-300">
//               We may update this Privacy Policy to reflect changes in our
//               practices. We will post the new policy on this page with an
//               updated "Last updated" date.
//             </p>
//           </article>

//           <article>
//             <h2 className="text-xl font-semibold text-white mb-3">12. Contact Us</h2>
//             <p className="text-gray-300 mb-4">
//               If you have questions or requests regarding this Privacy Policy or your personal data, contact us:
//             </p>

//             <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4 text-gray-200">
//               <p><strong>Atoms</strong></p>
//               <p className="text-sm text-gray-300 mt-1">Email: <a className="text-blue-400 hover:underline" href="mailto:ashmes16@gmail.com">ashmes16@gmail.com</a></p>
//             </div>
//           </article>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default PrivacyPage;







// app/privacy/page.tsx
import React from "react";

export const metadata = {
  title: "Privacy Policy — Atoms",
  description:
    "Privacy Policy for Atoms. Learn how we collect, use, store, and protect your information when you use our website and services.",
};

const PrivacyPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-gray-900/60 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-lg backdrop-blur-sm">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              Privacy Policy
            </span>
          </h1>
          <p className="mt-3 text-gray-300">Last updated: August 10, 2025</p>
          <p className="mt-3 text-sm text-gray-400 max-w-2xl mx-auto">
            This Privacy Policy explains how Atoms
            collects, uses, discloses, and safeguards your information when you
            visit our website or use our services.
          </p>
        </header>

        <section className="space-y-8">
          <article>
            <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p className="text-gray-300 mb-3">
              We collect information that you provide directly (for example,
              when you contact us, request a quote, or submit project files),
              as well as certain information automatically as you navigate our
              website.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-800">
                <h3 className="font-medium text-gray-100">Personal Information</h3>
                <p className="text-gray-300 text-sm mt-1">
                  Name, email address, phone number, billing/shipping address,
                  and any other information you provide when requesting a
                  quote or purchasing services.
                </p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-800">
                <h3 className="font-medium text-gray-100">Project & Content Data</h3>
                <p className="text-gray-300 text-sm mt-1">
                  Files, images, source code, brand assets, manuscripts,
                  drafts, or any content you provide to us while delivering our
                  services (web/app development, ghostwriting, social media,
                  etc.).
                </p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-800">
                <h3 className="font-medium text-gray-100">Device & Usage Data</h3>
                <p className="text-gray-300 text-sm mt-1">
                  IP address, browser and device information, pages visited,
                  referrer, and other analytics data collected automatically via
                  cookies or similar technologies.
                </p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-800">
                <h3 className="font-medium text-gray-100">Payment Information</h3>
                <p className="text-gray-300 text-sm mt-1">
                  Payment and billing details required to complete purchases —
                  these are processed by third-party payment processors and are
                  not stored on our servers unless explicitly agreed.
                </p>
              </div>
            </div>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>To provide, operate, and maintain our services and websites.</li>
              <li>To process orders, invoices, and payments.</li>
              <li>To respond to your inquiries and provide customer support.</li>
              <li>To deliver project work, store project files, and maintain backups.</li>
              <li>To improve and personalise our services and website experience.</li>
              <li>To send important updates, marketing communications (if you opt in), and legal notices.</li>
              <li>To comply with legal obligations and enforce our terms of service.</li>
            </ul>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Share Information</h2>
            <p className="text-gray-300 mb-3">
              We do not sell or rent your personal information. We may share
              information with:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <span className="text-sky-400">Service Providers:</span> hosting providers, payment processors,
                analytics services, file storage, and other vendors who help us
                deliver services.
              </li>
              <li>
                <span className="text-sky-400">Business Partners:</span> collaborators or contractors
                engaged on your project, with your consent when needed.
              </li>
              <li>
                <span className="text-sky-400">Legal & Safety:</span> when required by law, or to
                protect our rights, property, or safety.
              </li>
            </ul>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">4. Cookies & Tracking</h2>
            <p className="text-gray-300">
              We use cookies, web beacons, and similar technologies to provide
              and protect our services, analyze usage, and personalize content.
              You can control cookie settings in your browser. Blocking certain
              cookies may affect site functionality.
            </p>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Security</h2>
            <p className="text-gray-300">
              We implement reasonable technical and organizational measures to
              protect your information — including TLS/SSL for data in transit,
              access controls, and secure hosting. No method of transmission or
              electronic storage is completely secure, so we cannot guarantee
              absolute security.
            </p>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention</h2>
            <p className="text-gray-300">
              We retain your personal and project data only as long as necessary
              for the purposes described in this policy, or as required by law.
              By default, project files and related communications are retained
              for up to <span className="text-sky-400">12 months</span> after project completion unless you request earlier deletion.
            </p>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
            <p className="text-gray-300">
              Depending on your jurisdiction, you may have rights to access,
              correct, export, or delete your personal information, or to
              restrict certain processing. To exercise these rights, contact us
              at the address below.
            </p>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">8. Third-Party Links & Services</h2>
            <p className="text-gray-300">
              Our website may link to third-party sites (for example, payment
              providers, analytics, or social platforms). We are not responsible
              for their privacy practices. Please review their privacy policies
              before providing personal data.
            </p>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">9. International Transfers</h2>
            <p className="text-gray-300">
              If you are located outside the country where we operate, please
              note that your data may be transferred to, stored, and processed
              in a different jurisdiction. Where required, we take steps to
              ensure appropriate safeguards are in place.
            </p>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">10. Children</h2>
            <p className="text-gray-300">
              Our services are not intended for children under the age of 13.
              We do not knowingly collect personal information from children
              without parental consent. If you believe we have such data, contact
              us and we will take steps to remove it.
            </p>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">11. Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy to reflect changes in our
              practices. We will post the new policy on this page with an
              updated "Last updated" date.
            </p>
          </article>

          <article className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-3">12. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have questions or requests regarding this Privacy Policy or your personal data, contact us:
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

export default PrivacyPage;