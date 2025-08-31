import { Clock, HeartHandshake, Music4 } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Clock className="text-yellow-600 absolute top-1 left-1 size-5" />,
    title: "Aarti Timings",
    text: "Kakad Aarti 6:00 AM • Madhyan Aarti 12:00 PM • Sandhya Aarti 7:30 PM • Shej Aarti 11:30 PM",
  },
  {
    icon: <Music4 className="absolute top-1 left-1 size-5 text-yellow-600" />,
    title: "Cultural Programs",
    text: "Bhajan Sandhya, Dhol-Tasha, Children’s performances and classical showcases every evening.",
  },
  {
    icon: (
      <HeartHandshake className="absolute top-1 left-1 size-5 text-yellow-600" />
    ),
    title: "Social Initiatives",
    text: "Blood donation, medical camps, food distribution and environmental drives throughout the festival.",
  },
];

export default function Events() {
  return (
    <section className="overflow-hidden py-24 sm:py-32 dark:bg-gray-900 bg-amber-100/80">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 md:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                Events
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                Events & Highlights
              </p>
              <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">
                Plan your visit around aartis, cultural programs, and seva.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
                {features.map((feature) => (
                  <div key={feature.title} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      {feature.icon}
                      {feature.title}
                    </dt>{" "}
                    <dd className="inline">{feature.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-amber-200 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-white ring-inset"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                  <Image
                    src="/images/events.jpg"
                    alt="Events"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl dark:ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
