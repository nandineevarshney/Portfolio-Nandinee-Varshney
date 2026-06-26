import { Fragment } from "react";
import { assets } from "./assets";
import LazyImage from "./LazyImage";

function ArrowUpRight({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Shared work case-study card — identical on the home work section and the work page.
export default function WorkCard({ study, onViewProject }) {
  return (
    <div
      onClick={() => onViewProject(study.slug)}
      className="flex flex-col md:flex-row min-h-[500px] md:h-[720px] relative bg-black w-full border border-white/10 cursor-pointer group"
    >
      <LazyImage
        src={assets.ellipse3030}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-left-bottom pointer-events-none select-none hidden md:block"
      />

      {/* Left content */}
      <div className="flex flex-col justify-start md:justify-between h-full md:w-[42%] lg:w-[40%] border-b md:border-b-0 md:border-r border-white/[0.07] relative z-10 px-6 py-10 md:pl-8 md:pr-8 md:py-12 lg:pl-10 lg:pr-10 overflow-hidden">
        <LazyImage
          src={assets.workCardGradientBgMobile}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-right-bottom origin-bottom-right scale-[1.4] pointer-events-none select-none md:hidden"
        />

        <div className="relative z-10 flex flex-col gap-12 md:gap-0 md:flex-1 md:justify-between h-full">
          <div className="flex flex-col gap-7 md:gap-10">
            <div className="flex gap-2 flex-wrap">
              {study.tags.map((tag) => (
                <span key={tag} className="bg-white/10 text-white font-dm text-xs px-3 py-1 tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-8 md:gap-6">
              <h3 className="font-cabinet text-[clamp(22px,2.4vw,36px)] font-medium text-white leading-[1.25]">
                {study.title}
              </h3>
              <p className="font-dm text-sm md:text-[15px] text-white/55 leading-relaxed font-light max-w-[480px]">
                {study.description}
              </p>
            </div>
          </div>

          {/* Metrics — equal columns, left-aligned text (Figma) */}
          <div className="flex items-stretch w-full">
            {study.metrics.map((metric, index) => (
              <Fragment key={metric.label}>
                {index > 0 && (
                  <div className="flex items-stretch shrink-0 px-5 md:px-8 self-stretch">
                    <div className="w-px bg-white/30 self-stretch" aria-hidden />
                  </div>
                )}
                <div className="flex flex-col gap-1.5 md:gap-2 flex-1 min-w-0 items-start text-left">
                  <span className="font-cabinet text-[clamp(34px,5vw,62px)] font-medium text-white leading-none">
                    {metric.value}
                  </span>
                  <span className="font-dm text-xs md:text-[13px] text-white/75 leading-snug md:whitespace-nowrap">
                    {metric.label}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onViewProject(study.slug); }}
            className="inline-flex items-center gap-2.5 group/btn w-fit"
          >
            <span className="font-dm text-[13px] md:text-[15px] text-white uppercase tracking-widest group-hover/btn:text-white/50 transition-colors">
              View full project
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform text-white" />
          </button>
        </div>
      </div>

      {/* Right image */}
      <div className="order-first md:order-none md:flex-1 overflow-hidden relative z-10 bg-black">
        <LazyImage
          src={study.cardImageMobile ?? study.cardImage ?? study.mockup}
          alt={`${study.detailTitle} showcase`}
          className="md:hidden w-full h-auto object-cover object-center"
        />
        <LazyImage
          src={study.cardImage ?? study.mockup ?? study.heroImage}
          alt={`${study.detailTitle} showcase`}
          className="hidden md:block w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
    </div>
  );
}
