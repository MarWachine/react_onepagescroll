import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Start from './pages/Start'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectNew from './pages/ProjectNew'
import ProjectFeatured from './pages/ProjectFeatured'
import Contact from './pages/Contact'
import NoMatch from './pages/NoMatch'

function App() {

  return (
    <div>
      <Nav />
      <hr />
      <Routes>
        <Route path="/" element={
          <>
            <Start />
            <About />
            <Projects>
              <ProjectNew />
              <ProjectFeatured />
            </Projects>
            <Contact />
          </>
        } />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
