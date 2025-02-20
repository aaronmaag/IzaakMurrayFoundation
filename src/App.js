import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Vision from "./pages/Vision";
import Organization from "./pages/Organization";
import Sponsorship from "./pages/Sponsorship";
import Testimonials from "./pages/Testimonials";
import Donation from "./pages/Donation";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
