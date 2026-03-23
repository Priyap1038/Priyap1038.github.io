import { useState } from 'react'
import { contactInfo } from '../data/data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section">
      <div className="heading">
        <h2>Contact</h2>
        <span>Get In Touch</span>
      </div>

      <div className="contact-wrapper">
        {/* ── Left: info ── */}
        <div className="contact-info">
          <h3 className="contact-title">Let&apos;s get in touch</h3>
          <p className="contact-sub">
            Feel free to contact me to know more about me. You can call me or
            send a mail — I will reach out to you at the earliest.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <img src="/Media/location.png" alt="location" className="contact-icon" />
              <p>{contactInfo.location}</p>
            </div>
            <div className="contact-item">
              <img src="/Media/mail.png" alt="email" className="contact-icon" />
              <p>{contactInfo.email}</p>
            </div>
            <div className="contact-item">
              <img src="/Media/call.png" alt="phone" className="contact-icon" />
              <p>{contactInfo.phone}</p>
            </div>
          </div>

          <div className="social-section">
            <p>Connect with Me</p>
            <div className="social-icons">
              <a href={contactInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fab fa-github" />
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="contact-form-wrap">
          <h3 className="contact-title">Send a Message</h3>

          {sent && <p className="success-msg">✅ Message sent! I&apos;ll be in touch soon.</p>}

          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="input-group">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="form-input"
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="form-input"
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone (optional)"
                className="form-input"
              />
            </div>
            <div className="input-group">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="form-input form-textarea"
              />
            </div>
            <button type="submit" className="btn-primary send-btn">
              Send Message &nbsp;<i className="fa-solid fa-paper-plane" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
