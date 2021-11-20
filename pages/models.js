import { server } from "../config";
import ModelList from "../components/ModelList";
import Meta from "../components/Meta";
import styles from "../components/Models.module.css";
import { getModelData } from "./api/items";

export default function Models({ modelData }) {
  return (
    <>
      <Meta title="3D Models" description="Diego's Portfolio" />

      <div className={styles.content}>
        <ModelList modelData={modelData} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = getModelData();
  const modelData = await res;

  return {
    props: {
      modelData,
    },
  };
};
