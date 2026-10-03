import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Skills from '../Pages/Skills';
import Projects from '../Pages/Projects';
import ProjectDetail from '../Pages/ProjectDetail';
import Experience from '../Pages/Experience';
import Contact from '../Pages/Contact';
import NotFound from '../Pages/NotFound';

const Body = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default Body;
