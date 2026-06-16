import "./Projects.css";
import ecomma from "../assets/ecomma.png";
import electron from "../assets/electron.png";

const projects = [
  {
    id: 1,
    label: "Featured Project",
    title: "E—Comma",
    subtitle: "Full-Stack E-Commerce Platform",
    description:
      "A premium clothing (thrift) store built with a dark minimal aesthetic. Features OTP-based email authentication, category browsing for Men and Women, live product search, shopping cart, order management, and a full admin panel for managing products, orders, and customers.",
    image: ecomma,
    alt: "E-Comma e-commerce platform screenshot",
    techIcons: [
      { class: "devicon-react-original colored", name: "React.js" },
      { class: "devicon-nodejs-plain colored", name: "Node.js" },
      { class: "devicon-express-original", name: "Express.js" },
      { class: "devicon-mongodb-plain colored", name: "MongoDB" },
      { class: "devicon-cloudinary-plain colored", name: "Cloudinary" },
      { class: "devicon-vercel-plain", name: "Vercel" },
    ],
    github: "https://github.com/shahalabdulla/ecomma-frontend",
    live: "https://ecomma-frontend.vercel.app",
    reverse: false,
  },
  {
    id: 2,
    label: "Collaborative Project",
    title: "HyperLink Sentinel",
    subtitle: "Phishing & Quishing Defense Suite",
    description:
      "A system-wide OS-level cybersecurity tool built for Cyber Carnival 2026. Intercepts malicious URLs from the clipboard and QR codes before the browser executes them — using a multi-layer threat engine powered by Google Safe Browsing, VirusTotal (70+ vendors), and a headless Puppeteer sandbox for safe previewing.",
    image: electron,
    alt: "HyperLink Sentinel cybersecurity dashboard screenshot",
    techIcons: [
      { class: "devicon-electron-original colored", name: "Electron.js" },
      { class: "devicon-react-original colored", name: "React.js" },
      { class: "devicon-nodejs-plain colored", name: "Node.js" },
      { class: "devicon-mongodb-plain colored", name: "MongoDB" },
      { class: "devicon-puppeteer-plain colored", name: "Puppeteer" },
    ],
    github: "https://github.com/Navsajan/HyperLink-Sentinel",
    live: null,
    reverse: true,
  },
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.42-4.04-1.42-.54-1.39-1.32-1.76-1.32-1.76-1.08-.74.08-.72.08-.72 1.2.09 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.29 3.46.99.11-.78.42-1.29.76-1.59-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.16 0 0 1-.32 3.29 1.23a11.4 11.4 0 0 1 5.98 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.64.24 2.86.12 3.16.76.84 1.23 1.91 1.23 3.22 0 4.6-2.81 5.62-5.49 5.91.43.38.82 1.12.82 2.26v3.35c0 .33.22.71.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">

        <div className="section-header">
          <span>03. PROJECTS</span>
          <div className="header-line"></div>
        </div>

        <p className="projects-intro">
          A selection of things I've built — from full-stack web applications
          to cybersecurity-focused tools.
        </p>

        <div className="projects-list">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-item ${project.reverse ? "reverse" : ""}`}
            >

              {/* Image */}
              <a
                href={project.live || project.github}
                target="_blank"
                rel="noreferrer"
                className="project-image-link"
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="project-image"
                  />
                  <div className="project-image-overlay"></div>
                </div>
              </a>

              {/* Content */}
              <div className="project-content">
                <p className="project-label">{project.label}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>

                <div className="project-description">
                  <p>{project.description}</p>
                </div>

                {/* Tech Icons */}
                <div className="project-tech">
                  {project.techIcons.map((tech) => (
                    <div className="tech-icon-item" key={tech.name} title={tech.name}>
                      <i className={tech.class}></i>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      aria-label="Live Demo"
                    >
                      <ExternalIcon />
                    </a>
                  )}
                  {!project.live && (
                    <span className="project-badge">Desktop App</span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;