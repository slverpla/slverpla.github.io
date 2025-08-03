import React from 'react';

const AboutUs = () => (
  <>
    {/* Main content */}
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">About Us</h1>

        <p className="mb-8  text-lg leading-7 text-gray-700">
          It started with a simple idea: sharing plants and plant knowledge
          should be free and accessible to everyone. What began as some
          late-night chats among friends about how plant lovers deserved better
          has grown into something much bigger, a community-driven platform
          that&apos;s making the world a little greener every day.
        </p>

        <p className="mb-8 text-lg leading-7 text-gray-700">
          There are plenty of plant apps out there, but we felt the plant
          community needed something different. We think plant knowledge and
          communities shouldn&apos;t cost money. Our main features will always
          stay free because that&apos;s how real communities grow. Any money we
          make from our basic premium plan that we don&apos;t need to keep the
          app running will go straight to help the environment and plant trees.
          When you use Plantative, you&apos;re helping the planet.
        </p>

        <p className="mb-8 text-lg leading-7 text-gray-700">
          Our original team of five tech lovers planted the seeds for what you
          see today. While life took some of our founding members in different
          directions, we&apos;re very grateful for their help.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          About the tech we use
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Yes, we used AI to help build this app, but all the code was written
          by real people. This isn&apos;t some quick AI-generated app. With all
          the recent security problems happening online, we made sure that
          humans handle all the security stuff. This means your messages,
          photos, and private info stay between you and who you choose to share
          with.
        </p>

        <p className="mb-8 text-lg leading-7 text-gray-700">
          We use AI to help identify plants and give care tips, but we built it
          to amplify human knowledge, not replace it. AI is great at finding the
          right info for you, but it can sometimes get things wrong or miss
          something important in your plants environment. If that happens, just
          let our support team know. We won&apos;t use your feedback to train AI
          right away, but after our team reviews it, we might use it to make
          better recommendations. The best plant advice will always come from
          people who&apos;ve actually grown the plants. That&apos;s why we need
          your help!
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Join our mission
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          We&apos;re looking for passionate people to join us on this journey.
          If you&apos;re a master gardener, or just someone who believes in what
          we&apos;re building, there&apos;s a place for you here. Whether it is
          to help us spread the word, improve the app, or connect with fellow
          plant lovers, we&apos;d love to have you on the team.
        </p>

        <p className="mb-12 text-lg leading-7 text-gray-700">
          Download the app and join a community that makes plant sharing easy,
          keeps knowledge free, and helps make the world greener. The best
          things in life (like plants) grow better when we share them.
        </p>

        <div className="mt-8 text-center">
          <p className="text-sm italic text-gray-600">
            Questions? Ideas? Want to help out? Email us at plantative@gmail.com
            or message support in the app.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default AboutUs;
