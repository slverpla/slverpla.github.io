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
          Waar let je op als je een plant ophaalt?
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Bekijk de plant goed voor je betaalt. Iemand die goed voor zijn
          planten zorgt, vindt dat meestal geen probleem.
        </p>
        <ul className="mb-8 list-disc space-y-4 pl-6 text-lg leading-7 text-gray-700">
          <li>
            Draai een paar bladeren om. Witte pluisjes, kleine beestjes of fijne
            webjes aan de onderkant wijzen op plagen zoals wolluis of spint.
          </li>
          <li>
            Voel aan de potgrond. Kletsnatte grond die muf ruikt, kan betekenen
            dat de wortels aan het rotten zijn.
          </li>
          <li>
            Vraag of je de plant even uit de pot mag halen. Gezonde wortels zijn
            stevig en licht van kleur. Bruine, papperige wortels zijn een slecht
            teken.
          </li>
          <li>
            Koop je een stekje, vraag dan of het al wortels heeft en hoe lang
            het al in water of aarde staat.
          </li>
        </ul>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Je plant veilig thuiskrijgen
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Neem een doos of een grote tas mee, zodat de plant niet omvalt in de
          auto. Tropische kamerplanten kunnen in de winter al schade oplopen als
          ze kort in de vrieskou staan. Wikkel ze dan in papier of een plastic
          zak, en laat ze niet in een koude koffer liggen. In de zomer laat je
          een plant beter niet achter in een warme auto.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Na je aankoop
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Zet een nieuwe plant de eerste twee weken apart van je andere planten.
          Heeft hij toch beestjes meegebracht, dan zie je dat in die periode
          meestal, voor ze op je andere planten terechtkomen. Verpotten doe je
          ook best niet meteen: geef de plant eerst een paar weken om te wennen
          aan zijn nieuwe plek.
        </p>
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

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Veelgestelde vragen
        </h2>
        <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
          Is kopen van particulieren veilig?
        </h3>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Meestal wel, zeker als je de plant zelf ophaalt en eerst bekijkt.
          Spreek af op een plek waar je je goed bij voelt, en betaal pas als je
          de plant gezien hebt. Via de chat kan je vooraf extra foto&apos;s
          vragen, bijvoorbeeld van de wortels of de onderkant van de bladeren.
        </p>
        <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
          Kan ik planten laten opsturen?
        </h3>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Dat hangt af van de verkoper. Bij elk aanbod zie je of het alleen
          opgehaald kan worden of ook verzonden mag worden, en de verzending
          zelf regel je samen via de chat. Voor gevoelige planten, en zeker in
          de winter, is ophalen de veiligste keuze.
        </p>
        <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
          Wat als mijn nieuwe plant ziek blijkt te zijn?
        </h3>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Laat het de verkoper weten via de chat. Vaak valt het nog op te
          lossen, bijvoorbeeld een plaag die je vroeg ontdekt of een plant die
          moet wennen aan minder licht. De Plantative Dokter helpt je uitzoeken
          wat er aan de hand is.
        </p>

        {/* Call to action */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <Link href="/nl/get-plantative/">
            <Button size="lg">Download Plantative</Button>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default BuyPlantsNL;
