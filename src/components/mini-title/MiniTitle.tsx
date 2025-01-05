import styles from './MiniTitle.module.scss'
type Props = {
    children: React.ReactNode
}

export default function MiniTitle({children}: Props) {
  return (
    <h6 className={styles.miniTitle}>{children}</h6>
  )
}