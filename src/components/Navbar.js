import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <h1>Izaak Murray Foundation</h1>
      </header>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/story">Izaak's Story</Link></li>
          <li><Link to="/vision">Vision & Mission</Link></li>
          <li><Link to="/organization">Mental Health Organization</Link></li>
          <li><Link to="/sponsorship">Sponsorship & Recognition</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/events">Event Page</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
