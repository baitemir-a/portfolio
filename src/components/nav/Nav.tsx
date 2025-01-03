import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
type Props = {};

export default function Nav({}: Props) {
  return (
    <nav className={styles.Nav}>
      <NavLink className={styles.name} to="/">Baitemir</NavLink>
      <div>
        <NavLink to="/">home</NavLink>
        <NavLink to="/work">work</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/contact">contact</NavLink>
        <NavLink to="/cv">cv</NavLink>
      </div>
    </nav>
  );
}
