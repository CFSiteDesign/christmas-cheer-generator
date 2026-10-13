/*
 * Sticker illustrations for the three highlights. Chunky ink outlines and a
 * hard offset shadow, so they sit with the poster lettering.
 */

type Props = { className?: string | undefined };

const INK = "var(--ink)";
const PAPER = "var(--paper)";

/* A record on the decks, wearing a Santa hat. */
export const DjArt = ({ className = "" }: Props) => (
  <svg viewBox="0 0 240 200" className={className} aria-hidden="true">
    {/* record */}
    <circle cx="126" cy="118" r="70" fill={INK} transform="translate(7 7)" />
    <circle cx="126" cy="118" r="70" fill="#1b1b1b" stroke={INK} strokeWidth="5" />
    <g fill="none" stroke="#3a3a3a" strokeWidth="2">
      <circle cx="126" cy="118" r="60" />
      <circle cx="126" cy="118" r="51" />
      <circle cx="126" cy="118" r="43" />
      <circle cx="126" cy="118" r="35" />
    </g>
    <path
      d="M84 84a56 56 0 0 1 40-20"
      fill="none"
      stroke="#fff"
      strokeOpacity="0.35"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M168 150a56 56 0 0 1-24 18"
      fill="none"
      stroke="#fff"
      strokeOpacity="0.2"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <circle cx="126" cy="118" r="24" fill="var(--xred)" stroke={INK} strokeWidth="4" />
    <path
      d="M126 104l3.6 7.6 8.3 1-6.1 5.8 1.6 8.2-7.4-4.1-7.4 4.1 1.6-8.2-6.1-5.8 8.3-1z"
      fill="var(--xlime)"
      stroke={INK}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="126" cy="118" r="3.5" fill={PAPER} />

    {/* santa hat, slumped over the top edge */}
    <g transform="rotate(-16 104 52)">
      <path
        d="M62 62Q86 6 150 8Q128 22 146 62Z"
        fill="var(--xred)"
        stroke={INK}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M98 22q20-10 40-10"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.35"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <rect
        x="52"
        y="54"
        width="104"
        height="22"
        rx="11"
        fill={PAPER}
        stroke={INK}
        strokeWidth="5"
      />
      <circle cx="152" cy="10" r="11" fill={PAPER} stroke={INK} strokeWidth="5" />
    </g>

    {/* notes */}
    <g stroke={INK} strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
      <path d="M198 64V30l26-7v34" fill="none" />
      <path d="M198 30l26-7v9l-26 7z" fill={INK} />
      <ellipse cx="190" cy="66" rx="9" ry="7" fill="var(--xlime)" transform="rotate(-20 190 66)" />
      <ellipse cx="216" cy="59" rx="9" ry="7" fill="var(--xlime)" transform="rotate(-20 216 59)" />
      <path d="M30 120V92" fill="none" />
      <path d="M30 92q10 4 12 14" fill="none" />
      <ellipse cx="23" cy="122" rx="9" ry="7" fill="var(--xcream)" transform="rotate(-20 23 122)" />
    </g>
  </svg>
);

