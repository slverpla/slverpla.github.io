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

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-lg bg-white shadow-lg">
          <div className="p-8">
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              Plantative Terms of Service
            </h1>
            <p className="mb-8 text-sm text-gray-500">
              Version 2.0 &middot; Effective from 1 October 2026
            </p>

            <div className="prose prose-gray max-w-none">
              <P>
                These Terms of Service (the &rsquo;Terms&rsquo;) govern your
                access to and use of the Plantative mobile application, the
                website at plantative.com and the related back-end services
                (together, the &rsquo;Services&rsquo;). They form a binding
                agreement between you and Plantative.
              </P>
              <P>
                These Terms and our{' '}
                <Link
                  href="/privacy-policy"
                  className="text-green-700 underline"
                >
                  Privacy Policy
                </Link>{' '}
                together form the &rsquo;User Agreement&rsquo;. Please read
                section 6 (what Plantative is and is not), section 8 (legal
                compliance for plants), section 13 (artificial intelligence) and
                section 19 (limitation of liability) with particular care: they
                allocate risk between you and us, and they describe risks that
                you carry yourself.
              </P>

              <H2>1. Who we are and how to contact us</H2>
              <P>
                The Services are provided by{' '}
                <strong>Sebastiaan Verplancke</strong>, a natural person
                carrying on business as a sole trader established in Belgium and
                trading under the name <strong>Plantative</strong>{' '}
                (&rsquo;Plantative&rsquo;, &rsquo;we&rsquo;, &rsquo;us&rsquo;,
                &rsquo;our&rsquo;).
              </P>
              <UL>
                <li>
                  Place of business: Patijntjestraat 87, 9000 Ghent, Belgium
                </li>
                <li>Crossroads Bank for Enterprises number: 1034.776.796</li>
                <li>VAT identification number: BE 1034.776.796</li>
                <li>Email: plantative@gmail.com</li>
              </UL>
              <P>
                The email address above is also our single point of contact for
                the purposes of Articles 11 and 12 of Regulation (EU) 2022/2065
                (the &rsquo;Digital Services Act&rsquo;), for communications
                with Member State authorities, the Commission and the European
                Board for Digital Services, and for direct communication with
                recipients of the Services. Communications may be made in Dutch
                or in English.
              </P>

              <H2>2. Scope, acceptance and definitions</H2>
              <P>
                By creating an account, or by accessing or using any part of the
                Services, you confirm that you accept the User Agreement and
                agree to be bound by it. If you do not accept it, you must not
                use the Services.
              </P>
              <P>In these Terms:</P>
              <UL>
                <li>
                  &rsquo;Content&rsquo; means any material you submit, upload,
                  publish, transmit or otherwise make available through the
                  Services, including listings, photographs, plant names and
                  descriptions, prices, messages, addresses, reviews, profile
                  information and support requests;
                </li>
                <li>
                  &rsquo;Listing&rsquo; means an entry you publish offering a
                  plant, cutting, seed or other plant material for sale, swap or
                  giveaway, and any &rsquo;wanted&rsquo; post you publish;
                </li>
                <li>
                  &rsquo;Offer&rsquo; means a proposal made through the Services
                  by one user to another to buy, sell or swap plant material,
                  including any revision of that proposal;
                </li>
                <li>
                  &rsquo;Trade&rsquo; means an agreement concluded between two
                  users following an accepted Offer or a direct purchase, and
                  its performance;
                </li>
                <li>
                  &rsquo;Doctor&rsquo; means the in-app assistant and the plant
                  identification, diagnosis and care-guidance features described
                  in section 13;
                </li>
                <li>
                  &rsquo;Premium&rsquo; means a paid subscription plan offered
                  through an app store as described in section 14;
                </li>
                <li>
                  &rsquo;Consumer&rsquo; means a natural person acting for
                  purposes which are outside their trade, business, craft or
                  profession, and &rsquo;Trader&rsquo; means any user who is not
                  a Consumer in respect of a given Listing or Trade.
                </li>
              </UL>

              <H2>3. Changes to these Terms</H2>
              <P>
                We may amend these Terms to reflect changes in the Services, in
                our business or in applicable law. Where an amendment is
                material, we will give notice through the application or by
                email at least 30 days before it takes effect. Where an
                amendment is required to comply with a legal obligation, a court
                or regulatory order, or to address a security or safety risk, it
                may take effect immediately.
              </P>
              <P>
                If you do not accept an amendment, your remedy is to stop using
                the Services and delete your account before the amendment takes
                effect. Continued use of the Services after the effective date
                constitutes acceptance of the amended Terms, to the extent
                permitted by applicable law.
              </P>

              <H2>4. Eligibility</H2>
              <P>To use the Services you must:</P>
              <UL>
                <li>be a natural person, and not an automated agent or bot;</li>
                <li>be at least 18 years of age;</li>
                <li>
                  have the legal capacity to enter into a binding contract under
                  the law of your country of residence;
                </li>
                <li>
                  where you act on behalf of a business or other organisation,
                  be authorised to bind it, in which case &rsquo;you&rsquo;
                  means both you and that organisation;
                </li>
                <li>
                  not be the subject of any applicable trade or economic
                  sanctions, and not be located in a territory subject to
                  comprehensive sanctions; and
                </li>
                <li>
                  not previously have had an account terminated by us for breach
                  of the User Agreement, unless we expressly agree otherwise in
                  writing.
                </li>
              </UL>
              <P>
                We may at any time require reasonable evidence of your age,
                identity or authority, and may suspend access pending its
                provision. The Services are not directed at persons under 18. If
                we become aware that a person under 18 holds an account, we will
                close it.
              </P>

              <H2>5. Your account</H2>
              <P>
                You must provide accurate and complete registration information
                and keep it up to date. You are responsible for keeping your
                credentials confidential and for all activity that occurs under
                your account, and you must notify us without undue delay at
                plantative@gmail.com of any suspected unauthorised use. You may
                not hold more than one account without our consent, and you may
                not sell, rent, lend or otherwise transfer your account,
                username, reputation or reviews to any other person.
              </P>

              <H2>6. What Plantative is &mdash; and what it is not</H2>
              <P>
                Plantative is an information society service which provides a
                venue where users may publish Listings, communicate with one
                another, negotiate Offers, record Trades and exchange plant
                material directly among themselves. In providing that venue we
                act as a provider of hosting services within the meaning of
                Articles 4 to 6 of the Digital Services Act and Book XII of the
                Belgian Code of Economic Law, storing information provided by
                users at their request.
              </P>
              <P>
                <strong>
                  We are not a party to any Trade. We are not the seller, buyer,
                  supplier, importer, exporter, distributor, wholesaler,
                  retailer, auctioneer, broker, agent, escrow agent, carrier,
                  freight forwarder, payment service provider or insurer in
                  respect of any plant, plant material or other item offered
                  through the Services.
                </strong>
              </P>
              <P>The following apply without exception:</P>
              <UL>
                <li>
                  we never take possession, custody or control of any plant or
                  other item offered through the Services;
                </li>
                <li>
                  we do not inspect, test, examine, authenticate, appraise,
                  identify, certify or otherwise verify any plant, Listing,
                  photograph, description, species name, price, condition,
                  provenance, permit, phytosanitary document or user identity;
                </li>
                <li>
                  no payment is processed, held, escrowed, guaranteed or
                  transmitted by us in respect of any Trade. Payment and
                  delivery are arranged directly between the users concerned,
                  outside the Services, at their own risk;
                </li>
                <li>
                  any contract arising from an accepted Offer or a direct
                  purchase is concluded exclusively between the users concerned.
                  All rights and remedies arising from it, including any right
                  of withdrawal, any legal or commercial guarantee of
                  conformity, any right to a refund, replacement or repair, and
                  any claim for damages, lie against the counterparty and not
                  against us;
                </li>
                <li>
                  nothing displayed through the Services constitutes an offer,
                  invitation, recommendation, endorsement, representation or
                  warranty by us in respect of any user, plant or Listing; and
                </li>
                <li>
                  where the Services display the state of a Trade &mdash;
                  including that an Offer has been accepted, that receipt has
                  been confirmed, that a plant has been returned or that a
                  review has been left &mdash; that display is a record of what
                  users have told us. It is not verification, confirmation,
                  escrow, certification or a guarantee by us that any event
                  actually occurred, that any payment was made, or that any item
                  was delivered or was as described.
                </li>
              </UL>
              <P>
                We have no general obligation to monitor the information we
                transmit or store, or actively to seek facts or circumstances
                indicating illegal activity, in accordance with Article 8 of the
                Digital Services Act. Nothing in these Terms, and no voluntary
                investigation or moderation we carry out on our own initiative,
                shall be construed as giving us actual knowledge or awareness of
                any specific illegal content or activity.
              </P>

              <H2>7. Listings, Offers and Trades</H2>
              <H3>7.1 Publishing a Listing</H3>
              <P>
                When you publish a Listing you represent and warrant, on each
                occasion and for as long as the Listing remains published, that:
              </P>
              <UL>
                <li>
                  you own the plant material or are otherwise lawfully entitled
                  to dispose of it, and it is free of any third-party right that
                  would prevent its transfer;
                </li>
                <li>
                  the Listing is accurate, complete and not misleading, in
                  particular as to species, cultivar, size, age, condition,
                  health, pest and disease status, propagation method, origin
                  and price;
                </li>
                <li>
                  the photographs are of the actual plant material offered, are
                  yours to publish, and have not been altered in a way that
                  misrepresents the item; and
                </li>
                <li>the Listing complies in full with section 8.</li>
              </UL>
              <H3>7.2 Offers and formation of a Trade</H3>
              <P>
                An Offer may be revised, declined or withdrawn in accordance
                with the functionality of the Services. Where both parties
                accept an Offer, or where a buyer completes a direct purchase of
                a Listing that permits it, a contract is formed between those
                users. The content, validity, performance and consequences of
                that contract are matters between them and are governed by the
                law applicable between them; we are not a party to it and take
                no position on it.
              </P>
              <H3>7.3 Payment, delivery and risk</H3>
              <P>
                The parties to a Trade agree the method, timing and place of
                payment and of delivery, collection or shipment themselves. You
                are solely responsible for choosing your counterparty, for the
                payment method you use, for packaging, labelling, insurance and
                carriage, for compliance with the carrier&rsquo;s conditions,
                and for bearing the risk of loss, damage, delay, deterioration
                or death of plant material in transit or in storage.
              </P>
              <P>
                <strong>
                  Because no payment passes through the Services, we cannot
                  reverse, refund, recover, hold or intervene in any payment
                  between users, and we offer no buyer protection, seller
                  protection, guarantee, escrow, insurance or dispute
                  adjudication scheme of any kind.
                </strong>{' '}
                Users who transact without meeting in person do so at their own
                risk. We strongly recommend that you use a payment method that
                offers you an independent right of recourse against your payment
                provider.
              </P>
              <H3>7.4 Sharing addresses and meeting in person</H3>
              <P>
                The Services allow you to send an address to another user in a
                chat, and to record an address when confirming receipt. Whether
                to disclose an address, and to whom, is entirely your decision.
                Once disclosed, that information is in the hands of the
                recipient and we cannot recall or control it.
              </P>
              <P>
                <strong>
                  If you choose to meet another user in person, you do so
                  entirely at your own risk. We do not screen, vet,
                  background-check or verify any user. Take the precautions you
                  would take with any stranger: meet in a public place, tell
                  someone where you are going, and do not admit a stranger to
                  your home.
                </strong>
              </P>
              <H3>7.5 Our discretion over Listings and Trade records</H3>
              <P>
                We may at any time remove, hide, demote, edit for formatting,
                decline to publish or restrict access to any Listing or Trade
                record, and may cancel a Trade record on the Services, in
                accordance with section 12. Doing so is a measure in respect of
                the Services only. It does not annul, vary, rescind or otherwise
                affect any contract concluded between users, and it does not
                make us a party to, or arbiter of, any dispute between them.
              </P>

              <H2>8. Legal compliance for plants and plant material</H2>
              <P>
                Trade in plants and plant material is heavily regulated. You are
                solely responsible for ensuring that every Listing you publish
                and every Trade you conclude complies with all laws and
                regulations applicable to you, to your counterparty and to the
                movement of the material between you. You represent and warrant
                on each occasion that this is the case.
              </P>
              <P>Without limitation, this includes where applicable:</P>
              <UL>
                <li>
                  Council Regulation (EC) No 338/97 on the protection of species
                  of wild fauna and flora by regulating trade therein, and
                  Commission Regulation (EC) No 865/2006, implementing the CITES
                  Convention. Many commonly traded ornamental plants are listed,
                  including numerous cacti, orchids, cycads, succulents,
                  Euphorbia, Aloe, Dionaea, Nepenthes and Sarracenia. Sale,
                  offer for sale, purchase, acquisition for commercial purposes
                  and movement of listed specimens may require permits or
                  certificates;
                </li>
                <li>
                  Regulation (EU) No 1143/2014 on invasive alien species and
                  Commission Implementing Regulation (EU) 2016/1141 establishing
                  the Union list, together with the Flemish, Walloon and
                  Brussels regional rules and equivalent rules in other Member
                  States, which prohibit keeping, breeding, transporting,
                  placing on the market, using and exchanging listed species;
                </li>
                <li>
                  Regulation (EU) 2016/2031 on protective measures against pests
                  of plants and Commission Implementing Regulation (EU)
                  2019/2072, including the requirement for a plant passport to
                  accompany plants for planting moved within the Union, which
                  applies also to distance sales to final users, and the
                  requirement in certain cases to be registered as a
                  professional operator and authorised to issue plant passports;
                </li>
                <li>
                  phytosanitary certificate, customs, import and export
                  requirements for any movement into or out of the Union;
                </li>
                <li>
                  Union and national rules on the marketing of seed and
                  propagating material, and on plant variety rights under
                  Council Regulation (EC) No 2100/94, including the prohibition
                  on propagating and selling protected varieties without the
                  holder&rsquo;s authorisation;
                </li>
                <li>
                  species protection under Council Directive 92/43/EEC and
                  regional nature conservation law, including prohibitions on
                  collecting plants from the wild;
                </li>
                <li>
                  the Belgian Act of 24 February 1921 concerning the trafficking
                  of poisonous, soporific, narcotic, psychotropic, disinfectant
                  and antiseptic substances and its implementing decrees, and
                  equivalent legislation elsewhere, in respect of any plant or
                  plant material containing a controlled substance; and
                </li>
                <li>
                  all applicable tax, VAT, customs and reporting obligations
                  arising from your activity.
                </li>
              </UL>
              <P>
                You must not publish a Listing for, or trade, any plant or plant
                material that you are not lawfully entitled to possess,
                propagate, transport, offer or transfer, or for which you cannot
                supply the documentation the law requires.
              </P>
              <H3>8.1 Toxicity, edibility and health claims</H3>
              <P>
                <strong>
                  Many ornamental and wild plants are toxic to humans or to
                  animals, by ingestion, by contact with sap or by inhalation of
                  smoke or pollen, and some are lethal in small quantities.
                </strong>{' '}
                You must not describe any plant as edible, medicinal,
                therapeutic, psychoactive, safe for children or safe for animals
                unless that description is accurate and lawful, and you must not
                make any health claim prohibited by Regulation (EC) No 1924/2006
                on nutrition and health claims. You must disclose any toxicity
                of which you are aware. We do not verify any such statement, and
                we accept no responsibility for it.
              </P>
              <H3>8.2 No verification and no advice</H3>
              <P>
                We do not carry out, and are under no obligation to carry out,
                any check on the regulatory status of any plant, on any permit,
                certificate or plant passport, or on any user&rsquo;s
                registration as a professional operator. Nothing in the Services
                constitutes legal, regulatory, customs, phytosanitary,
                veterinary, medical or tax advice. If you are in any doubt about
                the lawfulness of a Listing or a Trade, obtain independent
                professional advice or contact the competent authority before
                proceeding.
              </P>

              <H2>9. Traders, professional users and tax</H2>
              <P>
                If you use the Services for purposes relating to your trade,
                business, craft or profession, you are a Trader. You must tell
                us so on request, must identify yourself as a Trader to your
                counterparties, and must comply with the obligations that
                consumer protection law imposes on you, including the
                pre-contractual information requirements, the right of
                withdrawal and the legal guarantee of conformity under Book VI
                of the Belgian Code of Economic Law and the equivalent law of
                your counterparty&rsquo;s country.
              </P>
              <P>
                We currently qualify as a micro or small enterprise within the
                meaning of Recommendation 2003/361/EC and are therefore excluded
                from Section 4 of Chapter III of the Digital Services Act by
                Article 29 of that Regulation. We nevertheless reserve the right
                to require from any Trader the information listed in Article 30
                of the Digital Services Act, and to suspend the provision of the
                Services to a Trader who fails to supply or correct it.
              </P>
              <P>
                You are solely responsible for determining, declaring and paying
                any tax, VAT, social contribution or duty arising from your
                activity through the Services. Where we are required to do so
                under Council Directive 2011/16/EU as amended by Council
                Directive (EU) 2021/514, or under any equivalent obligation, we
                may collect from you and report to the competent tax authority
                information about you and your activity, including your name,
                address, date of birth, tax identification number and the
                consideration recorded for your Trades. You must supply that
                information promptly on request, and we may suspend your account
                until you do.
              </P>

              <H2>10. Your Content</H2>
              <H3>10.1 Ownership and licence</H3>
              <P>
                You retain all rights you hold in your Content. We claim no
                ownership of it.
              </P>
              <P>
                By making Content available through the Services, you grant us a
                worldwide, non-exclusive, royalty-free, transferable and
                sublicensable licence to host, store, cache, reproduce, resize,
                re-encode, adapt, translate, index, format, publish, publicly
                communicate and display that Content, and to create derived
                technical representations of it, for the purposes of operating,
                providing, securing, analysing and improving the Services and of
                promoting the Services. The licence includes the right to
                sublicense to our hosting, storage, content delivery, search,
                translation and artificial-intelligence providers strictly for
                those purposes.
              </P>
              <P>
                The licence lasts for as long as the Content remains on the
                Services and, thereafter, only for the limited period necessary
                to complete routine backup and log rotation cycles and to comply
                with a legal obligation or to establish, exercise or defend
                legal claims. To the extent permitted by Article XI.165 of the
                Belgian Code of Economic Law, you agree not to exercise your
                moral rights in a manner that would prevent the ordinary
                exercise of this licence.
              </P>
              <H3>10.2 Your warranties</H3>
              <P>
                You represent and warrant that you hold all rights necessary to
                grant the licence in section 10.1, that your Content does not
                infringe any third-party right, and that its publication does
                not breach any law or any duty of confidence. Where your Content
                contains the personal data of another person, you must have a
                lawful basis for making it available, and you act as an
                independent controller in respect of it.
              </P>
              <H3>10.3 Reviews and reputation</H3>
              <P>
                A review may be submitted only by a party to the Trade to which
                it relates, and must reflect that party&rsquo;s genuine
                experience. Reviews that are fabricated, purchased,
                incentivised, submitted in exchange for consideration or
                submitted on behalf of another person are prohibited and
                constitute a misleading commercial practice under Article VI.100
                of the Belgian Code of Economic Law. We display reviews as they
                are submitted, subject to section 12; a review is the statement
                of its author and not a statement by us, and we do not verify
                its accuracy. We may remove a review that breaches these Terms
                and may recalculate any aggregate rating accordingly.
              </P>
              <H3>10.4 Feedback</H3>
              <P>
                If you send us suggestions, ideas or feedback about the
                Services, we may use them without restriction, without
                obligation of confidentiality and without any payment to you.
              </P>

              <H2>11. Prohibited conduct</H2>
              <P>You must not, and must not permit any other person to:</P>
              <UL>
                <li>
                  publish, transmit or store content that is illegal, or that
                  infringes an intellectual property right, a personality right
                  or a right of privacy;
                </li>
                <li>
                  list, offer or trade any plant or item in breach of section 8,
                  or any counterfeit, stolen or unlawfully obtained item;
                </li>
                <li>
                  misrepresent yourself, your Listings, your reputation, your
                  location or your affiliation, impersonate any person or
                  organisation, or use another person&rsquo;s account;
                </li>
                <li>
                  engage in any fraudulent, deceptive, manipulative or
                  aggressive commercial practice, including bait listings, price
                  manipulation, shill bidding, advance-fee schemes and requests
                  for payment by irreversible methods on false pretences;
                </li>
                <li>
                  harass, threaten, stalk, defame, or incite violence or hatred
                  against any person, or publish content that is discriminatory,
                  sexually explicit or otherwise abusive;
                </li>
                <li>
                  publish another person&rsquo;s personal data without a lawful
                  basis, including addresses, contact details, photographs or
                  chat messages;
                </li>
                <li>
                  send unsolicited commercial communications, chain messages or
                  spam, or use the Services to advertise goods or services
                  unrelated to plants;
                </li>
                <li>
                  scrape, crawl, harvest, index or systematically extract data
                  from the Services, or use any robot, spider or automated means
                  to access them, except as expressly permitted by us in
                  writing;
                </li>
                <li>
                  reverse engineer, decompile or disassemble the application
                  except to the extent that applicable law expressly permits it,
                  circumvent App Check, rate limits, usage quotas, geographic
                  restrictions or any other technical protection measure, or
                  create derivative applications or unauthorised clients;
                </li>
                <li>
                  introduce malware, interfere with or place an unreasonable
                  load on the Services or their infrastructure, or attempt to
                  gain unauthorised access to any account, system or data;
                </li>
                <li>
                  use the Doctor or any other automated feature to generate
                  illegal content, to seek to circumvent its safeguards, to
                  obtain instructions for the extraction or preparation of
                  controlled or toxic substances, or to process another
                  person&rsquo;s personal data unlawfully;
                </li>
                <li>
                  create a new account, or use another account, in order to
                  evade a suspension or termination; or
                </li>
                <li>
                  use the Services in breach of any applicable export control or
                  sanctions law.
                </li>
              </UL>

              <H2>12. Content moderation, reporting and complaints</H2>
              <P>
                This section sets out the restrictions we impose on the use of
                the Services and the policies, procedures and tools we use for
                content moderation, as required by Article 14 of the Digital
                Services Act.
              </P>
              <H3>12.1 How to report content</H3>
              <P>
                Any person may notify us of content they consider illegal, or in
                breach of these Terms, using the report function in the
                application or by writing to plantative@gmail.com. To allow us
                to assess the notice diligently, please include a sufficiently
                substantiated explanation of why the content is unlawful or in
                breach, the exact location of the content such as the listing,
                profile or message concerned, your name and email address unless
                the notice concerns an offence under Articles 3 to 7 of
                Directive 2011/93/EU, and a statement that you believe in good
                faith that the information in the notice is accurate and
                complete.
              </P>
              <P>
                We will confirm receipt of a notice without undue delay where
                contact details have been provided, will process notices in a
                timely, diligent, non-arbitrary and objective manner, and will
                notify the person who submitted the notice of our decision and
                of the redress possibilities available.
              </P>
              <H3>12.2 How we moderate</H3>
              <P>
                Content is reviewed principally in response to reports. We may
                in addition use automated tools to detect duplicate, spam,
                abusive or manifestly non-compliant content, and we may act on
                information received from authorities or third parties.
                Decisions to restrict a Listing, an account or a review are
                taken or confirmed by a human. We do not carry out general
                monitoring of the Services.
              </P>
              <P>
                Where we determine that content or conduct is illegal or
                breaches the User Agreement, we may take one or more of the
                following measures, proportionate to the seriousness, frequency
                and effect of the breach and to whether it is repeated: remove
                or disable access to the content; restrict its visibility or
                demote it in rankings; suspend or terminate the provision of the
                Services in whole or in part; suspend or terminate the account;
                and suspend access to Premium features, subject to section 14.
              </P>
              <P>
                Where we impose such a measure, we will inform you of it and
                give you a statement of reasons in accordance with Article 17 of
                the Digital Services Act, including the facts and circumstances
                relied on, whether automated means were used, the contractual or
                legal ground relied on, and the redress available to you.
              </P>
              <H3>12.3 Complaining about a decision</H3>
              <P>
                If you disagree with a decision we have taken, you may complain
                by email to plantative@gmail.com within six months of being
                notified of it. Complaints are examined by a human, and we will
                reverse a decision without undue delay where the complaint shows
                that the content was not illegal or not in breach, or that it
                does not justify the measure taken. This procedure is in
                addition to, and does not restrict, any judicial remedy
                available to you or your right to contact the Belgian Institute
                for Postal Services and Telecommunications as Digital Services
                Coordinator.
              </P>
              <H3>12.4 Misuse</H3>
              <P>
                After issuing a prior warning, we may suspend for a reasonable
                period the account of a user who frequently publishes manifestly
                illegal content, and the processing of notices and complaints
                submitted by a person who frequently submits notices or
                complaints that are manifestly unfounded.
              </P>
              <H3>12.5 Suspicion of a criminal offence</H3>
              <P>
                Where we become aware of information giving rise to a suspicion
                that a criminal offence involving a threat to the life or safety
                of a person has taken place, is taking place or is likely to
                take place, we will inform the competent law enforcement or
                judicial authorities in accordance with Article 18 of the
                Digital Services Act.
              </P>

              <H2>13. Plant identification and the Plantative Doctor</H2>
              <P>
                The Services include automated features that identify plants
                from photographs, suggest diagnoses, and generate care guidance
                and conversational answers. These features rely on third-party
                artificial-intelligence and identification services, as
                described in section 5 of our{' '}
                <Link
                  href="/privacy-policy"
                  className="text-green-700 underline"
                >
                  Privacy Policy
                </Link>
                . The number of identifications and assistant conversations
                available to you may be limited by plan and by day.
              </P>
              <P>
                <strong>
                  Output generated by these features is informational and
                  probabilistic. It is not professional horticultural,
                  agricultural, botanical, veterinary, medical, nutritional,
                  legal, customs or regulatory advice, and it may be incomplete,
                  outdated or incorrect, including as to species identification,
                  toxicity and edibility. Identifications are frequently wrong,
                  and closely related species differ radically in toxicity and
                  in legal status.
                </strong>
              </P>
              <P>
                You must independently verify any identification or guidance
                before acting on it, and in particular before ingesting any
                plant or applying it to the skin, before exposing any person,
                child or animal to it, before administering any treatment or
                chemical, and before importing, exporting, propagating, trading
                or disposing of any plant that may be protected, invasive,
                controlled or otherwise regulated. You must not rely on these
                features to establish compliance with section 8. To the fullest
                extent permitted by applicable law, we exclude all liability for
                any loss or damage arising from reliance on such output.
              </P>
              <P>
                These features depend on third-party services and may be
                changed, limited, interrupted or withdrawn. Where a source is
                displayed with an answer, it is generated automatically and we
                do not verify that it supports the answer given.
              </P>

              <H2>14. Premium subscriptions</H2>
              <P>
                Premium plans are offered as auto-renewing subscriptions and are
                purchased through the Apple App Store or Google Play. The
                prices, billing periods and included features are those
                displayed to you in the application at the time of purchase.
              </P>
              <UL>
                <li>
                  <strong>Billing and cancellation.</strong> The app store, and
                  not Plantative, is the merchant of record. Payment, renewal,
                  billing, invoicing, cancellation and refunds are handled by
                  the app store under its own terms and its own privacy policy.
                  Your subscription renews automatically until you cancel it,
                  and you must cancel it through your app store account settings
                  at least 24 hours before the end of the current period.
                  Uninstalling the application does not cancel a subscription.
                </li>
                <li>
                  <strong>Refunds.</strong> We cannot process, grant or reverse
                  a refund for a purchase made through an app store; you must
                  request it from the store. This does not affect any right you
                  have against us under mandatory law.
                </li>
                <li>
                  <strong>Right of withdrawal.</strong> Where you are a Consumer
                  in the European Union, you have a right of withdrawal within
                  14 days in respect of a contract for the supply of digital
                  content or a digital service. That right is lost once
                  performance has begun with your prior express consent and your
                  acknowledgement that you thereby lose it, in accordance with
                  Article VI.53 of the Belgian Code of Economic Law. Where the
                  app store is your counterparty for the purchase, you exercise
                  that right against the store.
                </li>
                <li>
                  <strong>Changes to plans.</strong> We may change the features,
                  quotas or price of a plan. Where a change is materially
                  detrimental to you, we will give at least 30 days&rsquo;
                  notice and you may cancel before it takes effect; where
                  mandatory law so requires, you will be refunded the unused
                  portion of any period you have prepaid.
                </li>
                <li>
                  <strong>Suspension.</strong> If we suspend or terminate your
                  account for breach of the User Agreement, Premium features may
                  become unavailable. Except where mandatory law requires
                  otherwise, no refund is due in that case, and you remain
                  responsible for cancelling the subscription with the app
                  store.
                </li>
                <li>
                  <strong>Advertising.</strong> The Services may include
                  advertising. Where a plan is described as removing
                  advertisements, that applies only for the duration of an
                  active subscription. Advertising will be identifiable as such.
                </li>
                <li>
                  <strong>Statements about supporting nature causes.</strong>{' '}
                  Any statement that surplus subscription revenue may be
                  directed towards nature or conservation causes is a
                  non-binding expression of intention. It is not a contractual
                  undertaking, not a charitable donation made on your behalf,
                  and it commits no specific amount or proportion of any
                  payment. You acquire no right in respect of it.
                </li>
              </UL>

              <H2>15. Availability of the Services</H2>
              <P>
                We aim to keep the Services available but do not guarantee that
                they will be uninterrupted, timely, error-free or free of
                security vulnerabilities. We may suspend, withdraw, restrict or
                modify all or part of the Services, including any feature,
                without liability, for maintenance, security, legal or business
                reasons. Where a suspension is planned and material, we will
                give reasonable notice where practicable.
              </P>
              <P>
                Features may be offered on a trial, beta or experimental basis;
                such features are provided as-is and may be withdrawn at any
                time. You are responsible for retaining your own copies of any
                photographs, records or other Content that matter to you. We do
                not provide the Services as a backup, archiving or
                record-keeping service.
              </P>

              <H2>16. Third-party services</H2>
              <P>
                The Services rely on and interoperate with services operated by
                third parties, including cloud infrastructure, identity
                providers, app stores, identification and
                artificial-intelligence providers, messaging and analytics
                providers. Your use of those services may be governed by their
                own terms. We do not control them, we make no representation as
                to them, and to the fullest extent permitted by applicable law
                we accept no liability for their acts, omissions, availability,
                content or practices.
              </P>

              <H2>17. Our intellectual property</H2>
              <P>
                The Services, the application, the website, our software,
                databases, design, interface, text, graphics and the Plantative
                name and logo are owned by us or licensed to us and are
                protected by intellectual property law. Subject to your
                compliance with the User Agreement, we grant you a limited,
                personal, revocable, non-exclusive, non-transferable and
                non-sublicensable licence to install and use the application on
                a device you own or control, and to use the website, for your
                own non-commercial use of the Services. All rights not expressly
                granted are reserved. Nothing in the User Agreement transfers
                any intellectual property right to you.
              </P>

              <H2>18. Disclaimers</H2>
              <P>
                To the fullest extent permitted by applicable law, and without
                prejudice to section 19.1, the Services and all content
                available through them are provided on an &rsquo;as is&rsquo;
                and &rsquo;as available&rsquo; basis, and we exclude all
                warranties, conditions, representations and terms implied by
                statute, common law or otherwise, including any implied warranty
                of satisfactory quality, merchantability, fitness for a
                particular purpose, accuracy, completeness, uninterrupted
                availability or non-infringement.
              </P>
              <P>
                In particular, we make no representation or warranty as to the
                existence, identity, honesty, solvency, reliability, capacity or
                conduct of any user; as to the accuracy, legality or
                completeness of any Listing, description, photograph, price or
                review; as to the species, cultivar, health, viability, safety,
                toxicity, origin, legal status or fitness for any purpose of any
                plant or plant material; as to whether any Trade will be
                concluded, performed or paid for; or as to the accuracy of any
                output of the features described in section 13.
              </P>
              <P>
                Nothing in this section limits or affects the rights you have as
                a Consumer under mandatory law, including the legal guarantee of
                conformity applicable to any Premium subscription supplied to
                you under Directive (EU) 2019/770 as implemented in Belgian law
                and Book VI of the Belgian Code of Economic Law.
              </P>

              <H2>19. Limitation of liability</H2>
              <H3>19.1 What is never excluded</H3>
              <P>
                Nothing in the User Agreement excludes or limits our liability
                for death or personal injury caused by our negligence, for fraud
                or fraudulent misrepresentation, for our own wilful misconduct
                or gross negligence, for liability under the legislation
                implementing Directive 85/374/EEC on liability for defective
                products, for the non-performance of an obligation constituting
                one of the principal commitments of the contract, or for any
                other liability which cannot lawfully be excluded or limited,
                including under Article VI.83 of the Belgian Code of Economic
                Law and other mandatory Belgian consumer protection law. Every
                other provision of this section 19 is subject to this section
                19.1.
              </P>
              <H3>19.2 Matters for which we are not responsible</H3>
              <P>
                To the fullest extent permitted by applicable law, we are not
                liable for any loss or damage arising out of or in connection
                with:
              </P>
              <UL>
                <li>
                  the acts, omissions, conduct, statements, Content, Listings,
                  reviews or solvency of any user or other third party;
                </li>
                <li>
                  the existence, identity, species, cultivar, quality, health,
                  condition, viability, safety, toxicity, origin, provenance,
                  legality or fitness for any purpose of any plant or plant
                  material offered, sold, swapped, given or delivered through or
                  following use of the Services;
                </li>
                <li>
                  the formation, terms, performance, non-performance, defective
                  performance, breach, cancellation, rescission or frustration
                  of any Trade or other agreement between users;
                </li>
                <li>
                  any payment made, withheld, delayed, reversed or not made
                  between users, including non-payment, overpayment, fraud,
                  chargeback or the failure of a payment method;
                </li>
                <li>
                  any loss, theft, damage, delay, deterioration, disease,
                  infestation or death of plant material, in transit, in storage
                  or in the possession of any person;
                </li>
                <li>
                  any interaction between users, whether online or in person,
                  including any meeting arranged through the Services and any
                  disclosure of an address or other information by one user to
                  another;
                </li>
                <li>
                  reliance on any identification, diagnosis, care guidance,
                  ranking, recommendation or other automated output of the
                  Services, including as described in section 13;
                </li>
                <li>
                  any investigation, enforcement action, seizure, destruction
                  order, fine, penalty or other regulatory or criminal
                  consequence arising from your plants, your Listings or your
                  Trades;
                </li>
                <li>
                  any third-party service, app store, identity provider,
                  carrier, payment provider, network or device;
                </li>
                <li>
                  unauthorised access to, disclosure of, alteration of or
                  destruction of Content or data occurring despite the
                  implementation of appropriate technical and organisational
                  measures; or
                </li>
                <li>
                  loss of Content, Listings, messages, reviews or account access
                  resulting from a measure applied in accordance with section 12
                  or from your own act or omission.
                </li>
              </UL>
              <H3>19.3 Excluded heads of loss</H3>
              <P>
                To the fullest extent permitted by applicable law, we are not
                liable for any indirect, incidental, special, exemplary or
                consequential loss, or for any loss of profit, revenue,
                business, contracts, opportunity, anticipated savings, goodwill
                or reputation, for loss of or corruption of data, or for the
                value of any plant, cutting, seed or collection, in each case
                however arising and whether or not such loss was foreseeable.
              </P>
              <H3>19.4 Cap on liability</H3>
              <P>
                To the fullest extent permitted by applicable law, our total
                aggregate liability arising out of or in connection with the
                User Agreement and the Services in any period of twelve
                consecutive months is limited to the greater of (i) the total
                amount you actually paid to us for Premium in the twelve months
                preceding the event giving rise to the liability, and (ii) one
                hundred euro (EUR 100).
              </P>
              <H3>19.5 Your contribution and mitigation</H3>
              <P>
                Any liability we have is reduced to the extent that the loss was
                caused or increased by your own act or omission, including any
                breach of the User Agreement or of section 8, or by your failure
                to take reasonable steps to mitigate it.
              </P>
              <H3>19.6 Time limit for claims</H3>
              <P>
                If you are not a Consumer, any claim against us must be brought
                within one year of the date on which you became aware, or ought
                reasonably to have become aware, of the facts giving rise to it,
                failing which it is barred. This section 19.6 does not apply to
                Consumers.
              </P>
              <H3>19.7 Basis of the bargain</H3>
              <P>
                The allocation of risk in this section reflects that the core
                Services are made available free of charge or for a low
                subscription fee, and that we neither participate in, nor derive
                any commission from, Trades between users. It is an essential
                basis on which we provide the Services.
              </P>

              <H2>20. Indemnity</H2>
              <P>
                If you are not a Consumer, you will indemnify us and hold us
                harmless against all claims, demands, proceedings, damages,
                fines, penalties, losses, costs and reasonable legal expenses
                arising out of or in connection with your Content, your
                Listings, your Trades, your breach of the User Agreement or your
                violation of any law or third-party right.
              </P>
              <P>
                If you are a Consumer, you are liable to us in those
                circumstances only to the extent that the claim, loss or expense
                results from your intentional or grossly negligent breach of the
                User Agreement or from your violation of the law, and only to
                the extent that such liability arises under the general law.
                Nothing in this section extends your liability beyond what the
                general law provides.
              </P>

              <H2>21. Suspension, termination and deletion</H2>
              <P>
                You may stop using the Services at any time and may delete your
                account through the application or by writing to
                plantative@gmail.com. The consequences of deletion for your
                personal data are described in section 10 of our{' '}
                <Link
                  href="/privacy-policy"
                  className="text-green-700 underline"
                >
                  Privacy Policy
                </Link>
                .
              </P>
              <P>
                We may suspend or terminate your access to the Services, in
                whole or in part, in accordance with section 12, where required
                by law or by an order of a competent authority, where necessary
                to protect the Services, other users or a third party from harm,
                where you have provided false registration information, or where
                your account has been inactive for more than 24 consecutive
                months. Except where immediate action is necessary, we will give
                you reasonable prior notice and, where the measure relates to
                content or conduct, a statement of reasons under section 12.2.
              </P>
              <P>
                On termination, the licence granted to you in section 17 ends
                immediately, your Listings may be withdrawn and your Content may
                be removed. Sections 6, 8, 10.1, 10.2, 10.4, 14, 16 to 20, 22
                and 24 to 27 survive termination, together with any other
                provision which by its nature is intended to survive.
              </P>

              <H2>22. Force majeure</H2>
              <P>
                We are not liable for any failure or delay in performing our
                obligations that is caused by circumstances beyond our
                reasonable control, including acts of God, natural disaster,
                epidemic, war, terrorism, civil disturbance, strike, failure of
                telecommunications or internet infrastructure, failure or
                withdrawal of a third-party service on which the Services
                depend, cyber-attack, power failure, embargo, and any act, order
                or measure of a government or competent authority.
              </P>

              <H2>23. Assignment</H2>
              <P>
                We may assign, novate or transfer the User Agreement, in whole
                or in part, to any successor in the context of a merger,
                reorganisation, incorporation of the business into a company, or
                sale or transfer of all or part of our assets, provided that
                your rights under the User Agreement are not thereby reduced.
                You may not assign or transfer the User Agreement or any right
                under it without our prior written consent.
              </P>

              <H2>24. Notices</H2>
              <P>
                We may give you notice through the application, by push
                notification, or by email to the address associated with your
                account, and any such notice is deemed received on the day it is
                sent. You must keep that email address current. You may give us
                notice at plantative@gmail.com, and, where a notice is required
                to be in writing and to have legal effect, also by registered
                letter to our place of business.
              </P>

              <H2>25. Complaints and dispute resolution</H2>
              <P>
                If you have a complaint, please contact us first at
                plantative@gmail.com. We will acknowledge your complaint and aim
                to respond substantively within 30 days.
              </P>
              <P>
                If you are a Consumer resident in Belgium and we are unable to
                resolve your complaint, you may submit it to the Consumer
                Mediation Service, an autonomous public service providing free
                mediation between consumers and businesses:
              </P>
              <P>
                Consumentenombudsdienst / Service de M&eacute;diation pour le
                Consommateur
                <br />
                Koning Albert II-laan 8 bus 1, 1000 Brussels, Belgium
                <br />
                Telephone: +32 2 702 52 00
                <br />
                consumentenombudsdienst.be
              </P>
              <P>
                Consumers resident in another Member State may contact the
                European Consumer Centre in their country. The European
                Commission&rsquo;s online dispute resolution platform ceased to
                operate on 20 July 2025 following the repeal of Regulation (EU)
                No 524/2013 by Regulation (EU) 2024/3228, and is therefore no
                longer available. Submitting a complaint to a mediation body is
                voluntary, does not suspend any limitation period unless the law
                so provides, and does not affect your right to bring proceedings
                before a court.
              </P>
              <P>
                Complaints about our content moderation decisions are dealt with
                under section 12.3.
              </P>

              <H2>26. Governing law and jurisdiction</H2>
              <P>
                The User Agreement and any non-contractual obligation arising
                out of or in connection with it are governed by Belgian law.
              </P>
              <P>
                If you are a Consumer habitually resident in another country,
                this choice of law does not deprive you of the protection
                afforded to you by provisions that cannot be derogated from by
                agreement under the law of that country, in accordance with
                Article 6(2) of Regulation (EC) No 593/2008.
              </P>
              <P>
                If you are a Consumer, you may bring proceedings against us
                before the courts of the country in which you are domiciled or
                before the courts of our place of establishment, and we may
                bring proceedings against you only before the courts of the
                country in which you are domiciled, in accordance with Articles
                17 to 19 of Regulation (EU) No 1215/2012.
              </P>
              <P>
                If you are not a Consumer, the courts competent for our place of
                establishment in Belgium have exclusive jurisdiction over any
                dispute arising out of or in connection with the User Agreement.
              </P>

              <H2>27. General</H2>
              <UL>
                <li>
                  <strong>Severability and savings.</strong> If any provision of
                  the User Agreement is held invalid, unlawful or unenforceable,
                  in whole or in part, it shall be deemed modified to the
                  minimum extent necessary to make it valid, lawful and
                  enforceable while preserving its purpose so far as possible,
                  or, if that is not possible, severed. The remaining provisions
                  continue in full force and effect.
                </li>
                <li>
                  <strong>Mandatory law prevails.</strong> Nothing in the User
                  Agreement operates to exclude or limit any right you have
                  under mandatory provisions of applicable law that cannot
                  lawfully be excluded or limited, and any provision that would
                  do so applies only to the extent that the law permits.
                </li>
                <li>
                  <strong>No waiver.</strong> A failure or delay by us in
                  exercising any right is not a waiver of it, and no single or
                  partial exercise of a right prevents its further exercise.
                </li>
                <li>
                  <strong>Entire agreement.</strong> The User Agreement
                  constitutes the entire agreement between you and us in respect
                  of the Services and supersedes all previous versions of it.
                  Nothing in this paragraph limits liability for fraud or
                  fraudulent misrepresentation.
                </li>
                <li>
                  <strong>No partnership.</strong> Nothing in the User Agreement
                  creates a partnership, joint venture, agency, franchise or
                  employment relationship between you and us.
                </li>
                <li>
                  <strong>Third parties.</strong> Except as expressly stated, no
                  person other than you and us has any right to enforce any
                  provision of the User Agreement.
                </li>
                <li>
                  <strong>Languages.</strong> The User Agreement is made
                  available in English and in Dutch, and each version is equally
                  authentic. If you are a Consumer, you may rely on the version
                  in the language in which the Services were made available to
                  you.
                </li>
                <li>
                  <strong>Headings.</strong> Headings are for convenience only
                  and do not affect interpretation.
                </li>
              </UL>

              <H2>28. Legal information</H2>
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
                Last Updated: 1 September 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
