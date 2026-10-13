import { Sparkle } from "@/components/xmas/Decor";

const WORDS = [
  "Live DJ",
  "Roast Dinner",
  "All The Trimmings",
  "Free Flow",
  "25th Dec",
  "Claim Your Seat",
];

type Props = {
  /** scroll the other way, on an ink band */
  reverse?: boolean;
};

const Ticker = ({ reverse = false }: Props) => {
  const strip = [...WORDS, ...WORDS, ...WORDS];

  return (
    <div
      className={`relative w-full overflow-hidden border-y-[3px] border-ink py-2.5 md:py-3.5 ${
        reverse ? "bg-ink text-xlime" : "bg-xlime text-ink"
      }`}
    >
      <div
        className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        aria-hidden="true"
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0">
            {strip.map((word, i) => (
              <span
                key={`${half}-${i}`}
                className="font-display flex items-center gap-5 whitespace-nowrap px-3 text-base md:gap-8 md:px-5 md:text-2xl"
              >
                {word}
                <Sparkle className={`w-4 md:w-6 ${reverse ? "text-white" : "text-xred"}`} />
              </span>
            ))}
          </div>
        ))}
      </div>
      <span className="sr-only">
        Live DJ, roast dinner with all the trimmings and a free flow package on 25 December
      </span>
    </div>
  );
};

export default Ticker;
