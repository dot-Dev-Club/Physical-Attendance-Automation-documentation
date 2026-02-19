import React, { useState } from 'react';
import Overview from './docs/Overview';
import Features from './docs/Features';
import Installation from './docs/Installation';
import APIReference from './docs/APIReference';
import ContributionGuide from './docs/ContributionGuide';
import ProjectStructure from './docs/ProjectStructure';
import TechStack from './docs/TechStack';
import SystemArch from './docs/SystemArch';
import DBSchema from './docs/DBSchema';
import AuthPermissions from './docs/AuthPermissions';
import './App.css';

const sidebarSections = [
  { label: 'Introduction', component: <Overview /> },
  { label: 'System Architecture', component: <SystemArch /> },
  { label: 'Features & User Roles', component: <Features /> },
  { label: 'Technology Stack', component: <TechStack /> },
  { label: 'Project Structure', component: <ProjectStructure /> },
  { label: 'Setup & Deployment', component: <Installation /> },
  { label: 'API Reference', component: <APIReference /> },
  { label: 'Database Schema', component: <DBSchema /> },
  { label: 'Authentication & Permissions', component: <AuthPermissions /> },
  { label: 'Contributing', component: <ContributionGuide /> },
];

function App() {
  const [activeSection, setActiveSection] = useState(0);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(`section-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(index);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = sidebarSections.map((_, idx) => document.getElementById(`section-${idx}`));
      let active = 0;
      sections.forEach((section, idx) => {
        if (section && section.getBoundingClientRect().top < 300) {
          active = idx;
        }
      });
      setActiveSection(active);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="docs-root">
      <aside className="docs-sidebar">
        <div className="docs-sidebar-header">
          <div className="docs-logo">PA</div>
          <div className="docs-title-group">
            <h1 className="docs-title">Physical Attendance</h1>
            <p className="docs-subtitle">Project Documentation</p>
          </div>
        </div>
        <div className="docs-contents">
          <h2 className="docs-contents-title">Contents</h2>
          <ol className="docs-nav-list">
            {sidebarSections.map((section, idx) => (
              <li key={section.label}>
                <button
                  className={`docs-nav-item ${activeSection === idx ? 'active' : ''}`}
                  onClick={() => scrollToSection(idx)}
                >
                  <span className="docs-nav-number">{idx + 1}.</span>
                  <span className="docs-nav-label">{section.label}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
        <footer className="docs-sidebar-footer">
          <small>Last updated October 23, 2025</small>
        </footer>
      </aside>
      <main className="docs-main">
        {sidebarSections.map((section, idx) => (
          <section key={section.label} id={`section-${idx}`} className="docs-section">
            <h2 className="docs-section-title">{section.label}</h2>
            <div className="docs-section-content">
              {section.component}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
