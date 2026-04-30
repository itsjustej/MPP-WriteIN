export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-logo">Platform Party</div>
      <p className="footer-party">Founded by Michele Palmer Parks</p>

      <div className="footer-divider" />

      <p className="footer-scripture">
        "Did you not know that I must be about my Father's business?"
        &nbsp;<cite>— Luke 2:49</cite>
      </p>

      <div className="footer-stars">★ ★ ★ ★ ★</div>

      <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.88rem', color: 'rgba(245,240,232,0.5)', lineHeight: 1.7 }}>
        Michele Palmer Parks &nbsp;·&nbsp; Write-In Candidate for U.S. Senate
      </p>

      <p className="footer-state">North Carolina &nbsp;·&nbsp; No contributions accepted</p>
    </footer>
  );
}
