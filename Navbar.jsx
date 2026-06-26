import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Work",            href: "/work" },
  { label: "About",           href: "/about" },
  { label: "Creative corner", href: "/creative-corner" },
  { label: "Resume",          href: "https://drive.google.com/drive/folders/1DHbsNQfd6ftpikyBaC4JPM9M-kCpCFEx", external: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [navFillProgress, setNavFillProgress] = useState({
    home: 0.1,
    work: 0.1,
    about: 0.1,
    creative: 0.1,
  });
  const scrollRafRef = useRef(null);
  const lastFillRef = useRef({
    home: 0.1,
    work: 0.1,
    about: 0.1,
    creative: 0.1,
  });
  const { pathname } = useLocation();

  const isLogoHighlighted = pathname === "/" && activeSection === "home";

  useEffect(() => {
    if (pathname === "/about") setActiveSection("about");
    else if (pathname === "/creative-corner") setActiveSection("creative");
    else if (pathname === "/work" || pathname.startsWith("/work/")) setActiveSection("home");
    else setActiveSection("home");
  }, [pathname]);

  /** Incremental underline fill (same math as About / Creative) for home logo, Work page, About, Creative */
  useEffect(() => {
    const keyByPath = {
      "/": "home",
      "/work": "work",
      "/about": "about",
      "/creative-corner": "creative",
    };
    const key = pathname.startsWith("/work/") ? "work" : keyByPath[pathname];
    if (!key) return;

    const updateFill = () => {
      scrollRafRef.current = null;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      const fill = 0.1 + progress * 0.9;

      if (Math.abs(fill - lastFillRef.current[key]) < 0.003) return;
      lastFillRef.current[key] = fill;

      setNavFillProgress((prev) => ({ ...prev, [key]: fill }));
    };

    const handleScroll = () => {
      if (scrollRafRef.current !== null) return;
      scrollRafRef.current = window.requestAnimationFrame(updateFill);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateFill();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollRafRef.current !== null) {
        window.cancelAnimationFrame(scrollRafRef.current);
        scrollRafRef.current = null;
      }
    };
  }, [pathname]);

  function isNavActive(label) {
    if (label === "Work") {
      return pathname === "/work" || pathname.startsWith("/work/") || pathname === "/work";
    }
    if (label === "About") return activeSection === "about";
    if (label === "Creative corner") return activeSection === "creative";
    return false;
  }

  function getNavFill(label) {
    if (label === "Work") {
      return pathname === "/work" || pathname.startsWith("/work/") ? navFillProgress.work : 0;
    }
    if (label === "About") {
      if (pathname === "/about") return navFillProgress.about;
      return activeSection === "about" ? 1 : 0;
    }
    if (label === "Creative corner") {
      if (pathname === "/creative-corner") return navFillProgress.creative;
      return activeSection === "creative" ? 1 : 0;
    }
    return 0;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm">

      {/* ── Desktop ───────────────────────────────────────────────── */}
      <div className="hidden md:block">

        {/* Row 1 — Logo + Nav links (40px side inset, tighter top per Figma 1920 frame) */}
        <div className="w-full px-6 md:px-10">
        <div className="grid gap-x-4 pt-8 md:pt-10" style={{ gridTemplateColumns: "39.1fr 15.25fr 15.25fr 15.25fr 15.25fr" }}>

          {/* Logo */}
          <div className="pb-5 md:pb-6">
            <Link
              to="/"
              className={`font-cabinet text-[22px] font-medium tracking-tight leading-none transition-colors duration-200 whitespace-nowrap ${
                isLogoHighlighted ? "text-white" : "text-white/50 hover:text-white"
              }`}
            >
              Nandinee Varshney
            </Link>
          </div>

          {/* Nav links */}
          {navLinks.map(({ label, href, external }) => {
            const active = isNavActive(label);
            const cls = `font-dm text-[15px] font-light leading-none transition-colors duration-200 whitespace-nowrap ${
              active ? "text-white" : "text-white/50 hover:text-white"
            }`;
            return (
              <div key={label} className="pb-5 md:pb-6">
                {external ? (
                  <a href={href} target="_blank" rel="noreferrer" className={cls}>{label}</a>
                ) : href.startsWith("/#") ? (
                  <a href={href} className={cls}>{label}</a>
                ) : (
                  <Link to={href} className={cls}>{label}</Link>
                )}
              </div>
            );
          })}

          {/* Logo underline — scroll-driven fill on homepage (same pattern as About / Creative nav) */}
          <div>
            <div className="h-px w-[84%] bg-white/20">
              <div
                key={pathname === "/" ? "logo-fill-home" : "logo-fill-other"}
                className="h-px bg-white origin-left will-change-transform transition-transform duration-100 ease-linear"
                style={{
                  transform: `scaleX(${pathname === "/" ? navFillProgress.home : 0})`,
                }}
              />
            </div>
          </div>

          {/* Nav underlines — same 4 columns */}
          {navLinks.map(({ label }) => {
            const fill = getNavFill(label);
            return (
              <div key={`${label}-line`}>
                <div className="h-px bg-white/20">
                  <div
                    className="h-px bg-white origin-left will-change-transform transition-transform duration-100 ease-linear"
                    style={{ transform: `scaleX(${fill})` }}
                  />
                </div>
              </div>
            );
          })}

        </div>
        </div>

      </div>

      {/* ── Mobile ───────────────────────────────────────────────── */}
      <div className="md:hidden flex items-center px-6 md:px-10 py-4">
        <Link
          to="/"
          className="font-cabinet text-xl font-medium text-white tracking-tight hover:text-white/80 transition-colors whitespace-nowrap"
        >
          Nandinee Varshney
        </Link>

        <button
          className="ml-auto flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-6">
          {navLinks.map(({ label, href, external }) =>
            external ? (
              <a key={label} href={href}
                className="font-dm text-base text-white/70 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ) : href.startsWith("/#") ? (
              <a key={label} href={href}
                className="font-dm text-base text-white/70 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ) : (
              <Link key={label} to={href}
                className={`font-dm text-base transition-colors ${
                  (label === "Work" && (pathname === "/work" || pathname.startsWith("/work/"))) ||
                  (label === "About" && pathname === "/about") ||
                  (label === "Creative corner" && pathname === "/creative-corner")
                    ? "text-white" : "text-white/70 hover:text-white"
                }`}
                onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            )
          )}
        </div>
      )}

    </nav>
  );
}