export const home = {
  title: "EMFI: Switched On",
  hero: {
    eyebrow: "EMFI: Switched On",
    headline: "Institutional infrastructure.",
    headlineAccent: "Without the institutional layers.",
    body: "One operating relationship into the market infrastructure professional clients actually use. Technology where it helps. People where judgement matters.",
    primaryCta: "Discuss your requirements",
    secondaryCta: "Explore services",
    mockupLabel: "Interactive demonstration",
    mockupStatus: "Switched on",
  },
  chainEyebrow: "How the relationship works",
  chainTitle: "Client → EMFI → Institutional infrastructure",
  chainBody:
    "EMFI connects clients into institutional infrastructure through a single operating relationship. Euroclear is one important part of that infrastructure — not the whole proposition.",
  chainCta: "Explore our infrastructure",
  chainNodes: [
    { label: "Client", sub: "Instructions / portfolio" },
    { label: "EMFI", sub: "One operating relationship" },
  ] as const,
  chainInfra: [
    { name: "Euroclear", role: "Securities / depository" },
    { name: "Allfunds", role: "Fund infrastructure" },
    { name: "NatWest", role: "Banking / cash" },
    { name: "Santander", role: "Banking / cash" },
  ] as const,
  infraLogosEyebrow: "Institutional infrastructure",
  infraNote:
    "These are the institutional relationships and infrastructure through which EMFI operates. Descriptors are draft pending legal and operational review.",
  servicesEyebrow: "Services",
  servicesTitle: "The infrastructure behind the transaction.",
  servicesBody: "EMFI brings together research and execution, settlement and custody, and wealth and asset management to support the investment lifecycle.",
  services: [
    [
      "Research & Execution",
      "Research supports investment decisions, while execution provides access to relevant markets and securities.",
      "/services/research-execution",
    ],
    [
      "Settlement & Custody",
      "Settlement, custody and asset servicing support the investment lifecycle from trade completion through ongoing asset administration.",
      "/services/settlement-custody",
    ],
    [
      "Wealth & Asset Management",
      "We provide wealth management, asset management and institutional investment solutions for professional clients and counterparties.",
      "/services/wealth-asset-management",
    ],
  ] as const,
  servicesCta: "Explore this service",
  platformIndex: "04",
  platformEyebrow: "The EMFI Platform",
  platformHeadline: "Technology that keeps the investment process connected.",
  platformSubtitle:
    "EMFI uses technology to provide visibility across research, execution, settlement and custody, while experienced teams manage the activity that requires judgement.",
  platformAreas: [
    [
      "Market Intelligence",
      "Research and market information to support investment decisions.",
    ],
    [
      "Market Connectivity",
      "Technology that connects clients with relevant markets and securities.",
    ],
    [
      "Operational Visibility",
      "Information across the investment lifecycle, from execution through settlement and custody.",
    ],
  ] as const,
  platformCta: "See how EMFI works",
  demoEyebrow: "Switched on",
  demoTitle: "See how EMFI works.",
  demoBody:
    "Live components on this site are interactive demonstrations — not client access, and not an offer to trade.",
  demos: [
    {
      label: "Research",
      title: "Explore EMFI Research",
      href: "/services/research-execution#research-demo",
    },
    {
      label: "Market connectivity",
      title: "Security lookup",
      href: "/services/research-execution#execution-demo",
    },
    {
      label: "Infrastructure",
      title: "Settlement route",
      href: "/services/settlement-custody#settlement-demo",
    },
    {
      label: "Platform",
      title: "Explore the platform",
      href: "/services/settlement-custody#workstation-demo",
    },
  ] as const,
  whyEyebrow: "Why EMFI",
  whyTitle: "Direct. Responsive. Accountable.",
  whyBody:
    "Why an institutional client would choose EMFI rather than a conventional bank, broker, custodian or platform.",
  why: [
    ["Direct", "Fewer layers. A more direct route between client requirements and market infrastructure."],
    ["Responsive", "Technology where it helps, human judgement where it matters, flexibility when the standard route is wrong."],
    ["Accountable", "Clear ownership, regulated entities, controlled processes and independent oversight."],
  ] as const,
  whyCta: "Why EMFI",
  whyEmfi: {
    eyebrow: "Why EMFI",
    title: "Built around the way professional clients work.",
    body: "EMFI provides an independent route into institutional execution, settlement and custody infrastructure, supported by responsive service and clear operational responsibility.",
    areas: [
      [
        "Direct Access",
        "Established institutional relationships provide a direct route into relevant market infrastructure.",
      ],
      [
        "Responsive Service",
        "Clients work with experienced teams that remain close to their requirements and activity.",
      ],
      [
        "Clear Responsibility",
        "Defined entities, responsibilities and processes make the operating model easier to understand.",
      ],
    ] as const,
    cta: "Discover Why EMFI",
  },
  whoWeServe: {
    eyebrow: "Who We Serve",
    title: "Institutional by design. Accessible by choice.",
    body: "EMFI provides professional clients with access to institutional execution, settlement, custody and investment infrastructure through a regulated operating model.",
    segments: [
      [
        "Financial Institutions",
        "Use EMFI as a primary provider or as an independent execution, settlement and custody route alongside an existing global custodian.",
        "Explore Financial Institutions",
        "/contact",
      ],
      [
        "Asset Managers & Funds",
        "Access execution, settlement and custody infrastructure supported by EMFI's institutional operating team and technology.",
        "Explore Asset Managers & Funds",
        "/contact",
      ],
      [
        "Wealth Managers & DFMs",
        "Access institutional execution, settlement, custody and investment infrastructure within a professional-client framework.",
        "Explore Wealth Managers & DFMs",
        "/contact",
      ],
    ] as const,
    cta: "Explore who we serve",
    ctaHref: "/contact",
  },
  voiceEyebrow: "Testimonials",
  voiceTitle: "Trusted across the investment ecosystem.",
  quotes: [
    {
      text: "Research and execution that stay connected to the market, not to a product brochure.",
      name: "Faisal Mian",
      firm: "Seaport",
      lens: "Markets",
    },
    {
      text: "More control over the operating relationship — without being forced through a standard institutional product.",
      name: "Theodore King",
      firm: "Lapa Investment Management",
      lens: "Investment",
    },
    {
      text: "Technology and connectivity that sit inside the infrastructure, not on top of it.",
      name: "Ben Sobel",
      firm: "Trumid",
      lens: "Infrastructure / technology",
    },
  ],
  clientPerspective: {
    eyebrow: "Client Perspective",
    title: "What working with EMFI looks like in practice.",
    body: "Clients use EMFI's research, execution, technology and infrastructure to support different parts of their investment activity.",
    descriptors: {
      Seaport: "Research, market expertise and execution",
      "Lapa Investment Management": "Control, flexibility and responsiveness",
      Trumid: "Technology, connectivity and institutional infrastructure",
    } as Record<string, string>,
    cta: "View client perspectives",
    ctaHref: "/contact",
  },
  trustEyebrow: "Trust",
  trustTitle: "Authorised. Regulated. Auditable.",
  trustBody:
    "Evidence, not adjectives. Regulators, client-asset rules, independent audit and institutional infrastructure.",
  trustCta: "See the evidence",
  trustSignals: ["FCA", "DFSA", "CIMA", "CASS", "MiFID", "AIFMD"] as const,
  evidence: {
    eyebrow: "The Evidence Behind EMFI",
    title: "See how EMFI is structured and governed.",
    body: "Our legal entities, regulatory frameworks, controls and independent external scrutiny provide the evidence behind how EMFI operates.",
    areas: [
      [
        "Regulatory Frameworks",
        "Relevant regulatory permissions and oversight for EMFI entities and activities.",
      ],
      [
        "Client Asset & Safeguarding",
        "The frameworks and controls supporting the handling and protection of client assets.",
      ],
      [
        "Independent Scrutiny",
        "External audit and independent oversight provide additional evidence of EMFI's operating framework.",
      ],
    ] as const,
    cta: "Explore Trust & Regulatory Evidence",
    ctaHref: "/trust",
  },
  presenceEyebrow: "Geography",
  presenceTitle: "Cayman. London. Dubai.",
  presenceBody:
    "A genuine part of EMFI’s regulatory and corporate story. Cayman is a fund structure.",
  locations: [
    ["Cayman", "EMFI Fund", "Fund structure / Cayman-related matters. Not an EMFI office."],
    ["London", "UK operations", "UK operations and FCA-regulated entities."],
    ["Dubai", "DIFC", "EMFI Capital (DIFC) Limited — DFSA-regulated operations."],
  ] as const,
  globalPresence: {
    eyebrow: "Global Presence",
    title: "One group. Multiple regulated markets.",
    body: "EMFI operates through entities and teams across the Cayman Islands, London and Dubai, with services provided according to the relevant entity, jurisdiction and client classification.",
    locations: [
      [
        "London",
        "UK operations and relevant regulated entities supporting EMFI's institutional business.",
      ],
      [
        "Dubai",
        "EMFI Capital (DIFC) Limited is a DIFC company authorised and regulated by the Dubai Financial Services Authority.",
      ],
      [
        "Cayman Islands",
        "Enquiries relating to EMFI Fund and Cayman-related matters.",
      ],
    ] as const,
    cta: "Explore EMFI's structure",
    ctaHref: "/about",
  },
  anniversaryEyebrow: "Ten years / 2016—2026",
  anniversaryTitle: "A decade of building direct access.",
  anniversaryBadge: "EMFI 10",
  anniversaryBadgeSub: "2016—2026",
  milestones: [
    ["2016", "Establishment", "EMFI Securities incorporated. First institutional trading relationships."],
    ["2017", "Authorised", "FCA authorisation. A regulated foundation for the operating model."],
    ["2018", "Settlement & custody", "Expansion from execution into custody infrastructure."],
    ["2020", "Depository access", "Direct participation in institutional settlement infrastructure."],
    ["2022", "Technology", "Proprietary platform built around the client workflow."],
    ["2025", "DIFC", "Dubai presence. DFSA-regulated operations."],
    ["2026", "Ten years", "A decade of building direct access."],
  ] as [string, string, string][],
  timeline: [
    ["2016", "Established"],
    ["2018", "Custody"],
    ["2020", "Infrastructure"],
    ["2022", "Platform"],
    ["2025", "DIFC"],
    ["2026", "Ten years"],
  ] as const,
  decade: {
    eyebrow: "Ten years / 2016—2026",
    title: "A decade of building direct access.",
    body: "Since 2016, EMFI has expanded from institutional emerging-market execution into settlement, custody, research, technology and investment services.",
    badge: "EMFI 10",
    badgeSub: "2016—2026",
    milestones: [
      ["2016", "Establishment", "EMFI Securities incorporated."],
      [
        "2017",
        "Authorised",
        "FCA authorisation and first institutional trading relationships.",
      ],
      [
        "2018",
        "Group & Capital",
        "EMFI Group and EMFI Capital established, expanding into custody and investment services.",
      ],
      [
        "TBC",
        "Euroclear participation",
        "Direct Euroclear participation.",
      ],
      [
        "TBC",
        "Platform launch",
        "Proprietary web execution and portfolio platform launched.",
      ],
      ["2025", "EMTA", "EMFI joined EMTA."],
      ["2025", "DIFC", "Dubai regulated presence established in DIFC."],
      [
        "2026",
        "Ten years",
        "Ten-year platform refresh and next stage of institutional and selected wealth-manager expansion.",
      ],
    ] as const,
    cta: "Explore our story",
    ctaHref: "/about",
  },
  ctaTitle: "Discuss your requirements.",
  ctaBody: "Tell us where the operating model needs a more direct connection.",
  ctaButton: "Contact EMFI",
  finalCta: {
    title: "Tell us what you're looking to achieve.",
    body: "Our team can explain the relevant EMFI service, operating structure and next steps based on your requirements.",
    primaryCta: "Discuss your requirements",
    primaryHref: "/contact",
    secondaryCta: "Explore our services",
    secondaryHref: "/services",
  },
};
