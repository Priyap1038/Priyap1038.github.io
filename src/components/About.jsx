import { stats } from '../data/data'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="heading">
        <h2>About Me</h2>
        <span>Introduction</span>
      </div>

      <div className="about-container">
        <div className="about-img-wrap">
          <div className="photo-ring">
            <img
              className="about-photo"
              src="/Images/Priya_P_Photo.jpg"
              alt="Priya Patole"
            />
          </div>
        </div>

        <div className="about-content">
          <p className="about-text">
            I am a web developer proficient in Full Stack Web Development with
            expertise in React, Redux, JavaScript, HTML, CSS, Git and DSA, with
            an ever-growing passion for implementing and launching new projects
            that have tangible outcomes for others. Ability to work well in
            team-oriented and collaborative projects. Looking forward to working
            in a company to augment my skills and contribute significantly to
            the organization.
          </p>

          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <span className="stat-dot" />
                <h3>{stat}</h3>
              </div>
            ))}
          </div>

          <a
            href="/Media/Priya-P-resume.pdf"
            target="_blank"
            download="Priya-P-resume"
            className="btn-resume"
          >
            Download Resume &nbsp;<i className="fa-solid fa-cloud-arrow-down" />
          </a>
        </div>
      </div>
    </section>
  )
}
