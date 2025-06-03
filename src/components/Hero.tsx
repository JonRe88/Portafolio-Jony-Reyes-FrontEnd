import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="block transform transition-transform hover:scale-105 duration-300">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-blue-700">
                Jony Reyes
              </span>
            </span>
          </h1>
          
          <h2 className="text-xl md:text-3xl font-thin mb-8 text-indigo-500 dark:text-indigo-300 ">
            <span className="inline-block typing-animation">Frontend Developer</span>
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Crafting beautiful, interactive, and high-performance web experiences
            with modern technologies and best practices.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={scrollToAbout}
              className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Explore My Work
            </button>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full border-2 border-indigo-500 hover:border-indigo-600 font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg dark:bg-transparent dark:text-white"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout} 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce p-2"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 text-indigo-500" />
      </button>
    </section>
  );
};

export default Hero;