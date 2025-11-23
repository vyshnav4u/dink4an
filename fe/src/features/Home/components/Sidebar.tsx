import { Tabs, type TabsItem } from "../../../ui/Tabs";

const tabs: TabsItem[] = [
  { id: "API", label: "API" },
  { id: "home", label: "Home" },
  { id: "settings", label: "Settings" },
];

export const Sidebar = () => {
  return (
    <aside>
      <section>Logo</section>
      <Tabs tabs={tabs} direction="vertical" onChange={() => {}} />
    </aside>
  );
};

export default Sidebar;
