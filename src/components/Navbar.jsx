import { useState } from "react";
import "../styles/navbar.css";
import profile from "../assets/profile.jpeg";

export default function Navbar() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const openResumeModal = (e) => {
    e.preventDefault();
    setIsResumeModalOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu when opening resume modal
  };

  const closeResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo" onClick={()=>scrollToSection('hero')}>
            <img src={profile} alt="Logo" width={40} height={40} style={{objectFit:"cover",borderRadius:"50%"}} className="logo-image" />
            <div className="logo-text"> 
            Anil Reddy</div>
          </div>

          <div className="nav-links">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>

          <button type="button" onClick={openResumeModal} className="resume-link">Resume</button>

          <button type="button" className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
              <div className="mobile-menu-header">
                <div className="mobile-menu-logo">
                  <img src={profile} alt="Logo" />
                  <div className="mobile-menu-logo-text">Anil Reddy</div>
                </div>
                <button type="button" className="mobile-menu-close" onClick={closeMobileMenu} aria-label="Close menu">
                  ×
                </button>
              </div>
              <div className="mobile-menu-content">
                <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
                <button onClick={() => scrollToSection('experience')} className="mobile-nav-link">Experience</button>
                <button onClick={() => scrollToSection('projects')} className="mobile-nav-link">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
                <button type="button" onClick={openResumeModal} className="mobile-nav-link resume-link">Resume</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isResumeModalOpen && (
        <div className="resume-modal-overlay" onClick={closeResumeModal}>
          <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-header">
              <h3>Resume - Anil Reddy</h3>
              <div className="resume-modal-actions">
                <a href="/resume.pdf" download="Anil_Reddy_Resume.pdf" className="download-btn">
                  Download
                </a>
                <button onClick={closeResumeModal} className="close-btn">×</button>
              </div>
            </div>
            <div className="resume-modal-content">
              <iframe
                src="/resume.pdf"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="Resume PDF Viewer"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
