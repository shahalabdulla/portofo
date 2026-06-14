import "./About.css";
import profileImg from "../assets/profile.jpg";

function About() {
  const techStack = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript (ES6+)",
    "Cybersecurity",
    "Digital Forensics",
    "REST APIs",
  ];

  return (
    <section id="about" className="about">
      <div className="container">

        <div className="section-header">
          <span>01. ABOUT ME</span>
          <div className="header-line"></div>
        </div>

        <div className="about-content">

          {/* Left: Text */}
          <div className="about-text">
            <p>
              Hello! I'm <strong>Shahal Abdulla</strong>, a Full-Stack Developer
              who enjoys building things that live on the internet. My interest in
              web development grew from a passion for solving real problems through
              clean, functional software.
            </p>
            <p>
              I develop modern, scalable web applications using{" "}
              <strong>React.js, Node.js, Express.js, and MongoDB</strong> — from
              e-commerce platforms and admin dashboards to cybersecurity-focused
              tools. My focus is always on writing secure, high-performance code
              that delivers a great user experience.
            </p>
            <p>
              Alongside development, I am actively pursuing a specialization in{" "}
              <strong>Cybersecurity and Digital Forensics</strong>, expanding my
              knowledge through hands-on projects and real-world problem solving.
            </p>

            <p className="stack-label">
              Here are some technologies I've been working with:
            </p>

            <ul className="tech-list">
              {techStack.map((tech) => (
                <li key={tech}>
                  <span className="tech-arrow">▸</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Photo + Stats */}
          <div className="about-right">
            <div className="about-photo-wrapper">
              <img src={profileImg} alt="Shahal Abdulla" className="about-photo" />
              <div className="photo-border"></div>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">MERN</span>
                <span className="stat-label">Primary Stack</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">Specializations</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;