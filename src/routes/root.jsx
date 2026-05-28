import { Outlet, NavLink } from 'react-router-dom';
import '../components/Navigation.css';

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Work' },
  { to: '/projects', label: 'Projects' },
];

export default function Root() {
  return (
    <>
      <header className="top-nav">
        <div className="name">Yuliia Chimyrys</div>
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://www.linkedin.com/in/yuliia-chimyrys-software-engineer001/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            LinkedIn
          </a>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}
