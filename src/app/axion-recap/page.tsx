
import Link from "next/link";

const STAMPERS_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

const AXION_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/AXION_HACKATHON_logo_transparent.png";

const UNSTOP_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/Unstop-Logo-Blue-Large.jpg";

const winners = [
  {
    rank: "01",
    title: "VitaGuard",
    name: "Sandesh Mahajan",
    score: 96,
    award: "CHAMPION",
    accent: "gold",
  },
  {
    rank: "02",
    title: "Team Tinker",
    name: "Pallavi Khandagale",
    score: 93,
    award: "FIRST RUNNER-UP",
    accent: "silver",
  },
  {
    rank: "03",
    title: "VISIONERS",
    name: "Vaibhavi Pandnekar",
    score: 92,
    award: "SECOND RUNNER-UP",
    accent: "bronze",
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
  { value: "863", label: "Candidate registration records", index: "01" },
  { value: "640", label: "Completed registrations", index: "02" },
  { value: "481", label: "Unique team IDs", index: "03" },
  { value: "414", label: "Institutions represented", index: "04" },
  { value: "14+", label: "States represented", index: "05" },
  { value: "2", label: "Countries represented", index: "06" },
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

const chapters = [
  { number: "01", title: "The scale", detail: "A national community of student builders." },
  { number: "02", title: "The reach", detail: "Institutions and ideas from across borders." },
  { number: "03", title: "The champions", detail: "Recognising outstanding execution." },
  { number: "04", title: "The results", detail: "A record of evaluated submissions." },
];

export default function AxionRecapPage() {
  return (
    <main className="ax26">
      <div className="ax26-grain" aria-hidden="true" />

      <header className="ax26-header">
        <Link href="/" className="ax26-brand" aria-label="STAMPERS home">
          <img src={STAMPERS_LOGO} alt="STAMPERS" />
          <span>STAMPERS</span>
        </Link>

        <nav className="ax26-nav" aria-label="AXION recap navigation">
          <a href="#impact">Impact</a>
          <a href="#reach">National reach</a>
          <a href="#winners">Winners</a>
          <a href="#leaderboard">Leaderboard</a>
        </nav>

        <Link href="/axion/results" className="ax26-header-cta">
          Official results <span>↗</span>
        </Link>
      </header>

      <section className="ax26-hero">
        <div className="ax26-hero-grid" aria-hidden="true" />
        <div className="ax26-hero-orbit ax26-orbit-one" aria-hidden="true" />
        <div className="ax26-hero-orbit ax26-orbit-two" aria-hidden="true" />

        <div className="ax26-hero-inner">
          <div className="ax26-hero-copy">
            <div className="ax26-overline">
              <span className="ax26-overline-line" />
              STAMPERS PRESENTS · 2026
            </div>

            <div className="ax26-logo-panel">
              <img src={AXION_LOGO} alt="AXION National Hackathon" />
            </div>

            <h1>
              IDEAS INTO
              <br />
              <span>IMPACT.</span>
            </h1>

            <p className="ax26-hero-description">
              A national gathering of problem-solvers, developers and
              creators. A celebration of the ideas, effort and ambition
              that shaped AXION.
            </p>

            <div className="ax26-hero-actions">
              <a href="#winners" className="ax26-button-primary">
                Meet the champions <span>↗</span>
              </a>
              <a href="#impact" className="ax26-button-secondary">
                Explore the recap
              </a>
            </div>

            <div className="ax26-partner">
              <span>POWERED BY</span>
              <img src={UNSTOP_LOGO} alt="Unstop" />
            </div>
          </div>

          <div className="ax26-hero-art" aria-label="AXION 2026 event identity">
            <div className="ax26-art-cross ax26-cross-a" />
            <div className="ax26-art-cross ax26-cross-b" />
            <div className="ax26-art-ring ax26-ring-a" />
            <div className="ax26-art-ring ax26-ring-b" />
            <div className="ax26-art-ring ax26-ring-c" />
            <div className="ax26-art-core">
              <span className="ax26-core-top">NATIONAL HACKATHON</span>
              <img src={AXION_LOGO} alt="" />
              <span className="ax26-core-bottom">BUILD · CREATE · INNOVATE</span>
            </div>
            <span className="ax26-art-coordinate ax26-coordinate-a">AX / 26</span>
            <span className="ax26-art-coordinate ax26-coordinate-b">INNOVATION IN MOTION</span>
            <span className="ax26-art-index">001—026</span>
          </div>
        </div>

        <div className="ax26-hero-bottom">
          <span>THE OFFICIAL EVENT RECAP</span>
          <span>SCROLL TO DISCOVER ↓</span>
          <span>STAMPERS.IN</span>
        </div>
      </section>

      <section className="ax26-manifesto" id="impact">
        <div className="ax26-section-topline">
          <span>01 / THE IMPACT</span>
          <span>AXION · 2026</span>
        </div>

        <div className="ax26-manifesto-grid">
          <div>
            <p className="ax26-eyebrow">A NATIONAL PLATFORM</p>
            <h2>
              BUILT ON
              <br />
              <span>AMBITION.</span>
            </h2>
          </div>
          <div className="ax26-manifesto-copy">
            <p>
              AXION brought together aspiring developers, problem-solvers
              and creators from institutions across India. Every registration
              represented an opportunity to explore an idea, challenge
              assumptions and build something meaningful.
            </p>
            <div className="ax26-manifesto-sign">
              <span className="ax26-sign-line" />
              <span>THE STAMPERS TEAM</span>
            </div>
          </div>
        </div>

        <div className="ax26-stats">
          {stats.map((item) => (
            <article className="ax26-stat" key={item.index}>
              <div className="ax26-stat-top">
                <span>{item.index}</span>
                <span className="ax26-stat-mark">↗</span>
              </div>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </div>

        <p className="ax26-footnote">
          Registration figures reflect the supplied registration records
          and team IDs. They should not be interpreted as verified event
          attendance or unique individual participants.
        </p>
      </section>

      <section className="ax26-reach" id="reach">
        <div className="ax26-section-topline">
          <span>02 / NATIONAL REACH</span>
          <span>PARTICIPATION OVERVIEW</span>
        </div>

        <div className="ax26-reach-heading">
          <div>
            <p className="ax26-eyebrow">ONE COMMUNITY. MANY LOCATIONS.</p>
            <h2>
              THE MAP OF
              <br />
              <span>IDEAS.</span>
            </h2>
          </div>
          <p>
            AXION registrations represented institutions across multiple
            Indian states. The supplied records also include one registration
            from Sri Lanka.
          </p>
        </div>

        <div className="ax26-reach-layout">
          <div className="ax26-reach-feature">
            <div className="ax26-feature-label">
              <span>GEOGRAPHIC FOOTPRINT</span>
              <span>2026 / INDIA</span>
            </div>
            <div className="ax26-feature-number">14<span>+</span></div>
            <p>States represented in the registration records.</p>
            <div className="ax26-feature-bottom">
              <span>INDIA</span>
              <span>01 INTERNATIONAL COUNTRY RECORDED</span>
            </div>
          </div>

          <div className="ax26-state-panel">
            <div className="ax26-panel-heading">
              <span>TOP CONTRIBUTING STATES</span>
              <span>RECORDS</span>
            </div>
            {states.map(([name, value], index) => (
              <div className="ax26-state-row" key={name}>
                <span className="ax26-state-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="ax26-state-name">{name}</span>
                <div className="ax26-state-track">
                  <span style={{ width: `${(value / 240) * 100}%` }} />
                </div>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="ax26-country-strip">
          <div><strong>861</strong><span>India</span></div>
          <i />
          <div><strong>1</strong><span>Sri Lanka</span></div>
          <i />
          <div><strong>1</strong><span>Unspecified country</span></div>
        </div>
      </section>

      <section className="ax26-winners" id="winners">
        <div className="ax26-section-topline">
          <span>03 / THE CHAMPIONS</span>
          <span>EXCELLENCE RECOGNISED</span>
        </div>

        <div className="ax26-winner-heading">
          <p className="ax26-eyebrow">THE PEOPLE BEHIND THE PROJECTS</p>
          <h2>
            THE ONES WHO
            <br />
            <span>ROSE ABOVE.</span>
          </h2>
          <p>
            Celebrating the top three teams for their innovation,
            implementation and problem-solving.
          </p>
        </div>

        <div className="ax26-winner-grid">
          {winners.map((winner) => (
            <article
              className={`ax26-winner-card ax26-winner-${winner.accent}`}
              key={winner.rank}
            >
              <div className="ax26-winner-card-top">
                <span>AXION / 2026</span>
                <span>NO. {winner.rank}</span>
              </div>
              <div className="ax26-winner-medal">
                <span>{winner.rank}</span>
              </div>
              <p className="ax26-winner-award">{winner.award}</p>
              <h3>{winner.title}</h3>
              <p className="ax26-winner-person">{winner.name}</p>
              <div className="ax26-winner-score">
                <strong>{winner.score}</strong>
                <span>/ 100</span>
              </div>
              <div className="ax26-winner-card-bottom">
                <span>OFFICIAL SCORE</span>
                <span>STAMPERS</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ax26-leaderboard" id="leaderboard">
        <div className="ax26-section-topline">
          <span>04 / THE LEADERBOARD</span>
          <span>RESULTS ARCHIVE</span>
        </div>

        <div className="ax26-leaderboard-heading">
          <div>
            <p className="ax26-eyebrow">THE EVALUATION RECORD</p>
            <h2>
              EVERY POINT.
              <br />
              <span>EVERY EFFORT.</span>
            </h2>
          </div>
          <p>
            A view of the teams and scores included in the supplied AXION
            results data.
          </p>
        </div>

        <div className="ax26-table-shell">
          <div className="ax26-table-top">
            <span>AXION 2026 / SCORE REGISTER</span>
            <span>{leaderboard.length} ENTRIES</span>
          </div>
          <div className="ax26-table-scroll">
            <table className="ax26-table">
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
                    <td className="ax26-table-rank">{item.rank}</td>
                    <td className="ax26-table-team">{item.team}</td>
                    <td>{item.name}</td>
                    <td className="ax26-table-score">
                      <strong>{item.score}</strong>
                      <span>/ 100</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="ax26-table-bottom">
            <span>END OF DISPLAYED RESULTS</span>
            <span>AXION · STAMPERS · 2026</span>
          </div>
        </div>

        <p className="ax26-footnote">
          CodeCrew is shown with its supplied score of 81. A rank was not
          specified for that entry in the supplied data. Duplicate rank
          numbers are retained as provided.
        </p>

        <div className="ax26-results-link">
          <div>
            <span className="ax26-eyebrow">LOOKING FOR THE RESULT PORTAL?</span>
            <p>Visit the dedicated AXION results page.</p>
          </div>
          <Link href="/axion/results">OPEN RESULTS <span>↗</span></Link>
        </div>
      </section>

      <section className="ax26-evaluation">
        <div className="ax26-section-topline">
          <span>05 / THE EVALUATION</span>
          <span>100 POINT FRAMEWORK</span>
        </div>

        <div className="ax26-evaluation-layout">
          <div className="ax26-evaluation-intro">
            <p className="ax26-eyebrow">A STRUCTURED REVIEW</p>
            <h2>
              IDEAS
              <br />
              <span>MEASURED.</span>
            </h2>
            <p>
              The supplied evaluation framework covers seven dimensions,
              adding up to a total possible score of 100 points.
            </p>
            <div className="ax26-total-score">
              <strong>100</strong>
              <span>TOTAL POSSIBLE POINTS</span>
            </div>
          </div>

          <div className="ax26-criteria-list">
            {criteria.map(([name, score], index) => (
              <div className="ax26-criteria-item" key={name}>
                <div className="ax26-criteria-info">
                  <span>{String(index + 1).padStart(2, "0")} / {name}</span>
                  <strong>{score}<small> PTS</small></strong>
                </div>
                <div className="ax26-criteria-track">
                  <span style={{ width: `${score * 5}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ax26-closing">
        <div className="ax26-closing-orbit" aria-hidden="true" />
        <div className="ax26-closing-content">
          <p className="ax26-eyebrow">THE NEXT CHAPTER STARTS HERE</p>
          <img src={AXION_LOGO} alt="AXION" />
          <h2>
            KEEP
            <br />
            <span>BUILDING.</span>
          </h2>
          <p>
            To every participant, mentor, evaluator and supporter —
            thank you for being part of AXION.
          </p>
          <Link href="/explore" className="ax26-button-primary">
            Discover STAMPERS <span>↗</span>
          </Link>
        </div>
      </section>

      <footer className="ax26-footer">
        <Link href="/" className="ax26-footer-brand">
          <img src={STAMPERS_LOGO} alt="STAMPERS" />
          <span>STAMPERS</span>
        </Link>
        <span>© 2026 STAMPERS. ALL RIGHTS RESERVED.</span>
        <Link href="/">BACK TO STAMPERS.IN ↗</Link>
      </footer>
    </main>
  );
}
