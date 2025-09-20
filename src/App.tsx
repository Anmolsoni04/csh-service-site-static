import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import WebDevelopment from "./pages/services/WebDevelopment";
import Marketing from "./pages/services/Marketing";
import Strategy from "./pages/services/Strategy";
import TechBlogs from "./pages/services/TechBlogs"
import AiBlogs from "./pages/services/AiBlogs";
import DigitalKnowledge from "./pages/services/DigitalKnowledge";
import SmartLearning from "./pages/services/SmartLearning";
import Others from "./pages/services/Others";

import BrandDesign from "@/pages/portfolio/BrandDesign";
import ContentCreation from "@/pages/portfolio/ContentCreation";
import DigitalMarketing from "@/pages/portfolio/DigitalMarketing";
import Ecommerce from "@/pages/portfolio/Ecommerce";
import ProductDesign from "@/pages/portfolio/ProductDesign";
import WebDevPortfolio from "@/pages/portfolio/WebDevPortfolio";

import Products from "@/pages/Products";
import Pricing from "@/pages/Pricing";
import Blogs from "@/pages/Blogs";
import ClientsPage from "@/pages/Clients";
import Contact from "@/pages/Contact";
import Footer from "@/components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import UseScrollToTop from "./components/UseScrollToTop";
// import Hero from "./components/Hero";
const App: React.FC = () => {
  return (
    <Router>
      <UseScrollToTop/>
      <div className="antialiased">
        <Navbar />
        {/* <Hero /> */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio/brand-design" element= {<BrandDesign />} />
            <Route path="/portfolio/content-creation" element= {<ContentCreation />} />
            <Route path="/portfolio/dm" element= {<DigitalMarketing />} />
            <Route path="/portfolio/ecom" element= {<Ecommerce />} />
            <Route path="/portfolio/product-design" element= {<ProductDesign />} />
            <Route path="/portfolio/web-dev" element= {<WebDevPortfolio />} />
            <Route path="/services/strategy-consulting" element={<Strategy />} />
            <Route path="/services/webdevelopment" element={<WebDevelopment />} />
            <Route path="/services/marketing" element={<Marketing />} />
            <Route path="/services/techblogs" element={<TechBlogs />} />
            <Route path="/services/ai-blogs" element={<AiBlogs />} />
            <Route path="/services/digital-knowledge" element={<DigitalKnowledge />} />
            <Route path="/services/smart-learning" element={<SmartLearning />} />
            <Route path="/services/others" element={<Others />} />
            <Route path="/products" element={<Products />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
