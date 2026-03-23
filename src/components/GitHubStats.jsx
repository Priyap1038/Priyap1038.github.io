import { useEffect } from 'react'

export default function GitHubStats() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.GitHubCalendar) {
      window.GitHubCalendar('.gh-calendar', 'Priyap1038', {
        responsive: true,
        global_stats: true,
        tooltips: true,
      })
    }
  }, [])

  return (
    <section id="stats" className="section">
      <div className="heading">
        <h2>GitHub Stats</h2>
        <span>My GitHub</span>
      </div>

      <div className="github-stats-grid">
        <div className="github-stats-left">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Priyap1038&langs_count=6"
            alt="Top Languages"
            className="gh-img"
          />
        </div>
        <div className="github-stats-right">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Priyap1038&show_icons=true&locale=en"
            alt="GitHub Stats"
            className="gh-img"
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=Priyap1038"
            alt="Streak Stats"
            className="gh-img"
          />
        </div>
      </div>

      <div className="heading" style={{ marginTop: '2rem' }}>
        <h2>GitHub Calendar</h2>
      </div>
      <div className="gh-calendar" />
    </section>
  )
}
