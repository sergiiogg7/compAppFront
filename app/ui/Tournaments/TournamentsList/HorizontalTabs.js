// HorizontalTabs.jsx
import styles from "./HorizontalTabs.module.css";
import React, { useState } from "react";

export default function HorizontalTabs() {
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
}
