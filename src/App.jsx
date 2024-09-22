import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Home from './pages/Home';
import  About from './pages/About';
import Course from './pages/Course';
import Test from './pages/Test';
import Doubts from './pages/Doubts';
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Course />} />
        <Route path="/pricing" element={<Test />} />
        <Route path="/contact" element={<Doubts />} />
      </Routes>
    </Router>
  );
}

export default App;
