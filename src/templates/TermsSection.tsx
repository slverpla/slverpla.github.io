import Link from 'next/link';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-lg bg-white shadow-lg">
          <div className="p-8">
            <h1 className="mb-8 text-3xl font-bold text-gray-900">
              Plantative Terms of Service
            </h1>

            <div className="prose prose-gray max-w-none">
              <p className="mb-6 text-gray-600">Welcome to Plantative!</p>

              <p className="mb-8 text-gray-600">
                Our mission is to create a thriving community of plant
                enthusiasts who can safely and responsibly trade plants,
                cuttings, and gardening knowledge. We&apos;re building a
                platform that brings plant lovers together through secure and
                sustainable exchanges.
              </p>

              <p className="mb-8 text-gray-600">
                We&apos;ve created these{' '}
                <Link href="/terms" className="underline">
                  Terms of Service
                </Link>{' '}
                (&rsquo;Terms&rsquo;) and{' '}
                <Link href="/privacy-policy" className="underline">
                  Privacy Policy
                </Link>{' '}
                (collectively the &rsquo;User Agreement&rsquo;) to clearly
                outline how our platform works and what we expect from our
                community members. Throughout this document, certain terms have
                specific meanings that remain consistent wherever they appear.
                If anything seems unclear, please reach out to us - we&apos;re
                here to help make plant trading as transparent and enjoyable as
                possible.
              </p>

              <div className="space-y-12">
                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    1. Eligibility
                  </h2>
                  <p className="mb-4 text-gray-600">
                    Our Services encompass all aspects of the Plantative mobile
                    applications, website, and the software systems that power
                    our platform.
                  </p>
                  <p className="text-gray-600">
                    To use Plantative, you must be:
                  </p>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li className="mb-2">
                      A real person (no automated accounts or bots)
                    </li>
                    <li className="mb-2">At least 18 years old</li>
                    <li className="mb-2">
                      Legally able to enter into binding contracts in your
                      jurisdiction
                    </li>
                    <li>
                      If representing a business or organization, authorized to
                      act on their behalf
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    2. Privacy Protection
                  </h2>
                  <p className="text-gray-600">
                    Our Privacy Policy details what information we collect, when
                    we collect it, and how we handle it when you use Plantative.
                    By using our Services, you consent to our collection, use,
                    storage, processing, and transfer of this information in
                    countries where we operate and with partners who help
                    provide our Services.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    3. Content and Trading
                  </h2>
                  <p className="mb-4 text-gray-600">
                    Authenticity and respect are core to our community. All
                    users must be honest about their plants and respectful in
                    their interactions.
                  </p>
                  <p className="mb-4 text-gray-600">
                    &rsquo;Content&rsquo; includes plant listings, photos,
                    videos, descriptions, messages, reviews, and any other
                    material shared through our Services.
                  </p>
                  <p className="text-gray-600">You are responsible for:</p>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li className="mb-2">
                      Ensuring all Content you share is accurate and truthful
                    </li>
                    <li className="mb-2">
                      Having the right to trade or sell any plants you list
                    </li>
                    <li className="mb-2">
                      Complying with all applicable laws and regulations
                      regarding plant trade
                    </li>
                    <li>Following our plant safety and packaging guidelines</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    4. Reporting Violations
                  </h2>
                  <p className="text-gray-600">
                    While we don&apos;t monitor all interactions, we want
                    Plantative to be a safe and trustworthy platform. You can
                    report concerning content or behavior through our in-app
                    reporting system or website form.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    5. Account Termination
                  </h2>
                  <p className="mb-4 text-gray-600">
                    We may suspend or terminate accounts for:
                  </p>
                  <ul className="mb-4 list-disc pl-6 text-gray-600">
                    <li>Selling prohibited plants</li>
                    <li>Misrepresenting items</li>
                    <li>Fraudulent behavior</li>
                    <li>Violating our Community Guidelines</li>
                  </ul>
                  <p className="text-gray-600">
                    We typically follow a three-strike policy:
                  </p>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>1st violation: 30-day suspension</li>
                    <li>2nd violation: 60-day suspension</li>
                    <li>3rd violation: Permanent account termination</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    6. Intellectual Property
                  </h2>
                  <p className="text-gray-600">
                    Our platform and branding are protected by various
                    intellectual property laws. Using our Services doesn&apos;t
                    grant you ownership of any Plantative intellectual property.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    7. Liability Limitations
                  </h2>
                  <p className="text-gray-600">
                    By using Plantative, you agree that our liability is limited
                    to the maximum extent permitted by law in your jurisdiction.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    8. Governing Law
                  </h2>
                  <p className="text-gray-600">
                    These Terms are governed by Belgian law. Any disputes will
                    be resolved in the courts of Brussels, Belgium.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    9. General Provisions
                  </h2>
                  <p className="mb-4 text-gray-600">
                    We may update these terms with 30 days&apos; notice.
                    Continued use of Plantative after updates indicates
                    acceptance of the new terms.
                  </p>
                  <p className="text-gray-600">
                    If any portion of these terms is found unenforceable, the
                    remaining provisions remain in effect.
                  </p>
                  <p className="text-gray-600">
                    This Agreement is between you and Plantative.
                  </p>
                </section>
              </div>

              <div className="mt-12 text-center">
                <p className="font-bold text-gray-600">
                  Last Updated: January 4, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
