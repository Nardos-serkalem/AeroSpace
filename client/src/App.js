import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import News from './components/News';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer'; // Import the Footer

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
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
        <Footer /> {/* Include the Footer */}
      </div>
    </Router>
  );
}

export default App;