import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

const AboutUs = () => (
  <>
    {/* Main content */}
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">About us</h1>

        <p className="mb-8  text-lg leading-7 text-gray-700">
          Plantative started with two problems we had ourselves: our plants kept
          dying, and the plants we actually wanted were hard to find. We figured
          we weren&apos;t the only ones. So we built an app that helps with
          both, with care advice and reminders for the plants you already have,
          and a place to find new ones from people near you.
        </p>

        <p className="mb-8 text-lg leading-7 text-gray-700">
          We&apos;re Sebastiaan and Maarten, two brothers who grew up in nature
          and now live in Ghent. The idea came up during late-night chats with
          friends, and five of us built the first version together. Life has
          since taken the others in different directions, and we&apos;re
          grateful for everything they did. Today it&apos;s the two of us, with
          help from our mom, who knows way too much about plants. She&apos;s one
          of the two people behind{' '}
          <Link href="https://www.tuinvolleven.be/" className="underline">
            Tuin Vol Leven
          </Link>
          , which designs and maintains biodiverse gardens.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Our promise
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          We think sharing plants and plant knowledge shouldn&apos;t cost money,
          so the main features of Plantative will always stay free. There is
          also a basic premium plan. Whatever it earns beyond what we need to
          keep the app running goes to the environment and to planting trees.
          You can follow where the money goes on{' '}
          <Link href={AppConfig.instagramUrl} className="underline">
            our Instagram
          </Link>
          .
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          How we use AI
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Yes, we used AI while building Plantative, but we wrote the code
          ourselves. This isn&apos;t a quick vibe-coded app. We handled the
          security ourselves too, so your messages, photos and private info stay
          between you and the people you choose to share them with.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          In the app, AI helps identify plants and give care tips. It sometimes
          gets things wrong or misses something about where your plant is
          growing. If that happens, tell us. We read that feedback ourselves
          before we use it to improve the advice.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          What we&apos;re building
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          The best plant advice comes from people who have grown the plants
          themselves. We want Plantative to become a community full of that kind
          of knowledge, where people with years of experience help the ones who
          are just starting, and where a cutting from your windowsill ends up
          with someone who has been looking for it.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          That only works if people join in. Download the app, swap a plant and
          share what you know. The best things in life (like plants) grow better
          when we share them.
        </p>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">Sebastiaan &amp; Maarten</p>
          <p className="mt-4 text-sm italic text-gray-600">
            Questions or ideas? Email us at plantative@gmail.com or send a
            message to support in the app. One of us will answer.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default AboutUs;
