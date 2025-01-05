import styles from "./Avatar.module.scss";
type Props = {}

export default function Avatar({}: Props) {
  return (
    <img className={styles.Avatar} alt="avatar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Johnny_Depp-2757.jpg/1200px-Johnny_Depp-2757.jpg"/>
  )
}