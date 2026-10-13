import title760 from "@/assets/xmas-title-760.webp";
import band1200 from "@/assets/xmas-wristband-1200.webp";
import band2400 from "@/assets/xmas-wristband-2400.webp";
import mmLogo from "@/assets/mad-monkey-logo-white.webp";
import { Halftone, Sparkle, Starburst, Swirl, Tree } from "@/components/xmas/Decor";

const SOCIALS = [
  { name: "Instagram", url: "https://www.instagram.com/madmonkeyhostels/" },
  { name: "TikTok", url: "https://www.tiktok.com/@madmonkeyhostels" },
  { name: "Facebook", url: "https://www.facebook.com/MadMonkeyHostels" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCkUGlFdhp5Ndk68j_QRS1kw" },
  { name: "Website", url: "https://madmonkeyhostels.com" },
];

const Footer = () => {
  return (
    <footer className="relative">
      {/* last call */}
      <div className="relative isolate overflow-hidden bg-xred px-4 py-16 text-center md:px-10 md:py-28">
        <Swirl className="absolute inset-0 -z-10 h-full w-full" />
        <Tree className="absolute -left-16 -bottom-10 -z-10 w-48 md:w-72" />
        <Tree className="absolute -right-16 -bottom-14 -z-10 w-52 md:w-80" />
        <Sparkle className="absolute left-[12%] top-[14%] -z-10 w-10 text-xcream md:w-14" />
        <Sparkle className="absolute right-[14%] top-[20%] -z-10 w-8 text-xcream md:w-12" />
        <Halftone className="-z-10 opacity-70" />

        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <img
            src={title760}
            width={760}
            height={554}
            alt="Ho! Ho! Holy Sh*t!"
            loading="lazy"
            className="h-auto w-full max-w-sm md:max-w-lg"
          />
          <div className="relative mt-8 md:mt-10">
            <p className="ink-border shadow-hard font-display -rotate-1 bg-xlime px-6 py-3 text-lg leading-tight text-ink md:px-10 md:py-4 md:text-3xl">
              Christmas Day at Mad Monkey
            </p>
            <Starburst
              badge
              fill="var(--xblue)"
              className="absolute -right-2 -top-16 w-[4.5rem] rotate-12 sm:-right-8 sm:-top-12 sm:w-20 md:-right-14 md:-top-16 md:w-28"
            >
              <span className="font-display text-xs leading-[0.9] text-white md:text-base">
                25
                <br />
                Dec
              </span>
            </Starburst>
          </div>
          <a
            href="#hostels"
            className="ink-border shadow-hard lift-hover font-display mt-9 inline-block bg-paper px-9 py-4 text-lg text-ink md:mt-12 md:px-14 md:py-5 md:text-2xl"
          >
            Claim your seat
          </a>
        </div>
      </div>

      {/* the event wristband, running past like a ticker */}
      <div className="overflow-hidden border-y-[3px] border-ink bg-ink" aria-hidden="true">
        <div className="animate-marquee-slow flex w-max">
          {[0, 1, 2, 3].map((i) => (
            <img
              key={i}
              src={band1200}
              srcSet={`${band1200} 1200w, ${band2400} 2400w`}
              sizes="(min-width: 768px) 1660px, 1090px"
              width={2400}
              height={159}
              alt=""
              loading="lazy"
              className="mr-[3px] block h-[72px] w-auto max-w-none md:h-[110px]"
            />
          ))}
        </div>
      </div>

      {/* footer proper */}
      <div className="bg-ink px-4 py-10 md:px-10 md:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-7 md:gap-9">
          <img
            src={mmLogo}
            width={640}
            height={186}
            alt="Mad Monkey Hostels"
            loading="lazy"
            className="h-auto w-40 md:w-52"
          />

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {SOCIALS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display border-2 border-white/30 px-3 py-1.5 text-[11px] text-white transition-colors hover:border-xlime hover:text-xlime md:px-4 md:text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          <p className="font-pixel text-center text-[10px] tracking-[0.15em] text-white/60 md:text-xs">
            © 2026 Mad Monkey Hostels · Ho! Ho! Holy Sh*t! · 25 December
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
