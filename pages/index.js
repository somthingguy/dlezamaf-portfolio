import styles from '../styles/Home.module.css';
import Link from 'next/dist/client/link';
import Image from 'next/dist/client/image';
import style from '../components/Models.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.content}>
        <h1>Welcome to my portfolio</h1>

        <br />
        <h1>Latest Project</h1>
        <div className={styles.project}>
          <Link href="/NightClub">
            <a className={style.albumItem}>
              <div className={style.albumItemInner}>
                <Image
                  className={style.img}
                  src="/images/pass1.png"
                  alt="thumbnail"
                  width={1920}
                  height={1080}
                />
                <div className={style.albumItemOverlay}>
                  <div className={style.albumTitle}>Night Club</div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
