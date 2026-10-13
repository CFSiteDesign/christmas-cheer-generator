import type { ComponentType } from "react";
import { Halftone, Sparkle, Tree } from "@/components/xmas/Decor";
import { DjArt, FreeFlowArt, RoastArt } from "@/components/xmas/Illustrations";

type Highlight = {
  title: string;
  sub: string;
  badge: string;
  copy: string;
  panel: string;
  tilt: string;
  Art: ComponentType<{ className?: string }>;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Live DJ",
    sub: "Festive bangers only",
    badge: "Turn it up",
    copy: "A live DJ on the decks for Christmas Day. Festive classics, proper bangers and the Mariah moment everyone pretends to hate. Dance off the roast.",
    panel: "bg-xpink",
    tilt: "-rotate-3",
    Art: DjArt,
  },
  {
    title: "Roast Dinner",
    sub: "& all the trimmings",
    badge: "The main event",
    copy: "A proper Christmas roast with all the trimmings, served at one long table with the whole hostel. The closest thing to Christmas at home, minus the family politics.",
    panel: "bg-xblue",
    tilt: "rotate-2",
    Art: RoastArt,
  },
  {
    title: "Free Flow",
    sub: "Package",
    badge: "Pour decisions",
    copy: "Add the free flow package and the drinks keep coming. What gets poured and for how long is down to each hostel, so check yours below.",
    panel: "bg-xred",
    tilt: "-rotate-2",
    Art: FreeFlowArt,
  },
];

const HighlightCard = ({ item }: { item: Highlight }) => {
  const { Art } = item;
  return (
    <article className="ink-border shadow-hard-lg press-hover flex flex-col bg-paper text-ink">
      <div
        className={`relative isolate aspect-[6/5] overflow-hidden border-b-[3px] border-ink ${item.panel}`}
      >
        <Halftone className="-z-10 opacity-60" />
        <Sparkle className="absolute right-[8%] top-[10%] -z-10 w-8 text-xcream" />
        <Sparkle className="absolute bottom-[12%] left-[7%] -z-10 w-5 text-xcream" />
        <Art className="absolute inset-x-[8%] bottom-[6%] top-[14%] m-auto h-[80%] w-[84%]" />
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
