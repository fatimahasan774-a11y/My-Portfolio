import portfolio from "../data/portfolio";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects">
        {portfolio.projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}