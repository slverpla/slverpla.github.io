import Link from 'next/link';

import { Button } from '@/button/Button';

const BuyPlants = () => (
  <>
    {/* Main content */}
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Buy plants near you
        </h1>

        <p className="mb-8 text-lg leading-7 text-gray-700">
          On Plantative you buy plants from other plant lovers. You&apos;ll find
          houseplants, garden plants, cuttings and seeds, as well as produce
          from someone&apos;s vegetable garden and second-hand garden tools.
          Whether you&apos;re after your first houseplant or have been gardening
          for years, you can see what each plant needs before you buy it.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Straight from the seller
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          There&apos;s no shop between you and the seller. You can compare what
          people near you are offering from your couch instead of driving from
          one garden centre to the next. You also find plants that most shops
          don&apos;t carry, like a cutting of a rare Philodendron. And a plant
          that outgrew someone else&apos;s home gets a second life with you.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Find a plant that suits your home
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          You can search the marketplace by plant name, by care needs or with a
          photo. Each plant shows how much light and water it needs, so you know
          before buying whether it will do well at your place. If you have a
          cat, you can filter for plants that aren&apos;t toxic to pets. For a
          dark corner, look for plants that cope with low light.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          How buying works
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          When you find something you like, make an offer or propose one of your
          own plants in exchange. You agree on a time and place with the seller
          in the chat. Every listing shows whether it&apos;s pickup only or can
          be shipped, and you can sort results by distance.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Can&apos;t find the plant you want? Place a wanted ad and we&apos;ll
          let you know as soon as someone lists it.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          What to check when you pick up a plant
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Take a good look at the plant before you pay. Someone who takes good
          care of their plants usually won&apos;t mind.
        </p>
        <ul className="mb-8 list-disc space-y-4 pl-6 text-lg leading-7 text-gray-700">
          <li>
            Turn a few leaves over. White fluff, tiny bugs or fine webbing
            underneath point to pests like mealybugs or spider mites.
          </li>
          <li>
            Feel the soil. Soaking wet soil that smells musty can mean the roots
            are rotting.
          </li>
          <li>
            Ask if you can ease the plant out of its pot. Healthy roots are firm
            and light in colour. Brown, mushy roots are a bad sign.
          </li>
          <li>
            If you&apos;re buying a cutting, ask whether it has roots yet and
            how long it&apos;s been in water or soil.
          </li>
        </ul>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Getting your plant home safely
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Bring a box or a big bag so the plant doesn&apos;t tip over in the
          car. In winter, tropical houseplants can be damaged by even a short
          time in freezing air, so wrap them in paper or a plastic bag and
          don&apos;t leave them in a cold boot. In summer, don&apos;t leave a
          plant in a hot car.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          After you buy
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Keep a new plant away from your other plants for the first two weeks.
          If it brought any pests along, you&apos;ll usually spot them in that
          time, before they spread. Hold off on repotting too, and give the
          plant a few weeks to get used to its new spot first.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Add your new plant to your collection in the app. You&apos;ll get care
          tips and a reminder when it needs water. If it still ends up with
          yellow leaves or spots, ask{' '}
          <Link href="/plantative-doctor/" className="underline">
            Plantative Doctor
          </Link>
          .
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Started in Ghent
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Plantative started in Ghent, but the app isn&apos;t limited to one
          city. The more plant lovers join in your area, the more you&apos;ll
          find close by. Got plants to spare yourself? Read how to{' '}
          <Link href="/sell-plants/" className="underline">
            sell or swap your plants
          </Link>
          .
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Frequently asked questions
        </h2>
        <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
          Is it safe to buy from private sellers?
        </h3>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Usually, yes, especially if you pick the plant up and check it first.
          Meet somewhere you feel comfortable, and only pay once you&apos;ve
          seen the plant. You can use the chat to ask for extra photos
          beforehand, for example of the roots or the undersides of the leaves.
        </p>
        <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
          Can I have plants shipped?
        </h3>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          That depends on the seller. Every listing shows whether it&apos;s
          pickup only or can be shipped, and you arrange the shipping together
          in the chat. For delicate plants, and especially in winter, picking up
          is the safest option.
        </p>
        <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
          What if my new plant turns out to be sick?
        </h3>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Let the seller know in the chat. It&apos;s often still fixable, like
          pests you catch early or a plant adjusting to less light. Plantative
          Doctor can help you figure out what&apos;s going on.
        </p>

        {/* Call to action */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <Link href="/get-plantative/">
            <Button size="lg">Download Plantative</Button>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default BuyPlants;
