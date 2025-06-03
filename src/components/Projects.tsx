import { useState, useEffect, useRef } from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  featured: boolean;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Sample project data
  useEffect(() => {
    const projectsData: Project[] = [
      {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and sales tracking.",
        image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
        demoLink: "#",
        codeLink: "#",
        featured: true
      },
      {
        id: 2,
        title: "Social Media App",
        description: "A modern social networking platform with real-time messaging, post sharing, and user authentication.",
        image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["React", "Firebase", "Styled Components"],
        demoLink: "#",
        codeLink: "#",
        featured: true
      },
      {
        id: 3,
        title: "Weather Forecast App",
        description: "A weather application providing real-time forecasts, location-based weather data, and interactive maps.",
        image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["JavaScript", "API Integration", "CSS3"],
        demoLink: "#",
        codeLink: "#",
        featured: false
      },
      {
        id: 4,
        title: "Task Management System",
        description: "A productivity application for managing tasks, setting deadlines, and organizing projects with team collaboration features.",
        image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["React", "Redux", "Node.js"],
        demoLink: "#",
        codeLink: "#",
        featured: false
      },
      {
        id: 5,
        title: "Music Streaming Interface",
        description: "A sleek interface for a music streaming service with playlist management, audio visualization, and user profiles.",
        image: "https://images.pexels.com/photos/8412413/pexels-photo-8412413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["React", "TypeScript", "Web Audio API"],
        demoLink: "#",
        codeLink: "#",
        featured: true
      },
      {
        id: 6,
        title: "Portfolio Generator",
        description: "A tool for developers to create and customize professional portfolios with various templates and styling options.",
        image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["JavaScript", "HTML5", "CSS3"],
        demoLink: "#",
        codeLink: "#",
        featured: false
      }
    ];

    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else if (activeFilter === 'featured') {
      setFilteredProjects(projects.filter(project => project.featured));
    } else {
      setFilteredProjects(projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()))
      ));
    }
  }, [activeFilter, projects]);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'react', label: 'React' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'javascript', label: 'JavaScript' }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4" ref={projectsRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Check out my latest projects and applications built with modern technologies.
          </p>
        </div>
        
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 opacity-0 ${
                isVisible ? 'animate-fade-in' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative group h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div>
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-indigo-500/80 text-white rounded-full mr-1 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <a 
                      href={project.demoLink} 
                      className="p-2 bg-white/90 rounded-full text-indigo-600 hover:bg-white transition-colors"
                      aria-label={`View demo for ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a 
                      href={project.codeLink} 
                      className="p-2 bg-white/90 rounded-full text-indigo-600 hover:bg-white transition-colors"
                      aria-label={`View code for ${project.title}`}
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
                    <Code size={12} className="mr-1" />
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-indigo-500 font-medium">
                    {project.tags.length > 3 ? `+${project.tags.length - 3} more` : ''}
                  </span>
                  <a 
                    href={project.demoLink} 
                    className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center"
                  >
                    View Project
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-lg text-gray-500 dark:text-gray-400">No projects found matching the selected filter.</p>
          </div>
        )}
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/jonyreyes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition-colors duration-300"
          >
            <Github size={18} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;