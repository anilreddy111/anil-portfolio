import "../styles/project.css";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image">
            <div className="placeholder-image">SECURE</div>
          </div>
          <div className="project-content">
            <h3>Secure Authentication & Role-Based Access System</h3>
            <p>Enterprise-grade authentication and authorization system using JWT tokens and role-based access control (RBAC). Reduced unauthorized API access by 90% and streamlined session handling for 50k+ users.</p>
            <div className="tech-stack">SpringBoot • JWT • SQL • React • Nginx</div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <div className="placeholder-image">AI</div>
          </div>
          <div className="project-content">
            <h3>Automated Resume Screening System (AI + NLP)</h3>
            <p>AI-based resume parser and ranking engine that extracts candidate data using NLP and matches profiles against job descriptions using semantic similarity scoring. Improved HR screening efficiency by 70%; parsed 5000+ resumes with 92% accuracy.</p>
            <div className="tech-stack">Python • Flask • spaCy • PostgreSQL • React</div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <div className="placeholder-image">SOCIAL</div>
          </div>
          <div className="project-content">
            <h3>Extracting Trends from Social Media Data</h3>
            <p>Analyzing social media data to spot new trends and patterns using MERN STACK and Selenium. Focused on finding useful information from online conversations and activity to shape strategies and make better decisions.</p>
            <div className="tech-stack">MERN Stack • Selenium • Python</div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <div className="placeholder-image">VOICE</div>
          </div>
          <div className="project-content">
            <h3>Voice Based E-mail for Blind</h3>
            <p>Voice-based email application built using Web Speech API with Inbox and Compose functionalities. Implements Text to Speech and Speech to Text conversion for accessibility.</p>
            <div className="tech-stack">MERN Stack • Flask • Web Speech API</div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <div className="placeholder-image">TREASURE</div>
          </div>
          <div className="project-content">
            <h3>Treasure Hunt Game</h3>
            <p>Web-based treasure hunt game where players solve clues to find treasure. Admin can track game completion time and number of clues used.</p>
            <div className="tech-stack">MERN Stack • MongoDB • ReactJS</div>
          </div>
        </div>
      </div>

      <div className="more-projects">
        <a href="https://github.com/anilreddy111" className="more-link">
          More projects on GitHub →
        </a>
      </div>
    </section>
  );
}
