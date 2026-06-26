import { assets } from "../assets";

export const caseStudies = [
  {
    slug: "stonex-galleria",
    tags: ["0-1", "B2B", "Ecommerce"],
    title: "From scattered discovery to a single source of stone expertise",
    description:
      "From chasing rare stones across scattered sources and waiting days for expert advice, to a single platform where discovery, guidance, and stone selection feel effortless and built around how architects actually work.",
    metrics: [
      { value: "100%", label: "Architect access to stones" },
      { value: "4", label: "Key workflows now unified" },
    ],
    mockup: assets.image5,
    cardImage: assets.workArchitectDesktop,
    cardImageMobile: assets.workArchitectMobile,
    projectLabel: "Stonex Galleria",
    detailTitle: "Architect\nDashboard",
    detailSubtitle:
      "A digital platform that gives architects first look at newly purveyed stones, on-demand expert pairing, personalised project collections, and the world's most comprehensive stone compendium.",
    heroImage: assets.caseStudyBannerDesktopArchitect,
    mobileHeroImage: assets.caseStudyBannerMobileArchitect,
    meta: [
      { label: "Industry", value: "Luxury Stone & Interior Design" },
      { label: "Problem Space", value: "Stone Discovery & Expert Guidance" },
      { label: "Journey", value: "Concept to MVP" },
      { label: "Platform", value: "Web" },
      { label: "Year", value: "2025" },
      { label: "Stakeholders", value: "Architects, Interior Designers" },
    ],
    impactMetrics: [
      { number: "01", bg: "#1A2F2A", title: "Newly Purveyed\nEngagement", description: "% of architects who view new arrivals monthly" },
      { number: "02", bg: "#142220", title: "Stone Sommelier\nUtilisation", description: "Number of chat/call/bookings per architect per quarter" },
      { number: "03", bg: "#101817", title: "My Collection\nAdoption", description: "% of architects who create at least 3 project collections" },
      { number: "04", bg: "#0D0D0D", title: "Compendium\nUsage", description: "Average time spent on stone profiles and educational content" },
    ],
    sections: [
      {
        title: "Project Overview",
        paragraphs: [
          "Architects need to differentiate their designs with rare, newly discovered stones — but they often learn about new arrivals too late. They need expert advice but get fragmented support. They need project tools but rely on scattered mood boards and emails.\n\nStoneX Global identified an opportunity to build a dedicated Architect Dashboard that solves four core needs:",
          "1. **Exclusive access to new arrivals** (Newly Purveyed)\n2. **On-demand expert pairing** (Stone Expert/Sommelier)\n3. **Preference-led project tools** (My Collection + Project Tools)\n4. **A trusted knowledge resource** (The Stone Compendium)\n\nThis case study covers these four pillars — **designed to support the architect's hunger for knowledge, need for speed, and desire to elevate exclusivity.**",
        ],
      },
      {
        title: "My Role",
        paragraphs: [
          "**As a product designer, led the end-to-end experience from concept to high-fidelity mockups, grounding every decision in direct architect interviews to understand how they discover stone, seek advice, and manage projects.** Worked closely with product managers and stakeholders, I defined the product's four core pillars and owned the design of the personalised collection interface, the Stone Sommelier contact flow, and the Compendium knowledge base.\n\nMy design decisions were shaped by a consistent trade-off logic — what needed to be immediately visible versus what could be one click away, where to embed real-time data versus static reference, and how to balance purveyor-curated content with user-driven actions. Each decision prioritised reducing friction for architects' core tasks — discovery, consultation, validation, and learning.",
        ],
      },
      {
        title: "Design Decisions",
        paragraphs: [
          "We structured the platform around four pillars, each driven by a clear user need and a deliberate product trade-off. Each decision prioritised **reducing an architect's cognitive load** (explicit entry points for advice), **supporting real-world workflows** (real-time availability + image overlay), and **balancing exclusivity with education** (curated feed + separate knowledge base).\n\nFour pillars of the platform:",
          "**1– Newly Purveyed**\nGive architects exclusive, curator-driven access to new arrivals. This shifts discovery from scattered, late-breaking channels to a monthly, vetted feed — elevating exclusivity and helping designers differentiate their projects.",
          "**2– Stone Sommelier**\nLower the friction to expert advice by unifying chat, call, and booking into one persistent entry point, backed by 24-hour sampling. This turns ad-hoc sales rep questions into a reliable, educational service.",
          "**3– My Collection + Project**\nMove from static, scattered saves to a preference-led, real-time collection system. By adding live availability and on-the-spot image previews, the dashboard supports the actual workflow of validating materials against project context.",
          "**4– Stone Compendium**\nBuild a standalone knowledge hub instead of cluttering the platform with educational content. Certified profiles, high-res visuals, and learning resources position StoneX as a trusted authority — earning trust without forcing architects to leave the platform.",
        ],
      },
    ],
    ndaNote:
      "What you've read here is the condensed version. The full reasoning, alternative directions, and iterative refinements go deeper than this page allows — and I'd be glad to walk through them live on a call.\n\n**Detailed deliverables (user journeys, roadmap, interactive prototype) are kept for private walkthroughs due to confidentiality.** The platform is currently in design, so any metrics shown are pre-launch targets.",
  },
  {
    slug: "architect-preferences",
    tags: ["0-1", "B2B", "Ecommerce"],
    title: "Closing the gap between what's shared and what's selected",
    description:
      "From scattered WhatsApp images to structured stone profiles, bookmatch visualization, and custom project guides — giving sales and BD a clear view of architect preferences.",
    metrics: [
      { value: "↑80%", label: "Engagement for active users" },
      { value: "↓50%", label: "Time from discovery to specification" },
    ],
    mockup: assets.image5,
    cardImage: assets.workGalleriaDesktop,
    cardImageMobile: assets.workGalleriaMobile,
    projectLabel: "Stonex Galleria",
    detailTitle: "Galleria 2.0",
    detailSubtitle:
      "How we evolved a static image bank into a tool that captures the key touchpoints of how architects select stone — profile, bookmatch, preview, and custom guide.",
    heroImage: assets.caseStudyBannerDesktopGalleria,
    mobileHeroImage: assets.caseStudyBannerMobileGalleria,
    meta: [
      { label: "Industry", value: "Luxury Stone & Interior Design" },
      { label: "Problem Space", value: "Architect Workflow & Stone Selection" },
      { label: "Journey", value: "Redesign from photo app to selection platform" },
      { label: "Platform", value: "Mobile" },
      { label: "Year", value: "2024" },
      { label: "Stakeholders", value: "Sales, BD" },
    ],
    impactMetrics: [
      { number: "01", bg: "#1A2F2A", title: "Profile views per\nshared stone", description: "Architects viewing structured profiles vs. raw images" },
      { number: "02", bg: "#142220", title: "Bookmatch\nengagement", description: "Sessions using bookmatch visualization per project" },
      { number: "03", bg: "#101817", title: "Stone guide\nadoption", description: "% of selections shared as curated guides vs. WhatsApp threads" },
      { number: "04", bg: "#0D0D0D", title: "Time to\nspecification", description: "Reduction in discovery-to-specification cycle time" },
    ],
    sections: [
      {
        title: "Project Overview",
        paragraphs: [
          "StoneX Global had an internal tool called Galleria. But it was barely more than a photo gallery. A salesperson or BD would find a stone image and share it via WhatsApp or email — no context, no structure, no understanding of what the architect actually needed.\n\n**The core problem:** The team did not understand the architect's intent. They just shared images randomly.",
          "This case study is about evolving Galleria from a photo app into an application that covers the key touchpoints of an architect's stone selection process. We identified four major touchpoints and the goal was not to track or unify journeys, but simply to understand how architects operate and give teams the right tools to match that workflow.",
        ],
      },
      {
        title: "My Role",
        paragraphs: [
          "**As a product designer, led the redesign of Galleria, shifting its intent from image sharing to architect-centric selection.** My role included:\nResearching how architects actually select stone\nIdentifying the four key touchpoints\nDesigning the stone profile, bookmatch viewer, 2D preview, and custom stone guide\n\n**Key decision I owned:**\nRemove the old \"share image\" as the primary action. Replace with a structured flow: view stone profile → see bookmatch → preview in 2D → build custom guide.",
        ],
      },
      {
        title: "The Problem",
        paragraphs: [
          "**Business problem**\nThe company had no insight into architect behavior. They were sharing images blindly, not knowing what the architect valued — bookmatch? finish? size? color?",
          "**User pain (Sales & BD)**\n\"We share 10 stone images. The architect picks 1. We don't know why.\"\n\"Bookmatch is the most important thing for luxury projects, but our photos don't show it properly.\"\n\"We have no way to present a curated, custom selection to an architect — just a messy WhatsApp thread.\"",
          "**The core issue:** The app did not reflect the architect's actual selection process.",
        ],
      },
      {
        title: "Approach",
        paragraphs: [
          "We started by studying how architects operate — not by tracking journeys, but by interviewing architects and observing their selection behavior. What we learned:",
          "→ Architects first want to **understand the stone** — its origin, properties, variations. (Stone profile)\n→ Then they want to see **bookmatch** — how slabs align. This is the most critical property for luxury. (Bookmatch)\n→ Then they want a **2D preview** — how the stone looks as a surface, not just a slab. (Stone preview)\n→ Finally, they want a **custom selection** — a curated set of options for their specific project. (Stone guide)",
        ],
      },
    ],
    touchpoints: [
      {
        number: "Touchpoint 1",
        title: "Stone Profile (knowledge sharing)",
        image: assets.galleriaTouchpoint1,
        imageClass: "absolute left-0 w-full max-w-none h-[161%] top-[-30%]",
        description:
          "A structured stone profile page containing stone name, type, origin, technical specs, color variations, typical applications, and care notes.\n\n**Why:** Architects need to understand the stone before selecting it. This replaces \"what is this?\" with instant knowledge.",
      },
      {
        number: "Touchpoint 2",
        title: "Bookmatch (key property)",
        image: assets.galleriaTouchpoint2,
        imageClass: "absolute inset-0 w-full h-full object-cover",
        description:
          "A dedicated bookmatch viewer showing how slabs align and mirror — the most critical property for luxury projects.\n\n**Why:** Replaces flat photos that fail to communicate how stone will read on a wall or floor.",
      },
      {
        number: "Touchpoint 3",
        title: "Stone Preview (2D visualization)",
        image: assets.galleriaTouchpoint3,
        imageClass: "absolute inset-0 w-full h-full object-cover",
        description:
          "A 2D surface preview showing how the stone reads as a finished surface, not just a raw slab.\n\n**Why:** Helps architects validate material against their project context before committing.",
      },
      {
        number: "Touchpoint 4",
        title: "Stone Guide (custom selection)",
        image: assets.galleriaTouchpoint4,
        imageClass: "absolute left-0 w-full max-w-none h-[155%] top-[-27%]",
        description:
          "Build a custom stone guide for a specific architect or project. Select 3–7 stones, add notes per stone, and generate a shareable link or PDF.\n\n**Why:** Architects don't want random images. They want a curated, relevant selection.",
      },
    ],
    ndaNote:
      "What you've read here is the condensed version. The full reasoning, alternative directions, and iterative refinements go deeper than this page allows — and I'd be glad to walk through them live on a call.\n\n**Detailed deliverables (user journeys, roadmap, interactive prototype) are kept for private walkthroughs due to confidentiality.**",
  },
  {
    slug: "client-journey",
    tags: ["0-1", "B2B", "Ecommerce"],
    title: "From fragmented handoffs to a single client-visible journey",
    description:
      "We gave BD and Sales full visibility into every action — invitations, architect preferences, stone selection, brochures, and follow-up — so no client context ever gets lost.",
    metrics: [
      { value: "100%", label: "Visibility into every client action" },
      { value: "7", label: "Hidden handoffs eliminated" },
    ],
    mockup: assets.image6,
    cardImage: assets.workDesignDistrictDesktop,
    cardImageMobile: assets.workDesignDistrictMobile,
    projectLabel: null,
    detailTitle: "Design District",
    detailSubtitle:
      "A case study of giving BD and Sales full visibility into every action — invites, preferences, timeline — so neither ever asks \"what happened?\"",
    heroImage: assets.caseStudyBannerDesktopDesignDistrict,
    mobileHeroImage: assets.caseStudyBannerMobileDesignDistrict,
    meta: [
      { label: "Industry", value: "Luxury Retail & Experiential Space" },
      { label: "Problem Space", value: "BD-Sales Workflow Fragmentation" },
      { label: "Journey", value: "Discovery to MVP" },
      { label: "Platform", value: "iPad" },
      { label: "Year", value: "2026" },
      { label: "Stakeholders", value: "Sales, BD" },
    ],
    impactMetrics: [
      { number: "01", bg: "#1A2F2A", title: "Invitation conversion rate", description: "% of invites that result in a visit (source-tagged)" },
      { number: "02", bg: "#142220", title: "Engagement", description: "% of client journeys fully tracked from invite to follow-up" },
      { number: "03", bg: "#101817", title: "TAT (Turnaround Time)", description: "Defined for each journey step, measurable post-launch" },
    ],
    sections: [
      {
        title: "Project Overview",
        paragraphs: [
          "StoneX Global built Design District — a physical experience centre for ultra-high-net-worth individuals, architects, and interior designers. The experience is invite-only. A typical client journey involves:\n**Business Development (BD):** Builds relationships with architects, sends invitations, learns client preferences.\n**Sales:** Greets the client, guides stone selection, closes deals, handles follow-up.\n\nBefore the app, these two roles worked with separate tools (email, WhatsApp, spreadsheets). BD had no way to track invitation performance. Sales had no access to BD's conversations or promises. The client's journey existed as disconnected fragments — nowhere could anyone see the full picture.",
        ],
      },
      {
        title: "My Role",
        paragraphs: [
          "**As a product designer I led the end-to-end design of the Design District internal app, focusing specifically on the BD-Sales workflow.** My responsibilities included:\nInterviewing BD and Sales stakeholders to document current handoff gaps.\nFacilitating a BPMN (Business Process Model and Notation) exercise to expose hidden information breaks.\nDesigning the **source-tagged invitation system**, **architect preference profiles**, and the **complete action timeline**.\nDefining a shared knowledge area where both roles can record and access client-specific notes and promises.\n\n**Key decision I owned:**\n**Source tagging** — every invitation carries a source ID (e.g., \"Architect referral – Rajiv Mehta\"). This allows BD to measure which sources produce visits.\n**Preference visibility** — BD's notes about architect tastes are automatically shown to Sales before the client arrives. No extra step.\n**Timeline as the single digital thread** — every client event (invite sent, arrival, selection, brochure, follow-up) appears in chronological order for both roles.",
        ],
      },
      {
        title: "The Problem",
        paragraphs: [
          "**Business problem**\nStoneX had no central record of the invite-only client journey. Information lived in silos. BD and Sales often worked from different facts, leading to repeated questions and missed opportunities.",
          "**User pain (from stakeholder interviews)**\n**BD:** \"I have no way to track which invitations turned into visits. I also cannot remember every architect's preference — there is no central profile.\"\n**Sales:** \"I never know what BD promised the client. I waste the first 10 minutes of every visit catching up on basic facts that BD already learned.\"\n**Both:** \"We have no shared timeline. I have to call or message the other person for every status update.\"",
          "**The core issue:** No single journey digital thread existed. Information breaks between BD and Sales caused lost context and inefficiency.",
        ],
      },
      {
        title: "Approach",
        paragraphs: [
          "We started with a **BPMN (Business Process Model and Notation)** exercise — mapping every step of the client journey from BD's first invitation to Sales' final follow-up.",
          "We uncovered **hidden information breaks** — moments where data was supposed to pass from BD to Sales (or vice versa) but didn't, because no system existed.",
          "**Design principle:** Every piece of information that either role needs should live in one chronological record, accessible to both without asking.",
        ],
      },
    ],
    productDecisions: [
      {
        number: "01",
        title: "Source-tagged invitations (for BD)",
        description:
          "**Before:** BD sent invites via email or WhatsApp with no tracking.\n**After:** Every invitation is created in the app with a source tag (e.g., \"Architect referral — Rajiv Mehta,\" \"Design week event,\" \"Direct outreach\"). BD can track each invite's lifecycle: Sent → Opened → Accepted → Visit scheduled → Visit completed → Follow-up needed. Dashboard shows conversion rates by source, helping BD focus on effective channels.\n\n**Why:** Source tagging turns BD's activity into measurable data — and adds it to the digital thread.",
      },
      {
        number: "02",
        title: "Shared architect preference profiles",
        description:
          "**Before:** BD kept preference notes in personal files; Sales never saw them.\n**After:** BD creates an architect preference profile for each client. This profile is automatically visible to Sales before the client arrives. During the visit, Sales can enrich the profile for future visits.\n\n**Why:** Preferences become a shared asset, not a private note — visible to both roles in the single journey thread.",
      },
      {
        number: "03",
        title: "Complete action timeline",
        description:
          "**Before:** No single timeline existed.\n**After:** Every client action is logged in chronological order — invite sent, arrival, selection, brochure, follow-up. Both BD and Sales see the exact same timeline.\n\n**Why:** The timeline is the single journey digital thread — eliminating \"what happened?\" questions.",
      },
    ],
    hiddenBreaks: {
      title: "The 7 hidden information breaks → 7 features in the digital thread",
      breaks: [
        { break: "Invite sent → Sales unaware", feature: "Sales calendar auto-populates with client name and source" },
        { break: "BD learns architect preference → Sales unaware", feature: "Preference profile visible to Sales pre-visit" },
        { break: "BD makes a promise → Sales unaware", feature: "\"Promises\" field in shared knowledge area" },
        { break: "Client arrives → BD unaware", feature: "QR check-in triggers notification to BD" },
        { break: "Sales makes selection → BD unaware", feature: "Selection added to architect preference profile automatically" },
        { break: "Brochure created → no follow-up trigger", feature: "Brochure auto-saved to timeline; BD sees task for follow-up" },
        { break: "Follow-up needed → no ownership", feature: "Sales flags follow-up; BD sees task with context" },
      ],
    },
    ndaNote:
      "What you've read here is the condensed version. The full reasoning, alternative directions, and iterative refinements go deeper than this page allows — and I'd be glad to walk through them live on a call.\n\n**Detailed deliverables (user journeys, roadmap, interactive prototype) are kept for private walkthroughs due to confidentiality.**",
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAdjacentCaseStudies(slug) {
  const index = caseStudies.findIndex((study) => study.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? caseStudies[index - 1] : null,
    next: index < caseStudies.length - 1 ? caseStudies[index + 1] : null,
  };
}
