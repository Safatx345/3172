import React from 'react';
import './App.css';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function IntroSection() {
  return (
    <section className="intro">
      <h1>Welcome to My Webpage</h1>
      <p>I design aesthetically pleasing websites</p>
      <button onClick={() => alert('Learn More!')}>Learn More</button>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 My Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default App;
