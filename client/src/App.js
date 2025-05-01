import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import videoBg from './assets/videos/background.mp4'; // Adjust path if needed
import logo from './assets/images/your-logo.png';   // Adjust path if needed
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import News from './components/News';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

function App() {
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
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/projects">Projects</Link></li>
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
                <Contact />
                <Projects />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;