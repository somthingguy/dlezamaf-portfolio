import Navbar from "./Navbar";
import styles from "./Navbar.module.css";
import Meta from "./Meta";

const name = "Diego Lezama Fajardo";

const Layout = ({ children }) => {
  return (
    <body>
      <Meta />
      <div className={styles.header}>
        <h1>{name}</h1>
      </div>
      <Navbar />
      <main>{children}</main>
    </body>
  );
};

export default Layout;
