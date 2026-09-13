import Link from 'next/link';

import { Button } from '@/button/Button';

const PlantativeDoctor = () => (
  <>
    {/* Header section with image */}
    <div className="-mt-20 flex flex-wrap items-center justify-center">
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

    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900">Plantative Doctor</h1>
    </div>

    {/* Main content */}
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="prose prose-lg max-w-none">
        <p className="mb-8 text-xl leading-8 text-gray-700">
          Every plant is different, and so is every home and garden. Plantative
          Doctor is a plant care assistant built around that: it gives advice
          for your plant in your situation.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Check in whenever you like
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          You can talk to Plantative Doctor every day. If your fiddle leaf fig
          starts to droop or your tomatoes get yellow spots, describe what you
          see and you&apos;ll get advice for that plant. When things change, it
          helps you adjust your care routine.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          Smart, but not perfect
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Plantative Doctor learned from millions of plant care sources,
          including books, websites and research papers. In our testing, it
          answered plant care questions correctly about 97% of the time. AI
          still makes mistakes, and so do we, so Plantative Doctor also helps
          you double-check its answers and points you to other sources.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-semibold text-gray-900">
          What can it help you with?
        </h2>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Not sure what a plant is called? Take a photo and you&apos;ll get its
          name straight away, along with the care information that goes with it.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          If you spot yellowing leaves or strange spots, the doctor helps you
          work out what&apos;s wrong and walks you through fixing it.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          It can also set up watering reminders and a care schedule that fit
          your plants and your routine.
        </p>
        <p className="mb-8 text-lg leading-7 text-gray-700">
          Care guides give the same advice to everyone. Plantative Doctor
          adjusts to your situation, whether you&apos;re dealing with low light
          or hard water, or just trying to keep your first houseplant alive.
        </p>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <Link href="/get-plantative/">
            <Button size="lg">{'Try Plantative Doctor'}</Button>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default PlantativeDoctor;
