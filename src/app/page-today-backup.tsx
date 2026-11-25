
import Link from "next/link";

const stats = [
  { number: "863", label: "Registration Records" },
  { number: "640", label: "Completed Registrations" },
  { number: "481", label: "Unique Team IDs" },
  { number: "414", label: "Institutions" },
  { number: "14+", label: "States Represented" },
];

const winners = [
  {
    place: "02",
    team: "Team Tinker",
    leader: "Pallavi Khandagale",
    score: 93,
    medal: "silver",
  },
  {
    place: "01",
    team: "VitaGuard",
    leader: "Sandesh Mahajan",
    score: 96,
    medal: "gold",
  },
  {
    place: "03",
    team: "VISIONERS",
    leader: "Vaibhavi Pandnekar",
    score: 92,
    medal: "bronze",
  },
];

const teams = [
  [1, "VitaGuard", "Sandesh Mahajan", 96],
  [2, "Team Tinker", "Pallavi Khandagale", 93],
  [3, "VISIONERS", "Vaibhavi Pandnekar", 92],
  [4, "CODE CIRCUIT", "Yashasvi M Sancheti", 87],
  [5, "Plasma", "Dhinesh B", 86],
  [6, "Bharat Builders", "Indresh Suresh", 83],
  [7, "Team Innovverse", "Gauri Kajgaonkar", 82],
  [7, "RouteMind", "Gayatri Gakwad", 82],
  [8, "Pluto's Charm", "Shreyam Mandal", 80],
  [8, "S4Tech", "Soham Chowdhury", 80],
  [8, "Anvaya", "Himaja J", 80],
  [9, "Casual Circuit", "Shreyas Ratnaparkhi", 76],
  [9, "INNOVATIVE MINDS", "Haribhaskaran A", 76],
  [10, "Binary Minds", "Shrawani Khadake", 74],
  [10, "InnovHer", "Priya", 74],
] as const;

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

