import styles from './Anchor.module.scss'
import anchor from './anchor.svg'
type Props = {}

export default function Anchor({}: Props) {
    function back() {
        window.scrollTo(0, 0)
    }
  return (
    <div onClick={back} className={styles.Anchor}>
        <img alt='anchor' src={anchor}/>
        <h6>Back to top</h6>
    </div>
  )
}