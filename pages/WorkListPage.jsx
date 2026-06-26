import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import WorkCard from "../WorkCard";
import { caseStudies } from "../data/caseStudies";

export default function WorkListPage() {
  const navigate = useNavigate();

  const handleViewProject = (slug) => {
    navigate(`/work/${slug}`);
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-24">
        <h2 className="font-cabinet text-2xl md:text-[32px] font-medium text-white/80 mb-8 md:mb-12 max-w-page mx-auto px-6 md:px-10">
          Work
        </h2>
        <div className="max-w-page mx-auto px-6 md:px-10">
          <div className="flex flex-col gap-6 md:gap-10">
            {caseStudies.map((study) => (
              <WorkCard key={study.slug} study={study} onViewProject={handleViewProject} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
