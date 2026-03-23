import { skills, tools } from '../data/data'

function SkillCard({ name, img }) {
  return (
    <div className="skill-card">
      <img src={img} alt={name} />
      <p className="skill-name">{name}</p>
    </div>
  )
}

export default function Skills() {
  return (
    <>
      <section id="skills" className="section">
        <div className="heading">
          <h2>Skills</h2>
          <span>Technologies I Work With</span>
        </div>
        <div className="skills-grid">
          {skills.map(skill => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </section>

      <section id="tools" className="section tools-section">
        <div className="heading">
          <h2>Tools</h2>
          <span>Tools I Use Daily</span>
        </div>
        <div className="skills-grid">
          {tools.map(tool => (
            <SkillCard key={tool.name} {...tool} />
          ))}
        </div>
      </section>
    </>
  )
}
