import Link from 'next/link';
import React from 'react';

import { Button } from '@/button/Button';

const PlantativeDoctorNL = () => (
  <>
    {/* Header section with image */}
    <div className="mt-0 flex flex-wrap items-center justify-center">
      <div className="w-full p-4 sm:w-1/2">
        <div className="mx-auto max-w-sm">
          <img
            src="/assets/images/doctor_edited.png"
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

    {/* Main content */}
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="prose prose-lg max-w-none">
        <p className="mb-8 text-xl leading-8 text-gray-700">
          Elke plant is uniek, en dat geldt ook voor elk huis, en elke tuin. Dat
          is de gedachte achter Plantative Doctor, een slimme
          plantenverzorgingsassistent die begrijpt dat er geen one-size-fits-all
          aanpak is om je groene vrienden gelukkig te houden.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Je dagelijkse opvolger
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Wat maakt Plantative Doctor anders? Je kunt er elke dag mee
          overleggen. Of je ficus benjamina er nu wat slap bij hangt of je
          tomaten gele vlekken krijgen, je kunt een gesprek voeren over wat er
          aan de hand is en persoonlijk advies krijgen. Het is alsof je een
          plantenexpert beschikbaar hebt wanneer je die nodig hebt, klaar om je
          te helpen je verzorgingsroutine aan te passen als dingen veranderen.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Slim, maar niet perfect
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Plantative Doctor heeft geleerd van miljoenen
          plantenverzorging-bronnen zoals boeken, websites, onderzoekspapers,
          noem maar op. In onze tests geeft het in 96,73% van de gevallen het
          juiste antwoord op plantenverzorging-vragen. Maar hier is het punt: we
          weten dat AI niet perfect is, en wij ook niet. Daarom geeft Plantative
          Doctor je niet zomaar antwoorden, het helpt je om ze te controleren en
          aanvullende bronnen te vinden zodat je je zeker kunt voelen over je
          plantenverzorging-beslissingen.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Waar kan het je mee helpen?
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-lg leading-7 text-gray-700">
            <strong>Planten Detective:</strong> Weet je niet zeker hoe je plant
            heet? Maak een foto en krijg direct een identificatie, plus alle
            verzorgingsinformatie die je nodig hebt om hem te laten floreren.
          </p>
          <p className="mb-4 text-lg leading-7 text-gray-700">
            <strong>Gezondheidsproblemen Oplossen:</strong> Gele blaadjes of
            rare vlekken ontdekt? De doctor kan helpen identificeren wat er mis
            is en je door de stappen leiden om het op te lossen.
          </p>
          <p className="mb-4 text-lg leading-7 text-gray-700">
            <strong>Slimme Planning:</strong> Laat de doctor je helpen met het
            instellen van water-herinneringen en verzorgingsschema&apos;s die
            echt passen bij jouw specifieke planten en levensstijl.
          </p>
        </div>

        <p className="mb-8 text-lg leading-7 text-gray-700">
          Het beste deel? Je krijgt niet zomaar generiek advies uit een
          verzorgingsgids. Je krijgt ondersteuning die zich aanpast aan jouw
          echte situatie, of je nu te maken hebt met weinig licht, te veel regen
          of je gewoon probeert je eerste kamerplant in leven te houden.
        </p>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <Link href={`/nl/get-plantative`}>
            <Button xl>{'Probeer Plantative Doctor'}</Button>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default PlantativeDoctorNL;
