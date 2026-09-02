export const demoDisclaimer =
  "Demonstration only. Information and pricing displayed through this demonstration are provided for illustrative purposes and should not be relied upon for investment, trading or valuation purposes. Data may be delayed, indicative, incomplete or unavailable. No information displayed constitutes an offer, solicitation or recommendation. Please contact EMFI directly for current market information, execution or other services.";

export const demoDisclaimerNote =
  "Draft disclaimer — subject to Compliance / Legal approval. Technical restrictions apply; the disclaimer is not the primary protection.";

export const researchCategories = [
  "All",
  "Strategy",
  "Credit",
  "Rates",
  "Markets",
] as const;

export type ResearchCategory = (typeof researchCategories)[number];

export type ResearchNote = {
  id: string;
  category: Exclude<ResearchCategory, "All">;
  theme: string;
  title: string;
  date: string;
  isoDate: string;
  desk: string;
  country: string;
  issuer: string;
  analyst: string;
  minutes: number;
  isin: string;
};

export const researchNotes: ResearchNote[] = [
  {
    id: "EMFI-2026-0184",
    category: "Credit",
    theme: "Sovereign Credit",
    title: "Brazil: duration, liquidity and the next allocation window",
    date: "14 AUG 2026",
    isoDate: "2026-08-14",
    desk: "Credit",
    country: "Brazil",
    issuer: "Republic of Brazil",
    analyst: "A. Marchetti",
    minutes: 9,
    isin: "US105756BV13",
  },
  {
    id: "EMFI-2026-0179",
    category: "Strategy",
    theme: "Macro Strategy",
    title: "Duration, liquidity and the shape of the next allocation window",
    date: "21 AUG 2026",
    isoDate: "2026-08-21",
    desk: "Strategy",
    country: "Türkiye",
    issuer: "Sovereign",
    analyst: "S. Delacroix",
    minutes: 12,
    isin: "XS2345678901",
  },
  {
    id: "EMFI-2026-0171",
    category: "Credit",
    theme: "Corporate Credit",
    title: "Refinancing windows in selected corporate credit",
    date: "14 AUG 2026",
    isoDate: "2026-08-14",
    desk: "Credit",
    country: "Mexico",
    issuer: "Selected corporates",
    analyst: "R. Oyelaran",
    minutes: 8,
    isin: "USP7S91BAA18",
  },
  {
    id: "EMFI-2026-0164",
    category: "Rates",
    theme: "Rates & FX",
    title: "The quiet repricing of developed-market duration",
    date: "07 AUG 2026",
    isoDate: "2026-08-07",
    desk: "Rates",
    country: "Nigeria",
    issuer: "Quasi-sovereign",
    analyst: "A. Marchetti",
    minutes: 11,
    isin: "XS1987654321",
  },
  {
    id: "EMFI-2026-0158",
    category: "Markets",
    theme: "Markets",
    title: "Settlement cycles, eligibility and operational friction after the trade",
    date: "30 JUL 2026",
    isoDate: "2026-07-30",
    desk: "Markets",
    country: "Egypt",
    issuer: "Sovereign",
    analyst: "S. Delacroix",
    minutes: 7,
    isin: "EGS60121C018",
  },
  {
    id: "EMFI-2026-0152",
    category: "Credit",
    theme: "Corporate Credit",
    title: "Issuer selection when the standard route is not the right one",
    date: "22 JUL 2026",
    isoDate: "2026-07-22",
    desk: "Credit",
    country: "Sri Lanka",
    issuer: "Selected corporates",
    analyst: "R. Oyelaran",
    minutes: 10,
    isin: "XS1122334455",
  },
  {
    id: "EMFI-2026-0147",
    category: "Strategy",
    theme: "Macro Strategy",
    title: "Working notes from the desk: what changed this month",
    date: "16 JUL 2026",
    isoDate: "2026-07-16",
    desk: "Strategy",
    country: "Brazil",
    issuer: "Cross-market",
    analyst: "S. Delacroix",
    minutes: 6,
    isin: "BRSTNCNTF1P8",
  },
  {
    id: "EMFI-2026-0141",
    category: "Credit",
    theme: "Sovereign Credit",
    title: "Nigeria: quasi-sovereign liquidity after the refinancing window",
    date: "09 JUL 2026",
    isoDate: "2026-07-09",
    desk: "Credit",
    country: "Nigeria",
    issuer: "Quasi-sovereign",
    analyst: "R. Oyelaran",
    minutes: 9,
    isin: "XS5566778899",
  },
];

export type DemoSecurity = {
  query: string[];
  security: string;
  type: string;
  price: string;
  bidOffer: string;
  currency: string;
  settlement: string;
};

export const demoSecurities: DemoSecurity[] = [
  {
    query: ["demo bond", "xs0000000001", "generic"],
    security: "DEMO 4.250% 15-Mar-2031",
    type: "Generic bond",
    price: "102.35",
    bidOffer: "102.20 / 102.50",
    currency: "USD",
    settlement: "T+1",
  },
  {
    query: ["infra note", "xs0000000002", "euroclear"],
    security: "DEMO INFRA 3.875% 01-Sep-2029",
    type: "Generic bond",
    price: "99.80",
    bidOffer: "99.65 / 99.95",
    currency: "EUR",
    settlement: "T+2",
  },
  {
    query: ["fund unit", "lu0000000003", "allfunds"],
    security: "DEMO FUND — Institutional share class",
    type: "Fund interest (illustrative)",
    price: "124.10",
    bidOffer: "NAV",
    currency: "USD",
    settlement: "T+3",
  },
];

export type DemoSettlement = {
  query: string[];
  security: string;
  eligibility: string;
  depository: string;
  route: string;
  qualified: string;
};

export const demoSettlements: DemoSettlement[] = [
  {
    query: ["demo bond", "xs0000000001", "generic"],
    security: "DEMO 4.250% 15-Mar-2031",
    eligibility: "Eligible — selected route only",
    depository: "Euroclear",
    route: "DVP / T+1",
    qualified: "Not eligible for every depository. Demonstration data only.",
  },
  {
    query: ["infra note", "xs0000000002"],
    security: "DEMO INFRA 3.875% 01-Sep-2029",
    eligibility: "Eligible — Euroclear; not auto-routed to Clearstream",
    depository: "Euroclear",
    route: "DVP / T+2",
    qualified: "Eligibility is security- and route-specific. Do not assume dual eligibility.",
  },
  {
    query: ["fund unit", "lu0000000003", "allfunds"],
    security: "DEMO FUND — Institutional share class",
    eligibility: "Fund infrastructure route",
    depository: "Allfunds",
    route: "Fund settlement / T+3",
    qualified: "Fund interests do not follow the same route as international bonds.",
  },
];
