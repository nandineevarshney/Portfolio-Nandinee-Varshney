import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CreativeCornerPage from "./pages/CreativeCornerPage";
import WorkPage from "./pages/WorkPage";
import WorkListPage from "./pages/WorkListPage";

// Scroll to top on every route change
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkListPage />} />
        <Route path="/work/:slug" element={<WorkPage />} />
        <Route path="/creative-corner" element={<CreativeCornerPage />} />
      </Routes>
    </>
  );
}
