import { FaGithub } from "react-icons/fa";
import { FaEdgeLegacy } from "react-icons/fa";

const Contact = () => {
  const contactMethods = [
    {
      icon: "FaEdgeLegacy",
      title: "Email",
      description: "Escribe un correo",
      contact: "jreyesturismo@hotmail.com",
      link: "mailto:jreyesturismo@hotmail.com"
    },
    {
      icon: 
<FaEdgeLegacy />,
      title: "Github",
      description: "Da Click",
      contact: "Sigueme!",
      link: "https://github.com/JonRe88"
    },
    {
      icon: "fab fa-whatsapp",
      title: "WhatsApp",
      description: "Chatea por WhatsApp",
      contact: "Chat on WhatsApp",
      link: "https://wa.me/5511856139"
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      description: "Contáctame por LinkedIn",
      contact: "Ver LinkedIn",
      link: "https://www.linkedin.com/in/jony-reyes-developer/"
    }
  ];

  return (
    <section id="contacto">
      <div className="container flex flex-col mx-auto">
        <h1 className="text-7xl font-thin text-center pt-[150px] text-white" style={{textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'}}>
          Contacto
        </h1>
        <div className="w-full">
          <div className="container flex flex-col items-center gap-16 mx-auto my-32">
            <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-1 lg:grid-cols-2">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex flex-col items-center gap-3 px-8 py-10 bg-white/5 rounded-3xl shadow-main">
                  <span>
                    <i className={`${method.icon} text-white bg-clip-text bg-gradient-to-br from-blue-100 to-pink-300 `} style={{textShadow: '1px 1px 2px red, 0 0 1em blue'}}></i>
                  </span>
                  <p className="text-2xl font-extrabold text-blue-400 bg-clip-text bg-gradient-to-br from-blue-100 to-pink-300 " style={{textShadow: '1px 1px 2px red, 0 0 1em blue'}}>
                    {method.title}
                  </p>
                  <p className="text-base leading-7 text-white" style={{textShadow: '1px 1px 2px red, 0 0 1em blue'}}>
                    {method.description}
                  </p>
                  <a className="text-white font-bold" href={method.link} target="_blank" rel="noopener noreferrer">
                    {method.contact}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;