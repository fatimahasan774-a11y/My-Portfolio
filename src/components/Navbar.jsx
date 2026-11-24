import portfolio from "../data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#top" className="navbar__brand">{portfolio.name}</a>
      <nav aria-label="Main">
        <ul className="navbar__links">
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}