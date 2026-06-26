import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { assets, beyondResumeCarousel } from "./assets";
import LazyImage from "./LazyImage";

const SLIDE_MS = 5000;

function PortraitSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <LazyImage
        src={assets.ellipse3}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-left opacity-90"
      />
      <LazyImage
        src={assets.imageRemoveBg}
        alt="Nandinee"
        className="absolute bottom-0 left-1/2 z-10 h-[95%] w-auto max-w-full -translate-x-1/2 object-contain object-bottom"
      />
    </div>
  );
}

const mobileSlides = [
  { key: "portrait", render: () => <PortraitSlide /> },
  ...beyondResumeCarousel.map((src, index) => ({
    key: `beyond-${index}`,
    render: () => (
      <LazyImage src={src} alt="" className="h-full w-full object-cover" />
    ),
  })),
];

const desktopCarouselSlides = beyondResumeCarousel.map((src, index) => ({
  key: `desktop-${index}`,
  render: () => (
    <LazyImage src={src} alt="" className="h-full w-full object-cover" />
  ),
}));

function BeyondResumeCarousel({ slides, className = "h-[340px]" }) {
  const count = slides.length;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (count <= 1) return;
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [count]);

  return (
    <div className={`relative overflow-hidden border border-white/20 bg-black ${className}`}>
      <div
        className={`flex h-full ${count > 1 ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{ transform: count > 1 ? `translateX(-${active * 100}%)` : undefined }}
      >
        {slides.map((slide) => (
          <div key={slide.key} className="h-full min-w-full w-full shrink-0">
            {slide.render()}
          </div>
        ))}
      </div>

      {count > 1 && (
        <div
          className="absolute bottom-3 left-3 right-3 z-20 h-[2px] rounded-full bg-white/25"
          aria-hidden
        >
          <div
            className="absolute top-0 h-full rounded-full bg-white transition-[left] duration-300 ease-out"
            style={{
              width: `${100 / count}%`,
              left: `${(active / count) * 100}%`,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="bg-black py-10 md:py-16">
      <div className="max-w-page mx-auto flex flex-col items-start gap-8 px-4 md:flex-row md:gap-16 md:px-10">

        {/* ── LEFT: mobile carousel / desktop mosaic ─────────────────── */}
        <div className="w-full md:w-[50%]">
          {/* Mobile — title + carousel (selfie + 3 frames) */}
          <div className="flex flex-col gap-[8px] md:hidden">
            <div className="flex shrink-0 items-center justify-center border border-white/20 bg-black/40 px-4 py-6">
              <span className="text-center font-cabinet text-[16px] font-medium leading-snug text-white/80">
                Me Beyond My Resume
              </span>
            </div>
            <BeyondResumeCarousel slides={mobileSlides} />
          </div>

          {/* Desktop — left portrait intact, right carousel with 3 frames */}
          <div className="hidden h-[480px] grid-cols-2 gap-[10px] md:grid">
            <div
              className="grid h-full min-h-0 gap-[10px]"
              style={{ gridTemplateRows: "auto 1fr" }}
            >
              <div className="flex items-center justify-center border border-white/20 bg-black/40 px-4 py-6">
                <span className="text-center font-cabinet text-[25px] font-medium leading-snug text-white/80">
                  Me Beyond My Resume
                </span>
              </div>

              <div className="relative min-h-0 overflow-hidden border border-white/20 bg-black">
                <LazyImage
                  src={assets.ellipse3}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-left opacity-90"
                />
                <LazyImage
                  src={assets.imageRemoveBg}
                  alt="Nandinee"
                  className="absolute bottom-0 left-1/2 z-10 h-[95%] w-auto max-w-full -translate-x-1/2 object-contain object-bottom"
                />
              </div>
            </div>

            <BeyondResumeCarousel slides={desktopCarouselSlides} className="h-full min-h-0" />
          </div>
        </div>

        {/* ── RIGHT: bio text ────────────────────────────────────────── */}
        <div className="flex w-full flex-col md:w-[45%] md:pt-6">
          <p className="font-dm text-[14px] font-light leading-[1.9] text-white/75 md:text-[17px]">
            My path to design started with a{" "}
            <span className="font-semibold text-white">hiding place</span>. As a kid, I used{" "}
            <span className="font-semibold text-white">creativity</span> to escape the boredom of
            the classroom,{" "}
            <span className="font-semibold text-white">sketching models</span> in the margins of my
            math homework or making bookmarks for anyone who would take them. I spent hours{" "}
            <span className="font-semibold text-white">shaping tiny clay figures</span> and learning
            the <span className="font-semibold text-white">rhythm of knitting</span> from my
            grandmother. It was a messy, colourful,{" "}
            <span className="font-semibold text-white">DIY childhood</span> inspired by the stuff I
            saw on the shows like{" "}
            <span className="font-semibold text-white">Art Attack</span> and{" "}
            <span className="font-semibold text-white">MAD</span>.
          </p>

          <p className="mt-4 font-dm text-[14px] font-light leading-[1.9] text-white/75 md:mt-6 md:text-[17px]">
            This mix of creativity and curiosity kept me busy and dreaming, leading me to pursue my
            big goal of getting into{" "}
            <span className="font-semibold text-white">NIFT</span>. That milestone flipped my world
            and opened doors to the real design adventure. Want the next part of my story? Just hit
            the button and step behind the screens.
          </p>

          <Link
            to="/about"
            className="group mt-8 inline-flex w-fit items-center gap-3 md:mt-12"
          >
            <span className="font-dm text-[14px] uppercase tracking-[0.22em] text-white transition-colors duration-200 group-hover:text-white/50 md:text-[16px]">
              See the full journey
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white transition-all duration-200 group-hover:translate-x-1 group-hover:text-white/50"
            >
              <path
                d="M2.5 12.5L12.5 2.5M12.5 2.5H5.5M12.5 2.5V9.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
