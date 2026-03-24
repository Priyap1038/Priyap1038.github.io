import { useState, useEffect } from 'react'

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home',     href: '#home' },
    { label: 'About',    href: '#about' },
    { label: 'Skills',   href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact',  href: '#contact' },
  ]

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`navbar-header${scrolled ? ' shadow' : ''}`}>
      <a href="#home" className="logo">
        &lt; <span>Priya</span> /&gt;
      </a>

      <div
        className={`menu-icon bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}
        onClick={() => setMenuOpen(!menuOpen)}
      />

      <nav className={`navbar${menuOpen ? ' active' : ''}`}>
        {navLinks.map(link => (
          <li key={link.label}>
            <a href={link.href} className="nav-link" onClick={handleNavClick}>
              {link.label}
            </a>
          </li>
        ))}

        <li>
          <a
            href="/Media/Priya-P-resume.pdf"
            target="_blank"
            download="Priya-P-resume"
            className="nav-link resume-btn"
            onClick={handleNavClick}
          >
            Resume &nbsp;<i className="fa-solid fa-cloud-arrow-down" />
          </a>
        </li>

        <li>
          <button
            className="darkmode-btn"
            onClick={() => { setDarkMode(!darkMode); setMenuOpen(false) }}
            aria-label="Toggle dark/light mode"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <i className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`} />
          </button>
        </li>
      </nav>
    </header>
  )
}
