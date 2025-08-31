import { motion } from "framer-motion";
import Image from "next/image";

const MotionImage = motion.create(Image);

const animation = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  transition: {
    duration: 0.8,
    ease: [0.43, 0.13, 0.23, 0.96],
  },
};

export default function AboutUs() {
  const mission = [
    "Spiritual Upliftment – To provide every devotee with an atmosphere of peace, faith, and devotion during Ganesh Utsav.",

    "Social Service – To support society with blood donation camps, health check-ups, educational aid, and charity drives.",

    "Cultural Preservation – To keep alive the rich traditions of Ganesh Utsav in Mumbai, blending spirituality with art, music, and cultural programs.",

    "Community Unity – To bring together people of all backgrounds, spreading the message of love, harmony, and brotherhood that Lord Ganesha represents.",

    "Eco-Friendly Celebrations – To encourage sustainable practices, including eco-friendly idols, waste management, and green initiatives, for a better tomorrow.",
  ];
  return (
    <section className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="text-base/7 font-semibold text-primary">About us</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            The Legacy of Parel Cha Maharaja
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-gray-700 dark:text-gray-300">
            Since its inception, Parel Cha Maharaja has been one of Mumbai’s
            most revered Ganesh Mandals. Devotees from across India gather here
            to seek blessings, participate in grand aartis, and witness the
            majestic idol that symbolizes devotion, unity, and tradition.
          </p>
          <p className="mt-6 text-xl/8 text-balance text-gray-700 dark:text-gray-300">
            Every year, the Mandal organizes cultural programs, charitable
            initiatives, and spiritual gatherings that bring lakhs of devotees
            together. From majestic decorations to divine aartis, Parel Cha Raja
            continues to uphold Mumbai’s Ganesh Utsav tradition.
          </p>
        </div>
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
              Our mission
            </h2>
            <ul className="flex flex-col gap-y-4 mt-6 list-disc list-inside">
              {mission.map((m, idx) => (
                <li
                  className="text-base/7 text-gray-600 dark:text-gray-400"
                  key={idx}
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 dark:shadow-none dark:outline-white/10">
                <MotionImage
                  alt=""
                  src="/images/about-us-1.jpg"
                  className="block size-full object-cover"
                  width={500}
                  height={500}
                  variants={animation}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40 dark:shadow-none dark:outline-white/10">
                <MotionImage
                  alt=""
                  src="/images/about-us-2.jpg"
                  className="block size-full object-cover"
                  width={500}
                  height={500}
                  variants={animation}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 dark:shadow-none dark:outline-white/10">
                <MotionImage
                  alt=""
                  src="/images/about-us-3.jpg"
                  className="block size-full object-cover"
                  width={500}
                  height={500}
                  variants={animation}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40 dark:shadow-none dark:outline-white/10">
                <MotionImage
                  alt=""
                  src="/images/about-us-4.jpg"
                  className="block size-full object-cover"
                  width={500}
                  height={500}
                  variants={animation}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </div>
          <div className="max-lg:mt-16 lg:col-span-1">
            <p className="text-base/7 font-semibold text-gray-500 dark:text-gray-400">
              The numbers
            </p>
            <hr className="mt-6 border-t border-gray-200 dark:border-gray-700" />
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4 dark:border-gray-700">
                <dt className="text-sm/6 text-gray-600 dark:text-gray-400">
                  Raised
                </dt>
                <dd className="order-first text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  $<span>150</span>M
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4 dark:border-gray-700">
                <dt className="text-sm/6 text-gray-600 dark:text-gray-400">
                  Companies
                </dt>
                <dd className="order-first text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  <span>30</span>K
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4 dark:max-sm:border-gray-700">
                <dt className="text-sm/6 text-gray-600 dark:text-gray-400">
                  Deals Closed
                </dt>
                <dd className="order-first text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  <span>1.5</span>M
                </dd>
              </div>
              <div className="flex flex-col gap-y-2">
                <dt className="text-sm/6 text-gray-600 dark:text-gray-400">
                  Leads Generated
                </dt>
                <dd className="order-first text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  <span>200</span>M
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </section>
  );
}
