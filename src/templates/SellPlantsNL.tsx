import Link from 'next/link';

import { Button } from '@/button/Button';

const SellPlantsNL = () => (
  <>
    {/* Main content */}
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Planten verkopen of ruilen
        </h1>

        <p className="mb-8 text-lg leading-7 text-gray-700">
          Staat je vensterbank vol stekjes, of wordt die ene kamerplant te groot
          voor je living? Dan kan je hem verkopen of ruilen. Hieronder lees je
          waar dat kan, hoe je je aanbod er goed laat uitzien en op welke regels
          je moet letten als je meer gaat verkopen.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Waar kan je planten verkopen?
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Veel mensen beginnen op een tweedehandssite of in een Facebookgroep.
          Daar komt veel volk, maar de meeste bezoekers zoeken geen planten. Op
          een platform voor plantenliefhebbers, zoals Plantative, kom je sneller
          bij iemand terecht die net jouw plant wil hebben.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Wil je het groter aanpakken, dan kan je een eigen webshop of
          Instagram-shop beginnen, of met een kraam op een markt of
          plantenruilbeurs gaan staan. Op een markt leer je andere
          plantenliefhebbers kennen, maar een eigen verkoopkanaal kost veel tijd
          voor je ook maar één plant verkocht hebt.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Zo werkt verkopen op Plantative
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          In de app houd je je planten bij in je eigen collectie. Een nieuwe
          plant voeg je toe met een foto: de app herkent de soort en vult de
          naam en verzorgingsinfo in. Wil je een plant kwijt, dan zet je hem
          vanuit je collectie te koop. Je hoeft dus geen aparte webshop of
          advertentie te maken.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Geïnteresseerden doen je een bod of bieden een van hun eigen planten
          in ruil aan. De rest spreek je af via de chat. Je kiest zelf of je
          plant alleen opgehaald kan worden of ook verzonden mag worden. Kopers
          kunnen sorteren op afstand, dus mensen uit je buurt zien je aanbod
          snel.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Je kan er ook zaden, stekjes, oogst uit je moestuin en tuingereedschap
          aanbieden. En omdat je collectie ook je verzorgingstips en
          waterherinneringen bijhoudt, staat alles over je planten op één plek.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Tips om je planten sneller te verkopen
        </h2>
        <ul className="mb-8 list-disc space-y-4 pl-6 text-lg leading-7 text-gray-700">
          <li>
            Maak je foto&apos;s bij daglicht en zonder flits. Zorg dat de
            bladtekening scherp is, en toon bij een stekje ook de wortels.
          </li>
          <li>
            Schrijf erbij hoeveel licht en water de plant nodig heeft en of hij
            van vochtige lucht houdt. Een koper die weet waar hij aan begint,
            vertrouwt je aanbod sneller.
          </li>
          <li>
            Kijk wat vergelijkbare planten nu opbrengen voor je een prijs kiest.
            De verschillen zijn groot: een volwassen, gezonde Monstera deliciosa
            of een zeldzame Philodendron brengt soms €200 of meer op.
          </li>
          <li>
            Je valt meer op als je je op één soort aanbod richt, bijvoorbeeld
            variegated kamerplanten, moestuinplanten of biologisch gekweekte
            buitenplanten. Zelf stekken is dan de goedkoopste manier om je
            aanbod uit te breiden.
          </li>
        </ul>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Regels als je meer gaat verkopen
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Verkoop je planten beroepsmatig, dan moet je in België de regels van
          het FAVV rond plantgezondheid volgen, en voor veel planten heb je een
          plantenpaspoort nodig. Die regels zijn er om te voorkomen dat ziektes
          en plagen zich verspreiden. Op de website van het FAVV lees je welke
          regels voor jou gelden.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Ruilen of weggeven
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Je hoeft niet altijd geld te vragen. Op Plantative kan je ook ruilen:
          heeft iemand een plant die jij wil, en omgekeerd, dan spreken jullie
          af en wisselen jullie ze uit. Buiten de app kan je terecht op een
          plantencafé of een lokaal ruilmoment. En heb je een kneusje of een
          plant die te groot geworden is, dan zoekt een plantenasiel er een
          nieuwe eigenaar voor.
        </p>

        {/* Call to action */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <Link href="/nl/get-plantative/">
            <Button size="lg">Download Plantative</Button>
          </Link>
          <Link href="/nl/buy-plants/" className="text-gray-700 underline">
            Zelf planten kopen? Zo werkt het
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default SellPlantsNL;