export default function AxionRecapPage() {
  return (
    <main className="axion">

      {/* NAVIGATION */}
      <nav className="ax-nav">
        <Link href="/" className="ax-brand">
          AX<span>ION</span>
          <small>BY STAMPERS</small>
        </Link>

        <div className="ax-navLinks">
          <a href="#reach">Reach</a>
          <a href="#winners">Winners</a>
          <a href="#leaderboard">Leaderboard</a>
          <a href="#gallery">Gallery</a>
        </div>

        <Link href="/" className="ax-navCta">
          STAMPERS ↗
        </Link>
      </nav>

      {/* HERO */}
      <header className="ax-hero">
        <div className="ax-heroImage" />
        <div className="ax-heroOverlay" />

        <div className="ax-heroContent">
          <div className="ax-eyebrow">
            INDIA'S STUDENT INNOVATION STAGE · 2026
          </div>

          <h1>
            AXION <i>2026</i>
          </h1>

          <h2>A NATIONAL MOVEMENT OF INNOVATION.</h2>

          <p>
            Ideas. Builders. Technology. And a community that never stops
            creating.
          </p>

          <div className="ax-actions">
            <a href="#reach" className="ax-button ax-gold">
              EXPLORE THE RECAP ↘
            </a>

            <a href="#winners" className="ax-button ax-ghost">
              MEET THE WINNERS
            </a>
          </div>
        </div>

        <div className="ax-handNote">
          IDEAS
          <br />
          PEOPLE
          <br />
          IMPACT ↗
        </div>

        <div className="ax-stats">
          {stats.map((item) => (
            <div className="ax-stat" key={item.label}>
              <b>{item.number}</b>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </header>

      {/* NATIONAL REACH */}
      <section id="reach" className="ax-section ax-reach">
        <div className="ax-intro">
          <div className="ax-eyebrow">01 / THE REACH</div>

          <h2>
            ONE COUNTRY.
            <br />
            <i>HUNDREDS OF IDEAS.</i>
          </h2>

          <p>
            AXION brought student innovators and institutions together from
            across India. These figures reflect the event registration
            summary, not verified attendance.
          </p>

          <div className="ax-scribble">
            IDEAS KNOW NO BOUNDARIES ↗
          </div>
        </div>

        <div className="ax-india">
          <svg
            viewBox="0 0 300 350"
            role="img"
            aria-label="Stylised India illustration"
          >
            <path
              className="ax-indiaShape"
              d="M117 8 151 17 165 42 192 52 185 79 211 99 199 124 215 150 190 172 197 201 177 225 167 258 149 287 135 333 117 307 107 276 86 255 78 222 61 203 75 172 66 145 91 120 87 94 108 78 105 48 128 39Z"
            />

            <path
              className="ax-route"
              d="M91 120 173 65 190 150 116 218 149 286M91 120 190 150 116 218 173 65"
            />

            {[
              [91, 120],
              [173, 65],
              [190, 150],
              [116, 218],
              [149, 286],
              [135, 333],
              [75, 172],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="5" />
            ))}
          </svg>

          <span>
            14+ STATES
            <br />
            CONNECTED
          </span>
        </div>

        <div className="ax-statePanel">
          <h3>
            REGISTRATION RECORDS BY STATE
            <b>TOP 10</b>
          </h3>

          {states.map(([name, count]) => (
            <div className="ax-barRow" key={name}>
              <span>{name}</span>

              <div className="ax-track">
                <i style={{ width: `${(count / 240) * 100}%` }} />
              </div>

              <b>{count}</b>
            </div>
          ))}
        </div>
      </section>

      {/* EVENT EXPERIENCE */}
      <section className="ax-photoBand">
        <div className="ax-bandHead">
          <b>THE AXION EXPERIENCE</b>
          <span>BUILD · PRESENT · IMPACT ✳</span>
        </div>

        <div className="ax-photoRow">
          <div className="ax-eventPhoto ax-p1">
            <label>01 / COLLABORATION</label>
          </div>

          <div className="ax-eventPhoto ax-p2">
            <label>02 / BIG IDEAS</label>
          </div>

          <div className="ax-eventPhoto ax-p3">
            <label>03 / THE STAGE</label>
          </div>
        </div>

        <p>
          Every idea starts somewhere. Every breakthrough starts with people.
        </p>
      </section>

      {/* WINNERS */}
      <section id="winners" className="ax-section ax-winners">
        <div className="ax-sectionHead">
          <div>
            <div className="ax-eyebrow">02 / FINAL EVALUATION</div>
            <h2>
              CHAMPIONS <i>OF AXION.</i>
            </h2>
          </div>

          <span className="ax-scribble">
            BRILLIANT MINDS.
            <br />
            REAL IMPACT. ✳
          </span>
        </div>

        <div className="ax-podium">
          {winners.map((winner) => (
            <article
              key={winner.place}
              className={`ax-winner ax-${winner.medal}`}
            >
              <div className="ax-trophy">
                {winner.place === "01"
                  ? "♛"
                  : winner.place === "02"
                    ? "✦"
                    : "✧"}
              </div>

              <small>
                {winner.place === "01"
                  ? "FIRST PLACE"
                  : winner.place === "02"
                    ? "SECOND PLACE"
                    : "THIRD PLACE"}
              </small>

              <h3>{winner.team}</h3>
              <p>{winner.leader}</p>

              <strong>
                {winner.score}
                <em> / 100</em>
              </strong>
            </article>
          ))}
        </div>
      </section>

      {/* LEADERBOARD */}
      <section id="leaderboard" className="ax-section ax-leaderboard">
        <div className="ax-sectionHead">
          <div>
            <div className="ax-eyebrow">03 / OFFICIAL SCOREBOARD</div>
            <h2>
              TOP 10 <i>LEADERBOARD.</i>
            </h2>
          </div>

          <span className="ax-pill">
            15 ENTRIES · TIES PRESERVED
          </span>
        </div>

        <div className="ax-tableWrap">
          <table>
            <thead>
              <tr>
                <th>RANK</th>
                <th>TEAM</th>
                <th>TEAM LEADER</th>
                <th>SCORE</th>
              </tr>
            </thead>

            <tbody>
              {teams.map(([rank, team, leader, score]) => (
                <tr key={`${rank}-${team}`}>
                  <td>
                    <b className={`ax-rank ax-r${rank}`}>{rank}</b>
                  </td>

                  <td>{team}</td>
                  <td>{leader}</td>

                  <td className="ax-score">
                    {score}
                    <small>/100</small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="ax-note">
          Tied positions are preserved as printed in the supplied evaluation
          sheet. CodeCrew scored 81, but no rank was printed beside its score,
          so it is not assigned a rank here.
        </p>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="ax-section ax-gallery">
        <div className="ax-sectionHead">
          <div>
            <div className="ax-eyebrow">04 / MOMENTS THAT MATTER</div>
            <h2>
              THE PEOPLE.
              <br />
              <i>THE ENERGY.</i>
            </h2>
          </div>

          <span className="ax-scribble">
            MEMORIES IN THE MAKING ↗
          </span>
        </div>

        <div className="ax-galleryGrid">
          <div className="ax-galleryImage ax-g1" />
          <div className="ax-galleryImage ax-g2" />
          <div className="ax-galleryImage ax-g3" />
          <div className="ax-galleryImage ax-g4" />
        </div>

        <p className="ax-note">
          Replace illustrative stock photos with verified AXION event
          photographs before publishing.
        </p>
      </section>

      {/* JUDGING CRITERIA */}
      <section className="ax-section ax-scoring">
        <div>
          <div className="ax-eyebrow">05 / THE EVALUATION</div>

          <h2>
            SEVEN CRITERIA.
            <br />
            <i>ONE HUNDRED MARKS.</i>
          </h2>
        </div>

        <div className="ax-criteria">
          {criteria.map(([name, mark], index) => (
            <div className="ax-criterion" key={name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <b>{name}</b>

              <div>
                <i style={{ width: `${(mark / 20) * 100}%` }} />
              </div>

              <strong>{mark}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="ax-closing">
        <div className="ax-eyebrow">
          THE NEXT CHAPTER STARTS HERE
        </div>

        <h2>
          SAME ENERGY.
          <br />
          <i>BIGGER IDEAS AHEAD.</i>
        </h2>

        <p>
          To every participant, mentor, evaluator and institution — thank you
          for being part of AXION 2026.
        </p>

        <Link href="/" className="ax-button ax-gold">
          DISCOVER STAMPERS ↗
        </Link>

        <div className="ax-closingDoodle">
          KEEP
          <br />
          BUILDING ✳
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ax-footer">
        <Link href="/">STAMPERS</Link>
        <span>AXION 2026 · OFFICIAL EVENT RECAP</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>

    </main>
  );
}
