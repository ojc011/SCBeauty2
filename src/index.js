import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
//Components
import Gallery from './components/gallery/Gallery';
import SideMenu from './components/sideMenu/SideMenu';
import About from './components/About';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';
//Styles
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <SideMenu />
      <Routes>
        <Route path="/scbeauty4u" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
