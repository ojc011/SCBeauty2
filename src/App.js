import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
//Components
import Gallery from './components/gallery/Gallery';
import SideMenu from './components/sideMenu/SideMenu';
import Pricing from './components/pricing/Pricing';
import About from './components/About';
import Contact from './components/contact/Contact';
//Styles
import './index.css';

const App = () => {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href =
        'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css';

      document.head.appendChild(stylesheet);
    }
  }, []);
  return (
    <Router>
      <SideMenu />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
