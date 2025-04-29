import React from 'react';
import './App.css';
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

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <AboutUs />
      <Services />
      <Gallery />
      <News />
      <Contact />
      <Projects />
      <Login />
      <SignUp />
      {/* You'll likely want to add a Footer component later */}
    </div>
  );
}

export default App;