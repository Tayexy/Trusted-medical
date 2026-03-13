import React from 'react'

function Privacy() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-12">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-6">
          <strong>Last Updated:</strong> March 2026
        </p>

        <section className="space-y-6 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Trusted Medical respects your privacy and is committed to protecting
              your personal information. This Privacy Policy explains how we collect,
              use, and protect the information you provide when using our website
              and medical consulting services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. Information We Collect
            </h2>

            <p className="mb-2">We may collect the following information:</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Health-related information you voluntarily provide</li>
              <li>Appointment or consultation details</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              3. How We Use Your Information
            </h2>

            <ul className="list-disc pl-6 space-y-1">
              <li>Provide medical consultation services</li>
              <li>Respond to inquiries</li>
              <li>Schedule consultations</li>
              <li>Improve our website and services</li>
              <li>Send important service updates</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              4. Confidentiality of Medical Information
            </h2>
            <p>
              Trusted Medical understands that medical information is sensitive.
              We take appropriate measures to ensure that consultations and personal
              health information remain private and secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. Sharing Your Information
            </h2>
            <p>
              Trusted Medical does not sell or rent your personal information.
              Your data may only be shared with medical professionals involved
              in your consultation or when required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              information from unauthorized access or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Cookies</h2>
            <p>
              Our website may use cookies to improve performance and enhance
              user experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
            <p>
              Trusted Medical may update this Privacy Policy from time to time.
              Any changes will be posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
            <p>
              If you have questions regarding this Privacy Policy, please
              contact Trusted Medical through our website.
            </p>
          </div>

        </section>

      </div>
    </div>
  )
}

export default Privacy