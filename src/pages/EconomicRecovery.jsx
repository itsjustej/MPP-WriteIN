export default function EconomicRecovery() {
  return (
    <main className="economic-page">
      <div className="stripe-separator" />
      <section className="economic">
        <div className="section-container">
          <div className="star-divider">
            <span className="stars">★ ★ ★</span>
          </div>

          <p className="section-label">Economic Policy</p>
          <h1 className="section-title">Economic Fairness<br />in Recovery</h1>

          <div className="act-box">
            <h2 className="act-title">
              Economic Fairness in Recovery and Stimulus Act
            </h2>
            <p className="act-subtitle">
              Proposed September 2018 &nbsp;·&nbsp; Forwarded to House Members
            </p>

            <p style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '1rem', lineHeight: 1.75, color: 'rgba(245,240,232,0.8)', marginBottom: '2rem' }}>
              While Washington debated trickle-down stimulus, Michele Palmer Parks submitted a direct-to-household
              recovery proposal — real money in the hands of real Americans to stabilize housing, transportation,
              and technology access simultaneously.
            </p>

            <div className="stimulus-grid">
              <div className="stimulus-card">
                <p className="stimulus-type">Single Household</p>
                <p className="stimulus-amount">$25,000</p>
                <ul className="stimulus-breakdown" style={{ marginTop: '1rem' }}>
                  <li>
                    Down payment / rent / IRA <span>$15,000</span>
                  </li>
                  <li>
                    Automobile assistance <span>$5,000</span>
                  </li>
                  <li>
                    Computer / smartphone <span>$3,000</span>
                  </li>
                  <li>
                    Additional allocation <span>$2,000</span>
                  </li>
                </ul>
              </div>

              <div className="stimulus-card">
                <p className="stimulus-type">Married Household</p>
                <p className="stimulus-amount">$35,000</p>
                <ul className="stimulus-breakdown" style={{ marginTop: '1rem' }}>
                  <li>
                    Down payment / rent / IRA <span>$15,000</span>
                  </li>
                  <li>
                    Automobile (per spouse) <span>$5,000 ea.</span>
                  </li>
                  <li>
                    Computer / smartphone <span>$3,000</span>
                  </li>
                  <li>
                    Spousal allocation <span>$7,000</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="act-note">
              This proposal was independently developed and submitted to House members in September 2018 — years
              before stimulus became a mainstream political conversation. It reflects Michele's philosophy: that
              government recovery money should go directly to households, not institutions.
            </p>
          </div>
        </div>
      </section>
      <div className="stripe-separator" />
    </main>
  );
}
