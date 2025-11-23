import cn from "classnames";
import { Content } from "./Content";
import styles from "./Home.module.css";
import Sidebar from "./Sidebar";

export const Home = () => {
  return (
    <div className={cn(styles.home, "dGrid")}>
      <Sidebar />
      <section className={cn(styles.contentWrapper, "dGrid")}>
        <nav>navigation</nav>
        <Content />
      </section>
    </div>
  );
};
