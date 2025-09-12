import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home.jsx'
import Layout from './Layout.jsx'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Guidance from './pages/Guidance.jsx'
import Publication from './pages/Publication.jsx'
import Manuscript from './pages/Manuscript.jsx'
import ScrollToTop from './components/ScrollToTop.jsx';
import Policy from './pages/Policy.jsx'
function App() {

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/research-guidance" element={<Guidance />} />
          <Route path="/services/research-publication" element={<Publication />} />
          <Route path="/services/manuscript-editing" element={<Manuscript />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
