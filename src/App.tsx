import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Pricing from "@/pages/Pricing";
import ClientsPage from "@/pages/Clients";
import Contact from "@/pages/Contact";
import Footer from "@/components/Footer";
import WebDevelopment from "./pages/services/WebDevelopment";
import Marketing from "./pages/services/Marketing";
import Strategy from "./pages/services/Strategy";
import Projects from "./pages/work/Projects";
import CaseStudies from "./pages/work/CaseStudies";

const App: React.FC = () => {
  return (
    <Router>
      <div className="antialiased">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/strategy-consulting" element={<Strategy />} />
            <Route path="/services/webdevelopment" element={<WebDevelopment />} />
            <Route path="/services/marketing" element={<Marketing />} />
            <Route path="/work/projects" element={<Projects />} />
            <Route path="/work/case-studies" element={<CaseStudies />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
