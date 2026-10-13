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
 * TURNING THE LINKS ON
 * Every card reads COMING SOON until its hostel has a URL here. Paste each
 * Christmas event page (or seat booking link) against the hostel id as they
 * come through, e.g.
 *   "siem-reap": "https://madmonkeyhostels.com/tours-events/...",
 */
const EVENT_PAGES: Partial<Record<string, string>> = {};

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
