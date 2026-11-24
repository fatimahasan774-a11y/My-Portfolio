import portfolio from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {portfolio.name}</p>
    </footer>
  );
}