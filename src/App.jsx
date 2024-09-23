import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import  Home from './pages/Home';
import  About from './pages/About';
import Course from './pages/Course';
import Test from './pages/Test';
import Doubts from './pages/Doubts';
import SignIn from './components/SignIn';
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/about" element={<About />} />
        <Route path="/ask-doubt" element={<Doubts />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </Router>
  );
}

export default App;
