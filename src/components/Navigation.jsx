import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants/strings';
import './Navigation.css';

const NAV_HEIGHT = 56;

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Work' },
  { id: 'projects', label: 'Projects' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map(item => item.id);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
            window.history.replaceState(
              null,
              '',
              `/${sectionId === 'about' ? '' : sectionId}`
            );
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - NAV_HEIGHT,
        behavior: 'smooth',
      });
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    window.localStorage.setItem('theme', nextTheme);
  };

  return (
    <header className="top-nav">
      <button
        type="button"
        className="name nav-home"
        onClick={() => scrollToSection('about')}
      >
        {PERSONAL_INFO.name}
      </button>
      <nav aria-label="Primary">
        {NAV_ITEMS.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'active' : ''}
            onClick={e => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
        <a
          href="https://www.linkedin.com/in/yuliia-chimyrys-software-engineer001/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          LinkedIn
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </nav>
    </header>
  );
}
