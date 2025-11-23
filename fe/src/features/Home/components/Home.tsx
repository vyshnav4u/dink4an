import styles from "./Home.module.css";
import Sidebar from "./Sidebar";

export const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <section className={styles.contentWrapper}>
        <nav>navigation</nav>
        <main>main body</main>
      </section>
    </div>
  );
};
