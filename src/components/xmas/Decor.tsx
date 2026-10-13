import type { CSSProperties, ReactNode } from "react";

/*
 * Poster furniture, all hand-built SVG so it stays sharp and takes colour:
 * the magenta swirl, two-tone trees, spiky starbursts and cream sparkles.
 * Geometry is computed once at module load with fixed precision, so server
 * and client render identical markup.
 */

type Props = {
  className?: string | undefined;
  style?: CSSProperties | undefined;
};

const r1 = (n: number) => n.toFixed(1);

/* Archimedean spiral centred on a 1000 x 1000 box, running off the edges. */
const SPIRAL_PATH = (() => {
  const turns = 4.6;
  const gap = 205;
  const steps = Math.round(turns * 96);
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * turns * Math.PI * 2;
    const r = 40 + (gap * t) / (Math.PI * 2);
    pts.push(`${r1(500 + r * Math.cos(t))} ${r1(500 + r * Math.sin(t))}`);
  }
  return `M${pts.join("L")}`;
})();

export const Swirl = ({ className = "", style }: Props) => (
  <svg
    viewBox="0 0 1000 1000"
    preserveAspectRatio="xMidYMid slice"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={SPIRAL_PATH} stroke="var(--xpink-deep)" strokeWidth="104" />
      <path d={SPIRAL_PATH} stroke="var(--xpink)" strokeWidth="92" />
      <path d={SPIRAL_PATH} stroke="#ff5ea3" strokeWidth="14" opacity="0.45" />
    </g>
  </svg>
);

/* Two-tone triangle tree, light face left, shaded face right. */
export const Tree = ({ className = "", style }: Props) => (
  <svg viewBox="0 0 120 150" className={className} style={style} aria-hidden="true">
    <polygon points="60,4 116,146 4,146" fill="var(--xgreen)" />
    <polygon points="60,4 116,146 60,146" fill="var(--xgreen-deep)" />
    <polygon
      points="60,4 116,146 4,146"
      fill="none"
      stroke="var(--ink)"
      strokeWidth="3"
      strokeLinejoin="round"
    />
  </svg>
);

/* Spiky starburst points. Spike lengths vary on a fixed pattern so it reads hand-cut. */
function burstPoints(spikes: number, outer: number, inner: number) {
  const wobble = [1, 0.9, 1.06, 0.94, 1.02, 0.88];
  const pts: string[] = [];
  for (let i = 0; i < spikes * 2; i++) {
    const a = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? outer * (wobble[(i / 2) % wobble.length] ?? 1) : inner;
    pts.push(`${r1(100 + r * Math.cos(a))},${r1(100 + r * Math.sin(a))}`);
  }
  return pts.join(" ");
}

const BURST_SPIKY = burstPoints(14, 96, 62);
const BURST_BADGE = burstPoints(18, 94, 74);

type BurstProps = Props & {
  /** fill colour, any CSS colour */
  fill?: string | undefined;
  /** chunkier, rounder burst used behind text badges */
  badge?: boolean | undefined;
  children?: ReactNode;
};

export const Starburst = ({
  className = "",
  style,
  fill = "var(--xblue)",
  badge = false,
  children,
}: BurstProps) => {
  const pts = badge ? BURST_BADGE : BURST_SPIKY;
  // callers usually float it with `absolute`; otherwise it anchors its own label
  const position = /\babsolute\b/.test(className) ? "" : "relative ";
  return (
    <div className={`${position}${className}`} style={style}>
      <svg viewBox="-4 -4 216 216" className="block h-full w-full" aria-hidden="true">
        <polygon points={pts} fill="var(--ink)" transform="translate(7 7)" />
        <polygon
          points={pts}
          fill={fill}
          stroke="var(--ink)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>
      {children ? (
        <div className="absolute inset-0 flex items-center justify-center text-center">
          {children}
        </div>
      ) : null}
    </div>
  );
};

/* Four point sparkle, concave sides. */
export const Sparkle = ({ className = "", style }: Props) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    style={style}
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M50 0C53 33 67 47 100 50C67 53 53 67 50 100C47 67 33 53 0 50C33 47 47 33 50 0Z" />
  </svg>
);

/* Small five point star, used in labels like the poster pill. */
export const Star = ({ className = "", style }: Props) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={style}
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M12 1.5l3.1 6.6 7.2.9-5.3 5 1.4 7.1L12 17.6 5.6 21.1 7 14 1.7 9l7.2-.9z" />
  </svg>
);

/* Halftone dot screen, drop inside any relatively positioned block. */
export const Halftone = ({ className = "", style }: Props) => (
  <div className={`halftone-layer ${className}`} style={style} aria-hidden="true" />
);
