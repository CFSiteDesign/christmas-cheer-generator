import dj480 from "@/assets/card-dj-480.webp";
import dj800 from "@/assets/card-dj-800.webp";
import freeflow480 from "@/assets/card-freeflow-480.webp";
import freeflow800 from "@/assets/card-freeflow-800.webp";
import roast480 from "@/assets/card-roast-480.webp";
import roast800 from "@/assets/card-roast-800.webp";
import { Halftone, Tree } from "@/components/xmas/Decor";

type Highlight = {
  title: string;
  sub: string;
  badge: string;
  copy: string;
  /** card photo, 5:4, at 480 and 800 wide */
  image: { small: string; large: string; alt: string };
  tilt: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Live DJ",
    sub: "Festive bangers only",
    badge: "Turn it up",
    copy: "A live DJ on the decks for Christmas Day. Festive classics, proper bangers and the Mariah moment everyone pretends to hate. Dance off the roast.",
    image: {
      small: dj480,
      large: dj800,
      alt: "DJ in a Santa hat playing to a crowd of backpackers under palm trees and fairy lights",
    },
    tilt: "-rotate-3",
  },
  {
    title: "Roast Dinner",
    sub: "& all the trimmings",
    badge: "The main event",
    copy: "A proper Christmas roast with all the trimmings, served at one long table with the whole hostel. The closest thing to Christmas at home, minus the family politics.",
    image: {
      small: roast480,
      large: roast800,
      alt: "Christmas table with a roast turkey, roast potatoes, pigs in blankets, carrots and gravy being poured",
    },
    tilt: "rotate-2",
  },
  {
    title: "Free Flow",
    sub: "Package",
    badge: "Pour decisions",
    copy: "Add the free flow package and the drinks keep coming. What gets poured and for how long is down to each hostel, so check yours below.",
    image: {
      small: freeflow480,
      large: freeflow800,
      alt: "Backpackers in Santa hats clinking beers at the bar while a bartender in elf ears pours a jug of red punch",
    },
    tilt: "-rotate-2",
  },
];

const HighlightCard = ({ item }: { item: Highlight }) => {
  return (
    <article className="group ink-border shadow-hard-lg press-hover flex flex-col bg-paper text-ink">
      <div className="relative aspect-[5/4] overflow-hidden border-b-[3px] border-ink bg-ink">
        <img
          src={item.image.large}
          srcSet={`${item.image.small} 480w, ${item.image.large} 800w`}
          sizes="(min-width: 768px) 33vw, 92vw"
          width={800}
          height={640}
          alt={item.image.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span
          className={`ink-border font-pixel absolute left-3 top-3 bg-paper px-2 py-1 text-[11px] font-bold leading-none md:left-4 md:top-4 md:text-xs ${item.tilt}`}
        >
          {item.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-7">
        <h3 className="font-display text-[1.75rem] leading-[0.95] md:text-[1.6rem] lg:text-[1.85rem] xl:text-[2rem]">
          {item.title}
        </h3>
        <p className="font-display mt-1.5 text-sm text-xred md:text-base">{item.sub}</p>
        <p className="mt-4 text-[0.95rem] font-medium leading-relaxed text-ink/80 md:text-base">
          {item.copy}
        </p>
      </div>
    </article>
  );
};

const Highlights = () => {
  return (
    <section
      id="highlights"
      className="relative isolate overflow-hidden bg-xgreen px-4 py-16 md:px-10 md:py-28"
    >
      <Halftone className="-z-10 opacity-60" />
      <Tree className="absolute -left-24 top-10 -z-10 hidden w-72 opacity-90 2xl:block" />
      <Tree className="absolute -right-24 bottom-0 -z-10 hidden w-80 opacity-90 2xl:block" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-pixel text-sm font-bold tracking-[0.12em] text-xlime md:text-base">
            Christmas Day, sorted
          </p>
          <h2
            className="font-display text-extrude mt-3 leading-[0.95]"
            style={{ fontSize: "clamp(2.4rem, 7.5vw, 5.6rem)" }}
          >
            What&rsquo;s on the table
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-relaxed text-white md:mt-7 md:text-lg">
            Christmas away from home, done properly. A live DJ, a roast dinner with all the
            trimmings and a free flow package, all under one roof on 25 December.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-9 md:mt-16 md:grid-cols-3 md:gap-8 lg:gap-12">
          {HIGHLIGHTS.map((item) => (
            <HighlightCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
