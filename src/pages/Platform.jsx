const planks = [
  {
    title: 'Citizens Branch',
    text: 'Formation of a 4th branch of government — a Citizens Branch — to ensure everyday Americans have direct, constitutional representation and oversight of the federal government.',
  },
  {
    title: 'Immediate Food Distribution',
    text: 'Direct food distribution to public schools, social services agencies, and charities — no American child or family goes hungry while surplus exists.',
  },
  {
    title: 'Medicare for All',
    text: 'Immediate Medicare coverage for every citizen until group insurance becomes active. Full Medicare plus home purchase coverage for Veterans and active Military personnel.',
  },
  {
    title: 'No Lobbyists',
    text: 'Elected officials work exclusively for citizens. No lobbyists. No corporate donors. No divided loyalties. The people\'s representatives serve the people — period.',
  },
  {
    title: 'America Incorporated',
    text: 'Citizen-owned cooperative stores — grocery, drug, school supply, infant/children, and pet — with all profits funding healthcare, education, and veterinary care for all.',
  },
  {
    title: 'Citizen-Owned TV Network',
    text: 'A publicly owned television network dedicated to education and political advertising — ensuring every voice can be heard without billionaire gatekeepers.',
  },
  {
    title: 'Tax Surplus for the Vulnerable',
    text: 'Tax return surpluses directed first to the hungry and homeless. Before the government spends a dollar elsewhere, those with the greatest need are served.',
  },
  {
    title: 'Education Accelerated',
    text: 'B.A./B.S. degrees attainable by 12th grade with job training programs. Full Pell Grant access to graduate, medical, and law schools for qualifying citizens.',
  },
  {
    title: 'Raise Public Salaries',
    text: 'Exponentially higher salaries for military service members, teachers, and government employees — reflecting the true value of those who hold this country together.',
  },
  {
    title: 'School Gardens & University Farms',
    text: 'Gardening education in public schools and organized farming programs at universities — building food sovereignty, nutrition literacy, and agricultural resilience.',
  },
  {
    title: 'Missing Persons Response',
    text: 'Organized, government-coordinated missing persons searches. Every citizen who disappears deserves a comprehensive and immediate response.',
  },
  {
    title: 'Gun Research & Reform',
    text: 'Government-funded research into firearms that incapacitate rather than kill — reducing lethality while exploring rights-respecting, evidence-based alternatives.',
  },
  {
    title: 'Border Security',
    text: 'Mandatory security screening for all persons entering the United States. Thorough, consistent, and humane — applied equally to everyone.',
  },
  {
    title: 'Dignity for the Elderly',
    text: 'Elderly Americans remain in their own homes with access to 24-hour regulated home health care — preserving independence, dignity, and community roots.',
  },
  {
    title: 'Boarding Schools Over Foster Care',
    text: 'Structured, studio-occupancy boarding schools as a stable, nurturing alternative to foster care and unsafe home environments for at-risk youth.',
  },
  {
    title: 'Citizen CPA Audits',
    text: 'Independent citizen CPA audits of N.C. financial institutions — bringing transparency and accountability to the systems that hold America\'s wealth.',
  },
];

export default function Platform() {
  return (
    <main className="platform-page">
      <div className="stripe-separator" />
      <section className="platform">
        <div className="section-container">
          <div className="star-divider" style={{ paddingTop: 0 }}>
            <span className="stars" style={{ color: 'rgba(201,168,76,0.5)' }}>★ ★ ★</span>
          </div>

          <p className="section-label">The Platform</p>
          <h1 className="section-title">Policy For The People</h1>

          <p className="platform-intro">
            These are not promises borrowed from a party machine. Each plank was developed independently,
            from decades of civic observation and professional experience — a blueprint for a government
            that truly serves its citizens.
          </p>

          <div className="platform-grid">
            {planks.map((plank, i) => (
              <div className="platform-card" key={i}>
                <span className="platform-card-number">{String(i + 1).padStart(2, '0')}</span>
                <p className="platform-card-title">{plank.title}</p>
                <p className="platform-card-text">{plank.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="stripe-separator" />

      <section className="no-donations">
        <p className="no-donations-label">Important Notice</p>
        <h2 className="no-donations-headline">
          This campaign accepts NO contributions.
        </h2>
        <p className="no-donations-sub">
          Michele Palmer Park is funded by the people, for the people.
        </p>
      </section>
    </main>
  );
}
