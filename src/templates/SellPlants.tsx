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
          What sells well, and when?
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Most people buy plants in spring and early summer, when everything
          starts growing again. Cuttings also root faster then, so it&apos;s a
          good time to build up some stock.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Easy houseplants like pothos or monstera almost always find a buyer,
          especially among beginners. Rare and variegated plants sell more
          slowly but fetch more. Vegetable plants and seeds go best in early
          spring, just before planting season. Autumn and winter are quieter,
          and houseplants are what mostly sells then.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Shipping a plant safely
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          If you can, let the buyer pick the plant up. If it has to go by post,
          a bit of preparation usually gets it there in one piece.
        </p>
        <ul className="mb-8 list-disc space-y-4 pl-6 text-lg leading-7 text-gray-700">
          <li>
            Don&apos;t water the day before shipping. Slightly damp soil is
            enough, and a wet plant rots faster in a dark box.
          </li>
          <li>
            Put a plastic bag over the pot and tie it around the stem so no soil
            ends up loose in the box.
          </li>
          <li>
            Wedge the pot in with scrunched-up newspaper so nothing can move,
            and write &apos;fragile&apos; and &apos;this way up&apos; on the
            box.
          </li>
          <li>
            Wrap cuttings without a pot in a damp paper towel, then put them in
            a small bag.
          </li>
          <li>
            Ship early in the week so your parcel doesn&apos;t spend the weekend
            in a sorting centre. When it&apos;s freezing, wait a few days or add
            a heat pack.
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

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Frequently asked questions
        </h2>
        <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
          How do I set a price?
        </h3>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Start by looking up what the same plant in the same size is selling
          for. A rooted cutting is worth more than an unrooted one, and a plant
          with lots of leaves more than one with a single leaf. You can ask more
          for variegated and rare plants, and a nice decorative pot adds to the
          price. If you really don&apos;t know, set your price a little high and
          let buyers make an offer.
        </p>
        <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
          Are there plants I&apos;m not allowed to sell?
        </h3>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Yes. Some invasive species are on a European list and can&apos;t be
          sold, swapped or given away, such as water hyacinth and giant hogweed.
          Once they get into the wild, they crowd out native plants. If
          you&apos;re unsure about a plant, look it up on that list before you
          list it.
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

export default SellPlants;
