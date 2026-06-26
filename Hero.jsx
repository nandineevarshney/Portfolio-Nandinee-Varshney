import { useEffect, useRef, useState } from "react";
import { assets } from "./assets";
import LazyImage from "./LazyImage";

// Hero "life beyond design" photos (folder export from Figma)
const heroPhotoMods = import.meta.glob("./assets/heroPhotos/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});
const heroPhotos = Object.keys(heroPhotoMods)
  .sort()
  .map((k) => heroPhotoMods[k]);

// Tool icons (dark-boxed exports from Figma) with hover labels, in display order
const toolMods = import.meta.glob("./assets/toolsIcons/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});
const toolUrl = (file) => toolMods[`./assets/toolsIcons/${file}`];
const TOOLS = [
  { file: "Frame 26.png", label: "Figma" },
  { file: "Frame 27.png", label: "Illustrator" },
  { file: "Frame 28.png", label: "Photoshop" },
  { file: "Frame 1430107623.png", label: "InDesign" },
  { file: "Frame 38.png", label: "Adobe XD" },
  { file: "Frame 34.png", label: "Framer" },
  { file: "Frame 35.png", label: "Notion" },
  { file: "Frame 36.png", label: "MS Office" },
  { file: "Frame 37.png", label: "Miro" },
  { file: "Frame 1430107621.png", label: "ChatGPT" },
  { file: "Frame 1430107622.png", label: "Claude" },
  { file: "Frame 1430107620.png", label: "Gemini" },
].filter((t) => toolUrl(t.file));

// Card 1 — photo carousel: each photo dwells ~3s, then slides left over 0.5s. Loops seamlessly.
function PhotoCarousel() {
  const n = heroPhotos.length;
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((i) => i + 1), 3000);
    return () => window.clearInterval(timer);
  }, []);

  // When we reach the appended clone of the first photo, snap back to 0 with no transition
  useEffect(() => {
    if (index === n) {
      const t = window.setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 500); // match transition duration
      return () => window.clearTimeout(t);
    }
    if (!animate) {
      const raf = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [index, animate, n]);

  return (
    <div className="border border-white/10 bg-black relative min-h-[300px] md:min-h-[300px] lg:min-h-[400px] h-full overflow-hidden flex flex-col p-3">
      <div className="overflow-hidden flex-1 min-h-0">
        <div
          className={`flex h-full ${animate ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {[...heroPhotos, heroPhotos[0]].map((src, i) => (
            <LazyImage
              key={i}
              src={src}
              alt="Nandinee — life beyond design"
              className="w-full h-full shrink-0 basis-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
            />
          ))}
        </div>
      </div>
      <p className="text-center text-white/90 font-dm text-sm pt-3 shrink-0">
        Exploring life beyond design
      </p>
    </div>
  );
}

// Card 3 — current-fav music. Tap to play (track added later), speaker toggles mute.
function MusicCard() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a || !a.src) return; // no track wired up yet
    if (a.paused) a.play().catch(() => {});
    else a.pause();
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setMuted((m) => {
      const next = !m;
      if (audioRef.current) audioRef.current.muted = next;
      return next;
    });
  };

  return (
    <div
      onClick={togglePlay}
      role="button"
      tabIndex={0}
      aria-label="Play current favourite music"
      className="border border-white/10 overflow-hidden relative min-h-[300px] md:min-h-[300px] lg:min-h-[400px] h-full cursor-pointer bg-black"
    >
      <LazyImage
        src={muted ? assets.musicMuted : assets.musicUnmuted}
        alt="Current favourite music"
        className="w-full h-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />
      {/* Transparent hit area over the baked-in speaker icon (bottom-right) */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute" : "Mute"}
        className="absolute bottom-2 right-2 w-12 h-12 md:w-14 md:h-14 rounded-md focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
      />
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} loop muted={muted} />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="bg-black min-h-screen pt-16 md:pt-20 relative pb-14 md:pb-20 overflow-hidden"
      style={{
        backgroundImage: `url(${assets.ellipse4})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left 44%",
        backgroundSize: "min(72vw, 880px) auto",
      }}
    >

      {/* ── Headline block ─────────────────────────────────────── */}
      <div className="max-w-page mx-auto px-4 md:px-10 pt-6 md:pt-[95px] relative">

        {/* Line 1: "Meticulous Designer" + gradient line to right edge */}
        <div className="hidden md:flex items-end relative">
          <h1
            className="font-cabinet text-[clamp(52px,8.5vw,160px)] font-medium text-white leading-[1.05] tracking-[-0.04em] relative animate-fadeUp pb-8"
            style={{ animationFillMode: "both" }}
          >
            Meticulous Designer
            <span className="absolute left-[calc(100%-0.23em)] top-[0.815em] h-px bg-white/30" style={{ width: 'calc(100vw - 100% + 0.3em - 2.5rem)' }} />
          </h1>
        </div>

        {/* Mobile: no line */}
        <h1 className="md:hidden font-cabinet text-[clamp(52px,8.5vw,160px)] font-medium text-white leading-[1.05] tracking-[-0.04em]">
          Meticulous Designer
        </h1>

        {/* Line 2: gradient line from left edge + "Product Pioneer" */}
        <div className="hidden md:flex items-end justify-end relative">
          <h1
            className="font-cabinet text-[clamp(52px,8.5vw,160px)] font-medium text-white leading-[1.05] tracking-[-0.04em] relative animate-fadeUp"
            style={{ animationDelay: "120ms", animationFillMode: "both" }}
          >
            <span className="absolute right-[calc(100%-0.07em)] top-[0.81em] h-px bg-white/30" style={{ width: 'calc(100vw - 100% + 0.04em - 2.5rem)' }} />
            Product Pioneer
          </h1>
        </div>

        {/* Mobile: no line */}
        <h1 className="md:hidden font-cabinet text-[clamp(52px,8.5vw,160px)] font-medium text-white leading-[1.05] tracking-[-0.04em] text-right">
          Product<br />Pioneer
        </h1>

      </div>

      {/* ── Three-column info cards ─────────────────────────────── */}
      <div
        className="mt-6 md:mt-14 max-w-page mx-auto px-4 md:px-10 animate-fadeUp relative overflow-x-clip"
        style={{ animationDelay: "240ms", animationFillMode: "both" }}
      >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2.2fr_1fr] gap-4 md:gap-3 md:p-3 relative z-10">

        {/* Card 1 — Photo carousel (dwell 3s, slide 0.5s) */}
        <PhotoCarousel />

        {/* Card 2 — Stats + tools */}
        <div
          className="border border-white/10 overflow-x-hidden relative min-h-[300px] md:min-h-[300px] lg:min-h-[400px] h-full bg-[#08081c]"
          style={{
            backgroundImage: `url(${assets.frame13})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="p-5 md:px-[29px] md:py-6 lg:py-7 flex flex-col gap-6 md:gap-7 lg:gap-8 h-full justify-between">

            {/* Stats row — content-width blocks spread with centered dividers (Figma: 223/108/202 in 711, equal gaps) */}
            <div className="flex items-center">
              <div className="flex flex-col gap-2 md:gap-[17px] shrink-0">
                <span className="font-dm text-[9px] md:text-[12px] text-white/80 tracking-wider leading-tight">Currently Working As</span>
                <span className="font-dm text-[13px] md:text-[23px] text-white font-medium leading-tight">Product Designer</span>
              </div>
              <div className="flex-1 flex justify-center self-stretch min-w-[14px]">
                <div className="w-px bg-white/30 h-full" aria-hidden />
              </div>
              <div className="flex flex-col gap-2 md:gap-[17px] shrink-0">
                <span className="font-dm text-[9px] md:text-[12px] text-white/80 tracking-wider leading-tight">Experience</span>
                <span className="font-dm text-[13px] md:text-[23px] text-white font-medium leading-tight">2+ years</span>
              </div>
              <div className="flex-1 flex justify-center self-stretch min-w-[14px]">
                <div className="w-px bg-white/30 h-full" aria-hidden />
              </div>
              <div className="flex flex-col gap-2 md:gap-[17px] shrink-0">
                <span className="font-dm text-[9px] md:text-[12px] text-white/80 tracking-wider leading-tight">Based In</span>
                <span className="font-dm text-[13px] md:text-[23px] text-white font-medium leading-tight">New Delhi, India</span>
              </div>
            </div>

            {/* Connect + Resume — white divider between columns */}
            <div className="flex items-stretch">
              <div className="flex flex-col gap-3 md:gap-4 flex-none min-w-0 pr-3 md:pr-10">
                <span className="font-dm text-[10px] md:text-[12px] text-white/80 tracking-wider">Connect</span>
                <div className="flex gap-2 md:gap-4">
                  {[
                    { src: assets.behanceLogo,  label: "Behance",  href: "#" },
                    { src: assets.linkedinLogo, label: "LinkedIn", href: "#" },
                    { src: assets.mediumLogo,   label: "Medium",   href: "#" },
                    { src: assets.gmailLogo,    label: "Gmail",    href: "mailto:nandinee@example.com" },
                  ].map(({ src, label, href }) => (
                    <a key={label} href={href} aria-label={label}
                      className="border border-white/10 bg-black p-2 md:p-3 hover:border-white/50 transition-colors">
                      <LazyImage src={src} alt={label} className="w-[20px] h-[20px] md:w-[26px] md:h-[26px] object-contain" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="w-px bg-white/30 shrink-0 self-stretch" aria-hidden />
              <div className="flex flex-col gap-3 md:gap-4 flex-1 min-w-0 pl-3 md:pl-10">
                <span className="font-dm text-[10px] md:text-[12px] text-white/80 tracking-wider">Open to work</span>
                <a href="https://drive.google.com/drive/folders/1DHbsNQfd6ftpikyBaC4JPM9M-kCpCFEx" className="block w-full border border-[#5634dd] bg-black px-4 md:px-6 py-[12px] md:py-[15px] lg:py-[18px] text-white font-dm text-[12px] md:text-[16px] lg:text-[18px] uppercase tracking-widest text-center hover:bg-[#5634dd]/10 transition-colors whitespace-nowrap">
                  VIEW RESUME
                </a>
              </div>
            </div>

            {/* Tools — scrolling marquee (hover shows tool name, pauses) */}
            <div className="flex flex-col gap-2 md:gap-3 shrink-0">
              <span className="font-dm text-[10px] md:text-[12px] text-white/80 tracking-wider">Tools I use to discover and design</span>
              <div className="overflow-x-clip py-1 pb-1">
                <div className="flex gap-2 md:gap-2.5 animate-marquee whitespace-nowrap w-max" style={{ animationDuration: "30s" }}>
                  {[...TOOLS, ...TOOLS].map(({ file, label }, i) => (
                    <div key={`${label}-${i}`} className="group/tool relative shrink-0">
                      <LazyImage
                        src={toolUrl(file)}
                        alt={label}
                        className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] object-contain hover:opacity-80 transition-opacity"
                      />
                      <span className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-[11px] font-dm font-medium rounded whitespace-nowrap opacity-0 group-hover/tool:opacity-100 transition-opacity duration-150 z-30 shadow-lg">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Card 3 — Current-fav music (tap to play, speaker to mute) */}
        <MusicCard />

      </div>
      </div>

    </section>
  );
}
