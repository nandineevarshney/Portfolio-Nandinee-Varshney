import { useRef, useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LazyImage from "../LazyImage";
import { assets, creativeCarousels, creativeArrows } from "../assets";

// ─── Creative Corner image folders (Figma exports) ───────────────────────────
const [cc1, cc2, cc3] = creativeCarousels;
const arrow = (n) => creativeArrows[n];

const SECTIONS = [
  {
    title: "Chromatic Studies",
    arrow: arrow(1),
    arrowSide: "right",
    description:
      "Capturing these natural gradients and environmental patterns allows me to bring a world-informed perspective to digital interfaces, ensuring they feel grounded and intuitive.",
    images: cc1,
  },
  {
    title: "Handmade accuracy",
    arrow: arrow(2),
    arrowSide: "left",
    description:
      "In NIFT, designing with raw materials taught me that every curve and joint is a deliberate choice governed by ergonomics and structural logic. Moving from clay, wood, and metal to digital pixels didn't change my process; it only changed the medium.",
    images: cc2,
  },
  {
    title: "Observer's Eye",
    arrow: arrow(3),
    arrowSide: "right",
    description:
      "I've always found that the companionship of animals is the ultimate counterbalance to the high-pressure world — they are the unfiltered life force of my creative process.",
    images: cc3,
  },
];

// ─── Carousel — manual swipe + single-line progress (Figma) ─────────────────
const SWIPE_THRESHOLD = 50;

function CreativeCarousel({ images, label }) {
  const n = images.length;
  const slides = n > 1 ? [images[n - 1], ...images, images[0]] : images;
  const [pos, setPos] = useState(n > 1 ? 1 : 0);
  const [animate, setAnimate] = useState(true);
  const touchStartX = useRef(null);

  const displayIndex =
    n <= 1 ? 0 : pos === 0 ? n - 1 : pos === n + 1 ? 0 : pos - 1;

  useEffect(() => {
    if (n <= 1) return;
    if (pos === 0 || pos === n + 1) {
      const t = window.setTimeout(() => {
        setAnimate(false);
        setPos(pos === 0 ? n : 1);
      }, 500);
      return () => window.clearTimeout(t);
    }
    if (!animate) {
      const raf = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [pos, animate, n]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || n <= 1) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta < -SWIPE_THRESHOLD) setPos((p) => p + 1);
    else if (delta > SWIPE_THRESHOLD) setPos((p) => p - 1);
    touchStartX.current = null;
  };

  if (!n) return null;

  return (
    <div className="flex flex-col">
      <div
        className="relative overflow-hidden border border-white/20 bg-black touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`flex ${animate ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${pos * 100}%)` }}
        >
          {slides.map((src, i) => (
            <div key={i} className="aspect-[4/5] w-full shrink-0 basis-full overflow-hidden">
              <LazyImage
                src={src}
                alt={`${label} ${i + 1}`}
                className="h-full w-full select-none object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {n > 1 && (
        <div
          className="relative mx-auto mt-5 h-[2px] w-[68%] max-w-[240px] rounded-full bg-white/25 md:mt-6 md:w-[55%] md:max-w-[200px]"
          aria-hidden
        >
          <div
            className="absolute top-0 h-full rounded-full bg-white transition-[left] duration-300 ease-out"
            style={{
              width: `${100 / n}%`,
              left: `${(displayIndex / n) * 100}%`,
            }}
          />
        </div>
      )}
    </div>
  );
}

function CreativeSection({ title, arrow, arrowSide, description, images }) {
  return (
    <section className="mb-20 last:mb-0 md:mb-28">
      <div className="mb-3 flex items-center gap-3 md:mb-4">
        {arrowSide === "left" && arrow && (
          <LazyImage src={arrow} alt="" aria-hidden className="h-8 w-auto shrink-0 md:h-10" />
        )}
        <h2 className="font-cabinet text-[26px] font-medium leading-[1.1] text-white md:text-[32px]">{title}</h2>
        {arrowSide === "right" && arrow && (
          <LazyImage src={arrow} alt="" aria-hidden className="h-8 w-auto shrink-0 md:h-10" />
        )}
      </div>
      <p className="mb-5 font-dm text-[14px] font-light leading-[1.7] text-white/70 md:mb-6 md:max-w-[520px] md:text-[16px]">
        {description}
      </p>
      <div className="md:max-w-[480px]">
        <CreativeCarousel images={images} label={title} />
      </div>
    </section>
  );
}

export default function CreativeCornerPage() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="pt-20 md:pt-28">
        {/* ── HERO HEADLINE ──────────────────────────────────────── */}
        <section className="max-w-page mx-auto px-3 md:px-10 pb-6 md:pb-12 relative pt-8 md:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-x-12 lg:gap-x-16 items-start md:items-end">
            <h1 className="font-cabinet text-[clamp(40px,10vw,120px)] font-medium text-white leading-[0.95] tracking-[-0.04em] text-left">
              The Laboratory
            </h1>
            <p className="font-dm text-[14px] md:text-[16px] text-white/70 md:pb-6 max-w-[360px] leading-[1.7] font-light text-left">
              Exploring form, texture &amp; logic beyond the pixel.
            </p>
          </div>
        </section>

        {/* ── HERO BANNER VIDEO (landscape) ──────────────────────── */}
        <section className="max-w-page mx-auto px-0 md:px-10 pb-10 md:pb-40">
          <div className="relative w-full aspect-video md:aspect-[1830/880] max-h-[min(72vh,640px)] md:max-h-[880px] overflow-hidden bg-black">
            <video
              src={assets.heroVid}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </section>

        {/* ── MOBILE: sections + swipe carousels ───────────────────── */}
        <section className="px-3 pb-16 md:hidden">
          {SECTIONS.map((s) => (
            <CreativeSection key={s.title} {...s} />
          ))}
        </section>

        {/* ── DESKTOP: full creative corner export ─────────────────── */}
        <section className="mx-auto hidden max-w-page px-6 pb-24 md:block md:px-10 md:pb-32">
          <LazyImage
            src={assets.creativeCornerHero}
            alt="Creative corner — Chromatic Studies, Handmade accuracy, and Observer's Eye"
            className="block h-auto w-full"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
