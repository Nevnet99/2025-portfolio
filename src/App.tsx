import { Blog } from "./components/Blog";
import { Projects } from "./components/Projects";
import { Hero } from "./components/Hero";
import { LenisComponent } from "./components/Lenis";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { lazy } from "react";
import { AnimatePresence } from "framer-motion";
import { AnimatedLayout } from "./components/shared/AnimatedLayout";
import { Footer } from "./components/shared/Footer";
import { Navigation } from "./components/shared/Navigation";

const ProjectPage = lazy(() => import("./components/ProjectPage"));
const BlogPost = lazy(() => import("./components/BlogPost"));
const BlogPage = lazy(() => import("./pages/BlogPage"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedLayout>
              <Hero />
              <Projects />
              <Blog />
            </AnimatedLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <AnimatedLayout>
              <BlogPage />
            </AnimatedLayout>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <AnimatedLayout>
              <ProjectPage />
            </AnimatedLayout>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <AnimatedLayout>
              <BlogPost />
            </AnimatedLayout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <LenisComponent />
      <Navigation />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
