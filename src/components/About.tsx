import { useState } from 'react';
import { User, Code, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('personal');
  
  const tabs = [
    { id: 'personal', label: 'Personal', icon: <User className="w-5 h-5" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="w-5 h-5" /> }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Get to know more about me, my background, and what drives me as a developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Jony Reyes" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-500/10 rounded-full filter blur-2xl"></div>
          </div>
          
          <div>
            <div className="flex border-b border-gray-300 dark:border-gray-700 mb-6">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 font-medium transition-colors ${
                    activeTab === tab.id 
                      ? 'text-indigo-500 border-b-2 border-indigo-500' 
                      : 'text-gray-500 hover:text-indigo-400'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            
            <div className={`${activeTab === 'personal' ? 'block' : 'hidden'}`}>
              <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
              <p className="mb-4 leading-relaxed">
                I'm Jony Reyes, a passionate Frontend Developer with a keen eye for design and a love for creating 
                seamless user experiences. I enjoy transforming complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="mb-6 leading-relaxed">
                When I'm not coding, you might find me exploring new technologies, contributing to open-source projects,
                or seeking inspiration from art and design communities.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-300 font-medium">Creative Thinker</div>
                <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-300 font-medium">Problem Solver</div>
                <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-300 font-medium">Design Enthusiast</div>
              </div>
            </div>
            
            <div className={`${activeTab === 'experience' ? 'block' : 'hidden'}`}>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-indigo-500">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                  <h3 className="text-xl font-semibold mb-1">Senior Frontend Developer</h3>
                  <p className="text-indigo-500 mb-2">Tech Innovations Inc. • 2021 - Present</p>
                  <p className="text-sm leading-relaxed">
                    Lead development of modern web applications, implemented best practices,
                    and mentored junior developers on the team.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-indigo-500">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                  <h3 className="text-xl font-semibold mb-1">Frontend Developer</h3>
                  <p className="text-indigo-500 mb-2">Digital Solutions LLC • 2018 - 2021</p>
                  <p className="text-sm leading-relaxed">
                    Developed responsive websites and applications, collaborated with designers,
                    and implemented modern frontend technologies.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-indigo-500">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                  <h3 className="text-xl font-semibold mb-1">Junior Web Developer</h3>
                  <p className="text-indigo-500 mb-2">CreativeWeb Agency • 2016 - 2018</p>
                  <p className="text-sm leading-relaxed">
                    Created and maintained websites for clients, implemented responsive designs,
                    and collaborated with the design team.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`${activeTab === 'education' ? 'block' : 'hidden'}`}>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-indigo-500">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                  <h3 className="text-xl font-semibold mb-1">Master's in Computer Science</h3>
                  <p className="text-indigo-500 mb-2">Tech University • 2014 - 2016</p>
                  <p className="text-sm leading-relaxed">
                    Specialized in Human-Computer Interaction and Advanced Web Technologies.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-indigo-500">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                  <h3 className="text-xl font-semibold mb-1">Bachelor's in Software Engineering</h3>
                  <p className="text-indigo-500 mb-2">State University • 2010 - 2014</p>
                  <p className="text-sm leading-relaxed">
                    Graduated with honors. Coursework included Web Development, UX Design, and Software Engineering principles.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-indigo-500">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                  <h3 className="text-xl font-semibold mb-1">Professional Certifications</h3>
                  <p className="text-indigo-500 mb-2">2016 - Present</p>
                  <p className="text-sm leading-relaxed">
                    AWS Certified Developer, Google UX Design Professional Certificate, 
                    Meta Frontend Developer Professional Certificate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;