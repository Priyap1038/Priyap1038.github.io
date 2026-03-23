import { useState } from 'react'
import { projects } from '../data/data'

function ProjectCarousel({ images }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length)
  const next = () => setCurrent(i => (i + 1) % images.length)

  return (
    <div className="carousel">
      <img src={images[current]} alt={`slide ${current + 1}`} className="carousel-img" />
      <div className="carousel-controls">
        <button onClick={prev} className="carousel-btn">&#8249;</button>
        <div className="carousel-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot${i === current ? ' active-dot' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
        <button onClick={next} className="carousel-btn">&#8250;</button>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <ProjectCarousel images={project.images} />

      <div className="project-details">
        <div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>

        <div>
          <p className="tech-heading">Tech Stack</p>
          <div className="tech-stack">
            {project.tech.map(t => (
              <img key={t.name} src={t.img} alt={t.name} title={t.name} />
            ))}
          </div>
        </div>

        <div className="project-btns">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn2">
            &lt; CodeBase &gt;
          </a>
          <a href={project.live} target="_blank" rel="noreferrer" className="btn2 btn-live">
            Live Demo ↗
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="heading">
        <h2>Projects</h2>
        <span>What I&apos;ve Built</span>
      </div>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
