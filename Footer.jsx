import { assets } from "./assets";
import LazyImage from "./LazyImage";

// Order per Figma: Gmail, LinkedIn, Behance, Medium
const socialLinks = [
  { src: assets.gmailLogo,    label: "Gmail",    href: "mailto:nandinee0417@gmail.com" },
  { src: assets.linkedinLogo, label: "LinkedIn", href: "https://www.linkedin.com/in/nandinee-varshney/" },
  { src: assets.behanceLogo,  label: "Behance",  href: "https://www.behance.net/nandinevarshney" },
  { src: assets.mediumLogo,   label: "Medium",   href: "https://medium.com/@nandinee.varshney2000" },
];

export default function Footer() {
  return (
    <footer className="relative pt-12 md:pt-16 pb-10 overflow-hidden" style={{ background: "linear-gradient(0deg, rgba(82, 54, 183, 0.2) 0%, rgba(82, 54, 183, 0) 100%)" }}>
      <div className="max-w-page mx-auto px-4 md:px-10">
      {/* Subtle purple gradient glow at top */}
      {/* Subtle bottom-left accent bloom */}
      {/* Two-column layout: left = headline + avatar; right = CTA + icons (same left edge) */}
      <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-10">

        {/* Left column */}
        <div className="flex flex-col gap-6 md:gap-10">
          <h2 className="font-cabinet text-[clamp(22px,6vw,42px)] font-medium text-white leading-[1.2]">
            Let's build your next big thing
          </h2>

          {/* Name + availability */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-[66px] md:h-[66px] rounded-sm overflow-hidden shrink-0 bg-[#dcdcdc]">
              <LazyImage src={assets.frame2} alt="Nandinee Varshney" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-cabinet text-base md:text-xl font-medium text-white">
                Nandinee Varshney
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse inline-block" />
                <span className="font-dm text-sm text-white/70 font-light">Available to work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — CTA button + icons share the same width (both edges aligned) */}
        <div className="flex flex-col items-stretch gap-8 md:gap-14 w-full md:w-auto md:min-w-[280px]">
          <a
            href="mailto:nandinee0417@gmail.com"
            className="w-full border border-[#5634dd] bg-black px-4 py-3.5 md:py-2 text-white font-dm text-sm md:text-base uppercase tracking-normal md:tracking-widest hover:bg-[#5634dd]/10 transition-colors text-center"
          >
            Start a conversation
          </a>

          {/* Icons spread across the exact same width as the button */}
          <div className="flex justify-between gap-2">
            {socialLinks.map(({ src, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="border border-white/20 bg-black p-3.5 hover:border-white/50 hover:bg-white/5 transition-all duration-200"
                target="_blank"
              >
                <LazyImage src={src} alt={label} className="w-[22px] h-[22px] object-contain" />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom line + copyright */}
      <div className="h-px bg-white/10 mt-10 mb-8" />
      <p className="text-center font-dm text-sm text-white/60 font-light tracking-wide">
        Designed with purpose, shaped by experience.
      </p>
      </div>
    </footer>
  );
}
