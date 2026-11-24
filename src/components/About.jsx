import portfolio from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About me</h2>
      <div className="about">
        <div className="about__copy">
          {portfolio.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <ul className="about__interests">
          {portfolio.interests.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}