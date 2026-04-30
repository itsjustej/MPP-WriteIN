import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './pages/Hero';
import About from './pages/About';
import Platform from './pages/Platform';
import EconomicRecovery from './pages/EconomicRecovery';
import SiteFooter from './components/SiteFooter';
import './styles/campaign.css';

function App() {
  return (
    <Router>
      <div className="campaign-site">
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/economic-recovery" element={<EconomicRecovery />} />
        </Routes>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
