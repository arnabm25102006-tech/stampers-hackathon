
import Link from "next/link";

const winners = [
  {
    rank: "01",
    title: "VitaGuard",
    name: "Sandesh Mahajan",
    score: 96,
    award: "WINNER",
  },
  {
    rank: "02",
    title: "Team Tinker",
    name: "Pallavi Khandagale",
    score: 93,
    award: "1ST RUNNER UP",
  },
  {
    rank: "03",
    title: "VISIONERS",
    name: "Vaibhavi Pandnekar",
    score: 92,
    award: "2ND RUNNER UP",
  },
];

const leaderboard = [
  { rank: "01", team: "VitaGuard", name: "Sandesh Mahajan", score: 96 },
  { rank: "02", team: "Team Tinker", name: "Pallavi Khandagale", score: 93 },
  { rank: "03", team: "VISIONERS", name: "Vaibhavi Pandnekar", score: 92 },
  { rank: "04", team: "CODE CIRCUIT", name: "Yashasvi M Sancheti", score: 87 },
  { rank: "05", team: "Plasma", name: "Dhinesh B", score: 86 },
  { rank: "06", team: "Bharat Builders", name: "Indresh Suresh", score: 83 },
  { rank: "07", team: "Team Innovverse", name: "Gauri Kajgaonkar", score: 82 },
  { rank: "07", team: "RouteMind", name: "Gayatri Gakwad", score: 82 },
  { rank: "08", team: "Pluto's Charm", name: "Shreyam Mandal", score: 80 },
  { rank: "08", team: "S4Tech", name: "Soham Chowdhury", score: 80 },
  { rank: "08", team: "Anvaya", name: "Himaja J", score: 80 },
  { rank: "09", team: "Casual Circuit", name: "Shreyas Ratnaparkhi", score: 76 },
  { rank: "09", team: "INNOVATIVE MINDS", name: "Haribhaskaran A", score: 76 },
  { rank: "10", team: "Binary Minds", name: "Shrawani Khadake", score: 74 },
  { rank: "10", team: "InnovHer", name: "Priya", score: 74 },
  { rank: "—", team: "CodeCrew", name: "Dolly Rewasiya", score: 81 },
];

const stats = [
  { value: "863", label: "Candidate registration records" },
  { value: "640", label: "Completed registrations" },
  { value: "481", label: "Unique team IDs" },
  { value: "414", label: "Institutions represented" },
  { value: "14+", label: "States represented" },
  { value: "2", label: "Countries represented" },
];

const states = [
  ["Tamil Nadu", 240],
  ["Maharashtra", 207],
  ["Telangana", 63],
  ["Uttar Pradesh", 62],
  ["Karnataka", 54],
  ["West Bengal", 49],
  ["Andhra Pradesh", 40],
  ["Madhya Pradesh", 19],
  ["Delhi", 19],
  ["Punjab", 16],
] as const;

const criteria = [
  ["Innovation & Originality", 20],
  ["Technical Implementation", 20],
  ["Functionality & Working Prototype", 20],
  ["Problem-Solving & Real-World Impact", 10],
  ["User Experience & Design", 10],
  ["Presentation & Demonstration", 10],
  ["Question & Answer", 10],
] as const;

