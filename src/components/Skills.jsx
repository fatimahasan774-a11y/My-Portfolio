import portfolio from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <ul className="chips">
        {portfolio.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}