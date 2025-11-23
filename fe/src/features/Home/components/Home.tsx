import { Content } from "./Content";
import styles from "./Home.module.css";
import Sidebar from "./Sidebar";

export const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <section className={styles.contentWrapper}>
        <nav>navigation</nav>
        <Content />
      </section>
    </div>
  );
};
