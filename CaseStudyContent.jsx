import { Link } from "react-router-dom";
import { assets } from "./assets";
import { getAdjacentCaseStudies } from "./data/caseStudies";
import LazyImage from "./LazyImage";

function ArrowRight({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowLeft({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M14 8H2M7 3L2 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const BODY_TEXT_CLASS =
  "font-dm text-[15px] md:text-[18px] font-normal text-white/80 leading-[1.6]";
const BOLD_TEXT_CLASS = "font-medium text-white";

function parseInline(text) {
  const segments = text.split(/(\*\*[^*]+\*\*)/g);
  return segments.map((seg, i) => {
    if (seg.startsWith("**") && seg.endsWith("**")) {
      return (
        <span key={i} className={BOLD_TEXT_CLASS}>
          {seg.slice(2, -2)}
        </span>
      );
    }
    return seg.split("\n").flatMap((line, j, arr) =>
      j < arr.length - 1 ? [line, <br key={`${i}-${j}`} />] : [line]
    );
  });
}

/**
 * Renders Figma-style rich text: **bold** (DM Sans Medium, white), \n line breaks,
 * \n\n paragraph gaps, numbered lists, and bold-heading + body blocks.
 */
function RichText({ text, className = "" }) {
  if (!text) return null;

  const blocks = text.split(/\n\n+/);

  return (
    <div className={`${BODY_TEXT_CLASS} flex flex-col gap-[1.6em] ${className}`}>
      {blocks.map((block, blockIndex) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        const lines = trimmed.split("\n").filter((line) => line.length > 0);
        const isOrderedList = lines.length > 0 && lines.every((line) => /^\d+\.\s/.test(line));

        if (isOrderedList) {
          return (
            <ol key={blockIndex} className="list-decimal leading-[1.6] mb-0">
              {lines.map((line, lineIndex) => {
                const content = line.replace(/^\d+\.\s*/, "");
                return (
                  <li key={lineIndex} className="mb-0 ms-[27px]">
                    {parseInline(content)}
                  </li>
                );
              })}
            </ol>
          );
        }

        const boldHeadingMatch = lines[0]?.match(/^\*\*([^*]+)\*\*$/);
        if (boldHeadingMatch && lines.length > 1) {
          return (
            <div key={blockIndex} className="flex flex-col gap-[1.6em]">
              <p className={`${BOLD_TEXT_CLASS} leading-[1.6] mb-0`}>{boldHeadingMatch[1]}</p>
              <p className="leading-[1.6] mb-0">{parseInline(lines.slice(1).join("\n"))}</p>
            </div>
          );
        }

        if (boldHeadingMatch && lines.length === 1) {
          return (
            <p key={blockIndex} className={`${BOLD_TEXT_CLASS} leading-[1.6] mb-0`}>
              {boldHeadingMatch[1]}
            </p>
          );
        }

        return (
          <p key={blockIndex} className="leading-[1.6] mb-0 whitespace-pre-wrap">
            {parseInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

function MetaRow({ meta }) {
  const fullRows = [meta[0], meta[1]];
  const compactRow = meta.slice(2, 5);
  const lastRow = meta[5];

  const labelClass =
    "font-dm text-[12px] font-normal text-white/80 leading-none tracking-normal";
  const valueClass =
    "font-dm text-[20px] font-normal text-white leading-[1.25] tracking-normal";

  return (
    <div>
      {/* ── Mobile layout — purple accent bars, no white divider lines ── */}
      <div className="flex flex-col gap-y-8 md:hidden">
        {fullRows.map((item) => (
          <div key={item.label} className="flex gap-2">
            <div className="w-[2px] bg-[#5634dd] self-stretch shrink-0" />
            <div className="flex min-w-0 flex-col gap-2">
              <span className={labelClass}>{item.label}</span>
              <span className={valueClass}>{item.value}</span>
            </div>
          </div>
        ))}
        <div className="flex gap-2">
          <div className="w-[2px] shrink-0 self-stretch bg-[#5634dd]" />
          <div className="grid min-w-0 flex-1 grid-cols-[1.55fr_0.72fr_0.68fr] gap-x-3">
            {compactRow.map((item) => (
              <div key={item.label} className="flex min-w-0 flex-col gap-2">
                <span className={labelClass}>{item.label}</span>
                <span className={`${valueClass} text-[16px] leading-[1.2]`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        {lastRow && (
          <div className="flex gap-2">
            <div className="w-[2px] bg-[#5634dd] self-stretch shrink-0" />
            <div className="flex min-w-0 flex-col gap-2">
              <span className={labelClass}>{lastRow.label}</span>
              <span className={valueClass}>{lastRow.value}</span>
            </div>
          </div>
        )}
      </div>

      {/* ── Desktop layout — content-width columns, space between ── */}
      <div className="hidden md:grid md:w-full md:min-w-0 md:grid-flow-col md:auto-cols-max md:items-start md:justify-between md:py-6">
        {meta.map((item, index) => (
          <div key={item.label} className="flex items-stretch">
            {index > 0 && (
              <div
                className="mr-2 w-px shrink-0 self-stretch bg-[#5634dd] md:mr-3 lg:mr-6"
                aria-hidden
              />
            )}
            <div className="flex w-max flex-col gap-1">
              <span className={`${labelClass} whitespace-nowrap`}>{item.label}</span>
              <span className={`${valueClass} leading-snug`}>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ImpactCard({ number, title, description, bg }) {
  const mobileTitle = title.replace(/\n/g, " ");

  return (
    <div
      className="relative overflow-hidden flex flex-col justify-between min-h-[220px] md:min-h-[450px] p-8 md:p-10"
      style={{ background: bg ?? "#0D0D0D" }}
    >
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url('${assets.noiseTexture}')`,
          backgroundSize: "300px 300px",
        }}
      />

      {/* Ghost number — top-left, very low opacity */}
      <span className="relative z-10 font-dm text-[28px] md:text-[32px] font-light text-white/10 tracking-[0.64px] uppercase leading-none select-none">
        {number}
      </span>

      <div className="relative z-10 flex flex-col gap-6 md:gap-[52px]">
        <h3 className="font-cabinet text-[20px] md:text-[32px] font-medium text-white leading-[1.3] md:leading-[1.4]">
          <span className="md:hidden">{mobileTitle}</span>
          <span className="hidden md:block whitespace-pre-line">{title}</span>
        </h3>
        <p className="font-dm text-[14px] md:text-[17px] font-normal text-white/70 leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
}

/**
 * A content section — spacious two-column layout matching Figma.
 */
function ContentSection({ title, children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[34%_1fr] gap-8 md:gap-x-12 lg:gap-x-48 gap-y-6 py-10 md:py-[68px]">
      <h2 className="font-cabinet text-xl md:text-[28px] lg:text-[32px] font-medium text-white leading-[1.3]">
        {title}
      </h2>
      <div className="flex flex-col gap-[50px] max-w-[940px]">{children}</div>
    </div>
  );
}

function CaseStudyNav({ prev, next, onNavigate }) {
  return (
    <div className="border-t border-white/10 pt-10 md:pt-14 mt-8 md:mt-10">
      <div className="flex items-center justify-between">
        {prev ? (
          onNavigate ? (
            <button
              type="button"
              onClick={() => { window.scrollTo({ top: 0, behavior: "instant" }); onNavigate(prev.slug); }}
              className="inline-flex items-center gap-3 group font-dm text-sm text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Previous</span>
            </button>
          ) : (
            <Link to={`/work/${prev.slug}`} className="inline-flex items-center gap-3 group font-dm text-sm text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Previous</span>
            </Link>
          )
        ) : <span />}
        {next ? (
          onNavigate ? (
            <button
              type="button"
              onClick={() => { window.scrollTo({ top: 0, behavior: "instant" }); onNavigate(next.slug); }}
              className="inline-flex items-center gap-3 group font-dm text-sm text-white/70 hover:text-white transition-colors"
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <Link to={`/work/${next.slug}`} className="inline-flex items-center gap-3 group font-dm text-sm text-white/70 hover:text-white transition-colors">
              <span>Next</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )
        ) : <span />}
      </div>
    </div>
  );
}

export default function CaseStudyContent({ study, onBack, onNavigate, showBack = true }) {
  const { prev, next } = getAdjacentCaseStudies(study.slug);
  // Stacked on mobile; 3-up row or 4-up grid on desktop per Figma
  const impactCols =
    study.impactMetrics.length === 3
      ? "grid-cols-1 md:grid-cols-3"
      : "grid-cols-1 md:grid-cols-2 xl:grid-cols-4";

  return (
    <>
      {showBack && (
        <div className="max-w-page mx-auto px-3 md:px-10 pt-2 md:pt-4 mb-6 md:mb-14">
          {onBack ? (
            <button type="button" onClick={onBack}
              className="inline-flex items-center gap-2 font-dm text-sm text-white/50 hover:text-white transition-colors">
              <ArrowLeft className="w-3 h-3" />Back to work
            </button>
          ) : (
            <Link to="/work" className="inline-flex items-center gap-2 font-dm text-sm text-white/50 hover:text-white transition-colors">
              <ArrowLeft className="w-3 h-3" />Back to work
            </Link>
          )}
        </div>
      )}

      {/* ── Hero title + subtitle ── */}
      <section className="max-w-page mx-auto px-3 md:px-10 pt-2 md:pt-16 pb-6 md:pb-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
          <h1 className="font-cabinet text-[clamp(32px,8.5vw,88px)] font-medium text-white leading-[1.02] tracking-[-0.03em] shrink-0">
            <span className="md:hidden">{study.detailTitle.replace(/\n/g, " ")}</span>
            <span className="hidden whitespace-pre-line md:block">{study.detailTitle}</span>
          </h1>
          <p className="font-dm text-[15px] font-light text-white/80 leading-[1.55] md:max-w-[calc(100%-12rem)] md:text-[16px] lg:w-[700px] lg:max-w-[700px] lg:text-[20px] shrink-0">
            {study.detailSubtitle}
          </p>
        </div>
        <div className="mt-10 md:mt-24 lg:mt-28">
          <MetaRow meta={study.meta} />
        </div>
      </section>

      {/* ── Hero image ── */}
      {study.heroImage && (
        <section className="mb-16 md:mb-32 mx-auto px-3 md:px-10">
          <LazyImage
            src={study.mobileHeroImage ?? study.heroImage}
            alt={`${study.detailTitle} preview`}
            className="w-full h-auto object-cover object-center md:hidden"
            loading="eager"
            fetchPriority="high"
          />
          <LazyImage
            src={study.heroImage}
            alt={`${study.detailTitle} preview`}
            className="hidden md:block w-full h-auto object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
        </section>
      )}

      {/* ── Impact metrics ── */}
      <section className="max-w-page mx-auto px-3 md:px-10 mb-16 md:mb-32">
        <h2 className="font-cabinet text-xl md:text-[30px] font-medium text-white/80 mb-10 md:mb-16">
          The impact – Expected post-launch metrics
        </h2>
        <div className={`grid ${impactCols} gap-2`}>
          {study.impactMetrics.map((metric) => (
            <ImpactCard key={metric.number} {...metric} />
          ))}
        </div>
      </section>

      {/* ── Main sections (no border lines between them) ── */}
      <section className="max-w-page mx-auto px-3 md:px-10">
        <div className="border-t border-white/[0.06]">
          {study.sections.map((section) => (
            <ContentSection key={section.title} title={section.title}>
              {section.paragraphs.map((paragraph, i) => (
                <RichText key={i} text={paragraph} />
              ))}
            </ContentSection>
          ))}
        </div>

        {/* Touchpoints */}
        {study.touchpoints && (
          <div className="grid grid-cols-1 md:grid-cols-[34%_1fr] gap-8 md:gap-x-12 lg:gap-x-48 gap-y-6 py-10 md:py-[68px] border-t border-white/[0.06]">
            <h2 className="font-cabinet text-xl md:text-[28px] lg:text-[32px] font-medium text-white leading-[1.3]">Product decisions</h2>
            <div className="flex flex-col gap-16 md:gap-24 max-w-[920px]">
              <p className={`${BODY_TEXT_CLASS} leading-[1.6]`}>
                We evolved Galleria from a photo app into four deliberate touchpoints, each solving a specific gap in how architects evaluate stone.
              </p>
              {study.touchpoints.map((tp) => (
                <div key={tp.title} className="flex flex-col gap-10 md:gap-12">
                  <div className="relative overflow-hidden h-[220px] md:h-[380px] bg-[#0B0B0B]">
                    <LazyImage
                      src={tp.image}
                      alt={tp.title}
                      className={tp.imageClass ?? "absolute inset-0 w-full h-full object-cover"}
                    />
                  </div>
                  <div className="flex flex-col gap-5 md:gap-6">
                    <span className="font-dm text-xs text-white/50 uppercase tracking-wider">{tp.number}</span>
                    <h3 className="font-cabinet text-xl md:text-[30px] md:leading-[1.3] font-medium text-white">{tp.title}</h3>
                    <RichText text={tp.description} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Product decisions + hidden breaks flow together as one section */}
        {study.productDecisions && (
          <div className="grid grid-cols-1 md:grid-cols-[34%_1fr] gap-8 md:gap-x-12 lg:gap-x-48 gap-y-6 py-10 md:py-[68px] border-t border-white/[0.06]">
            <h2 className="font-cabinet text-xl md:text-[28px] lg:text-[32px] font-medium text-white leading-[1.3]">Product decisions</h2>
            <div className="flex flex-col gap-14 md:gap-20 max-w-[920px]">
              <p className={`${BODY_TEXT_CLASS} leading-[1.6]`}>
                We built an iPad app that creates a single journey digital thread for the client's invite-to-purchase journey — resting on source-tagged invitations, shared architect preference profiles, and a complete action timeline.
              </p>
              {study.productDecisions.map((decision) => (
                <div key={decision.number} className="flex flex-col gap-5 md:gap-6">
                  <span className="font-dm text-xs text-white/40 uppercase tracking-wider">{decision.number}</span>
                  <h3 className="font-cabinet text-[20px] md:text-[26px] font-medium text-white">{decision.title}</h3>
                  <RichText text={decision.description} />
                </div>
              ))}

              {/* Hidden breaks — flows inside product decisions, NOT a separate heading */}
              {study.hiddenBreaks && (
                <div className="flex flex-col gap-0 pt-8 md:pt-12">
                  {/* Title is plain paragraph text, same weight as body */}
                  <p className="font-dm text-[18px] md:text-[32px] text-white leading-[1.75] mb-6 md:mb-8">
                    {study.hiddenBreaks.title}
                  </p>

                  {/* Column headers */}
                  <div className="grid grid-cols-2 border-b border-white/[0.08] pb-2">
                    <span className="font-dm text-[18px] text-white tracking-wide">Hidden Break:</span>
                    <span className="font-dm text-[18px] text-white tracking-wide">Feature in the single journey digital thread:</span>
                  </div>

                  {/* Rows */}
                  {study.hiddenBreaks.breaks.map((row, index) => (
                    <div key={index} className="grid grid-cols-2 border-b border-white/[0.05] py-[10px]">
                      <span className="font-dm text-[15px] md:text-[18px] text-white/80 leading-[1.6] pr-6">{index + 1}. {row.break}</span>
                      <span className="font-dm text-[15px] md:text-[18px] text-white/80 leading-[1.6]">{row.feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* NDA Note */}
        <ContentSection title="NDA Note">
          <RichText text={study.ndaNote} />
          <a href="mailto:nandinee@example.com" className="inline-flex items-center gap-2 group mt-4 md:mt-6">
            <span className="font-dm text-sm text-white uppercase tracking-widest group-hover:text-white/50 transition-colors">
              Let's connect for one-on-one call
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
          </a>
        </ContentSection>

        <CaseStudyNav prev={prev} next={next} onNavigate={onNavigate} />
      </section>
    </>
  );
}
