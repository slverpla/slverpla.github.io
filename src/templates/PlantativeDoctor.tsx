import Link from 'next/link';
import React from 'react';

import { Button } from '@/button/Button';

const PlantativeDoctor = () => (
  <>
    {/* Header section with image */}
    <div className="mt-0 flex flex-wrap items-center justify-center">
      <div className="w-full p-4 sm:w-1/2">
        <div className="mx-auto max-w-sm">
          <img
            src="/assets/images/doctor_edited.webp"
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
          Every plant is unique, and so is every home, garden, and growing
          situation. That&apos;s the thinking behind Plantative Doctor, a smart
          plant care assistant that understands there&apos;s no
          one-size-fits-all approach to keeping your green friends happy.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Your daily plant care partner
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          What makes Plantative Doctor different? You can check in with it every
          day. Whether your fiddle leaf fig is looking droopy or your tomatoes
          are getting yellow spots, you can have a conversation about
          what&apos;s happening and get personalized advice. It&apos;s like
          having a plant expert available whenever you need one, ready to help
          you adjust your care routine as things change.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Smart, but not perfect
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Plantative Doctor has learned from millions of plant care resources
          like books, websites, research papers, you name it... In our testing,
          it gets plant care questions right 96.73% of the time. But here&apos;s
          the thing: we know AI isn&apos;t perfect, and neither are we.
          That&apos;s why Plantative Doctor doesn&apos;t just give you answers,
          it helps you double-check them and find additional resources so you
          can feel confident about your plant care decisions.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          What can it help you with?
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-lg leading-7 text-gray-700">
            <strong>Plant Detective:</strong> Not sure what that plant is
            called? Snap a photo and get an instant identification, plus all the
            care information you need to keep it thriving.
          </p>
          <p className="mb-4 text-lg leading-7 text-gray-700">
            <strong>Health Troubleshooter:</strong> Spotted some yellowing
            leaves or weird spots? The doctor can help identify what&apos;s
            wrong and guide you through the steps to fix it.
          </p>
          <p className="mb-4 text-lg leading-7 text-gray-700">
            <strong>Smart Scheduling:</strong> Let the doctor help you to set up
            watering reminders and care schedules that actually make sense for
            your specific plants and lifestyle.
          </p>
        </div>

        <p className="mb-8 text-lg leading-7 text-gray-700">
          The best part? You&apos;re not just getting generic advice from a care
          guide. You&apos;re getting support that adapts to your real situation,
          whether you&apos;re dealing with low light, hard water, or just trying
          to keep your first houseplant alive.
        </p>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <Link href={`/get-plantative`}>
            <Button xl>{'Try Plantative Doctor'}</Button>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default PlantativeDoctor;
