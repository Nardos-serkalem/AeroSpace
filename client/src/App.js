import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import videoBg from './assets/videos/backgroundd.mp4';
import logo from './assets/images/your-logo.png';   
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import News from './components/News';
import ContactUs from './components/ContactUs';
import Projects from './components/Projects';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import DiscoverUs from './components/DiscoverUs';
import Team from './components/Team';
import Courses from './components/Courses';
import Partners from './components/Partners';

function App() {
  const [showDiscoverDropdown, setShowDiscoverDropdown] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <video src={videoBg} autoPlay loop muted className="video-background" />
        <div className="overlay"></div>
        <div className="app-content">
          <nav className="main-navigation">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Your Logo" className="logo-image" />
              </Link>
            </div>
            <ul className="desktop-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/news">News</Link></li>
              <li className="dropdown" 
                  onMouseEnter={() => setShowDiscoverDropdown(true)}
                  onMouseLeave={() => setShowDiscoverDropdown(false)}>
                <span>Discover Us</span>
                {showDiscoverDropdown && (
                  <ul className="dropdown-menu">
                    <li><Link to="/discover-us">Overview</Link></li>
                    <li><Link to="/team">Our Team</Link></li>
                  </ul>
                )}
              </li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li className="auth-links">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <AboutUs />
                <Services />
                <Gallery />
                <News />
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/discover-us" element={<DiscoverUs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/partners" element={<Partners />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;