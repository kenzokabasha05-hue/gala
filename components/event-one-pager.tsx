import { ArrowDown, ArrowUpRight, CalendarDays, MapPin, Users } from 'lucide-react'

function Wordmark({ className = 'wordmark' }: { className?: string }) {
  return (
    <a className={className} href="#top" aria-label="Kigali Source Company, back to top">
      <span className="wordmark-mark" aria-hidden="true">K</span>
      <span>KIGALI SOURCE</span>
    </a>
  )
}

function SiteHeader() {
  return (
    <header className="site-header">
      <Wordmark />
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#details">Details</a>
        <a href="#about">About</a>
      </nav>
      <a className="header-cta" href="#rsvp">
        RSVP <ArrowUpRight aria-hidden="true" />
      </a>
    </header>
  )
}

function EventPoster() {
  return (
    <div className="poster" role="img" aria-label="Lights On poster: every light switched on, KN 76 St">
      <div className="poster-topline">
        <span>AN INVITATION</span>
        <span>EST. 2010</span>
      </div>
      <div className="poster-shape" aria-hidden="true">
        <span className="poster-shape-inner" />
      </div>
      <div className="poster-caption">
        <span>EVERY LIGHT</span>
        <span>SWITCHED ON.</span>
      </div>
      <span className="poster-index" aria-hidden="true">KN 76 ST</span>
    </div>
  )
}

function EventDetails() {
  const details = [
    { icon: CalendarDays, label: 'When', value: 'Friday 12 February 2027, 6:00 pm until late' },
    { icon: MapPin, label: 'Where', value: 'Kigali Source Company, KN 76 St, Kigali' },
    { icon: Users, label: 'Who it’s for', value: 'Builders, electricians, and anyone finishing a house' },
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
        <h2 id="about-heading">A lighting shop is best seen in the dark.</h2>
      </div>
      <div className="about-copy">
        <p>
          Catalogues flatten everything. A chandelier that looks ordinary on the page is a
          different object lit above your head, and a floodlight rated at 100 watts means
          nothing until you have stood under one.
        </p>
        <p>
          So for one evening we switch on the whole shop. Every chandelier, ceiling panel,
          garden lamp and floodlight we stock, all running at once. Come and see what you are
          specifying before you specify it.
        </p>
      </div>
    </section>
  )
}

function RsvpSection() {
  return (
    <section className="signup-section" id="rsvp" aria-labelledby="rsvp-heading">
      <div className="signup-copy">
        <p className="eyebrow">Be part of it</p>
        <h2 id="rsvp-heading">Tell us you’re coming.</h2>
        <p className="signup-note">
          Space is limited by the size of the shop floor. Send a message on WhatsApp and
          we’ll keep you on the list.
        </p>
      </div>
      {/* Concept piece: the button is deliberately inert (no href). */}
      <a className="signup-button" role="link" aria-disabled="true">
        Message us on WhatsApp <ArrowUpRight aria-hidden="true" />
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
            <h1 id="event-title">LIGHTS ON</h1>
            <p className="hero-intro">One evening. Every light in the shop switched on at once.</p>
            <a className="text-link" href="#details">
              See what’s on <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <EventPoster />
        </section>
        <EventDetails />
        <AboutSection />
        <RsvpSection />
        <footer className="site-footer">
          <Wordmark className="wordmark footer-wordmark" />
          <div className="footer-copy">
            <p>
              <span lang="rw">Amatara n'ibikoresho by'amashanyarazi</span> · KN 76 St, Kigali · Since 2010
            </p>
            <p className="footer-concept">
              Concept piece by Chris Kabasha. The shop is real — the event isn’t.
              <br />
              See the real site:{' '}
              <a href="https://kigalisourcecompany.com" target="_blank" rel="noopener noreferrer">
                kigalisourcecompany.com
              </a>
            </p>
          </div>
          <a className="back-to-top" href="#top">Back to top ↑</a>
        </footer>
      </div>
    </main>
  )
}
