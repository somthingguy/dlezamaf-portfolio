import styles from '../styles/Animation.module.css'
import Meta from '../components/Meta'

export default function Portfolio() {
  return (
    <>
    <Meta title='Animation' description="Diego's Portfolio"/>

    <div className={styles.content}>
      <h2>Demo Reel</h2>
      <iframe width="760" height="515" src="https://www.youtube.com/embed/rJYf5_t24Xs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>

    </>
  )
}