export const trust = {
  title: "Trust",
  eyebrow: "Trust",
  headline: "Authorised. Regulated.\nAuditable.",
  body: "Trust is an operating fact at EMFI, not a marketing claim. The evidence sits in the public registers, the applicable regimes, independent audit, and the infrastructure through which client assets move.",
  draftNotice:
    "Draft for Compliance review. Legal names, register links, logo descriptors and auditor mappings must be verified against public registers immediately before publication.",
  authorisedEyebrow: "Authorised",
  authorisedTitle: "The authorities that authorise the relevant EMFI entities.",
  authorisedBody:
    "Each regulator logo should open the official register entry for the relevant EMFI entity — not the regulator homepage.",
  regulators: [
    {
      code: "FCA",
      name: "Financial Conduct Authority",
      entity: "Relevant UK entities",
      detail:
        "EMFI Securities Limited and EMFI Capital Limited are authorised and regulated by the FCA.",
      href: "https://register.fca.org.uk/s/search?predefined=FIRM&q=EMFI",
    },
    {
      code: "DFSA",
      name: "Dubai Financial Services Authority",
      entity: "EMFI Capital (DIFC) Limited",
      detail:
        "DIFC-regulated investment services. Firm Reference F011663. Distinct legal entity — not a branch of EMFI Group.",
      href: "https://www.dfsa.ae/public-register",
    },
    {
      code: "CIMA",
      name: "Cayman Islands Monetary Authority",
      entity: "EMFI Fund",
      detail:
        "Current fund structure. Cayman is a fund jurisdiction, not an EMFI office.",
      href: "https://www.cima.ky/",
    },
  ],
  regulatedEyebrow: "Regulated",
  regulatedTitle: "The regimes that govern how work is done.",
  regulatedBody:
    "This is not a reproduction of the firm’s regulatory manual. Descriptions are high-level and subject to Compliance review.",
  regimes: [
    {
      code: "CASS",
      name: "Client Assets Sourcebook",
      prominence: true,
      body: "Governs the protection and segregation of client money and custody assets. Central to the trust proposition.",
    },
    {
      code: "MiFID",
      name: "Markets in Financial Instruments Directive",
      prominence: false,
      body: "The framework governing relevant investment services and conduct.",
    },
    {
      code: "MIFIDPRU",
      name: "Prudential sourcebook for MiFID investment firms",
      prominence: false,
      body: "The applicable UK prudential framework for the relevant investment firm.",
    },
    {
      code: "AIFMD",
      name: "Alternative Investment Fund Managers Directive",
      prominence: false,
      body: "The framework applicable to relevant alternative investment fund management activity.",
    },
  ],
  auditableEyebrow: "Auditable",
  auditableTitle: "Independent external scrutiny.",
  auditableBody:
    "EMFI is subject to independent external audit. The three firms below do not all audit the entire EMFI group. Each relationship relates to a specific entity or activity — mapping to be confirmed by Compliance before publication.",
  auditors: [
    {
      name: "Baker Tilly",
      scope: "Independent audit — specific EMFI entity / activity (draft)",
    },
    {
      name: "Buzzacott",
      scope: "Independent audit — specific EMFI entity / activity (draft)",
    },
    {
      name: "BDO",
      scope: "Independent audit — specific EMFI entity / activity (draft)",
    },
  ],
  credibilityEyebrow: "Professional credibility",
  credibilityTitle: "CISI · EMTA · Bloomberg EMF",
  credibilityItems: ["CISI", "EMTA", "Bloomberg EMF"],
  coverageEyebrow: "Independent coverage",
  coverageTitle: "External recognition, kept lightweight.",
  coverageBody:
    "A small selection of relevant media. This section is visual evidence, not an article database that requires continuous maintenance.",
  coverageItems: ["Selected press"],
  infraEyebrow: "Institutional infrastructure",
  infraTitle: "The rails underlying the EMFI relationship.",
  infraBody:
    "These are institutional relationships and infrastructure through which EMFI operates. They are not presented as a generic partner wall. Wording is draft pending legal and operational accuracy.",
  infrastructure: [
    {
      name: "Euroclear",
      role: "Securities / depository infrastructure",
    },
    {
      name: "Allfunds",
      role: "Fund infrastructure",
    },
    {
      name: "NatWest",
      role: "Banking / cash",
    },
    {
      name: "Santander",
      role: "Banking / cash",
    },
  ],
  entitiesEyebrow: "Regulated entities",
  entitiesTitle: "Entity → Jurisdiction → Regulator → Role",
  entitiesBody:
    "Clients come to EMFI for the service. The legal entity that performs each component is disclosed here. Exact wording must be checked against the current public registers.",
  entities: [
    {
      name: "EMFI Securities Limited",
      jurisdiction: "United Kingdom",
      regulator: "FCA",
      role: "Research & execution",
    },
    {
      name: "EMFI Capital Limited",
      jurisdiction: "United Kingdom",
      regulator: "FCA",
      role: "Settlement & custody / wealth & asset management / relevant regulated activities",
    },
    {
      name: "EMFI Capital (DIFC) Limited",
      jurisdiction: "DIFC",
      regulator: "DFSA",
      role: "Relevant DIFC-regulated investment services",
    },
    {
      name: "EMFI Fund",
      jurisdiction: "Cayman Islands",
      regulator: "CIMA",
      role: "Current fund structure",
    },
  ],
};
