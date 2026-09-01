import Link from 'next/link';

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-4 mt-10 text-2xl font-semibold text-gray-900">
    {children}
  </h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">{children}</h3>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-gray-600">{children}</p>
);

const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="mb-4 list-disc space-y-1 pl-6 text-gray-600">{children}</ul>
);

const Table = ({
  head,
  rows,
}: {
  head: string[];
  rows: (string | React.ReactNode)[][];
}) => (
  <div className="mb-6 overflow-x-auto">
    <table className="w-full min-w-[36rem] border-collapse text-left text-sm text-gray-600">
      <thead>
        <tr className="border-b border-gray-300">
          {head.map((h) => (
            <th key={h} className="py-2 pr-4 font-semibold text-gray-900">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-gray-200 align-top">
            {row.map((cell, j) => (
              <td key={j} className="py-2 pr-4">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-lg bg-white shadow-lg">
          <div className="p-8">
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              Plantative Privacy Policy
            </h1>
            <p className="mb-8 text-sm text-gray-500">
              Version 2.0 &middot; Effective from 31 August 2026
            </p>

            <div className="prose prose-gray max-w-none">
              <P>
                This Privacy Policy (the &rsquo;Policy&rsquo;) explains how
                Plantative collects, uses, discloses and otherwise processes
                personal data when you use the Plantative mobile application,
                the website at plantative.com and the related back-end services
                (together, the &rsquo;Services&rsquo;). It is issued in
                accordance with Articles 13 and 14 of Regulation (EU) 2016/679
                (the &rsquo;GDPR&rsquo;) and the Belgian Act of 30 July 2018 on
                the protection of natural persons with regard to the processing
                of personal data.
              </P>
              <P>
                This Policy forms part of, and is incorporated by reference
                into, our{' '}
                <Link href="/terms" className="text-green-700 underline">
                  Terms of Service
                </Link>{' '}
                (together, the &rsquo;User Agreement&rsquo;). Capitalised terms
                not defined here have the meaning given to them in the Terms of
                Service. In the event of a conflict between this Policy and the
                Terms of Service in respect of the processing of personal data,
                this Policy prevails.
              </P>

              <H2>1. Identity of the controller</H2>
              <P>
                The controller within the meaning of Article 4(7) GDPR is{' '}
                <strong>Sebastiaan Verplancke</strong>, a natural person
                carrying on business as a sole trader established in Belgium and
                trading under the name <strong>Plantative</strong>, with place
                of business at{' '}
                <strong>Patijntjestraat 87, 9000 Ghent, Belgium</strong>,
                registered with the Belgian Crossroads Bank for Enterprises
                under enterprise number <strong>1034.776.796</strong> and
                identified for VAT purposes under number{' '}
                <strong>BE 1034.776.796</strong> (&rsquo;Plantative&rsquo;,
                &rsquo;we&rsquo;, &rsquo;us&rsquo;, &rsquo;our&rsquo;).
              </P>
              <P>
                All privacy enquiries and all requests to exercise the rights
                described in section 13 should be addressed to{' '}
                <strong>plantative@gmail.com</strong>. We have not appointed a
                Data Protection Officer, as we are not required to do so under
                Article 37 GDPR.
              </P>
              <P>
                Where you sign in using a third-party identity provider, or
                where you purchase a subscription through an app store, that
                provider acts as an independent controller for its own
                processing. This Policy does not govern, and we accept no
                responsibility for, processing carried out by those parties
                under their own privacy policies.
              </P>

              <H2>2. Scope</H2>
              <P>
                This Policy applies to personal data processed through the
                Services. It does not apply to (a) websites, applications or
                services operated by third parties that you access from or
                through the Services, (b) information you disclose directly to
                another user outside the Services, or (c) processing carried out
                by other users of content you have made available to them.
              </P>

              <H2>3. Categories of personal data we process</H2>

              <H3>3.1 Data you provide to us</H3>
              <UL>
                <li>
                  <strong>Account and identity data:</strong> email address and
                  authentication credentials, first and last name, profile
                  picture, profile description, interface language, and the
                  fact, date and time of your acceptance of the User Agreement.
                  Passwords are stored solely as salted cryptographic hashes by
                  our authentication provider and are not accessible to us in
                  plaintext.
                </li>
                <li>
                  <strong>Federated sign-in data:</strong> where you sign in
                  with Google, Apple or Facebook, we receive a persistent user
                  identifier and, depending on your settings with that provider
                  and the permissions you grant, your email address, name and
                  avatar. Where Apple Private Relay is used, we receive a
                  relayed address rather than your actual email address.
                </li>
                <li>
                  <strong>Address and location data:</strong> the addresses you
                  add (label, street, number, apartment, postal code, city,
                  country) together with their geographic coordinates, and the
                  visibility setting you select for each (hidden, city only, or
                  full address).
                </li>
                <li>
                  <strong>User content:</strong> plant listings, photographs,
                  descriptions and care notes, growth journal entries and
                  measurements, wanted posts, favourites, trade and offer
                  history, ratings and reviews, direct and community chat
                  messages, and reports you submit about other users or content.
                </li>
                <li>
                  <strong>Care profile data:</strong> the plant-care experience
                  and commitment levels you select, used to tailor care
                  guidance.
                </li>
                <li>
                  <strong>Support and correspondence data:</strong> the content
                  of your messages to us, any documentation you supply, your
                  contact details and any related metadata.
                </li>
                <li>
                  <strong>Subscription data:</strong> where paid features are
                  offered, the purchase is processed by Apple or Google under
                  their own terms. We receive a subscription status and
                  transaction identifier. We do not receive, process or store
                  your payment card or bank details.
                </li>
              </UL>

              <H3>3.2 Data collected automatically</H3>
              <UL>
                <li>
                  <strong>Device and connection data:</strong> IP address,
                  device model and manufacturer, operating system and version,
                  application version and build, device language and region,
                  time zone, and connection status.
                </li>
                <li>
                  <strong>Diagnostic and stability data:</strong> crash reports,
                  exception traces, non-fatal error logs, performance data and
                  the device state at the time of an error, collected through
                  our diagnostics and crash-reporting provider.
                </li>
                <li>
                  <strong>Integrity and anti-abuse data:</strong> device
                  attestation tokens issued by the integrity services of the
                  mobile operating-system platforms and validated through our
                  attestation provider, and rate-limiting and quota counters
                  keyed to your account.
                </li>
                <li>
                  <strong>
                    Behavioural analytics and session reconstruction:
                  </strong>{' '}
                  we use a third-party behavioural-analytics provider, which
                  records a reconstruction of your use of the app, including the
                  screens you view, your navigation path, taps, scrolls and
                  gestures, session duration and device characteristics, and
                  which produces heatmaps and aggregated behavioural metrics.
                  That provider operates with default masking enabled, under
                  which text content, including text you enter, is masked before
                  transmission. We do not use this data to identify you
                  personally, but it constitutes personal data because it is
                  capable of being linked to your session and device.
                </li>
                <li>
                  <strong>Interaction events:</strong> listing views, searches,
                  favourites, offers and comparable interactions are transmitted
                  to our own back-end, subject to per-user quotas, and are used
                  to rank and personalise the discovery feed and to maintain
                  aggregate counters. These events are retained in server-side
                  log files.
                </li>
                <li>
                  <strong>Precise geolocation:</strong> where you grant the
                  operating-system permission, we access your device&rsquo;s
                  coordinates in order to pre-fill an address and to surface
                  listings by proximity. You may withdraw this permission at any
                  time in your device settings, without affecting the lawfulness
                  of processing carried out before withdrawal.
                </li>
                <li>
                  <strong>Approximate location derived from IP address:</strong>{' '}
                  where no coordinates are available, we derive a two-letter
                  country code from your IP address in order to produce a
                  relevant feed. The IP address is resolved in memory and
                  discarded; only the country code is used, and it is not
                  written to our interaction records.
                </li>
                <li>
                  <strong>Push notification identifiers:</strong> the messaging
                  token issued to your device installation, used to deliver
                  chat, trade and plant-care notifications.
                </li>
                <li>
                  <strong>Ambient light readings:</strong> where you use the
                  light-measurement feature, readings from the device light
                  sensor are processed locally on your device to produce a light
                  assessment for a plant.
                </li>
                <li>
                  <strong>Local storage on your device:</strong> the application
                  maintains an on-device cache (SQLite, key-value stores and
                  encrypted secure storage) containing your profile, plants,
                  chats and session tokens, so that the application functions
                  offline.
                </li>
              </UL>

              <H3>3.3 Special categories of personal data</H3>
              <P>
                We do not seek to collect special categories of personal data
                within the meaning of Article 9 GDPR, nor data relating to
                criminal convictions and offences within the meaning of Article
                10 GDPR. You should not include such data in your profile,
                listings, photographs, chat messages or any other free-text
                field. Where you nonetheless choose to make such data public
                through the Services, you do so on your own initiative and, to
                the extent applicable, you manifestly make that data public
                within the meaning of Article 9(2)(e) GDPR.
              </P>

              <H2>4. Purposes and legal bases</H2>
              <P>
                We process personal data only where a legal basis under Article
                6(1) GDPR applies, as set out below.
              </P>
              <Table
                head={['Purpose', 'Categories', 'Legal basis']}
                rows={[
                  [
                    'Creating and administering your account; authentication',
                    'Account, identity, federated sign-in data',
                    'Performance of a contract — Art. 6(1)(b)',
                  ],
                  [
                    'Publishing listings and wanted posts; operating trades, offers, favourites, follows, reviews and chat',
                    'User content, account data, address visibility settings',
                    'Performance of a contract — Art. 6(1)(b)',
                  ],
                  [
                    'Providing plant identification, care guidance and the in-app assistant',
                    'Photographs, plant metadata, chat history, care profile',
                    'Performance of a contract — Art. 6(1)(b)',
                  ],
                  [
                    'Pre-filling addresses and surfacing listings by proximity',
                    'Precise geolocation',
                    'Consent — Art. 6(1)(a), given via the operating-system permission and withdrawable at any time',
                  ],
                  [
                    'Sending push notifications',
                    'Push token, account identifier',
                    'Consent — Art. 6(1)(a), withdrawable in device or app settings',
                  ],
                  [
                    'Behavioural analytics, session reconstruction and heatmaps',
                    'Analytics and session data, device data',
                    'Consent — Art. 6(1)(a), read together with Article 5(3) of Directive 2002/58/EC, where such consent is required in your jurisdiction; otherwise our legitimate interest in understanding and improving the Services — Art. 6(1)(f)',
                  ],
                  [
                    'Ranking and personalising the discovery feed',
                    'Interaction events, approximate location',
                    'Legitimate interests — Art. 6(1)(f): presenting a usable and relevant service',
                  ],
                  [
                    'Diagnosing crashes and maintaining stability and performance',
                    'Diagnostic data, device data',
                    'Legitimate interests — Art. 6(1)(f): keeping the Services operational and secure',
                  ],
                  [
                    'Preventing fraud, abuse, spam and unauthorised access; enforcing the User Agreement; moderating content and handling reports',
                    'Account data, device attestation, interaction and content data',
                    'Legitimate interests — Art. 6(1)(f): protecting the Services, our users and third parties',
                  ],
                  [
                    'Sending service and transactional communications, including email verification',
                    'Email address, account data',
                    'Performance of a contract — Art. 6(1)(b)',
                  ],
                  [
                    'Complying with statutory obligations and responding to lawful requests from competent authorities',
                    'Any relevant category',
                    'Compliance with a legal obligation — Art. 6(1)(c)',
                  ],
                  [
                    'Establishing, exercising or defending legal claims, including retaining evidence of disputed trades',
                    'Any relevant category',
                    'Legitimate interests — Art. 6(1)(f), and Art. 9(2)(f) where applicable',
                  ],
                  [
                    'Effecting a merger, acquisition, reorganisation or transfer of assets',
                    'Any relevant category',
                    'Legitimate interests — Art. 6(1)(f): conducting and reorganising our business',
                  ],
                ]}
              />
              <P>
                Where we rely on legitimate interests, we have carried out a
                balancing exercise between those interests and your interests,
                rights and freedoms. You may request further information about
                that assessment, and you have the right to object as described
                in section 13.
              </P>

              <H2>
                5. Automated processing, artificial intelligence and the
                accuracy of guidance
              </H2>
              <P>
                Certain features rely on automated processing and third-party
                artificial-intelligence services. When you use plant
                identification, the in-app assistant or care enrichment, the
                relevant photographs, plant metadata and conversation history
                are transmitted to our third-party providers of
                generative-artificial-intelligence and image-recognition
                services, including a specialist plant-identification service,
                in each case for the purpose of generating a response to you.
              </P>
              <P>
                The discovery feed is ranked automatically on the basis of your
                interaction events and approximate location. We do not carry out
                decision-making based solely on automated processing that
                produces legal effects concerning you or similarly significantly
                affects you within the meaning of Article 22(1) GDPR.
              </P>
              <P>
                <strong>
                  Output generated by these features is informational and
                  probabilistic. It is not professional horticultural,
                  agricultural, botanical, veterinary, medical, nutritional,
                  legal or regulatory advice, and it may be incomplete, outdated
                  or incorrect, including as to species identification, toxicity
                  and edibility.
                </strong>{' '}
                You must independently verify any identification or guidance
                before acting on it, in particular before ingesting any plant or
                exposing any person or animal to it, and before importing,
                exporting, trading or disposing of any plant that may be
                protected, invasive or otherwise regulated. To the fullest
                extent permitted by applicable law, we exclude all liability for
                any loss or damage arising from reliance on such output.
              </P>

              <H2>6. Recipients and processors</H2>
              <P>
                We disclose personal data only as described below. Our
                processors act on our documented instructions under agreements
                concluded pursuant to Article 28(3) GDPR.
              </P>
              <Table
                head={['Recipient category', 'Function', 'Role']}
                rows={[
                  [
                    'Providers of cloud infrastructure, storage and databases',
                    'Hosting of the Services, storage of data and images, operation of our API and search index, and server logs',
                    'Processor',
                  ],
                  [
                    'Providers of authentication, security and integrity services',
                    'Account sign-in, device attestation, abuse prevention and rate limiting',
                    'Processor',
                  ],
                  [
                    'Providers of diagnostics and crash reporting',
                    'Crash, error and stability diagnostics',
                    'Processor',
                  ],
                  [
                    'Providers of behavioural and product analytics',
                    'Usage analysis, session reconstruction and improvement of the Services',
                    'Processor',
                  ],
                  [
                    'Providers of email, messaging and push-notification delivery',
                    'Delivery of transactional, verification and notification messages',
                    'Processor',
                  ],
                  [
                    'Providers of image-recognition and artificial-intelligence services',
                    'Plant identification and assistant features based on the content you submit',
                    'Processor',
                  ],
                  [
                    'App-store operators and third-party sign-in providers',
                    'Federated sign-in, and app-store distribution and billing',
                    'Independent controllers for their own processing',
                  ],
                  [
                    'Other users of the Services',
                    'Receipt of the profile information, listings and messages you choose to share with them',
                    'Independent controllers',
                  ],
                  [
                    'Professional advisers, insurers and auditors',
                    'Legal, accounting and insurance purposes',
                    'Controllers or processors, as applicable',
                  ],
                  [
                    'Competent authorities, courts and law-enforcement bodies',
                    'Compliance with legal obligations and lawful requests, and defence of legal claims',
                    'Independent controllers',
                  ],
                  [
                    'An acquirer or successor entity',
                    'Merger, acquisition, reorganisation, insolvency or transfer of all or part of our business or assets',
                    'Controller',
                  ],
                ]}
              />
              <P>
                A current list of the sub-processors we engage, including their
                identity and place of establishment, is available on request by
                contacting us at the address in section 1.
              </P>
              <P>
                <strong>
                  We do not sell personal data, and we do not share personal
                  data for cross-context behavioural advertising or for the
                  targeted-advertising purposes of any third party.
                </strong>
              </P>

              <H2>7. International transfers</H2>
              <P>
                Certain of the recipients listed above process personal data
                outside the European Economic Area, including in the United
                States. Where such a transfer takes place, it is carried out on
                the basis of an adequacy decision of the European Commission,
                including the EU&ndash;U.S. Data Privacy Framework where the
                recipient is certified under it, or on the basis of the Standard
                Contractual Clauses adopted by Commission Implementing Decision
                (EU) 2021/914, supplemented where appropriate by additional
                technical and organisational measures. You may request a copy of
                the relevant safeguards by contacting us at the address in
                section 1.
              </P>

              <H2>8. Information that is visible to others</H2>
              <P>
                The Services are a social marketplace. Your display name,
                profile picture, profile description, ratings, follower
                relationships, listings, wanted posts and the images and
                descriptions you attach to them are visible to other users and,
                where the relevant pages are publicly accessible, may be
                accessible without an account and indexed by search engines.
                Your address is disclosed only to the extent permitted by the
                visibility setting you select for it.
              </P>
              <P>
                Once information has been made available to another user, that
                user may retain, copy, screenshot, republish or otherwise
                process it outside our control, and deletion of your account
                will not retrieve it. To the fullest extent permitted by
                applicable law, we are not responsible or liable for the acts or
                omissions of other users, including any unlawful use of
                information you have chosen to disclose to them. You should not
                publish information through the Services that you would not wish
                to become public.
              </P>

              <H2>9. Retention</H2>
              <P>
                We retain personal data only for as long as necessary for the
                purposes for which it was collected, and thereafter for the
                period during which claims may be brought or as required by law.
              </P>
              <Table
                head={['Category', 'Retention period']}
                rows={[
                  [
                    'Account, profile and address data',
                    'For the duration of the account. Deleted or irreversibly anonymised within 30 days of a valid deletion request.',
                  ],
                  [
                    'Listings, wanted posts, photographs and care records',
                    'For the duration of the account, or until you delete them.',
                  ],
                  [
                    'Chat messages',
                    'For as long as the conversation exists, and thereafter for 12 months after the last participant deletes or leaves the conversation.',
                  ],
                  [
                    'Trade, offer and review records',
                    'For the duration of the account and thereafter for as long as necessary for the establishment, exercise or defence of legal claims.',
                  ],
                  [
                    'Diagnostic and crash data',
                    'In accordance with the retention period applied by our diagnostics provider, in principle not exceeding 90 days.',
                  ],
                  [
                    'Behavioural analytics and session reconstruction data',
                    'In accordance with the retention period applied by our analytics provider, after which it is deleted by that provider.',
                  ],
                  [
                    'Interaction event logs',
                    'Up to 12 months, after which they are deleted or aggregated into non-personal statistics.',
                  ],
                  [
                    'Server, security and anti-abuse logs',
                    'Up to 12 months, or longer where required to investigate a specific incident.',
                  ],
                  [
                    'Records subject to statutory retention obligations, including accounting records',
                    'For the statutory period, which under Belgian law is in principle seven years for accounting records.',
                  ],
                  [
                    'Data on your own device',
                    'Until you log out, clear the application data or uninstall the application.',
                  ],
                  [
                    'Backups',
                    'Residual copies may persist in encrypted backups for a limited period after deletion, and are overwritten in the ordinary backup cycle.',
                  ],
                ]}
              />

              <H2>10. Deleting your account</H2>
              <P>You may delete your account at any time:</P>
              <ol className="mb-4 list-decimal space-y-1 pl-6 text-gray-600">
                <li>
                  Open your profile from the right-hand side of the navigation
                  bar.
                </li>
                <li>Tap the edit button at the top of the screen.</li>
                <li>
                  Scroll to the bottom of the page and select &rsquo;Delete
                  Account&rsquo;.
                </li>
                <li>Confirm the deletion.</li>
              </ol>
              <P>
                Deletion is irreversible. For transparency, deletion does not
                remove: (a) messages already delivered to other users, which
                remain in their conversations; (b) content that other users have
                copied or saved outside the Services; (c) aggregated or
                irreversibly anonymised statistics, which no longer constitute
                personal data; or (d) records we are required or entitled to
                retain under section 9, in particular for the establishment,
                exercise or defence of legal claims and for compliance with
                statutory obligations. Such retained records are restricted to
                what is necessary for those purposes.
              </P>

              <H2>11. Security</H2>
              <P>
                We implement technical and organisational measures appropriate
                to the risk, in accordance with Article 32 GDPR. These include
                encryption of data in transit using TLS, encryption at rest by
                our infrastructure providers, server-side access rules enforcing
                least-privilege access to stored records, device attestation,
                encrypted secure storage for credentials on your device, code
                obfuscation in release builds, and access controls and logging
                on administrative interfaces.
              </P>
              <P>
                <strong>
                  No method of transmission over the internet and no method of
                  electronic storage is entirely secure. While we take
                  appropriate measures, we cannot and do not warrant or
                  guarantee the absolute security of personal data, and, to the
                  fullest extent permitted by applicable law, we exclude
                  liability for unauthorised access, disclosure, alteration or
                  destruction that occurs despite the implementation of such
                  measures.
                </strong>{' '}
                You are responsible for maintaining the confidentiality of your
                credentials and for all activity carried out under your account,
                and you must notify us without undue delay of any suspected
                compromise. Where a personal data breach is likely to result in
                a high risk to your rights and freedoms, we will notify you in
                accordance with Article 34 GDPR.
              </P>

              <H2>12. Children</H2>
              <P>
                The Services are intended exclusively for persons aged 18 years
                or older, and we do not knowingly process personal data of
                minors. If we become aware that a person under 18 has created an
                account, we will delete that account and the associated personal
                data without undue delay. A parent or guardian who believes that
                a minor has provided personal data to us should contact us at
                plantative@gmail.com.
              </P>

              <H2>13. Your rights</H2>
              <P>
                Subject to the conditions and exceptions in the GDPR, you have
                the right to:
              </P>
              <UL>
                <li>
                  obtain confirmation as to whether we process personal data
                  concerning you and obtain access to it (Article 15);
                </li>
                <li>
                  obtain rectification of inaccurate personal data and
                  completion of incomplete personal data (Article 16);
                </li>
                <li>obtain erasure of personal data (Article 17);</li>
                <li>obtain restriction of processing (Article 18);</li>
                <li>
                  receive the personal data you have provided to us in a
                  structured, commonly used and machine-readable format and to
                  transmit it to another controller (Article 20);
                </li>
                <li>
                  object at any time, on grounds relating to your particular
                  situation, to processing based on our legitimate interests
                  (Article 21); and
                </li>
                <li>
                  withdraw any consent you have given, at any time, without
                  affecting the lawfulness of processing carried out before the
                  withdrawal (Article 7(3)).
                </li>
              </UL>
              <P>
                Requests may be submitted at any time to{' '}
                <strong>plantative@gmail.com</strong>. We will respond without
                undue delay and in any event within one month of receipt, which
                period may be extended by two further months where necessary
                taking into account the complexity and number of requests, in
                which case we will inform you of the extension and the reasons
                for it. Where we have reasonable doubts as to your identity, we
                may request additional information necessary to confirm it.
                Requests are free of charge, save that we may charge a
                reasonable fee, or refuse to act, where a request is manifestly
                unfounded or excessive, in particular because of its repetitive
                character.
              </P>
              <P>
                You may also control certain processing directly in the
                application: you may edit your profile, manage or delete your
                listings, adjust the visibility of your address, manage
                notification preferences, block other users, and withdraw
                location and notification permissions in your device settings.
              </P>
              <P>
                You have the right to lodge a complaint with a supervisory
                authority, in particular in the Member State of your habitual
                residence, place of work or the place of the alleged
                infringement. The Belgian supervisory authority is the Data
                Protection Authority (Gegevensbeschermingsautoriteit / Autorité
                de protection des données), Drukpersstraat 35, 1000 Brussels,
                Belgium, contact@apd-gba.be.
              </P>

              <H2>14. Third-party services</H2>
              <P>
                The Services may contain links to, or interoperate with,
                websites, applications and services operated by third parties,
                including the identity providers and app stores referred to
                above. Those parties process personal data under their own
                privacy policies, over which we have no control. We make no
                representation as to, and to the fullest extent permitted by
                applicable law accept no liability for, the content, practices
                or availability of any such third party.
              </P>

              <H2>15. Changes to this Policy</H2>
              <P>
                We may amend this Policy from time to time to reflect changes in
                the Services, in our processing activities or in applicable law.
                Where a change is material, we will give notice through the
                application or by email at least 30 days before it takes effect,
                and the version number and effective date at the head of this
                Policy will be updated. Where a change requires your consent
                under applicable law, we will obtain that consent before the
                relevant processing begins. Your continued use of the Services
                after the effective date of a change constitutes acceptance of
                the amended Policy to the extent permitted by applicable law.
              </P>

              <H2>16. Severability and mandatory law</H2>
              <P>
                If any provision of this Policy is held to be invalid, unlawful
                or unenforceable, that provision shall be severed and the
                remaining provisions shall continue in full force and effect.
                Nothing in this Policy operates to exclude or limit any right
                you have under mandatory provisions of applicable law that
                cannot lawfully be excluded or limited, including your rights
                under the GDPR and under mandatory Belgian consumer protection
                law, and no exclusion or limitation of liability in this Policy
                applies to liability for death or personal injury caused by
                negligence, for fraud or fraudulent misrepresentation, or to any
                other liability that cannot lawfully be excluded.
              </P>

              <H2>17. Governing law</H2>
              <P>
                This Policy is governed by Belgian law, without prejudice to any
                mandatory protection afforded to you by the law of your country
                of habitual residence and without prejudice to your right to
                lodge a complaint with your local supervisory authority.
              </P>

              <H2>18. Contact</H2>
              <P>
                <strong>Sebastiaan Verplancke</strong>, trading as Plantative
                <br />
                <strong>Patijntjestraat 87, 9000 Ghent, Belgium</strong>
                <br />
                Enterprise number 1034.776.796 &middot; VAT BE 1034.776.796
                <br />
                plantative@gmail.com
              </P>
            </div>

            <div className="mt-12 text-center">
              <p className="font-bold text-gray-600">
                Last Updated: 31 August 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
