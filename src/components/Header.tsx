import { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
}

const Header = ({ theme }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? `${theme === 'light' ? 'bg-white/80' : 'bg-gray-900/80'} backdrop-blur-md shadow-md` 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code className="w-8 h-8 text-indigo-500" />
          <span className="text-xl font-bold tracking-tight">Jony<span className="text-indigo-500">Reyes</span></span>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-medium text-sm tracking-wide relative ${
                activeSection === item.id 
                  ? 'text-indigo-500' 
                  : theme === 'light' ? 'text-gray-800' : 'text-gray-300'
              } hover:text-indigo-500 transition-colors`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 mt-1"></span>
              )}
            </button>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-indigo-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full ${theme === 'light' ? 'bg-white' : 'bg-gray-900'} shadow-lg transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-80 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <nav className="flex flex-col space-y-4 px-4">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-medium py-2 text-left ${
                activeSection === item.id 
                  ? 'text-indigo-500' 
                  : theme === 'light' ? 'text-gray-800' : 'text-gray-300'
              } hover:text-indigo-500 transition-colors`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;