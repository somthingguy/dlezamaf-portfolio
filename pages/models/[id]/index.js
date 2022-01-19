import { server } from '../../../config';
import Meta from '../../../components/Meta';
import Image from 'next/image';
import styles from '../../../styles/ModelItems.module.css';
import Link from 'next/link';
import { getModelData } from '../../api/items';
import { getModelData as getModelDataById } from '../../api/items/[id]';

const model = ({ model }) => {
  return (
    <>
      <Meta title={model.title} description="Diego's Portfolio" />
      <div className={styles.content}>
        {/* Left side of page */}
        <div className={styles.leftGrid}>
          {model.link !== '' ? (
            <iframe
              className={styles.frame}
              title={model.title}
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src={model.link}
            ></iframe>
          ) : null}
          {model.image1 !== '' ? (
            <Image src={model.image1} alt="image" width={1920} height={1080} />
          ) : null}
          {model.image2 !== '' ? (
            <Image src={model.image2} alt="image" width={1920} height={1080} />
          ) : null}
          {model.image3 !== '' ? (
            <Image src={model.image3} alt="image" width={1920} height={1080} />
          ) : null}
          {model.image4 !== '' ? (
            <Image src={model.image4} alt="image" width={1920} height={1080} />
          ) : null}
          {model.video !== '' ? (
            <video width="1280" height="720" controls>
              <source src={model.video} />
            </video>
          ) : null}
        </div>
        {/* Right side of page */}
        <div className={styles.rightGrid}>
          <h1>{model.title}</h1>
          <p>{model.description}</p>
          <br />

          <Link href="/models">
            <a className={styles.back}>← Go Back</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = getModelDataById(context.params.id);

  const model = await res[0];

  return {
    props: {
      model,
    },
  };
};

export const getStaticPaths = async () => {
  const res = getModelData();

  const models = await res;

  const ids = models.map((model) => model.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default model;
