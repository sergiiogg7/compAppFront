// HorizontalTabs.jsx
import React, { useState } from "react";
import styles from "./HorizontalTabs.module.css";

const HorizontalTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <ul className={styles.tabList}>
      {tabs.map((tab, index) => (
        <li
          key={index}
          onClick={() => setActiveTab(tab)}
          className={`${activeTab === tab ? styles.active : ""} ${styles.tab}`}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
};

export default HorizontalTabs;
