import Meta from '../components/Meta';
import styles from '../styles/About.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Meta title="About Me" description="About Me" />
      <div className={styles.content}>
        <p className={styles.intro}>
          I am Diego Lezama Fajardo and I am currently a fourth-year student
          attending Purdue University. I am majoring in Web Development & Design
          and also Animation.
        </p>
        <h2>Education: Purdue University (2022)</h2>
        <h3>Programming/Scripting Languages That I Use: </h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>C#</li>
        </ul>
        <h3>Frameworks & Libraries I am Familiar With: </h3>
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

        <div className={styles.logos}>
          <Link href="https://github.com/somthingguy">
            <a>
              <Image
                src="/logos/GitHub.png"
                alt="GitHub Logo"
                width={32}
                height={32}
              />
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/diego-lezama-fajardo/">
            <a>
              <Image
                src="/logos/Linkedin.png"
                alt="GitHub Logo"
                width={32}
                height={32}
              />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
