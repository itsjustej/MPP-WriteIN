export default function About() {
  const credentials = [
    'M.S. Biology — North Carolina Central University',
    'B.S. Zoology — NC State University',
    'B.S. Business & Accounting — NC A&T State University',
    'IRS Audit Trainee',
    'Internal Auditor — City of Winston-Salem',
    'Accountant — Pilot Life Insurance Company',
    'Substitute Teacher — Guilford & Wake County Schools (1974–2023)',
    'IRS Tax Preparer — VITA Program, Raleigh, NC',
  ];

  return (
    <main className="about-page">
      <div className="stripe-separator" />
      <section className="about">
        <div className="section-container">
          <div className="star-divider">
            <span className="stars">★ ★ ★</span>
          </div>

          <p className="section-label">About the Candidate</p>
          <h1 className="section-title">A Life of Public Service<br />& Academic Excellence</h1>

          <div className="about-grid">
            <div className="about-bio"><p>
  Michele Palmer Park is a North Carolina native whose life has been defined by service,
  education, and an unshakeable conviction that government must answer to the people —
  not to donors, lobbyists, or party machines.
</p>
<p>
  With degrees in biology, zoology, and business accounting, and nearly five decades
  as a substitute teacher across Guilford and Wake Counties, she has seen firsthand
  the gaps in education, nutrition, and opportunity that too many children face.
</p>
<p>
  As an accountant and IRS-trained auditor, she knows exactly where the money goes —
  and where it should go instead. Guided by faith and a deep love for this country,
  Michele runs with no corporate backing, no PAC money, and no political debts.
  She answers only to the citizens of North Carolina.
</p>
            </div>

            <div>
              <p className="section-label" style={{ marginBottom: '1rem' }}>Qualifications & Experience</p>
              <ul className="credentials-list">
                {credentials.map((cred, i) => (
                  <li key={i}>
                    <span className="cred-dot" />
                    {cred}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="stripe-separator" />
    </main>
  );
}
