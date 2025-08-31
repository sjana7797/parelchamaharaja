import {
  ArcTimeline,
  ArcTimelineItem,
} from "@/components/magicui/arc-timeline";
import Image from "next/image";

export function GaneshaTimeline() {
  return (
    <section className="flex flex-col gap-y-10">
      <h2 className="text-center text-3xl font-semibold">
        Parel Cha Maharaja Past Murti
      </h2>
      <ArcTimeline
        // className={cn(
        //   "[--step-line-active-color:#888888] dark:[--step-line-active-color:#9780ff]",
        //   "[--step-line-inactive-color:#b1b1b1] dark:[--step-line-inactive-color:#737373]",
        //   "[--placeholder-line-color:#a1a1a1] dark:[--placeholder-line-color:#737373]",
        //   "[--icon-active-color:#555555] dark:[--icon-active-color:#d4d4d4]",
        //   "[--icon-inactive-color:#a3a3a3] dark:[--icon-inactive-color:#a3a3a3]",
        //   "[--time-active-color:#555555] dark:[--time-active-color:#d4d4d4]",
        //   "[--time-inactive-color:#a3a3a3] dark:[--time-inactive-color:#a3a3a3]",
        //   "[--description-color:#555555] dark:[--description-color:#d4d4d4]"
        // )}
        data={TIMELINE}
        defaultActiveStep={{ time: "2025", stepIndex: 0 }}
        arcConfig={{
          circleWidth: 4500,
          angleBetweenMinorSteps: 0.4,
          lineCountFillBetweenSteps: 8,
          boundaryPlaceholderLinesCount: 50,
        }}
        className="h-[800px]"
      />
    </section>
  );
}

const TIMELINE: ArcTimelineItem[] = [
  {
    time: "2022",
    steps: [
      {
        icon: (
          <div className="size-8 rounded-full overflow-hidden">
            <Image
              width={20}
              height={20}
              src="/images/timeline/2024.jpg"
              alt="2024"
              className="object-cover size-8 rounded-full"
            />
          </div>
        ),
        content: (
          <Image
            width={400}
            height={400}
            src="/images/timeline/2024.jpg"
            alt="2024"
            className="object-cover rounded-lg"
          />
        ),
      },
    ],
  },
  {
    time: "2023",
    steps: [
      {
        icon: (
          <div className="size-8 rounded-full overflow-hidden">
            <Image
              width={20}
              height={20}
              src="/images/timeline/2024.jpg"
              alt="2024"
              className="object-cover size-8 rounded-full"
            />
          </div>
        ),
        content: (
          <Image
            width={400}
            height={400}
            src="/images/timeline/2024.jpg"
            alt="2024"
            className="object-cover rounded-lg"
          />
        ),
      },
    ],
  },
  {
    time: "2024",
    steps: [
      {
        icon: (
          <div className="size-8 rounded-full overflow-hidden">
            <Image
              width={20}
              height={20}
              src="/images/timeline/2024.jpg"
              alt="2024"
              className="object-cover size-8 rounded-full"
            />
          </div>
        ),
        content: (
          <Image
            width={400}
            height={400}
            src="/images/timeline/2024.jpg"
            alt="2024"
            className="object-cover rounded-lg"
          />
        ),
      },
    ],
  },
  {
    time: "2025",
    steps: [
      {
        icon: (
          <div className="size-8 rounded-full overflow-hidden">
            <Image
              width={20}
              height={20}
              src="/images/timeline/2025.jpg"
              alt="2025"
              className="object-cover size-8 rounded-full"
            />
          </div>
        ),
        content: (
          <Image
            width={400}
            height={400}
            src="/images/timeline/2025.jpg"
            alt="2025"
            className="object-cover rounded-lg"
          />
        ),
      },
    ],
  },
];
