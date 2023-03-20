import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import Gallery from './components/gallery/Gallery';
import SideMenu from './components/sideMenu/SideMenu';
import Blog from './components/pricing/Pricing';
import About from './components/about/About';
import Contact from './components/contact/Contact';
//Styles
import './core-ui/index.css';

const App: FC = () => {
  return (
    <Router>
      <SideMenu />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/pricing" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
