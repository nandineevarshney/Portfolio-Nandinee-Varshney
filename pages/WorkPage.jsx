import { Navigate, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CaseStudyContent from "../CaseStudyContent";
import { caseStudies, getCaseStudyBySlug } from "../data/caseStudies";

export default function WorkPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  if (!slug) {
    return <Navigate to={`/work/${caseStudies[0].slug}`} replace />;
  }

  const study = getCaseStudyBySlug(slug);
  if (!study) {
    return <Navigate to={`/work/${caseStudies[0].slug}`} replace />;
  }

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-18 pb-14">
        <CaseStudyContent
          study={study}
          showBack={true}
          onNavigate={(nextSlug) => {
            window.scrollTo({ top: 0, behavior: "instant" });
            navigate(`/work/${nextSlug}`);
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
