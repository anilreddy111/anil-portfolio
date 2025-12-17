import "../styles/experience.css";

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-content">
        <div className="experience-item">
          <div className="company-info">
            <h3>Software Engineer</h3>
            <p className="company">GTM Buddy</p>
            <p className="date">06/2024 – Present | Hyderabad</p>
          </div>
          <p className="description">
            Engineered and scaled LMS, CMS, and DSR (Digital Sales Room) platforms using AngularJS,
            Spring Boot, and MySQL, powering seamless learning and sales collaboration for 100K+ global users.
            Developed Digital Sales Room modules enabling personalized client spaces with real-time file sharing,
            feedback tracking, and analytics, powered by WebSocket API for interactive two-way communication.
          </p>
          <p className="description">
            Designed and optimized RESTful APIs and microservices architecture, achieving a 45% reduction
            in API latency and improved scalability for concurrent sessions. Built content workflows and
            dynamic CMS tools for course and asset management, improving content publishing speed by 35%
            and reducing admin overhead.
          </p>
          <p className="description">
            Designed responsive Angular UI components with improved UX, accessibility, and branding consistency
            across platforms. Implemented secure authentication (JWT + Spring Security) and role-based access
            control for sales and admin users. Implemented Angular component reusability, lazy loading, and state management.
          </p>
        </div>

        <div className="experience-item">
          <div className="company-info">
            <h3>Associate Software Engineer Intern</h3>
            <p className="company">GTM Buddy</p>
            <p className="date">01/2024 – 08/2024 | Hyderabad</p>
          </div>
          <p className="description">
            Learned and implemented the complete learner-side functionality of the Learning Management System
            (LMS), including course access, progress tracking, and interactive learning modules using AngularJS and Spring Boot.
            Collaborated in building Digital Sales Room (DSR) features that enabled real-time collaboration between
            sellers and buyers, improving engagement and communication flow.
          </p>
          <p className="description">
            Handled file management and content operations in the Content Management System (CMS) platform,
            including upload, version control, and content delivery. Gained hands-on experience in frontend and
            backend integration, RESTful APIs, and real-time data updates using WebSocket and Spring Boot services.
          </p>
        </div>

        <div className="companies">
          <a href="https://gtmbuddy.ai/" className="company-link">GTM Buddy</a>
        </div>
      </div>
    </section>
  );
}
