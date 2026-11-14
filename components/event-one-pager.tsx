import { ArrowDown, ArrowUpRight, CalendarDays, MapPin, Users } from 'lucide-react'

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Event page home">
        <span className="wordmark-mark" aria-hidden="true">E</span>
        <span>EVENT PAGE</span>
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#details">Details</a>
        <a href="#about">About</a>
      </nav>
      <a className="header-cta" href="#signup">
        Sign up <ArrowUpRight aria-hidden="true" />
      </a>
    </header>
  )
}

function EventPoster() {
  return (
    <div className="poster" aria-label="Event poster placeholder">
      <div className="poster-topline">
        <span>AN INVITATION</span>
        <span>EST. ———</span>
      </div>
      <div className="poster-shape" aria-hidden="true">
        <span className="poster-shape-inner" />
      </div>
      <div className="poster-caption">
        <span>GOOD THINGS</span>
        <span>HAPPEN HERE.</span>
      </div>
      <span className="poster-index" aria-hidden="true">01 / 01</span>
    </div>
  )
}

function EventDetails() {
  const details = [
    { icon: CalendarDays, label: 'When', value: '[Date and time]' },
    { icon: MapPin, label: 'Where', value: '[Venue or location]' },
    { icon: Users, label: 'Who it’s for', value: '[Audience]' },
  ]

  return (
    <section className="details-section" id="details" aria-labelledby="details-heading">
      <div className="section-heading">
        <p className="eyebrow">The essentials</p>
        <h2 id="details-heading">Everything you need to know.</h2>
      </div>
      <div className="details-list">
        {details.map(({ icon: Icon, label, value }, index) => (
          <article className="detail-row" key={label}>
            <span className="detail-number">0{index + 1}</span>
            <Icon aria-hidden="true" className="detail-icon" />
            <h3>{label}</h3>
            <p>{value}</p>
            <ArrowUpRight aria-hidden="true" className="detail-arrow" />
          </article>
        ))}
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div>
        <p className="eyebrow">A little about it</p>
        <h2 id="about-heading">Make room<br />for something good.</h2>
      </div>
      <div className="about-copy">
        <p>[Add the first line about what happens at the event.]</p>
        <p>[Add one or two more lines with what guests can expect.]</p>
      </div>
    </section>
  )
}

function SignupSection() {
  return (
    <section className="signup-section" id="signup" aria-labelledby="signup-heading">
      <div className="signup-copy">
        <p className="eyebrow">Be part of it</p>
        <h2 id="signup-heading">Save your spot.</h2>
        <p className="signup-note">[Add a ticket link or signup instructions.]</p>
      </div>
      <a className="signup-button" href="#signup">
        Add sign-up link <ArrowUpRight aria-hidden="true" />
      </a>
    </section>
  )
}

export function EventOnePager() {
  return (
    <main id="top">
      <div className="page-shell">
        <SiteHeader />
        <section className="hero" aria-labelledby="event-title">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> You’re invited</p>
            <h1 id="event-title">[Event<br className="desktop-break" /> name]</h1>
            <p className="hero-intro">A gathering worth making time for.</p>
            <a className="text-link" href="#details">
              Explore the details <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <EventPoster />
        </section>
        <EventDetails />
        <AboutSection />
        <SignupSection />
        <footer className="site-footer">
          <a className="wordmark footer-wordmark" href="#top">
            <span className="wordmark-mark" aria-hidden="true">E</span>
            <span>EVENT PAGE</span>
          </a>
          <p>More details coming soon.</p>
          <a className="back-to-top" href="#top">Back to top ↑</a>
        </footer>
      </div>
    </main>
  )
}
