import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav className="navbar">
          <div className="navbar-brand">
            My Website
          </div>
          <div className="navbar-links">
            <Home />
            <About />
            <Services />
            <Projects />
            <Contact />
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
