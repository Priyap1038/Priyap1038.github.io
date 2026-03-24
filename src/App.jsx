import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import GitHubStats from './components/GitHubStats'
import Contact from './components/Contact'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubStats />
      <Contact />
      <footer className="footer">
        <p>© 2024 <span>Priya Patole</span> — Built with React & ☕</p>
      </footer>
    </div>
  )
}
