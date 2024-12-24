const Skills = () => {
  const skillIcons = [
    { src: "images/icons8-html-5.svg", alt: "HTML5" },
    { src: "images/icons8-css3.svg", alt: "CSS3" },
    { src: "images/icons8-javascript.svg", alt: "JavaScript" },
    { src: "images/icons8-bootstrap.svg", alt: "Bootstrap" },
    { src: "images/icons8-react-native.svg", alt: "React" }
  ];

  return (
    <div className="skills-wrapper flex flex-center" id="skills">
      <h1 className="text-7xl font-thin text-center text-white" style={{textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'}}>
        Habilidades y Certificados
      </h1>
      <div className="first-set">
        {skillIcons.map((icon, index) => (
          <img 
            key={index}
            src={icon.src} 
            alt={icon.alt} 
            loading="lazy" 
            className="icon icon-card" 
          />
        ))}
      </div>
      <div className="second-set">
        {skillIcons.slice(3).map((icon, index) => (
          <img 
            key={index}
            src={icon.src} 
            alt={icon.alt} 
            loading="lazy" 
            className="icon icon-card" 
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;