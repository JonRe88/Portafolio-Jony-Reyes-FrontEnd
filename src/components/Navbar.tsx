import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#hero" 
            className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white transition-colors"
          >
            Jony<span className="text-indigo-600 dark:text-indigo-400">Reyes</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-4 text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4">
          <a 
            href="#hero" 
            className="nav-link" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="nav-link" 
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#projects" 
            className="nav-link" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="nav-link" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a 
            href="#contact" 
            className="nav-link" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;