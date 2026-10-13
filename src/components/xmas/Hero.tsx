import title1400 from "@/assets/xmas-title-1400.webp";
import title760 from "@/assets/xmas-title-760.webp";
import { Halftone, Sparkle, Star, Starburst, Swirl, Tree } from "@/components/xmas/Decor";

/* Title art is 1400 x 1020, so height caps width at 1.3725 x height. */
const TITLE_WIDTH = "w-[min(92vw,54rem,calc(50svh*1.3725))]";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-xred px-4 pb-20 pt-10 md:px-8 md:pb-24"
    >
      {/* poster ground: magenta swirl, trees, bursts, sparkles, dot screen */}
      <Swirl className="absolute inset-0 -z-10 h-full w-full" />
      <Tree className="absolute -left-20 bottom-[4%] -z-10 w-56 md:-left-16 md:w-[22rem]" />
      <Tree className="absolute -right-24 -bottom-16 -z-10 w-64 md:-right-20 md:w-[26rem]" />
      <Tree className="absolute -top-20 left-[64%] -z-10 w-36 rotate-180 md:-top-28 md:left-[70%] md:w-56" />
      <Tree className="absolute left-[14%] top-[34%] -z-10 hidden w-36 xl:block" />
      <Starburst className="absolute right-[3%] bottom-[22%] -z-10 hidden w-40 rotate-12 lg:block xl:w-48" />
      <Starburst
        className="absolute left-[4%] top-[8%] -z-10 hidden w-24 -rotate-6 lg:block"
        fill="var(--xlime)"
      />
      <Sparkle className="absolute left-[8%] top-[30%] -z-10 w-10 text-xcream md:w-16" />
      <Sparkle className="absolute right-[10%] top-[12%] -z-10 w-12 text-xcream md:w-20" />
      <Sparkle className="absolute left-[24%] bottom-[10%] -z-10 w-8 text-xcream md:w-12" />
      <Sparkle className="absolute right-[26%] bottom-[6%] -z-10 hidden w-10 text-xcream md:block" />
      <Halftone className="-z-10 opacity-70" />

      <div className="relative flex w-full max-w-5xl flex-col items-center text-center">
        <p className="stack-pill font-display inline-flex items-center gap-2 px-4 py-2 text-[0.7rem] sm:px-6 sm:text-sm md:gap-3 md:px-9 md:py-3 md:text-xl">
          <Star className="w-3 shrink-0 md:w-5" />
          Christmas with Mad Monkey
          <Star className="w-3 shrink-0 md:w-5" />
        </p>

        <h1 className={`relative mt-9 md:mt-10 ${TITLE_WIDTH}`}>
          {/* blue burst behind the ALL IN badge, as on the poster */}
          <Starburst className="absolute -left-[5%] -top-[9%] w-[23%] -rotate-12" />
          <img
            src={title1400}
            srcSet={`${title760} 760w, ${title1400} 1400w`}
            sizes="(min-width: 900px) 864px, 92vw"
            width={1400}
            height={1020}
            alt="Ho! Ho! Holy Sh*t!"
            fetchPriority="high"
            className="relative block h-auto w-full select-none"
          />
        </h1>

        {/* the poster's details box with the date burst biting into it */}
        <div className="relative mt-7 md:mt-9">
          <ul className="ink-border shadow-hard font-display -rotate-[1.5deg] bg-xlime py-3 pl-5 pr-16 text-left text-sm leading-[1.08] text-ink sm:text-base md:py-4 md:pl-8 md:pr-24 md:text-2xl">
            <li>Live DJ</li>
            <li>Roast dinner</li>
            <li>Free flow</li>
          </ul>
          <Starburst
            badge
            fill="var(--xlime)"
            className="absolute -right-12 top-1/2 w-24 -translate-y-1/2 rotate-[8deg] sm:-right-14 sm:w-28 md:-right-20 md:w-40"
          >
            <span className="font-display text-base leading-[0.88] text-ink sm:text-lg md:text-[1.7rem]">
              25th
              <br />
              Dec
            </span>
          </Starburst>
        </div>

        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:mt-11 md:gap-5">
          <a
            href="#hostels"
            className="ink-border shadow-hard lift-hover font-display bg-paper px-8 py-4 text-lg text-ink md:px-11 md:text-xl"
          >
            Claim your seat
          </a>
          <a
            href="#highlights"
            className="ink-border shadow-hard lift-hover font-display bg-xblue px-8 py-4 text-lg text-white md:px-11 md:text-xl"
          >
            What&rsquo;s on
          </a>
        </div>
      </div>

      <a
        href="#highlights"
        className="font-pixel absolute bottom-5 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.25em] text-white/85 transition-colors hover:text-xlime md:bottom-7 md:text-xs"
      >
        Scroll for seconds
      </a>
    </section>
  );
};

export default Hero;
