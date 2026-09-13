import Link from 'next/link';

import { Button } from '@/button/Button';

const SellPlants = () => (
  <>
    {/* Main content */}
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Sell or swap your plants
        </h1>

        <p className="mb-8 text-lg leading-7 text-gray-700">
          Is your windowsill full of cuttings, or has one of your houseplants
          outgrown the living room? You can sell it or swap it. This page covers
          where to do that, how to make your listing look good, and which rules
          apply once you start selling more.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Where can you sell plants?
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Most people start on a second-hand site or in a Facebook group. Those
          get plenty of visitors, but most of them aren&apos;t looking for
          plants. On a platform built for plant lovers, like Plantative, you
          reach people who want your plant much sooner.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          If you want to sell on a bigger scale, you could open your own web
          shop or Instagram shop, or run a stall at a market or plant swap. A
          market is a nice way to meet other plant people, but setting up your
          own sales channel takes a lot of time before you&apos;ve sold a single
          plant.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          How selling works on Plantative
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          The app keeps track of your plants in your own collection. You add a
          plant by taking a photo, and the app recognises the species and fills
          in its name and care details. When you want to part with a plant, you
          put it up for sale straight from your collection, so there&apos;s no
          separate shop or listing to set up.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Interested buyers make you an offer or propose one of their own plants
          in exchange, and you arrange the rest in the chat. You decide whether
          the plant is pickup only or can be shipped. Buyers can sort by
          distance, so people near you see your listing early.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          You can also list seeds, cuttings, produce from your vegetable garden
          and garden tools. Your collection holds your care tips and watering
          reminders too, so everything about your plants is in one place.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Tips for selling your plants faster
        </h2>
        <ul className="mb-8 list-disc space-y-4 pl-6 text-lg leading-7 text-gray-700">
          <li>
            Take your photos in daylight without a flash. Make sure the leaf
            pattern is sharp, and for cuttings, show the roots as well.
          </li>
          <li>
            Mention how much light and water the plant needs and whether it
            likes humid air. Buyers trust a listing more when they know what
            they&apos;re getting into.
          </li>
          <li>
            Check what similar plants are selling for before you set a price.
            Prices vary a lot: a mature, healthy Monstera deliciosa or a rare
            Philodendron can sometimes fetch €200 or more.
          </li>
          <li>
            You&apos;ll stand out more if you focus on one kind of plant, such
            as variegated houseplants, vegetable plants or organically grown
            outdoor plants. Growing your own cuttings is the cheapest way to
            build up that stock.
          </li>
        </ul>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Rules once you sell more
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          If you sell plants professionally in Belgium, you have to follow the
          FASFC (FAVV/AFSCA) rules on plant health, and many plants need a plant
          passport. These rules exist to stop diseases and pests from spreading.
          The FASFC website explains which rules apply to you.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Swapping or giving plants away
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          You don&apos;t always have to ask for money. Plantative also lets you
          swap: if someone has a plant you want and you have one they want, you
          meet up and trade. Outside the app, you can go to a plant café or a
          local swap event. And if a plant is struggling or has grown too big, a
          plant rescue can find it a new home.
        </p>

        {/* Call to action */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <Link href="/get-plantative/">
            <Button size="lg">Download Plantative</Button>
          </Link>
          <Link href="/buy-plants/" className="text-gray-700 underline">
            Looking to buy plants? Here&apos;s how
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default SellPlants;
