import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-stars-pattern" />
      <div className="hero-top-stripe" />
      <div className="hero-bottom-stripe" />

      <div className="hero-content">
        <div className="party-badge">
          ★ &nbsp;The Platform Party&nbsp; ★
        </div>

        <h1 className="hero-name">
          Michele<br />
          <span>Palmer Park</span>
        </h1>

        <p className="hero-subtitle">
          Write-In Candidate &nbsp;·&nbsp; N.C. Senate &nbsp;·&nbsp; North Carolina
        </p>

        <p className="hero-tagline">
          "A Platform For America"
        </p>

        <Link to="/platform" className="hero-cta">
          Read the Platform
        </Link>

        <p className="hero-write-in-note">
          Write in: Michele Palmer Park &nbsp;·&nbsp; No contributions accepted
        </p>
      </div>
    </section>
  );
}
