import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

// Content
import Home from './contents/Home'
import About from './contents/About'
import Education from './contents/Education'
import Skills from './contents/Skills'
import Contact from './contents/Contact'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
          </Routes>
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
          </Routes>
          <Routes>
            <Route exact path="/education" element={<Education />}>
            </Route>
          </Routes>
          <Routes>
            <Route exact path="/skills" element={<Skills />}>
            </Route>
          </Routes>
          <Routes>
            <Route exact path="/contact" element={<Contact />}>
            </Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
