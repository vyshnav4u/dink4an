import cn from "classnames";
import { Tabs, type TabsItem } from "../../../ui/Tabs";
import styles from "./Sidebar.module.css";

const tabs: TabsItem[] = [
  { id: "API", label: "API" },
  { id: "home", label: "Home" },
  { id: "settings", label: "Settings" },
];

export const Sidebar = () => {
  return (
    <aside className={cn(styles.sideBarWrap, "dGrid")}>
      <section>Logo</section>
      <Tabs tabs={tabs} direction="vertical" onChange={() => {}} />
    </aside>
  );
};

export default Sidebar;
