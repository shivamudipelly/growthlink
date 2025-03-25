import React from 'react';

import './App.css'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

import Contact from './components/Contact';
import Footer from './components/Footer'
import Portfolio from './components/Portfolio';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
