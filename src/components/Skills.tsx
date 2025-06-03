import React from 'react';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML5', level: 95, category: 'Frontend' },
    { name: 'CSS3/SCSS', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 92, category: 'Frontend' },
    { name: 'TypeScript', level: 88, category: 'Frontend' },
    { name: 'React.js', level: 90, category: 'Frontend' },
    { name: 'Vue.js', level: 80, category: 'Frontend' },
  ];

  const designSkills = [
    { name: 'UI Design', level: 85, category: 'Design' },
    { name: 'UX Research', level: 80, category: 'Design' },
    { name: 'Figma', level: 88, category: 'Design' },
    { name: 'Adobe XD', level: 82, category: 'Design' },
    { name: 'Wireframing', level: 85, category: 'Design' },
    { name: 'Prototyping', level: 87, category: 'Design' },
  ];

  const otherSkills = [
    'Git & GitHub',
    'Responsive Design',
    'Web Performance',
    'Accessibility (WCAG)',
    'REST APIs',
    'GraphQL',
    'NextJS',
    'Tailwind CSS',
    'Styled Components',
    'Webpack',
    'Jest',
    'React Testing Library',
    'Node.js',
    'Firebase',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="section-title">Mis Habilidades</h2>
          <p className="section-subtitle">Estas son algunas de las tecnologías y herramientas de diseño con las que trabajo para crear experiencias digitales, funcionales e increíbles.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Frontend Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Frontend Development
            </h3>
            {frontendSkills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:-translate-y-2">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="inline-block mt-3 text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
          
          {/* Design Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              UI/UX Design
            </h3>
            {designSkills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:-translate-y-2">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="inline-block mt-3 text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Other Skills */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Other Technologies & Tools
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map(skill => (
              <span 
                key={skill}
                className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm text-gray-800 dark:text-gray-200 hover:shadow-md hover:bg-indigo-50 dark:hover:bg-gray-600 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;