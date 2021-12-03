import Meta from "../components/Meta";
import Image from "next/image";
import styles from "../styles/ModelItems.module.css";

const NightClub = () => {
  return (
    <>
      <Meta title="Environment" description="Diego's Portfolio" />
      <div className={styles.content}>
        <div className={styles.leftGrid}>
          <Image
            src="/images/pass1.png"
            alt="image"
            width={1920}
            height={1080}
          />
          <br />
          <Image
            src="/images/pass2.png"
            alt="image"
            width={1920}
            height={1080}
          />
          <iframe
            width="1280"
            height="720"
            allowFullScreen
            src="https://www.youtube.com/embed/lpNG75xbPMA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className={styles.rightGrid}>
          <h1>Night Club</h1>
          <p>
            This environment was rendered using Unreal Engine 5. Most models
            were modeled in Maya and textures were made in Substance Painter.
          </p>
          <br />
        </div>
      </div>
    </>
  );
};

export default NightClub;
