import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';
import './styles/animations.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme === 'light' 
      ? 'from-gray-50 to-indigo-50 text-gray-900' 
      : 'from-gray-900 to-indigo-950 text-gray-100'} transition-colors duration-400 relative overflow-hidden`}>
      {/* Background text animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="background-text line1">JONY REYES</div>
        <div className="background-text line2">FRONTEND DEVELOPER</div>
      </div>
      <CustomCursor />
      <Header theme={theme} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;