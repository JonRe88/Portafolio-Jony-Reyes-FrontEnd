const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <aside>
        <img src="images/Logo Jony Reyes.png" width="50" height="50" alt="Logo Jony Reyes" className="fill-current" />
        <p>
          | Jony Reyes |<br />
          Providing reliable tech since 2023
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/JonRe88" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-neutral-content">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/jony-reyes-developer/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-neutral-content">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;