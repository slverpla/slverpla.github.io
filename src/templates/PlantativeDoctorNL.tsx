import Link from 'next/link';

import { Button } from '@/button/Button';

const PlantativedokterNL = () => (
  <>
    {/* Header section with image */}
    <div className="-mt-20 flex flex-wrap items-center justify-center">
      <div className="w-full p-4 sm:w-1/2">
        <div className="mx-auto max-w-sm">
          <img
            src="/assets/images/dokter_edited.webp"
            alt="Plant care expert consultation illustration"
            className="h-auto w-full"
            style={{
              maskImage:
                'radial-gradient(circle at center, black 60%, transparent 65%)',
              WebkitMaskImage:
                'radial-gradient(circle at center, black 60%, transparent 65%)',
            }}
          />
        </div>
      </div>
    </div>

    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900">Plantative Dokter</h1>
    </div>

    {/* Main content */}
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="prose prose-lg max-w-none">
        <p className="mb-8 text-xl leading-8 text-gray-700">
          Elke plant is anders, en dat geldt ook voor elk huis en elke tuin.
          Daar is de Plantative Dokter op gebouwd: een assistent die advies
          geeft voor jouw plant, in jouw situatie.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Elke dag bereikbaar
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Je kan elke dag bij de Plantative Dokter terecht. Hangt je Ficus
          benjamina er wat slap bij, of krijgen je tomaten gele vlekken?
          Beschrijf wat je ziet en je krijgt advies voor die plant. Verandert er
          iets, dan helpt de Dokter je om je verzorging aan te passen.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Slim, maar niet perfect
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          De Plantative Dokter heeft geleerd uit miljoenen bronnen over
          plantenverzorging, zoals boeken, websites en onderzoeksartikels. In
          onze tests gaf hij in ongeveer 97% van de gevallen het juiste
          antwoord. AI maakt nog altijd fouten, en wij ook, dus de Dokter helpt
          je ook om zijn antwoorden te controleren en wijst je op andere
          bronnen.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Waarmee kan de Dokter je helpen?
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Weet je niet hoe je plant heet? Maak een foto en je krijgt meteen de
          naam, samen met de verzorgingsinfo die erbij hoort.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Zie je gele blaadjes of vreemde vlekken, dan zoekt de Dokter mee wat
          er mis is en legt hij stap voor stap uit hoe je het oplost.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Hij kan ook waterherinneringen en een verzorgingsschema instellen dat
          past bij jouw planten en jouw ritme.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Een verzorgingsgids geeft iedereen hetzelfde advies. De Plantative
          Dokter houdt rekening met jouw situatie, of je nu weinig licht hebt,
          te veel regen krijgt of gewoon je eerste kamerplant in leven probeert
          te houden.
        </p>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <Link href={`/nl/get-plantative/`}>
            <Button size="lg">Probeer de Plantative Dokter</Button>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default PlantativedokterNL;
