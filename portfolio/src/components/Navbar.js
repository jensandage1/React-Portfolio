import '../styles/Nav.css';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const isActiveAbout = location.pathname === '/';
    const isActivePortfolio = location.pathname === "/portfolio"
    const isActiveResume = location.pathname === "/resume"
    const isActiveContact = location.pathname === "/contact"
    return (
<div className= "nav">
    <h1>Jen Sandage</h1>
    <Link to="/">
        <h2 className={`nav-about ${isActiveAbout ? 'nav-active-button' : ''}`}>About</h2>
    </Link>
    <Link to="/portfolio">
        <h2 className={`nav-portfolio ${isActivePortfolio ? 'nav-active-button' : ''}`}>Portfolio</h2>
    </Link> 
    <Link to="/resume">
        <h2 className={`nav-resume ${isActiveResume ? 'nav-active-button' : ''}`}>Resume</h2>
    </Link>
    <Link to="/contact">
        <h2 className={`nav-contact ${isActiveContact ? 'nav-active-button' : ''}`}>Contact</h2>
    </Link>
   
</div>
    );
}
