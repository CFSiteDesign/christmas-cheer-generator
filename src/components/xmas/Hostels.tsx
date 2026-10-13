import { useMemo, useState } from "react";
import { COUNTRIES, PROPERTIES, type CountryFilter } from "@/data/properties";
import { Halftone, Sparkle, Starburst, Tree } from "@/components/xmas/Decor";

const STEPS = [
  { n: "1", title: "Pick your hostel", copy: "Find your Mad Monkey in the list below." },
  {
    n: "2",
    title: "Claim your seat",
    copy: "Tap through, or scan the QR on the poster at the hostel.",
  },
  { n: "3", title: "Turn up hungry", copy: "Friday 25 December. Bring the appetite." },
];

const Hostels = () => {
  const [filter, setFilter] = useState<CountryFilter>("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return PROPERTIES.filter((p) => {
      const matchesCountry = filter === "All" || p.country === filter;
      const matchesSearch =
        !term || p.name.toLowerCase().includes(term) || p.country.toLowerCase().includes(term);
      return matchesCountry && matchesSearch;
    });
  }, [filter, search]);

  return (
    <section id="hostels" className="relative isolate overflow-x-clip bg-xred py-16 md:py-28">
      <Halftone className="-z-10 opacity-60" />
      <Starburst className="absolute -left-10 top-24 -z-10 hidden w-44 -rotate-12 2xl:block" />
      <Sparkle className="absolute right-[6%] top-16 -z-10 hidden w-16 text-xcream 2xl:block" />

      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-pixel text-sm font-bold tracking-[0.12em] text-xlime md:text-base">
            Entry fee: claim your seat
          </p>
          <h2
            className="font-display text-extrude mt-3 leading-[0.95]"
            style={{ fontSize: "clamp(2.4rem, 7.5vw, 5.6rem)" }}
          >
            Pick your table
          </h2>
        </div>

        <ol className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3 md:mt-14 md:gap-6">
          {STEPS.map((step, i) => (
            <li
              key={step.n}
              className={`ink-border shadow-hard flex items-start gap-4 bg-paper p-4 text-ink md:p-5 ${
                i === 1 ? "sm:rotate-1" : "sm:-rotate-1"
              }`}
            >
              <span className="ink-border font-display flex h-10 w-10 shrink-0 items-center justify-center bg-xlime text-xl md:h-12 md:w-12 md:text-2xl">
                {step.n}
              </span>
              <span>
                <span className="font-display block text-base leading-tight md:text-lg">
                  {step.title}
                </span>
                <span className="mt-1 block text-sm font-medium leading-snug text-ink/75">
                  {step.copy}
                </span>
              </span>
            </li>
          ))}
        </ol>

        <div className="ink-border shadow-hard sticky top-2 z-20 mt-12 bg-ink p-3 md:top-4 md:mt-16 md:p-4">
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Search location..."
              aria-label="Search location"
              className="font-display w-full border-[3px] border-paper bg-paper p-3.5 text-base text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-xlime md:p-4 md:text-xl"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="no-scrollbar flex gap-2 overflow-x-auto md:gap-3">
              {COUNTRIES.map((country) => (
                <button
                  key={country}
                  type="button"
                  onClick={() => setFilter(country)}
                  aria-pressed={filter === country}
                  className={`font-display whitespace-nowrap border-2 px-4 py-2 text-xs transition-colors md:px-6 md:py-2.5 md:text-base ${
                    filter === country
                      ? "border-xlime bg-xlime text-ink"
                      : "border-white/35 bg-transparent text-white hover:border-xlime hover:text-xlime"
                  }`}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-10 md:gap-8 lg:grid-cols-3">
          {filtered.length > 0 ? (
            filtered.map((prop) => (
              <div
                key={prop.id}
                className="group ink-border shadow-hard press-hover flex flex-col bg-paper p-4 text-ink sm:p-5 md:p-7"
              >
                <div className="mb-3 flex items-start justify-between sm:mb-6 md:mb-8">
                  <span className="ink-border font-pixel bg-xlime px-2 py-1 text-[11px] font-bold leading-none md:text-xs">
                    {prop.country}
                  </span>
                  <Tree className="w-7 transition-transform duration-200 group-hover:-rotate-6 sm:w-9 md:w-11" />
                </div>

                <h3 className="font-display mb-4 flex-grow text-[1.5rem] leading-[0.95] sm:mb-6 sm:text-[1.6rem] md:mb-8 md:text-[1.9rem]">
                  {prop.name}
                </h3>

                {prop.url ? (
                  <a
                    href={prop.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ink-border font-display block w-full bg-xlime py-2.5 text-center text-base text-ink transition-colors hover:bg-ink hover:text-xlime sm:py-3 md:py-4 md:text-lg"
                  >
                    Claim your seat
                  </a>
                ) : (
                  <span className="font-display block w-full cursor-not-allowed border-[3px] border-dashed border-ink/30 bg-ink/[0.04] py-2.5 text-center text-base text-ink/45 sm:py-3 md:py-4 md:text-lg">
                    Coming soon
                  </span>
                )}
              </div>
            ))
          ) : (
            <p className="font-display col-span-full py-12 text-center text-2xl text-white md:text-4xl">
              No Mad Monkey by that name. Try another spot.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hostels;
