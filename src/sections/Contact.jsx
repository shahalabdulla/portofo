import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/mojzbaey", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">

        <p className="contact-overline">04. What's Next?</p>
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-description">
          My inbox is always open. Whether you have a project in mind,
          a job opportunity, or just want to say hello — I'll do my
          best to get back to you!
        </p>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="contact-btn"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="form-success">
              ✓ Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="form-error">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

        <div className="contact-socials">
          <a
            href="https://github.com/shahalabdulla"
            target="_blank"
            rel="noreferrer"
            className="contact-social-link"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.42-4.04-1.42-.54-1.39-1.32-1.76-1.32-1.76-1.08-.74.08-.72.08-.72 1.2.09 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.29 3.46.99.11-.78.42-1.29.76-1.59-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.16 0 0 1-.32 3.29 1.23a11.4 11.4 0 0 1 5.98 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.64.24 2.86.12 3.16.76.84 1.23 1.91 1.23 3.22 0 4.6-2.81 5.62-5.49 5.91.43.38.82 1.12.82 2.26v3.35c0 .33.22.71.83.58A12 12 0 0 0 12 .5Z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/shahal-abdulla-k-m-050925330/"
            target="_blank"
            rel="noreferrer"
            className="contact-social-link"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96v5.67H9.32V9h3.42v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.54v6.21ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
            </svg>
          </a>
          <a
            href="mailto:shahalabdulla04@gmail.com"
            className="contact-social-link"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.7-7.47 4.7a1 1 0 0 1-1.06 0L4 8.7V6l8 5 8-5v2.7Z"/>
            </svg>
          </a>
        </div>

      </div>

      <div className="contact-footer">
        <p>Designed &amp; Built by <span>Shahal Abdulla</span> · {new Date().getFullYear()}</p>
      </div>

    </section>
  );
}

export default Contact;