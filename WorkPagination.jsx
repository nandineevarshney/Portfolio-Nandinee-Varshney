import { caseStudies } from "./data/caseStudies";

export default function WorkPagination({ activeIndex, onGoTo }) {
  return (
    <div className="flex items-center gap-4 md:gap-6">
      <button
        type="button"
        onClick={() => onGoTo(activeIndex - 1)}
        aria-label="Previous case study"
        className="shrink-0 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="flex-1 flex h-px bg-white/20">
        {caseStudies.map((study, index) => (
          <button
            key={study.slug}
            type="button"
            onClick={() => onGoTo(index)}
            aria-label={`Go to ${study.detailTitle}`}
            aria-current={index === activeIndex ? "true" : undefined}
            className={`flex-1 h-full transition-colors duration-300 ${
              index === activeIndex ? "bg-[#5634dd]" : "bg-transparent hover:bg-white/10"
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => onGoTo(activeIndex + 1)}
        aria-label="Next case study"
        className="shrink-0 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path
            d="M7.5 15L12.5 10L7.5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
