import { useState, useEffect } from 'react'
import { typingStrings } from '../data/data'

function useTypingEffect(strings, speed = 100, pause = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [strIndex, setStrIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[strIndex]
    let timeout

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex(c => c + 1)
      }, speed)
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex(c => c - 1)
      }, speed / 2)
    } else {
      setDeleting(false)
      setStrIndex(i => (i + 1) % strings.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, strIndex, strings, speed, pause])

  return displayed
}

export default function Hero() {
  const typed = useTypingEffect(typingStrings)

  return (
    <section id="home">
      {/* Animated background blobs */}
      <div className="hero-blob blob1" />
      <div className="hero-blob blob2" />
      <div className="hero-blob blob3" />

      <div className="home-text">
        <span className="hello-tag">👋 Hello, I&apos;m</span>
        <h1>Priya Patole</h1>
        <h2>
          And I&apos;m&nbsp;
          <span className="typed-text">{typed}<span className="cursor">|</span></span>
        </h2>

        <div className="hero-btns">
          <a href="#contact" className="btn-primary">
            Hire Me <i className="fa-solid fa-paper-plane" />
          </a>
          <a href="#projects" className="btn-outline">
            My Work <i className="fa-solid fa-arrow-right" />
          </a>
        </div>
      </div>

      <div className="home-gif">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/601014116770475.6068beff4640a.gif"
          alt="Developer illustration"
        />
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <i className="bx bx-chevron-down" />
      </div>
    </section>
  )
}
