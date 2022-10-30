import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Routes>
        <Route path='/' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/project' element={<Project />} />
      </Routes> */}

      <About />
      <Work/>
      <Project/>
      <Skill />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
