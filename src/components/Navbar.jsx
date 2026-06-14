import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">

        <h2 className="logo">SHAHAL.</h2>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;