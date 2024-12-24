const About = () => {
  return (
    <section className="pt-6 overflow-hidden bg-gray-900 dark:bg-gray-200 md:pt-0 sm:pt-16 2xl:pt-16" id="Acerca">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-6xl font-thin leading-tight text-white pt-6" style={{textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'}}>
              ¡Hey! 👋🏼 Soy </h2>
              <br className="block sm:hidden"/>
             <h2 className="text-6xl font-thin leading-tight text-white pt-6" > Jony Reyes </h2>          
            <p className="mt-3 text-xl text-gray-300 dark:text-gray-900 md:mt-3" style={{textShadow: '1px 1px 3px pink, 0 0 1em blue'}}>
              Un diseñador web apasionado que esta en constante aprendizaje de nuevas habilidades y manteniéndome al día con las últimas tendencias en la industria. Mi objetivo es crear sitios web que sean visualmente atractivos, intuitivos y funcionales, combinando mi amor por la música, mi espíritu autodidacta y mi pasión por la tecnología en cada proyecto.
            </p>
          </div>
          <div className="relative">
            <img 
              className="absolute inset-x-0 pt-4 bottom-0 -mb-30 -translate-x-1/2 left-1/2" 
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" 
              alt="" 
            />
            <img 
              className="pt-40 relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" 
              src="images/JOny.png" 
              alt="Jony Reyes" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;