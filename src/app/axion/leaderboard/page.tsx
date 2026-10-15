"use client";

import { useMemo, useState } from "react";

const teams = [
  { rank: 1, team: "Bharat Builders", leader: "Indresh Suresh", college: "Shree L.R. Tiwari College of Engineering", app: "AX26-R1-000058", project: "AgriVyaan — Offline two-stage drone inspection" },
  { rank: 2, team: "Techfly", leader: "Shreya Mukul Khasne", college: "Sanjivani University", app: "AX26-R1-000019", project: "RoadTwin X — AI road intervention simulation" },
  { rank: 3, team: "Team PixelMind", leader: "Samrin Shaik", college: "Aditya Degree College", app: "AX26-R1-000055", project: "Invisible Thread — Hidden dependencies and cascading failures" },
  { rank: 4, team: "Code Circuit", leader: "Yashasvi M Sancheti", college: "SRM Institute of Science and Technology", app: "AX26-R1-000049", project: "FERMAMIND — Fermentation digital twin" },
  { rank: 5, team: "Codebytez", leader: "B Sudarshan", college: "Cambridge Institute of Technology, North Campus", app: "AX26-R1-000046", project: "Dynamic Multi-Modal Disaster Logistics" },
  { rank: 6, team: "Nexora", leader: "Nalenaroshini K", college: "Easwari Engineering College", app: "AX26-R1-000024", project: "BioBuild AI — Sustainable construction materials" },
  { rank: 7, team: "Pluto's Charm", leader: "Shreyam Mandal", college: "Institute of Engineering and Management, Kolkata", app: "AX26-R1-000060", project: "OmniCast AI — Multilingual sports commentary" },
  { rank: 8, team: "S4Cure", leader: "Soham Chowdhury", college: "Institute of Engineering & Management, Salt Lake", app: "AX26-R1-000067", project: "DataOrigin — Dataset provenance and reproducibility" },
  { rank: 9, team: "Team Checkmate", leader: "Shaikh Shifa Ayub", college: "KKWIEER", app: "AX26-R1-000071", project: "TraceEPR — Plastic waste compliance and traceability" },
  { rank: 10, team: "Tech_hackers", leader: "Roshni K", college: "SRM Easwari Engineering College", app: "AX26-R1-000043", project: "Solar & Wind Deployment Intelligence" },
  { rank: 11, team: "Devsphere", leader: "Aditya Dadasaheb Pawar", college: "AISSMS Institute of Information Technology", app: "AX26-R1-000036", project: "KrishiSetu AI — Farm-gate grading and FPO logistics" },
  { rank: 12, team: "Team Plasma", leader: "Dhinesh B", college: "Sri Eshwar College of Engineering", app: "AX26-R1-000038", project: "Crivera Edge — Offline rural welfare kiosks" },
  { rank: 13, team: "InnovHer", leader: "Priya", college: "Jain College of Engineering and Technology, Hubballi", app: "AX26-R1-000039", project: "SafeLift AI — Elevator child-safety alerts" },
  { rank: 14, team: "HACKERS", leader: "Telugu Venu", college: "SVR Engineering College", app: "AX26-R1-000062", project: "JALA-SMART — AI and IoT water management" },
  { rank: 15, team: "Causal Circuit", leader: "Shreyas Ratnaparkhi", college: "Geethanjali College of Engineering and Technology", app: "AX26-R1-000075", project: "Hyperlocal Climate Risk Intelligence" },
  { rank: 16, team: "Team Respawn", leader: "Utkarsh Raj", college: "Tulas Institute", app: "AX26-R1-000068", project: "PRAKRITI — Environmental monitoring and biodiversity" },
  { rank: 17, team: "Axiom", leader: "Pankhuri Govila", college: "University of Petroleum and Energy Studies (UPES)", app: "AX26-R1-000079", project: "AuraVoice — Multimodal health and accessibility agent" },
  { rank: 18, team: "IMPULSIVE", leader: "Md Rehan Khan", college: "KIET Group of Institutions", app: "AX26-R1-000034", project: "VisionVoice — Assistive vision and voice navigation" },
  { rank: 19, team: "Team Innoverse", leader: "Gauri Rajendra Kalgaonkar", college: "Zeal College of Engineering and Research", app: "AX26-R1-000076", project: "ParkOpt — Shared parking optimization" },
  { rank: 20, team: "team Stella", leader: "Anushka", college: "Vivek University", app: "AX26-R1-000026", project: "SchemeSaathi — Voice-first government welfare guide" },
  { rank: 21, team: "Sudarshan", leader: "Sudarshan A Patil", college: "New Horizon College of Engineering", app: "AX26-R1-000022", project: "OfferShield — Job and internship scam detection" },
  { rank: 22, team: "CodeNova", leader: "Rakshita Shanawad", college: "BLDEA V.P. Dr. P.G. Halakatti College of Engineering and Technology, Vijayapura", app: "AX26-R1-000054", project: "TraceWise AI — Explainable cascading-failure analysis" },
  { rank: 23, team: "Vitaguard", leader: "Sandesh Mahajan", college: "K.K. Wagh Institute of Engineering Education and Research, Nashik", app: "AX26-R1-000070", project: "VitaGuard — Wearable vital, gas and fatigue monitoring" },
  { rank: 24, team: "NEXUS THREE", leader: "Subhiksha M", college: "Thiagarajar College of Engineering", app: "AX26-R1-000073", project: "ProtoSense — Smart failure detection and diagnosis" },
  { rank: 25, team: "AR Robotics", leader: "Raunak Dasgupta", college: "Institute of Engineering and Management", app: "AX26-R1-000065", project: "AR Robotics — Smart agriculture rover" },
  { rank: 26, team: "Causal Circuit", leader: "Shreyas Ratnaparkhi", college: "Geethanjali College of Engineering and Technology", app: "AX26-R1-000075", project: "Hyperlocal climate risk and community alerts" },
  { rank: 27, team: "Team Sankalp", leader: "Yash Jain", college: "Global Institute of Technology", app: "AX26-R1-000037", project: "RehabAI — At-home rehabilitation exercise logger" },
  { rank: 28, team: "ChetoViksha", leader: "Akansha Chaturvedi", college: "Amity University Kolkata", app: "AX26-R1-000044", project: "Stress Vulnerability Index — Stress and trauma assessment" },
  { rank: 29, team: "The Vanguards", leader: "Borda Smit", college: "G H Patel College of Engineering and Technology", app: "AX26-R1-000025", project: "PRIVORA — Business and customer privacy" },
  { rank: 30, team: "CodeCrew", leader: "Dolly Rewasiya", college: "Madhav Institute of Technology & Science", app: "AX26-R1-000029", project: "FairWage — Transparent work and instant pay" },
  { rank: 31, team: "Harvix", leader: "Haripriya K", college: "SNS College of Engineering", app: "AX26-R1-000021", project: "FoodRescue AI — Surplus prediction and redistribution" },
  { rank: 32, team: "AGRITECHPRO", leader: "Kashish Goel", college: "Raj Kumar Goel Institute of Technology", app: "AX26-R1-000078", project: "RemoteLink — Wireless agriculture monitoring" },
  { rank: 33, team: "Tech Titans", leader: "Ginosha S.", college: "SNS College of Technology", app: "AX26-R1-000066", project: "AI-Based Predictive Maintenance for Aircraft" },
  { rank: 34, team: "Apex Coders", leader: "Aniket Vishwakarma", college: "Thakur College of Engineering and Technology", app: "AX26-R1-000052", project: "Smart Waste AI Management System" },
  { rank: 35, team: "Visioners", leader: "Vaibhavi Pednekar", college: "Sardar Patel Institute of Technology", app: "AX26-R1-000027", project: "ZoraAI — Explainable phishing and fraud detection" },
  { rank: 36, team: "chemathon", leader: "Sidhant Patel", college: "IIT Mandi", app: "AX26-R1-000023", project: "CivicLens AI — Civic issue detection and resolution" },
  { rank: 37, team: "TEAM TINKER", leader: "Pallavi Sunil Khandagale", college: "K K Wagh Institute of Engineering Education and Research, Nashik", app: "AX26-R1-000048", project: "VisionMate — Smart blind stick" },
  { rank: 38, team: "Innovative Minds", leader: "Haribhaskaran A", college: "Sri Krishna College of Engineering and Technology", app: "AX26-R1-000050", project: "GRAMVIKAS AI" },
  { rank: 39, team: "Skill Sculptors", leader: "Kavita Godge", college: "Maharashtra Institute of Technology, Aurangabad", app: "AX26-R1-000077", project: "KrishiDrishti — Agricultural risk assessment" },
  { rank: 40, team: "Code Titans", leader: "Savinay Pathak", college: "Maharashtra Institute of Technology, Chhatrapati Sambhajinagar", app: "AX26-R1-000080", project: "SpendSmart — Student budget intelligence" },
  { rank: 41, team: "The Vanguards", leader: "Borda Smit", college: "G H Patel College of Engineering and Technology", app: "AX26-R1-000025", project: "PRIVORA — Business and customer privacy" },
  { rank: 42, team: "RM_UNITED", leader: "Amber Rajeev Jha", college: "Shree L.R. Tiwari College of Engineering", app: "AX26-R1-000031", project: "CIVIC PULSE — Civic issue management" },
  { rank: 43, team: "The Infinite Loops", leader: "Simi S", college: "SASTRA Deemed University", app: "AX26-R1-000069", project: "CivicPulse AI — Civic issue prioritization" },
  { rank: 44, team: "RouteMind", leader: "Gayatri Gaikwad", college: "K. K. Wagh Institute of Engineering Education and Research", app: "AX26-R1-000072", project: "Public transport navigation and safety gaps" },
  { rank: 45, team: "Ciao Bella", leader: "Srirup Paul", college: "Institute of Engineering & Management", app: "AX26-R1-000064", project: "Aegis Shield" },
  { rank: 46, team: "Logic Loom", leader: "Ashish Anand", college: "Chandigarh Engineering College — CGC Landran", app: "AX26-R1-000018", project: "RE:SOURCE — Resource utilization and decision system" },
  { rank: 47, team: "ZeroDay", leader: "Shridhar Patil", college: "A. C. Patil College of Engineering, Kharghar", app: "AX26-R1-000010", project: "AI Career Readiness and Skill Gap Analyzer" },
  { rank: 48, team: "InnoCrew", leader: "Rohith S", college: "Dhanalakshmi Srinivasan College of Engineering", app: "AX26-R1-000032", project: "AgroClick" },
  { rank: 49, team: "Sayamprabha", leader: "Gayatri", college: "Jadavpur University", app: "AX26-R1-000013", project: "Rowlat" },
  { rank: 50, team: "Codenova", leader: "Saikat Paul", college: "Institute of Engineering and Management", app: "AX26-R1-000040", project: "CodeArena — Real-time 1v1 competitive coding" },
];

