import React from 'react'
import styles from './Banner.module.scss'

type Props = {
    title:string
    miniTitle:string|React.ReactNode
}

export default function Banner({title, miniTitle}: Props) {
  return (
    <div className={styles.Banner}>
        <h6 className={styles.miniTitle}>{miniTitle}</h6>
        <h1 className={styles.title}>{title}</h1>
    </div>
  )
}