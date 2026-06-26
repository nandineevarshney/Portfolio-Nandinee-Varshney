import { useRef, useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LazyImage from "../LazyImage";
import { assets, aboutCarousel } from "../assets";

// ─── Static data ───────────────────────────────────────────────────────────

const marqueeItems = [
  "Loves Art and Craft",
  "✦",
  "Enjoys watching anime",
  "✦",
  "Bachelor's of design from NIFT",
  "✦",
  "Living in Delhi",
  "✦",
  "Exploring mountains",
  "✦",
  "Doodling is my coping mechanism",
  "✦",
];

const experiences = [
  {
    period: "April 2024 – Present",
    location: "Delhi",
    company: "Stonex Global",
    companyLogo: assets.stonex,
    logoClass: "h-4 md:h-5",
    role: "Assistant Manager – UI UX Designer",
    isCurrent: true,
    side: "right",
  },
  {
    period: "Jun 2023 – Feb 2024",
    location: "Noida",
    company: "Webninjaz Technologies",
    companyLogo: assets.image17,
    logoClass: "h-7 md:h-8",
    role: "UI UX Designer",
    isCurrent: false,
    side: "left",
  },
  {
    period: "Jan 2022 – Jun 2022",
    location: "Gurugram",
    company: "Diagright",
    companyLogo: assets.imageRemoveBgAlt,
    logoClass: "h-7 md:h-8",
    role: "UI UX Design Intern",
    isCurrent: false,
    side: "right",
  },
  {
    period: "Aug 2021 – Sep 2021",
    location: "Noida",
    company: "Casa Decor",
    companyLogo: assets.image18,
    logoClass: "h-7 md:h-8",
    role: "Product Design Intern",
    isCurrent: false,
    side: "left",
  },
];

const principles = [
  {
    number: "[01]",
    tag: "[SCALE & STRUCTURE]",
    title: "Systemic Longevity",
    description:
      "Building resilient design ecosystems rather than static screens. Prioritizing scalable libraries and component structures that empower engineering teams and sustain long-term product growth.",
  },
  {
    number: "[02]",
    tag: "[THE 0.5MM DISCIPLINE]",
    title: "Intentional Precision",
    description:
      "Applying the discipline of 0.5mm drafting pens to digital grids. Every margin, typographic scale, and interaction is a deliberate, mathematical choice to ensure structural clarity.",
  },
  {
    number: "[03]",
    tag: "[STRATEGY & ALIGNMENT]",
    title: "Business-Led Clarity",
    description:
      "Beyond the pixels, the focus is on bridging the gap between messy business constraints and seamless user experiences, ensuring every design decision is a strategic move toward measurable growth.",
  },
];

// About-top carousel images (folder export from Figma)
const aboutImages = aboutCarousel;

function AboutGallery({ images }) {
  if (!images.length) return null;

  const imgClass =
    "block h-auto w-auto border border-white/20 object-contain object-bottom";

  return (
    <div className="relative z-10 w-full overflow-x-clip py-2 md:py-4">
      {/* Mobile — one image in focus, ~10% peek on sides, continuous scroll */}
      <div
        className="flex w-max animate-marquee items-end gap-3 md:hidden"
        style={{ animationDuration: "45s" }}
      >
        {[...images, ...images].map((src, i) => (
          <LazyImage
            key={`m-${i}`}
            src={src}
            alt="Nandinee's artwork"
            className={`${imgClass} max-h-[220px] max-w-[80vw]`}
            draggable={false}
          />
        ))}
      </div>

      {/* Desktop — multiple visible, continuous scroll */}
      <div
        className="hidden w-max animate-marquee items-end gap-4 md:flex"
        style={{ animationDuration: "50s" }}
      >
        {[...images, ...images].map((src, i) => (
          <LazyImage
            key={`d-${i}`}
            src={src}
            alt="Nandinee's artwork"
            className={`${imgClass} max-h-[320px] max-w-[calc((min(100vw,1920px)-5rem-4*1rem)/5)]`}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <main className="pt-20 md:pt-28">

        {/* SECTION 1 — Hero Headline */}
        <section className="max-w-page mx-auto px-6 md:px-10 pt-8 md:pt-24 pb-8 md:pb-12">
          <h1 className="font-cabinet text-[clamp(32px,8.5vw,96px)] font-medium text-white leading-[1.08] tracking-[-0.03em] text-left md:text-center">
            The 'Art Attack' kid grown up
            <br className="hidden md:block" />
            {" "}and building 0-1 products
          </h1>
        </section>

        {/* SECTION 2 — Artwork peek carousel */}
        <section className="max-w-page mx-auto px-3 md:px-10 pt-4 pb-2 md:pt-8 md:pb-4 relative">
          {/* Purple gradient glow behind the carousel (matches Figma) */}
          <div
            className="absolute inset-x-0 bottom-0 top-[-40px] pointer-events-none"
            style={{
              background:
                "radial-gradient(110% 130% at 50% 88%, rgba(86,52,221,0.45) 0%, rgba(86,52,221,0.16) 42%, transparent 72%)",
            }}
          />

          <AboutGallery images={aboutImages} />
        </section>

        {/* SECTION 4 — Pull Quote */}
        <section className="mx-auto max-w-page px-6 pt-10 pb-10 text-left md:px-10 md:pt-20 md:pb-20 md:text-center">
          <blockquote className="w-full font-dm text-[clamp(17px,4.5vw,40px)] font-light italic leading-[1.55] text-white/90 md:mx-auto md:max-w-4xl md:leading-[1.6]">
            "Whether it's a hand-drawn margin or a complex e-commerce engine,
            I believe that everything is a system."
          </blockquote>
        </section>

        {/* SECTION 5 — Story / Bio paragraph */}
        <section className="mx-auto max-w-page px-6 pb-10 text-left md:px-10 md:pb-[80px] md:text-center">
          <div className="w-full md:mx-auto md:max-w-[760px]">
            <p className="font-dm text-[14px] font-light leading-[1.8] text-white/70 md:text-[17px] md:leading-[1.85]">
              My transition from a childhood of DIY projects to professional product
              architecture began at{" "}
              <span className="font-medium text-white">NIFT</span>, where I realised
              that whether it's a stitch or a pixel,{" "}
              <span className="font-medium text-white">everything is a system</span>.
              This structural mindset was forged in the high-stakes arena of global
              design contests —{" "}
              <span className="font-medium text-white">"99 Designs"</span> — that
              forced me to iterate with precision and win over users in seconds.
            </p>
            <p className="mt-5 font-dm text-[14px] font-light leading-[1.8] text-white/80 md:mt-6 md:text-[17px] md:leading-[1.85]">
              Today, at{" "}
              <span className="font-medium text-white">Stonex Global</span>, I've
              traded the competition for complexity. I now focus on architecting
              0-to-1 products from the ground up, untangling e-commerce challenges
              to build logical, data-informed experiences that don't just look
              polished — they move the needle for business growth.
            </p>
          </div>
        </section>

        {/* SECTION 3 — Scrolling Marquee */}
        <div className="pt-4 pb-14 md:pt-5 md:pb-20 overflow-hidden bg-white/[0.04] md:bg-transparent">
          <div className="flex gap-10 md:gap-12 animate-marquee whitespace-nowrap w-max md:rounded-full md:bg-white/5 md:px-4 md:py-4 md:mx-auto">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="font-dm text-[14px] md:text-lg text-white/90 shrink-0 tracking-normal">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* SECTION 6 — Experience */}
        <ExperienceSection />

        {/* SECTION 7 — Core Design Principles */}
        <section className="max-w-page mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-16 md:pb-32">
          <h2 className="font-cabinet text-lg md:text-[28px] font-medium text-white/80 mb-10 md:mb-20">
            Core Design Principles
          </h2>

          <div
            className="-mx-6 md:mx-0 px-6 md:px-0 flex flex-col relative"
            style={{
              backgroundImage: `url('${assets.group9}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {principles.map((p, i) => (
              <PrincipleRow key={i} {...p} isLast={i === principles.length - 1} />
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

// ─── Experience Section (scroll-driven line) ──────────────────────────────

function ExperienceSection() {
  const sectionRef = useRef(null);
  /** 0–1: how far through the experience block the viewport has scrolled (smooth progress bar) */
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      const denom = viewH + rect.height;
      if (denom <= 0) return;
      // 0 when section top is at bottom of viewport; 1 when section has fully scrolled past
      const p = (viewH - rect.top) / denom;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    updateProgress();
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section className="max-w-page mx-auto px-6 md:px-10 pt-24 md:pt-44 pb-16 md:pb-36">
      <h2 className="font-cabinet text-lg md:text-[32px] font-medium text-white/80 mb-12 md:mb-28">
        Experience
      </h2>

      <div ref={sectionRef} className="relative">
        {/* Track — left rail on mobile, centred on desktop */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-white/20 pointer-events-none left-[7px] md:left-1/2 md:-translate-x-1/2" aria-hidden />
        {/* Fills from top as you scroll — continuous, no step snapping (now on mobile too) */}
        <div
          className="absolute top-0 w-[2px] bg-[#5634dd] pointer-events-none origin-top left-[7px] md:left-1/2 md:-translate-x-1/2"
          style={{ height: `${progress * 100}%` }}
          aria-hidden
        />

        <div className="flex flex-col gap-0">
          {experiences.map((exp, i) => (
            <ExperienceRow key={i} {...exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Experience Row ────────────────────────────────────────────────────────

function ExperienceRow({ period, location, company, companyLogo, logoClass, role, isCurrent, side }) {
  const isRight = side === "right";

  return (
    <>
      {/* Mobile — left rail, no node dot, no white divider lines */}
      <div className="relative py-20 pl-9 md:hidden">
        <ExperienceCard period={period} location={location} company={company} companyLogo={companyLogo} logoClass={logoClass} role={role} isCurrent={isCurrent} align="left" />
      </div>

      {/* Desktop — alternating, no node dot on the line */}
      <div className="relative hidden grid-cols-[1fr_1px_1fr] items-start py-28 md:grid md:py-36">
        <div className="pr-16 xl:pr-24">
          {!isRight && (
            <ExperienceCard period={period} location={location} company={company} companyLogo={companyLogo} logoClass={logoClass} role={role} isCurrent={isCurrent} align="right" />
          )}
        </div>
        {/* spacer — the absolute line sits here visually */}
        <div />
        <div className="pl-16 xl:pl-24">
          {isRight && (
            <ExperienceCard period={period} location={location} company={company} companyLogo={companyLogo} logoClass={logoClass} role={role} isCurrent={isCurrent} align="left" />
          )}
        </div>
      </div>
    </>
  );
}

function formatExperienceMeta(period, location) {
  const dates = period.toUpperCase().replace(/\s*–\s*/g, " — ");
  return `${dates} · ${location.toUpperCase()}`;
}

function ExperienceCard({ period, location, company, companyLogo, logoClass, role, isCurrent, align }) {
  const textAlign = align === "right" ? "text-right" : "text-left";
  const itemsAlign = align === "right" ? "items-end" : "items-start";

  return (
    <div className={`flex flex-col ${itemsAlign}`}>
      {/* Company logo */}
      <LazyImage
        src={companyLogo}
        alt={`${company} logo`}
        className={`${logoClass ?? "h-4 md:h-5"} w-auto max-w-[140px] object-contain mb-6 md:mb-10`}
      />

      {/* Meta — green status dot + dates */}
      <p className={`font-dm text-[11px] md:text-xs text-white/50 uppercase tracking-normal mb-3 md:mb-5 ${textAlign}`}>
        <span className="text-green-400 mr-1.5 text-[7px] leading-none align-middle">●</span>
        {formatExperienceMeta(period, location)}
      </p>

      {/* Company name */}
      <h3 className={`font-cabinet text-[clamp(26px,7vw,52px)] font-medium text-white leading-[1.05] mb-2 md:mb-0 ${textAlign}`}>
        {company}
      </h3>

      {/* Role */}
      <p className={`font-dm text-[15px] md:text-[20px] text-[#7B6EE8] font-normal leading-snug ${textAlign}`}>
        {role}
      </p>
    </div>
  );
}

// ─── Principle Row ─────────────────────────────────────────────────────────

function PrincipleRow({ number, tag, title, description, isLast }) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 py-10 md:py-0 md:pb-16 hover:bg-white/[0.015] transition-colors ${
        isLast ? "" : "border-b border-white/[0.06] md:border-b-0"
      }`}
    >
      <div className="flex flex-col md:pr-16">
        <span className="font-dm text-xs text-white/50 tracking-normal mb-3 md:mb-8">{number}</span>
        <h3 className="font-cabinet text-[22px] md:text-[clamp(20px,2.4vw,35px)] font-medium text-white leading-[1.15] mb-4 md:mb-0">
          {title}
        </h3>
      </div>
      <div className="flex flex-col md:pl-16">
        <span className="font-dm text-xs text-white/50 tracking-normal mb-4 md:mb-8">{tag}</span>
        <p className="font-dm text-[14px] md:text-[17px] text-white/70 leading-[1.75] md:leading-[1.8] font-light">{description}</p>
      </div>
    </div>
  );
}
