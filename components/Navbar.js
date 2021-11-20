import ActiveLink from './ActiveLink'
import styles from './Navbar.module.css'

const navbar = () => {

    return (
        <nav>
            <ul className={styles.navbar}>
                <li className={styles.navitem}>
                    <ActiveLink activeClassName={styles.active} href="/"><a>Home</a></ActiveLink>
                </li>
                <li className={styles.dropdown}>
                    <ActiveLink activeClassName={styles.active} href="javascript:void(0)" className={styles.dropbtn}><a>Portfolio</a></ActiveLink>
                    <div className={styles.dropdowncontent}>
                        {/* <ActiveLink href="/webdev"><a>Web Dev</a></ActiveLink> */}
                        <ActiveLink href="/models"><a>3D Models</a></ActiveLink>
                        <ActiveLink href="/animation"><a>Animation</a></ActiveLink>
                    </div>
                </li>
                <li className={styles.navitem}>
                    <ActiveLink activeClassName={styles.active} href="/about"><a>About Me</a></ActiveLink>
                </li>
                <li className={styles.navitem}>
                    <ActiveLink activeClassName={styles.active} href="/resume"><a>Resume</a></ActiveLink>
                </li>
            </ul>
        </nav>
    );
}

export default navbar; 