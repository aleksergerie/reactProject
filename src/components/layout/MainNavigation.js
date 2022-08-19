import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        VOLT BJJ
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/coaches">Coaches</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/techniques">Techniques</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
