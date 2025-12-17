import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-content">
        <h2>Let's build something together 🚀</h2>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <a href="mailto:anilreddy.kesireddy@gmail.com" className="contact-link">
              anilreddy.kesireddy@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone:</span>
            <a href="tel:+916305220933" className="contact-link">
              +91 6305220933
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Location:</span>
            <span className="contact-text">Hyderabad, Telangana</span>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>© 2025 Anil Reddy Kesireddy</p>
          </div>
          <div className="footer-right">
            <a href="https://github.com/anilreddy111" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/anil-reddy-kesireddy-562986206" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:anilreddy.kesireddy@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
