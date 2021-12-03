import Meta from "../components/Meta";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <Meta title="About Me" description="About Me" />
      <div className={styles.content}>
        <h2>Education: Purdue University (2022)</h2>
        <h3>Programming/Scripting Languages That I Use: </h3>
        <p>
          I am Diego Lezama Fajardo and I am currently a fourth-year student
          attending Purdue University. I am majoring in Web Development & Design
          and also Animation.
        </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>C#</li>
        </ul>
        <h3>Frameworks I am Familiar With: </h3>
        <ul>
          <li>React.JS</li>
          <li>Next.JS</li>
        </ul>
        <h3>3D Software Frequently Used: </h3>
        <ul>
          <li>Maya</li>
          <li>Substance</li>
        </ul>
        <h3>Game Engines I am Familiar With: </h3>
        <ul>
          <li>Unity</li>
          <li>Unreal Engine</li>
        </ul>
      </div>
    </>
  );
}
