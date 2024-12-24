interface Project {
  image: string;
  title: string;
  description: string;
  demoLink: string;
  reverse?: boolean;
}

const ProjectCard = ({ image, title, description, demoLink, reverse = false }: Project) => {
  const flexDirection = reverse ? 'lg:flex-row-reverse' : 'lg:flex-row';
  
  return (
    <div className={`flex flex-col overflow-hidden rounded-md shadow-sm ${flexDirection}`}>
      <img src={image} alt={title} className="h-80 dark:bg-gray-500" />
      <div className="flex flex-col justify-center flex-1 p-1 dark:bg-gray-50">
        <span className="text-md uppercase dark:text-gray-600">{title}</span>
        <h3 className="text-2xl font-thin">{description}</h3>
        <button type="button" className="onclick">
          <a href={demoLink}>Ver Proyecto</a>
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      image: "images/Encriptador.png",
      title: "Encriptador",
      description: "Proyecto realizado para AluraLatam.",
      demoLink: "https://encriptador-unicode.vercel.app/"
    },
    {
      image: "images/proyectoPortfolio.png",
      title: "Portafolio",
      description: "Este proyecto lo hice para completar uno de los challenge de ALuraLatam",
      demoLink: "https://jonre88.github.io/JONYREYESWebDeveloper",
      reverse: true
    },
    {
      image: "images/alurageek.png",
      title: "AluraGeek",
      description: "Un proyecto más de los challenge de AluraLatam en cual se desarrolla una aplicación para listar, registrar y eliminar productos usando HTML, CSS y JAVASCRIPT",
      demoLink: "https://jonre88.github.io/challenge-AluraGeek/"
    },
    {
      image: "images/proyectoBIO.png",
      title: "Bios3LAB",
      description: "Desarrollo de la empresa Bios3LAB la cual se dedica a la creación de biocápsulas.",
      demoLink: "https://bio-s3-lab.vercel.app/",
      reverse: true
    }
  ];

  return (
    <section className="p-5 md:p-40 pt-5" id="proyectos">
      <h1 className="text-7xl p-4 font-thin text-center text-white" style={{textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'}}>
        Mis Proyectos
      </h1>
      <h2 className="text-2xl text-white bg-clip-text bg-gradient-to-br from-blue-100 to-pink-600 dark:from-blue-200 dark:to-pink-100">Estos son algunos de los proyectos que he realizado en lo largo de mi formación.</h2>
      <div className="container mx-auto space-y-6 text-white bg-clip-text  bg-gradient-to-br from-blue-100 to-pink-600 dark:from-blue-200 dark:to-pink-100" style={{textShadow: '1px 1px 3px red, 0 0 1em blue'}}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;