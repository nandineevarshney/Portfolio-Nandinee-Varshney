import { assets } from "./assets";

const principles = [
  {
    number: "01",
    category: "Business Alignment",
    title: "Stakeholder-Driven Clarity",
    description: "Translating stakeholder goals into clear, actionable design requirements to ensure alignment from day one.",
    svgBackground: assets.principleCard1Bg,
  },
  {
    number: "02",
    category: "Human-Centric Design",
    title: "Designing for Real Users",
    description: "Focusing & designing solutions by identifying core user problems through research, data, and feedback.",
    svgBackground: assets.principleCard2Bg,
  },
  {
    number: "03",
    category: "Continuous Improvement",
    title: "Iteration Over Perfection",
    description: "Iterating, testing, learning, & refining designs based on real usage, stakeholder input, & measurable outcomes.",
    svgBackground: assets.principleCard3Bg,
  },
];

export default function PrinciplesSection() {
  return (
    <section id="principles" className="bg-black py-10 md:py-16">
      <div className="max-w-page mx-auto px-4 md:px-10">
      <h2 className="font-cabinet text-2xl md:text-[32px] font-medium text-white/80 mb-8">
        What Guides My Decisions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {principles.map((p, i) => (
          <PrincipleCard key={i} {...p} last={i === principles.length - 1} />
        ))}
      </div>
      </div>
    </section>
  );
}

function PrincipleCard({ number, category, title, description, svgBackground, last }) {
  return (
    <div
      className="relative overflow-hidden w-full min-h-[380px] md:min-h-[600px] flex flex-col justify-between p-1"
      style={{ background: "#08020f" }}
    >
      {svgBackground && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ 
            backgroundImage: `url('${svgBackground}')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}

      {/* Very subtle noise grain for texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url('${assets.noiseTexture}')`, backgroundSize: "400px 400px" }}
      />

      {/* Large ghost number — top-left, aligned with content px */}
      <div className="relative z-10 pt-[200px] md:pt-[280px] px-4 md:px-5">
        <span
          className="font-cabinet principle-ghost-number text-[80px] md:text-[100px] text-white/[0.1] leading-none tracking-tight select-none"
        >
          {number}
        </span>
      </div>

      {/* Content — pinned to bottom */}
      <div className="relative z-10 px-4 md:px-5 pb-4 flex flex-col gap-[18px] md:gap-[22px]">
        <span className="font-dm text-[11px] md:text-[15px] text-white uppercase tracking-wider">
          {category}
        </span>
        <h3 className="font-cabinet text-[20px] md:text-[30px] font-medium text-white leading-[1.25]">
          {title}
        </h3>
        <p className="font-dm text-[13px] md:text-[15px] text-white/70 leading-[1.6] font-light">
          {description}
        </p>
      </div>
    </div>
  );
}
