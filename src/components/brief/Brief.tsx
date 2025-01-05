import styles from "./Brief.module.scss";
type Props = {};

export default function Brief({}: Props) {
  return (
    <p className={styles.Brief}>
      I'm <span >Baitemir Asanbaev</span>, a{" "}
      <span className={styles.blue}>software developer</span> with{" "}
      <span className={styles.orange}>over 4 years</span> of practical
      experience, including{" "}
      <span className={styles.green}>commercial projects</span>. While
      specializing in{" "}
      <span className={styles.purple}>frontend development</span>, I am
      proficient in both <span className={styles.red}>backend</span> and{" "}
      <span className={styles.pink}>frontend</span> technologies, and I bring a 
      <span className={styles.yellow}> comprehensive understanding</span> of the development process.
    </p>
  );
}
