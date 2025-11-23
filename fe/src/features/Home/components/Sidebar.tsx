import { Tabs, type TabsItem } from "../../../ui/Tabs";

const tabs: TabsItem[] = [
  { id: "1", label: "Home" },
  { id: "2", label: "Settings" },
];

export const Sidebar = () => {
  return (
    <aside>
      <Tabs tabs={tabs} direction="vertical" onChange={() => {}} />
    </aside>
  );
};

export default Sidebar;
