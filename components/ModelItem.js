import styles from "./Models.module.css";
import Link from "next/link";
import Image from "next/image";

const ModelItem = ({ model }) => {
  return (
    <div>
      <Link href={`/models/${model.id}`}>
        <a className={styles.albumItem}>
          <div className={styles.albumItemInner}>
            <Image
              className={styles.img}
              src={model.thumbnail}
              alt="thumbnail"
              width={400}
              height={400}
            />
            <div className={styles.albumItemOverlay}>
              <div className={styles.albumTitle}>{model.title}</div>
            </div>
          </div>
        </a>
      </Link>
      <br />
    </div>
  );
};

export default ModelItem;
