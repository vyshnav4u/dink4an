import type React from "react";
import { useState } from "react";
import cn from "classnames";
import styles from "./Tabs.module.css";

export type TabsItem = {
  id: string;
  label: string;
};

type TTabsProps = {
  children?: React.ReactElement;
  tabs: TabsItem[];
  onChange: (tabId: string) => void;
  direction?: "horizontal" | "vertical";
};

export const Tabs = (props: TTabsProps) => {
  const { children, tabs, onChange, direction = "horizontal" } = props;
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");
  const isVertical = direction === "vertical";

  const onTabChange = (newTabId: string) => () => {
    setActiveTab(newTabId);
    onChange(newTabId);
  };

  return (
    <div className={styles.tabsWrapper}>
      <ul
        className={cn(styles.tabsHeader, "dFlex alignCenter flexStart", {
          flexColumn: isVertical,
        })}
      >
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={cn(styles.tabHeaderItems, {
              [styles.active]: activeTab === tab.id,
            })}
            onClick={onTabChange(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      {children && <div className="tabsBody">{children}</div>}
    </div>
  );
};
