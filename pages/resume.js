import styles from "../styles/Resume.module.css";
import Meta from "../components/Meta";

export default function Resume() {
  return (
    <>
      <Meta title="Resume" description="Diego's Portfolio" />

      <div className={styles.content}>
        <object data="/pdf/Resume.pdf" type="application/pdf">
          <p>Resume</p>
        </object>
      </div>
    </>
  );
}
