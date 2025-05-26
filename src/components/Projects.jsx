import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section>
      <nav className="flex flex-col  gap-y-2 p-2 items-center list-none">
        <li className="project-link">
          <Link to="/react-facts">React Facts - Project</Link>
        </li>
        <li className="project-link">
          <Link to="/test">Test</Link>
        </li>
      </nav>
    </section>
  );
}
