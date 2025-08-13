import Link from 'next/link';
import React from 'react';

const TermsOfServiceNL = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-lg bg-white shadow-lg">
          <div className="p-8">
            <h1 className="mb-8 text-3xl font-bold text-gray-900">
              Plantative Servicevoorwaarden
            </h1>

            <div className="prose prose-gray max-w-none">
              <p className="mb-6 text-gray-600">Welkom bij Plantative!</p>

              <p className="mb-8 text-gray-600">
                Onze missie is het creëren van een bloeiende gemeenschap van
                plantenliefhebbers die veilig en verantwoord planten, stekjes en
                tuinierskennis kunnen uitwisselen. We bouwen een platform dat
                plantenliefhebbers samenbrengt via veilige en duurzame
                uitwisselingen.
              </p>

              <p className="mb-8 text-gray-600">
                We hebben deze{' '}
                <Link href="/nl/terms/" className="underline">
                  Servicevoorwaarden
                </Link>{' '}
                (&rsquo;Voorwaarden&rsquo;) en{' '}
                <Link href="/nl/privacy-policy/" className="underline">
                  Privacybeleid
                </Link>{' '}
                (samen de &rsquo;Gebruikersovereenkomst&rsquo;) opgesteld om
                duidelijk uit te leggen hoe ons platform werkt en wat we
                verwachten van onze community-leden. In dit document hebben
                bepaalde termen specifieke betekenissen die consistent blijven
                waar ze ook verschijnen. Als iets onduidelijk lijkt, neem dan
                contact met ons op - we zijn er om plantenruil zo transparant en
                plezierig mogelijk te maken.
              </p>

              <div className="space-y-12">
                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    1. Geschiktheid
                  </h2>
                  <p className="mb-4 text-gray-600">
                    Onze Diensten omvatten alle aspecten van de Plantative
                    mobiele applicaties, website en de softwaresystemen die ons
                    platform aandrijven.
                  </p>
                  <p className="text-gray-600">
                    Om Plantative te gebruiken, moet je:
                  </p>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li className="mb-2">
                      Een echt persoon zijn (geen geautomatiseerde accounts of
                      bots)
                    </li>
                    <li className="mb-2">Minimaal 18 jaar oud zijn</li>
                    <li className="mb-2">
                      Wettelijk in staat zijn om bindende contracten aan te gaan
                      in jouw rechtsgebied
                    </li>
                    <li>
                      Indien je een bedrijf of organisatie vertegenwoordigt,
                      gemachtigd zijn om namens hen op te treden
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    2. Privacybescherming
                  </h2>
                  <p className="text-gray-600">
                    Ons Privacybeleid beschrijft welke informatie we verzamelen,
                    wanneer we deze verzamelen en hoe we ermee omgaan wanneer je
                    Plantative gebruikt. Door gebruik te maken van onze
                    Diensten, stem je in met onze verzameling, gebruik, opslag,
                    verwerking en overdracht van deze informatie in landen waar
                    we actief zijn en met partners die helpen onze Diensten te
                    leveren.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    3. Content en Handel
                  </h2>
                  <p className="mb-4 text-gray-600">
                    Authenticiteit en respect zijn de kern van onze gemeenschap.
                    Alle gebruikers moeten eerlijk zijn over hun planten en
                    respectvol in hun interacties.
                  </p>
                  <p className="mb-4 text-gray-600">
                    &rsquo;Content&rsquo; omvat plantenaanbiedingen,
                    foto&rsquo;s, video&rsquo;s, beschrijvingen, berichten,
                    beoordelingen en elk ander materiaal dat via onze Diensten
                    wordt gedeeld.
                  </p>
                  <p className="text-gray-600">
                    Je bent verantwoordelijk voor:
                  </p>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li className="mb-2">
                      Zorgen dat alle Content die je deelt accuraat en
                      waarheidsgetrouw is
                    </li>
                    <li className="mb-2">
                      Het recht hebben om planten te verhandelen of verkopen die
                      je aanbiedt
                    </li>
                    <li className="mb-2">
                      Voldoen aan alle toepasselijke wetten en voorschriften met
                      betrekking tot plantenhandel
                    </li>
                    <li>
                      Volgen van onze plantveiligheids- en
                      verpakkingsrichtlijnen
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    4. Overtredingen Melden
                  </h2>
                  <p className="text-gray-600">
                    Hoewel we niet alle interacties monitoren, willen we dat
                    Plantative een veilig en betrouwbaar platform is. Je kunt
                    zorgwekkende content of gedrag melden via ons
                    meldingssysteem in de app of via het websiteformulier.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    5. Account Beëindiging
                  </h2>
                  <p className="mb-4 text-gray-600">
                    We kunnen accounts opschorten of beëindigen voor:
                  </p>
                  <ul className="mb-4 list-disc pl-6 text-gray-600">
                    <li>Verkopen van verboden planten</li>
                    <li>Verkeerd voorstellen van items</li>
                    <li>Frauduleus gedrag</li>
                    <li>Schending van onze Communityrichtlijnen</li>
                  </ul>
                  <p className="text-gray-600">
                    We hanteren meestal een drie-waarschuwingsbeleid:
                  </p>
                  <ul className="mt-2 list-disc pl-6 text-gray-600">
                    <li>1e overtreding: 30 dagen schorsing</li>
                    <li>2e overtreding: 60 dagen schorsing</li>
                    <li>3e overtreding: Permanente accountbeëindiging</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    6. Intellectueel Eigendom
                  </h2>
                  <p className="text-gray-600">
                    Ons platform en onze merkidentiteit worden beschermd door
                    verschillende intellectuele eigendomswetten. Het gebruik van
                    onze Diensten geeft je geen eigendomsrecht op enig
                    intellectueel eigendom van Plantative.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    7. Aansprakelijkheidsbeperkingen
                  </h2>
                  <p className="text-gray-600">
                    Door gebruik te maken van Plantative ga je ermee akkoord dat
                    onze aansprakelijkheid beperkt is tot het maximaal
                    toegestane volgens de wet in jouw rechtsgebied.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    8. Toepasselijk Recht
                  </h2>
                  <p className="text-gray-600">
                    Deze Voorwaarden vallen onder het Belgisch recht. Eventuele
                    geschillen zullen worden beslecht door de rechtbanken van
                    Brussel, België.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    9. Algemene Bepalingen
                  </h2>
                  <p className="mb-4 text-gray-600">
                    We kunnen deze voorwaarden bijwerken met een kennisgeving
                    van 30 dagen. Voortgezet gebruik van Plantative na updates
                    geeft aan dat je de nieuwe voorwaarden accepteert.
                  </p>
                  <p className="text-gray-600">
                    Als een deel van deze voorwaarden niet afdwingbaar blijkt,
                    blijven de overige bepalingen van kracht.
                  </p>
                  <p className="text-gray-600">
                    Deze Overeenkomst is tussen jou en Plantative.
                  </p>
                </section>
              </div>

              <div className="mt-12 text-center">
                <p className="font-bold text-gray-600">
                  Laatst bijgewerkt: 4 januari 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServiceNL;
