import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './Landing';
import Portfolio from './Portfolio'; // Import the Portfolio component
import Contact from './ContactForm';
import AboutUs from './AboutUs';
import AdvancedBlogResourcesPage from "./advanced-blog-resources-page";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />
        {/* Portfolio Page Route */}
        <Route path="/portfolio" element={<Portfolio />} />
        {/* Portfolio Page Route */}
        <Route path="/blog" element={<AdvancedBlogResourcesPage />} />
        {/* Contact Us Page Route */}
        <Route path="/contact" element={<Contact/>} />
         {/* About Us Page Route */}
         <Route path="/about-us" element={<AboutUs/>} />
      </Routes>
    </Router>
  );
}

export default App;




