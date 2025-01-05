import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
type Props = {}

export default function Footer({}: Props) {
  return (
    <div className={styles.Footer}>
        <Link to="https://google.com">Linkedin</Link>
        <Link to="https://google.com">GitHub</Link>
        <Link to="https://google.com">Email</Link>
        <Link to="https://google.com">Telegram</Link>
    </div>
  )
}