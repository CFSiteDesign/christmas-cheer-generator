export type Country = "Cambodia" | "Indonesia" | "Laos" | "Philippines" | "Thailand" | "Vietnam";

export type CountryFilter = "All" | Country;

export interface Property {
  id: string;
  name: string;
  country: Country;
  /** Christmas event page for this hostel. Empty string shows COMING SOON. */
  url: string;
}

export const COUNTRIES: CountryFilter[] = [
  "All",
  "Cambodia",
  "Indonesia",
  "Laos",
  "Philippines",
  "Thailand",
  "Vietnam",
];

/**
 * Christmas event pages on madmonkeyhostels.com, supplied by Charlie on
 * 25 Nov 2026. A hostel with no entry here reads COMING SOON.
 * Traps: Hanoi uses christmas-event-, not christmas-2026-, and Vang Vieng's
 * page is the bare christmas-2026-mad-monkey with no location suffix.
 * Kampot has no page yet.
 */
const BASE = "https://madmonkeyhostels.com/tours-events/";

const EVENT_PAGES: Partial<Record<string, string>> = {
  "koh-rong": `${BASE}christmas-2026-mad-monkey-koh-rong`,
  "koh-sdach": `${BASE}christmas-2026-mad-monkey-koh-sdach`,
  "phnom-penh": `${BASE}christmas-2026-mad-monkey-phnom-penh`,
  "siem-reap": `${BASE}christmas-2026-mad-monkey-siem-reap`,
  "gili-t": `${BASE}christmas-2026-mad-monkey-gili-trawangan`,
  "kuta-lombok": `${BASE}christmas-2026-mad-monkey-kuta-lombok`,
  "nusa-lembongan": `${BASE}christmas-2026-mad-monkey-nusa-lembongan`,
  uluwatu: `${BASE}christmas-2026-mad-monkey-uluwatu`,
  "luang-prabang": `${BASE}christmas-2026-mad-monkey-luang-prabang`,
  "vang-vieng": `${BASE}christmas-2026-mad-monkey`,
  dumaguete: `${BASE}christmas-2026-mad-monkey-dumaguete`,
  manila: `${BASE}christmas-2026-mad-monkey-manila`,
  "nacpan-beach": `${BASE}christmas-2026-mad-monkey-nacpan`,
  panglao: `${BASE}christmas-2026-mad-monkey-panglao`,
  siargao: `${BASE}christmas-2026-mad-monkey-siargao`,
  siquijor: `${BASE}christmas-2026-mad-monkey-siquijor`,
  bangkok: `${BASE}christmas-2026-mad-monkey-bangkok`,
  "chiang-mai": `${BASE}christmas-2026-mad-monkey-chiang-mai`,
  pai: `${BASE}christmas-2026-mad-monkey-pai`,
  phuket: `${BASE}christmas-2026-mad-monkey-phuket`,
  hanoi: `${BASE}christmas-event-mad-monkey-hanoi`,
  "hoi-an": `${BASE}christmas-2026-mad-monkey-hoi-an`,
};

const RAW: Array<[id: string, name: string, country: Country]> = [
  ["koh-rong", "Koh Rong", "Cambodia"],
  ["koh-sdach", "Koh Sdach", "Cambodia"],
  ["phnom-penh", "Phnom Penh", "Cambodia"],
  ["siem-reap", "Siem Reap", "Cambodia"],
  ["kampot", "Kampot", "Cambodia"],
  ["gili-t", "Gili T", "Indonesia"],
  ["kuta-lombok", "Kuta Lombok", "Indonesia"],
  ["nusa-lembongan", "Nusa Lembongan", "Indonesia"],
  ["uluwatu", "Uluwatu", "Indonesia"],
  ["luang-prabang", "Luang Prabang", "Laos"],
  ["vang-vieng", "Vang Vieng", "Laos"],
  ["dumaguete", "Dumaguete", "Philippines"],
  ["manila", "Manila", "Philippines"],
  ["nacpan-beach", "Nacpan Beach", "Philippines"],
  ["panglao", "Panglao", "Philippines"],
  ["siargao", "Siargao", "Philippines"],
  ["siquijor", "Siquijor", "Philippines"],
  ["bangkok", "Bangkok", "Thailand"],
  ["chiang-mai", "Chiang Mai", "Thailand"],
  ["pai", "Pai", "Thailand"],
  ["phuket", "Phuket", "Thailand"],
  ["hanoi", "Hanoi", "Vietnam"],
  ["hoi-an", "Hoi An", "Vietnam"],
];

export const PROPERTIES: Property[] = RAW.map(([id, name, country]) => ({
  id,
  name,
  country,
  url: EVENT_PAGES[id] ?? "",
}));
