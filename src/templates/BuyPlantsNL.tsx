import Link from 'next/link';

import { Button } from '@/button/Button';

const BuyPlantsNL = () => (
  <>
    {/* Main content */}
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Planten kopen in je buurt
        </h1>

        <p className="mb-8 text-lg leading-7 text-gray-700">
          Op Plantative koop je planten van andere plantenliefhebbers. Je vindt
          er kamerplanten, tuinplanten, stekjes en zaden, maar ook oogst uit
          iemands moestuin en tweedehands tuingereedschap. Of je nu je eerste
          kamerplant zoekt of al jaren tuiniert, je kan zien wat elke plant
          nodig heeft voor je hem koopt.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Rechtstreeks van de verkoper
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Er zit geen winkel tussen jou en de verkoper. Je vergelijkt het aanbod
          van mensen uit je buurt vanuit je zetel, in plaats van langs
          verschillende tuincentra te rijden. Je vindt er ook planten die je
          niet in elke winkel ziet, zoals een stekje van een zeldzame
          Philodendron. En een plant die bij iemand anders te groot werd, krijgt
          bij jou een tweede leven.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Zoek een plant die bij jouw huis past
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          In de marktplaats zoek je op plantennaam, op verzorging of met een
          foto. Bij elke plant zie je hoeveel licht en water hij nodig heeft, zo
          weet je voor je iets koopt of hij het bij jou goed zal doen. Heb je
          een kat, dan kan je filteren op planten die niet giftig zijn voor
          huisdieren. Voor een donkere hoek zoek je gericht naar planten die met
          weinig licht toekomen.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Zo koop je een plant
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Heb je iets gevonden, dan doe je een bod of bied je een van je eigen
          planten in ruil aan. Via de chat spreek je met de verkoper af wanneer
          en waar jullie elkaar zien. Bij elk aanbod zie je of je het moet
          ophalen of dat het verzonden kan worden, en je kan de resultaten
          sorteren op afstand.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Staat de plant die je zoekt er nog niet tussen? Plaats dan een
          zoekertje. We laten je weten zodra iemand hem aanbiedt.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Na je aankoop
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Voeg je nieuwe plant toe aan je collectie in de app. Je krijgt dan
          verzorgingstips en een herinnering wanneer hij water nodig heeft.
          Krijgt hij toch gele bladeren of vlekken, dan kan je het vragen aan de{' '}
          <Link href="/nl/plantative-doctor/" className="underline">
            Plantative Dokter
          </Link>
          .
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Begonnen in Gent
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Plantative is begonnen in Gent, maar de app werkt niet alleen daar.
          Hoe meer plantenliefhebbers in jouw buurt meedoen, hoe meer aanbod je
          dichtbij vindt. Heb je zelf planten over? Lees dan hoe je{' '}
          <Link href="/nl/sell-plants/" className="underline">
            planten verkoopt of ruilt
          </Link>
          .
        </p>

        {/* Call to action */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <Link href="/nl/get-plantative/">
            <Button size="lg">Download Plantative</Button>
          </Link>
          <Link href="/nl/marketplace/" className="text-gray-700 underline">
            Bekijk de marktplaats
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default BuyPlantsNL;