/* Roast bird on a plate with potatoes, carrots, peas and a holly sprig. */
export const RoastArt = ({ className = "" }: Props) => (
  <svg viewBox="0 0 240 200" className={className} aria-hidden="true">
    {/* plate */}
    <ellipse cx="120" cy="142" rx="106" ry="44" fill={INK} transform="translate(7 7)" />
    <ellipse cx="120" cy="142" rx="106" ry="44" fill={PAPER} stroke={INK} strokeWidth="5" />
    <ellipse
      cx="120"
      cy="140"
      rx="82"
      ry="31"
      fill="none"
      stroke={INK}
      strokeOpacity="0.18"
      strokeWidth="3"
    />

    {/* legs, behind the body */}
    <g stroke={INK} strokeWidth="5" strokeLinejoin="round">
      <ellipse cx="160" cy="86" rx="28" ry="17" fill="#b8652a" transform="rotate(-38 160 86)" />
      <ellipse cx="78" cy="88" rx="28" ry="17" fill="#b8652a" transform="rotate(38 78 88)" />
    </g>
    <g strokeLinecap="round">
      <path d="M174 70L190 52" stroke={INK} strokeWidth="13" />
      <path d="M174 70L190 52" stroke={PAPER} strokeWidth="5" />
      <path d="M64 72L48 54" stroke={INK} strokeWidth="13" />
      <path d="M64 72L48 54" stroke={PAPER} strokeWidth="5" />
    </g>
    <g fill={PAPER} stroke={INK} strokeWidth="3.5">
      <circle cx="188" cy="46" r="6.5" />
      <circle cx="197" cy="54" r="6.5" />
      <circle cx="50" cy="46" r="6.5" />
      <circle cx="41" cy="54" r="6.5" />
    </g>

    {/* body */}
    <path
      d="M62 118C54 84 86 64 120 64S186 84 178 118C172 138 68 140 62 118Z"
      fill="#c87334"
      stroke={INK}
      strokeWidth="5"
      strokeLinejoin="round"
    />
    <path
      d="M84 92q18-16 44-16"
      fill="none"
      stroke="#f0a35a"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M150 112q10-6 14-16"
      fill="none"
      stroke="#8f4a1e"
      strokeWidth="5"
      strokeLinecap="round"
      opacity="0.6"
    />

    {/* holly */}
    <g stroke={INK} strokeWidth="3.5" strokeLinejoin="round">
      <path d="M118 66l-24-12 6 8-9 3 8 5-6 7 25-3z" fill="var(--xgreen)" />
      <path d="M122 66l24-12-6 8 9 3-8 5 6 7-25-3z" fill="var(--xgreen-deep)" />
      <circle cx="114" cy="60" r="6" fill="var(--xred)" />
      <circle cx="126" cy="60" r="6" fill="var(--xred)" />
      <circle cx="120" cy="51" r="6" fill="var(--xred)" />
    </g>

    {/* trimmings */}
    <g stroke={INK} strokeWidth="3.5" strokeLinejoin="round">
      <path d="M86 150c-6-12 8-20 18-14s8 18-2 20-12 0-16-6z" fill="#f2b84b" />
      <path d="M112 156c-4-12 10-18 19-12s6 18-4 19-12-1-15-7z" fill="#e8a63c" />
      <path d="M152 136l30-6-26 18z" fill="#ff7a1a" />
      <path d="M150 150l32 0-30 12z" fill="#ff8f2e" />
      <circle cx="58" cy="138" r="6.5" fill="var(--xlime)" />
      <circle cx="70" cy="146" r="6.5" fill="var(--xgreen)" />
      <circle cx="56" cy="152" r="6.5" fill="var(--xgreen)" />
      <circle cx="44" cy="144" r="6.5" fill="var(--xlime)" />
    </g>
  </svg>
);

/* Mug of beer for the free flow pair. Drawn around its base centre. */
const Mug = ({ flip = false }: { flip?: boolean }) => (
  <g transform={flip ? "scale(-1 1)" : undefined}>
    <path
      d="M30-70h12a16 16 0 0 1 16 16v26a16 16 0 0 1-16 16H30"
      fill="none"
      stroke={INK}
      strokeWidth="17"
    />
    <path
      d="M30-70h12a16 16 0 0 1 16 16v26a16 16 0 0 1-16 16H30"
      fill="none"
      stroke="#ffcf5a"
      strokeWidth="7"
    />
    <rect
      x="-34"
      y="-92"
      width="68"
      height="96"
      rx="9"
      fill="#ffb627"
      stroke={INK}
      strokeWidth="5"
    />
    <rect x="-22" y="-74" width="9" height="66" rx="4.5" fill="#fff" opacity="0.5" />
    <g fill="#fff" opacity="0.6">
      <circle cx="10" cy="-30" r="3" />
      <circle cx="18" cy="-50" r="2.5" />
      <circle cx="4" cy="-58" r="2" />
    </g>
    <path
      d="M-40-84c-6-16 6-28 20-24 4-16 26-18 32-6 14-10 34 0 30 16 10 4 8 18-4 18H-34c-8 0-10-2-6-4z"
      fill={PAPER}
      stroke={INK}
      strokeWidth="5"
      strokeLinejoin="round"
    />
  </g>
);

/* Two mugs clinking. */
export const FreeFlowArt = ({ className = "" }: Props) => (
  <svg viewBox="0 0 240 200" className={className} aria-hidden="true">
    <ellipse cx="120" cy="186" rx="88" ry="9" fill={INK} opacity="0.25" />
    <g transform="translate(78 182) rotate(16)">
      <Mug flip />
    </g>
    <g transform="translate(162 182) rotate(-16)">
      <Mug />
    </g>

    {/* clink */}
    <g stroke={INK} strokeWidth="5" strokeLinecap="round">
      <path d="M120 40V20" />
      <path d="M100 46L88 32" />
      <path d="M140 46L152 32" />
    </g>
    {/* splashes */}
    <g fill="#ffb627" stroke={INK} strokeWidth="3" strokeLinejoin="round">
      <path d="M96 64c-4-8 0-14 4-18 2 8 4 12-4 18z" />
      <path d="M146 62c4-8 0-14-4-18-2 8-4 12 4 18z" />
      <circle cx="120" cy="58" r="5" />
    </g>
  </svg>
);