const photos = [
  {
    title: "The beginning",
    subtitle: "Ideas turned into action",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Building together",
    subtitle: "Collaboration without limits",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "The final showcase",
    subtitle: "Innovation on display",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function AxionRecapPage() {
  return (
    <main className="ax-page">
      <nav className="ax-nav">
        <Link href="/" className="ax-brand">
          <img
            src="https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png"
            alt="STAMPERS"
          />
          <span>STAMPERS</span>
        </Link>

        <div className="ax-nav-links">
          <a href="#highlights">Highlights</a>
          <a href="#winners">Winners</a>
          <a href="#leaderboard">Leaderboard</a>
          <a href="#gallery">Gallery</a>
        </div>

        <a className="ax-nav-cta" href="#results">
          Explore results ↗
        </a>
      </nav>

      <section className="ax-hero">
        <div className="ax-hero-glow" />

        <div className="ax-hero-content">
          <div className="ax-eyebrow">
            <span className="ax-live-dot" />
            THE OFFICIAL EVENT RECAP
          </div>

          <img
            className="ax-hero-logo"
            src="https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/AXION_HACKATHON_logo_transparent.png"
            alt="AXION Hackathon"
          />

          <h1>
            BUILT BY
            <br />
            <span>INNOVATORS.</span>
          </h1>

          <p className="ax-hero-description">
            One challenge. Countless ideas. A community of builders.
            Relive the journey of AXION, a national-level hackathon
            presented by STAMPERS and powered by Unstop.
          </p>

          <div className="ax-hero-actions">
            <a href="#winners" className="ax-primary-btn">
              Discover the winners <span>↗</span>
            </a>
            <a href="#highlights" className="ax-secondary-btn">
              Explore the journey
            </a>
          </div>

          <div className="ax-powered">
            <span>POWERED BY</span>
            <img
              src="https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/Unstop-Logo-Blue-Large.jpg"
              alt="Unstop"
            />
          </div>
        </div>

        <div className="ax-hero-side">
          <span>AXION / 2026</span>
          <span>INNOVATION NEVER STOPS</span>
        </div>

        <div className="ax-scroll">
          <span>SCROLL TO EXPLORE</span>
          <span className="ax-scroll-line" />
        </div>
      </section>

      <section className="ax-section ax-intro" id="highlights">
        <div className="ax-section-label">
          <span>01</span> / THE IMPACT
        </div>

        <div className="ax-intro-grid">
          <div>
            <p className="ax-kicker">MORE THAN A HACKATHON</p>
            <h2>
              A platform for
              <br />
              <span>the next generation.</span>
            </h2>
          </div>

          <p className="ax-intro-text">
            AXION brought together aspiring developers, problem-solvers
            and creators from institutions across India. Every submission
            represented an idea, an experiment and the courage to build
            something meaningful.
          </p>
        </div>

        <div className="ax-stats-grid">
          {stats.map((item) => (
            <div className="ax-stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <p className="ax-data-note">
          Figures represent registration records and team IDs, not verified
          event attendance or unique individual participants.
        </p>
      </section>

      <section className="ax-section ax-reach">
        <div className="ax-section-label">
          <span>02</span> / NATIONAL REACH
        </div>

        <div className="ax-reach-heading">
          <p className="ax-kicker">FROM CAMPUS TO COUNTRY</p>
          <h2>
            Ideas have
            <br />
            <span>no boundaries.</span>
          </h2>
          <p>
            Participants registered from across India, with one registration
            recorded from Sri Lanka.
          </p>
        </div>

        <div className="ax-reach-grid">
          <div className="ax-map-panel">
            <div className="ax-map-top">
              <span>PARTICIPATION MAP</span>
              <span>INDIA / 2026</span>
            </div>

            <div className="ax-india-visual">
              <svg viewBox="0 0 400 440" role="img" aria-label="Illustrative map of India">
                <defs>
                  <linearGradient id="axIndiaGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4b8dff" />
                    <stop offset="100%" stopColor="#102a65" />
                  </linearGradient>
                </defs>
                <path
                  d="M112 20 L170 35 L194 64 L232 78 L260 112 L302 127 L287 160 L316 184 L296 218 L277 244 L266 281 L244 307 L228 349 L204 390 L179 421 L157 382 L143 340 L119 304 L104 270 L77 241 L58 205 L73 168 L51 140 L77 110 L69 76 L91 54 Z"
                  fill="url(#axIndiaGradient)"
                  stroke="#75aaff"
                  strokeWidth="2"
                />
                <path
                  d="M108 20 L170 35 L194 64 L232 78 L260 112 L302 127 L287 160 L316 184 L296 218 L277 244 L266 281 L244 307 L228 349 L204 390 L179 421 L157 382 L143 340 L119 304 L104 270 L77 241 L58 205 L73 168 L51 140 L77 110 L69 76 L91 54 Z"
                  fill="none"
                  stroke="#9cc4ff"
                  strokeDasharray="4 7"
                  strokeWidth="1"
                />
                <g fill="#ffffff">
                  <circle cx="165" cy="92" r="5" />
                  <circle cx="208" cy="151" r="5" />
                  <circle cx="153" cy="190" r="5" />
                  <circle cx="228" cy="225" r="5" />
                  <circle cx="183" cy="274" r="5" />
                  <circle cx="204" cy="335" r="5" />
                  <circle cx="128" cy="142" r="5" />
                </g>
                <g fill="#a9caff" fontSize="10" fontWeight="600">
                  <text x="180" y="88">NORTH</text>
                  <text x="235" y="148">EAST</text>
                  <text x="95" y="185">WEST</text>
                  <text x="236" y="231">CENTRAL</text>
                  <text x="207" y="355">SOUTH</text>
                </g>
              </svg>
            </div>

            <div className="ax-map-legend">
              <span><i /> Participant registrations across India</span>
            </div>
          </div>

          <div className="ax-state-panel">
            <div className="ax-map-top">
              <span>TOP CONTRIBUTING STATES</span>
              <span>REGISTRATION RECORDS</span>
            </div>

            <div className="ax-state-list">
              {states.map(([name, value]) => (
                <div className="ax-state-row" key={name}>
                  <div className="ax-state-info">
                    <span>{name}</span>
                    <strong>{value}</strong>
                  </div>
                  <div className="ax-bar-track">
                    <div
                      className="ax-bar-fill"
                      style={{ width: `${(value / 240) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ax-country-note">
          <span>861</span> India
          <span className="ax-country-divider">/</span>
          <span>1</span> Sri Lanka
          <span className="ax-country-divider">/</span>
          <span>1</span> Unspecified country
        </div>
      </section>

      <section className="ax-section ax-winners" id="winners">
        <div className="ax-section-label">
          <span>03</span> / THE CHAMPIONS
        </div>

        <div className="ax-winner-heading">
          <p className="ax-kicker">EXCELLENCE RECOGNIZED</p>
          <h2>
            Meet the
            <br />
            <span>AXION champions.</span>
          </h2>
          <p>
            Celebrating the top three teams for their innovation,
            execution and problem-solving.
          </p>
        </div>

        <div className="ax-podium">
          {winners.map((winner) => (
            <article className={`ax-winner-card ax-winner-${winner.rank}`} key={winner.rank}>
              <div className="ax-winner-rank">{winner.rank}</div>
              <div className="ax-winner-award">{winner.award}</div>
              <h3>{winner.title}</h3>
              <p>{winner.name}</p>
              <div className="ax-winner-score">
                <strong>{winner.score}</strong>
                <span>/ 100</span>
              </div>
              <div className="ax-winner-bottom">AXION 2026</div>
            </article>
          ))}
        </div>
      </section>

      <section className="ax-section ax-leaderboard" id="leaderboard">
        <div className="ax-section-label">
          <span>04</span> / THE LEADERBOARD
        </div>

        <div className="ax-leaderboard-heading">
          <div>
            <p className="ax-kicker">THE RESULTS</p>
            <h2>
              The top
              <br />
              <span>performers.</span>
            </h2>
          </div>
          <p>
            Official scores from the AXION evaluation results.
          </p>
        </div>

        <div className="ax-table-wrap" id="results">
          <table className="ax-table">
            <thead>
              <tr>
                <th>RANK</th>
                <th>TEAM</th>
                <th>TEAM REPRESENTATIVE</th>
                <th>SCORE</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((item, index) => (
                <tr key={`${item.team}-${index}`}>
                  <td className="ax-rank-cell">{item.rank}</td>
                  <td className="ax-team-cell">{item.team}</td>
                  <td>{item.name}</td>
                  <td className="ax-score-cell">{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="ax-data-note">
          CodeCrew is included with its reported score of 81; no rank was
          specified for this entry in the supplied results.
        </p>
      </section>

      <section className="ax-section ax-gallery" id="gallery">
        <div className="ax-section-label">
          <span>05</span> / THE EXPERIENCE
        </div>

        <div className="ax-gallery-heading">
          <p className="ax-kicker">MOMENTS THAT MATTER</p>
          <h2>
            Beyond the
            <br />
            <span>code.</span>
          </h2>
          <p>
            A celebration of creativity, collaboration and the spirit
            of building together.
          </p>
        </div>

        <div className="ax-gallery-grid">
          {photos.map((photo, index) => (
            <article className="ax-photo-card" key={photo.title}>
              <img src={photo.image} alt={photo.title} />
              <div className="ax-photo-overlay">
                <span>0{index + 1} / AXION</span>
                <h3>{photo.title}</h3>
                <p>{photo.subtitle}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="ax-data-note">
          Replace these illustrative images with actual AXION event photographs.
        </p>
      </section>

      <section className="ax-section ax-criteria">
        <div className="ax-section-label">
          <span>06</span> / THE EVALUATION
        </div>

        <div className="ax-criteria-grid">
          <div>
            <p className="ax-kicker">FAIR. STRUCTURED. TRANSPARENT.</p>
            <h2>
              How ideas
              <br />
              <span>were evaluated.</span>
            </h2>
            <p className="ax-criteria-description">
              Submissions were assessed across seven dimensions, with a
              total possible score of 100 points.
            </p>
          </div>

          <div className="ax-criteria-list">
            {criteria.map(([name, score]) => (
              <div className="ax-criteria-row" key={name}>
                <span>{name}</span>
                <strong>{score}<small> / 100</small></strong>
                <div className="ax-criteria-track">
                  <div style={{ width: `${score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="ax-footer">
        <div className="ax-footer-top">
          <img
            src="https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/AXION_HACKATHON_logo_transparent.png"
            alt="AXION"
          />
          <p>THE NEXT IDEA COULD CHANGE EVERYTHING.</p>
        </div>

        <h2>
          KEEP
          <br />
          <span>BUILDING.</span>
        </h2>

        <div className="ax-footer-bottom">
          <span>© 2026 STAMPERS. ALL RIGHTS RESERVED.</span>
          <Link href="/">BACK TO STAMPERS ↗</Link>
          <span>POWERED BY UNSTOP</span>
        </div>
      </footer>
    </main>
  );
}
