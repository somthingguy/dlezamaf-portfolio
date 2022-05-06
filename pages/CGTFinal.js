import Meta from '../components/Meta';
import Image from 'next/image';
import styles from '../styles/ModelItems.module.css';

const CGTFinal = () => {
  return (
    <>
      <Meta title="Environment" description="Diego's Portfolio" />
      <div className={styles.content}>
        <div className={styles.leftGrid}>
          <iframe
            width="960"
            height="720"
            src="https://sketchfab.com/playlists/embed?collection=f01eccdb14a84ad9accf725a54c4105c&autostart=0"
            title="Alleyway"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
          ></iframe>
          <p> </p>
          <iframe
            width="960"
            height="720"
            src="https://sketchfab.com/playlists/embed?collection=beacd7f634274d21a9dca98ab156cbbf&autostart=0"
            title="NightClub"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
          ></iframe>
        </div>
        <div className={styles.rightGrid}>
          <h1>Final Project</h1>
          <p>
            Created four buildings that would be in a japanese allyway.
            <br />
            From left to right:
            <br />
            Restuarant
            <br />
            Mini-mart
            <br />
            Bar&Grill
            <br />
            <br />
            Also fixed polys in my previous project.
          </p>
          <br />
        </div>
      </div>
    </>
  );
};

export default CGTFinal;
