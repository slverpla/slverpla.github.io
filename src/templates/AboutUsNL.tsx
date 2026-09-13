import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

const AboutUsNL = () => (
  <>
    {/* Main content */}
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">Over ons</h1>

        <p className="mb-8  text-lg leading-7 text-gray-700">
          Plantative begon met twee problemen die we zelf hadden: onze planten
          gingen dood, en de planten die we echt wilden, waren moeilijk te
          vinden. We waren vast niet de enigen. Dus bouwden we een app die bij
          allebei helpt, met verzorgingsadvies en herinneringen voor de planten
          die je al hebt, en een plek om nieuwe te vinden bij mensen uit je
          buurt.
        </p>

        <p className="mb-8 text-lg leading-7 text-gray-700">
          Wij zijn Sebastiaan en Maarten, twee broers die in de natuur
          opgroeiden en nu in Gent wonen. Het idee ontstond tijdens late
          gesprekken met vrienden, en met z&apos;n vijven bouwden we de eerste
          versie. Intussen zijn de anderen andere wegen ingeslagen, en we zijn
          hen heel dankbaar voor alles wat ze gedaan hebben. Vandaag doen we het
          met z&apos;n tweeën, met hulp van onze mama, die veel te veel weet
          over planten. Ze is een van de twee mensen achter{' '}
          <Link href="https://www.tuinvolleven.be/" className="underline">
            Tuin Vol Leven
          </Link>
          , dat biodiverse tuinen ontwerpt en onderhoudt.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Onze belofte
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Planten en plantenkennis delen mag volgens ons geen geld kosten, dus
          de belangrijkste functies van Plantative blijven altijd gratis. Er is
          ook een basic premium-abonnement. Wat dat opbrengt bovenop wat we
          nodig hebben om de app draaiende te houden, gaat naar het milieu en
          het planten van bomen. Waar het geld naartoe gaat, volg je op{' '}
          <Link href={AppConfig.instagramUrl} className="underline">
            onze Instagram
          </Link>
          .
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Hoe we AI gebruiken
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Ja, we hebben AI gebruikt bij het bouwen van Plantative, maar de code
          schreven we zelf. Dit is geen snel in elkaar gezette AI-app. Ook de
          beveiliging hebben we zelf gedaan, zodat je berichten, foto&apos;s en
          privégegevens tussen jou en de mensen met wie je ze deelt blijven.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          In de app helpt AI om planten te herkennen en verzorgingstips te
          geven. Soms zit het ernaast of mist het iets over de plek waar je
          plant staat. Laat het ons dan weten. We lezen die feedback zelf voor
          we ze gebruiken om het advies te verbeteren.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Waar we naartoe willen
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Het beste plantenadvies komt van mensen die de planten zelf gekweekt
          hebben. We willen dat Plantative een community wordt vol zulke kennis,
          waar mensen met jaren ervaring de beginners verder helpen, en waar een
          stekje van jouw vensterbank terechtkomt bij iemand die er al lang naar
          zoekt.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Dat lukt alleen als er mensen meedoen. Download de app, ruil een plant
          en deel wat je weet. De beste dingen in het leven (zoals planten)
          groeien beter als we ze delen.
        </p>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">Sebastiaan &amp; Maarten</p>
          <p className="mt-4 text-sm italic text-gray-600">
            Vragen of ideeën? Mail ons op plantative@gmail.com of stuur een
            bericht naar support in de app. Een van ons antwoordt.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default AboutUsNL;
