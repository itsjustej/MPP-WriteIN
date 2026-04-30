import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Platform', path: '/platform' },
    { label: 'Economic Plan', path: '/economic-recovery' },
  ];

  return (
    <nav className="site-nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-stars">★</span>
          <span className="logo-text">Platform Party</span>
          <span className="logo-stars">★</span>
        </Link>
        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="nav-item"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}