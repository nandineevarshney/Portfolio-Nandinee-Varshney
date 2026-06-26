import { useEffect, useRef, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkCard from "./WorkCard";
import { caseStudies } from "./data/caseStudies";

// ─── Stacking card constants (desktop only) ──────────────────────────────────
const STICKY_TOP = 131;    // px — matches sticky top offset below navbar
const PEEK_HEIGHT = 0;     // 0 = cards fully overlap (each new card fully covers the last)
const CARD_HEIGHT = 720;   // px height of each card
const SCROLL_PER_CARD = 850;  // px of scroll per card transition (lower = less scrolling)
const LAST_CARD_DWELL = 200;  // px of extra scroll after the last card fully stacks

export default function WorkSection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const rafRef = useRef(null);
  const total = caseStudies.length;

  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches
  );

  const handleViewProject = useCallback((slug) => navigate(`/work/${slug}`), [navigate]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Scroll-driven stacking — desktop only
  useEffect(() => {
    if (!isDesktop) return;
    const section = sectionRef.current;
    if (!section) return;

    const updateCards = () => {
      rafRef.current = null;
      const rect = sectionRef.current.getBoundingClientRect();
      // Measure scroll from when sticky engages (section top hits STICKY_TOP)
      const scrolled = Math.max(0, STICKY_TOP - rect.top);
      const progress = Math.min(total, scrolled / SCROLL_PER_CARD);
      const currentIndex = Math.min(Math.floor(progress), total - 1);
      const t = Math.min(1, progress - currentIndex);

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        let translateY, zIndex;

        if (i < currentIndex) {
          translateY = i * PEEK_HEIGHT;
          zIndex = 10 + i;
        } else if (i === currentIndex) {
          translateY = currentIndex * PEEK_HEIGHT;
          zIndex = 100 + i;
        } else if (i === currentIndex + 1) {
          const targetY = i * PEEK_HEIGHT;
          const startY = CARD_HEIGHT + currentIndex * PEEK_HEIGHT;
          translateY = startY - t * (startY - targetY);
          zIndex = 150 + i;
        } else {
          translateY = CARD_HEIGHT + currentIndex * PEEK_HEIGHT;
          zIndex = 5 + i;
        }

        // Last card: snap fully overlapped once its transition completes
        if (i === total - 1 && progress >= total - 1) {
          translateY = (total - 1) * PEEK_HEIGHT;
          zIndex = 200;
        }

        el.style.transform = `translateY(${translateY}px)`;
        el.style.zIndex = String(zIndex);
      });
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(updateCards);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateCards();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [total, isDesktop]);

  // ── Mobile: plain edge-to-edge vertical list (same card as the work page) ──
  if (!isDesktop) {
    return (
      <section id="work" className="pt-16 relative z-10">
        <h2 className="font-cabinet text-2xl font-medium text-white/80 mb-8 max-w-page mx-auto px-4">
          Work
        </h2>
        <div className="flex flex-col gap-6">
          {caseStudies.map((study) => (
            <WorkCard key={study.slug} study={study} onViewProject={handleViewProject} />
          ))}
        </div>
      </section>
    );
  }

  // ── Desktop: scroll-driven stacking ──
  // Extra scroll segment on the last card so transition 2→3 fully completes + dwells
  const containerHeight = CARD_HEIGHT + (total - 1) * PEEK_HEIGHT;
  const sectionHeight = containerHeight + (total - 1) * SCROLL_PER_CARD + LAST_CARD_DWELL;

  return (
    <section id="work" className="pt-24 relative z-10">
      <h2 className="font-cabinet text-[32px] font-medium text-white/80 mb-12 max-w-page mx-auto px-10">
        Work
      </h2>

      {/* Scroll driver */}
      <div
        ref={sectionRef}
        className="relative max-w-page mx-auto px-10"
        style={{ height: `${sectionHeight}px` }}
      >
        {/* Sticky viewport — offset below navbar with breathing room */}
        <div
          className="sticky overflow-hidden border border-white/15"
          style={{ top: `${STICKY_TOP}px`, height: `${containerHeight}px` }}
        >
          {caseStudies.map((study, i) => (
            <div
              key={study.slug}
              ref={(el) => (cardRefs.current[i] = el)}
              className="absolute inset-x-0 top-0 bg-black overflow-hidden will-change-transform"
              style={{ height: `${CARD_HEIGHT}px`, zIndex: total - i }}
            >
              <WorkCard study={study} onViewProject={handleViewProject} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
