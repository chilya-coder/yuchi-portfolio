import { Outlet, NavLink } from 'react-router-dom';
import '../components/Navigation.css';
import { FaLinkedin } from 'react-icons/fa';

export default function Root() {
  const navLinks = [
    { to: '/about', label: 'About Me' },
    { to: '/experience', label: 'Experience' },
    { to: '/projects', label: 'Projects' },
  ];
  return (
    <>
      <header className="top-nav">
        <div className="name">Yuliia Chimyrys</div>
        <nav className="nav-links">
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
            className="linkedin-btn"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={22} />
          </a>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}
