import { useState } from "react";
import { Halftone, Sparkle, Tree } from "@/components/xmas/Decor";

const FAQS = [
  {
    q: "When is it?",
    a: "Christmas Day, Friday 25 December 2026. Your hostel event page has the exact times for the roast and the DJ.",
  },
  {
    q: "How do I get a seat at the table?",
    a: "Entry is by seat. Pick your hostel above and claim your seat through its page, or scan the QR code on the poster at the hostel.",
  },
  {
    q: "What comes with the roast?",
    a: "All the trimmings. Each hostel kitchen puts its own spin on it, so Christmas dinner in Bali might look a little different to Christmas dinner in Hanoi.",
  },
  {
    q: "What is in the free flow package?",
    a: "Drinks that keep coming. What gets poured, for how long and what it costs are set by each hostel and shown on its event page.",
  },
  {
    q: "My hostel says coming soon?",
    a: "Its Christmas page is not live yet. Links switch on hostel by hostel as the pages drop, so check back soon.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden bg-xpink px-4 py-16 md:px-10 md:py-28"
    >
      <Halftone className="-z-10 opacity-60" />
      <Tree className="absolute -left-20 bottom-0 -z-10 hidden w-64 xl:block" />
      <Sparkle className="absolute right-[7%] top-20 -z-10 hidden w-16 text-xcream xl:block" />

      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="font-pixel text-sm font-bold tracking-[0.12em] text-xlime md:text-base">
            Good to know
          </p>
          <h2
            className="font-display text-extrude mt-3 leading-[0.95]"
            style={{ fontSize: "clamp(2.2rem, 7vw, 5rem)" }}
          >
            Before you pull a cracker
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-4 md:mt-14 md:gap-5">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className="ink-border shadow-hard bg-paper text-ink">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-xcream/50 md:p-6"
                >
                  <span className="font-display text-base leading-tight md:text-2xl">{faq.q}</span>
                  <span
                    className="ink-border font-display flex h-9 w-9 shrink-0 items-center justify-center bg-xlime text-xl leading-none md:h-11 md:w-11 md:text-2xl"
                    aria-hidden="true"
                  >
                    <span
                      className={`block transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-5 text-[0.95rem] font-medium leading-relaxed text-ink/80 md:px-6 md:pb-6 md:text-lg">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
