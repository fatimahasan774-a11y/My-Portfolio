import portfolio from "../data/portfolio";
import profileImage from "../images/profile.jpg";

const intro =
  "I am a Software Engineering student interested in building practical, user-friendly and reliable software. I enjoy solving problems, learning new technologies and turning ideas into working applications.";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__text">
        <p className="hero__badge">{portfolio.title}</p>
        <h1>
          Hi, I'm <span className="hero__name">{portfolio.name}</span>
        </h1>
        <p className="hero__intro">{intro}</p>

        <div className="hero__actions">
          <a className="btn btn--sky" href="#projects">View Projects</a>
          <a className="btn btn--outline" href="#contact">Contact Me</a>
          <a className="btn btn--soft" href="/cv.pdf" download>Download CV</a>
        </div>

        <div className="hero__connect">
          <span>Connect:</span>
          <a href={portfolio.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href={`mailto:${portfolio.email}`} aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>

      <div className="hero__card">
        <div className="hero__ring">
          <img src={profileImage} alt={`Portrait of ${portfolio.name}`} />
        </div>
        <h2>{portfolio.name}</h2>
        <p>Software Engineering Student</p>
      </div>
    </section>
  );
}