export default function AxionLeaderboardPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const filteredTeams = useMemo(() => {
    const q = search.trim().toLowerCase();

    if (!q) return teams;

    return teams.filter((team) =>
      [
        team.team,
        team.leader,
        team.college,
        team.app,
        team.project,
        String(team.rank),
      ].some((value) => value.toLowerCase().includes(q))
    );
  }, [search]);

  const pageCount = Math.max(1, Math.ceil(filteredTeams.length / pageSize));
  const currentPage = Math.min(page, pageCount);

  const visibleTeams = filteredTeams.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  function updateSearch(value: string) {
    setSearch(value);
    setPage(1);
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-[#0B1F3A] text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-blue-200">
            STAMPERS · AXION 2026
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Round 1 Leaderboard
          </h1>
          <p className="mt-2 text-sm text-blue-100">
            Preliminary shortlist · 50 teams
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Team rankings</h2>
            <p className="mt-1 text-sm text-gray-600">
              {filteredTeams.length} teams found. Marks are not included in the
              preliminary list.
            </p>
          </div>

          <label className="block w-full sm:max-w-md">
            <span className="sr-only">Search leaderboard</span>
            <input
              value={search}
              onChange={(event) => updateSearch(event.target.value)}
              placeholder="Search team, leader, college or application no."
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
            />
          </label>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-[1050px] w-full border-collapse text-left text-sm">
              <thead className="bg-[#0B1F3A] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Rank</th>
                  <th className="px-4 py-3 font-semibold">Team Name</th>
                  <th className="px-4 py-3 font-semibold">Team Leader</th>
                  <th className="px-4 py-3 font-semibold">
                    College / Institution
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    Application Number
                  </th>
                  <th className="px-4 py-3 font-semibold">Project</th>
                  <th className="px-4 py-3 font-semibold">Marks</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {visibleTeams.map((team) => (
                  <tr
                    key={`${team.rank}-${team.app}`}
                    className="hover:bg-blue-50/50"
                  >
                    <td className="whitespace-nowrap px-4 py-3 font-semibold">
                      {team.rank}
                    </td>
                    <td className="px-4 py-3 font-medium">{team.team}</td>
                    <td className="px-4 py-3">{team.leader}</td>
                    <td className="max-w-xs px-4 py-3">{team.college}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-xs">
                      {team.app}
                    </td>
                    <td className="min-w-64 px-4 py-3">{team.project}</td>
                    <td className="px-4 py-3 text-gray-500">—</td>
                  </tr>
                ))}

                {visibleTeams.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-4 py-10 text-center text-gray-500"
                    >
                      No teams match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            Showing{" "}
            {filteredTeams.length === 0
              ? 0
              : (currentPage - 1) * pageSize + 1}
            –{Math.min(currentPage * pageSize, filteredTeams.length)} of{" "}
            {filteredTeams.length}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            <span className="px-2 text-sm text-gray-600">
              Page {currentPage} of {pageCount}
            </span>

            <button
              type="button"
              disabled={currentPage === pageCount}
              onClick={() =>
                setPage((current) => Math.min(pageCount, current + 1))
              }
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>

        <p className="mt-6 text-xs leading-5 text-gray-500">
          Note: This is a preliminary shortlist based on the supplied PDF, not
          an official final result. Verify duplicate applications and rankings
          before publishing. Marks are blank because the PDF does not contain
          scores.
        </p>
      </section>
    </main>
  );
}