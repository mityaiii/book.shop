import styles from "./loader.module.css"

export const Loader = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.clockLoader}></div>
    </div>
  )
}
