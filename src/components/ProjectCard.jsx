export default function ProjectCard({ project }) {
  return (
    <article className="project">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ul className="project__tech">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <a href={project.link} target="_blank" rel="noreferrer">View on GitHub</a>
    </article>
  );
}