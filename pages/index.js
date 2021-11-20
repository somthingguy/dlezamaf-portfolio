import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.content}>
        <h1>Welcome to my portfolio</h1>
        <p>
          Welcome to my page! I am Diego Lezama Fajardo and I am currently a
          fourth-year student attending Purdue University. I am majoring in Web
          Development & Design and also Animation. In the Portfolio tab, you
          will find most of my work containing 3D Modeling, Animation and Web
          Dev related work. On the about me page, you will find basic
          information about myself such as skills and tools that I use. If there
          are any questions my contact info is located on my resume in the
          Resume tab.
        </p>
      </div>
    </>
  );
}
