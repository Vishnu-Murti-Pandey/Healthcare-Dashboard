import React from "react";
import styles from "../styles/components/Sidebar.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoChatbubbleEllipses, IoSettings } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";
import { CgAddR } from "react-icons/cg";
import { SiStatista } from "react-icons/si";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { LuArrowDownUp } from "react-icons/lu";

const linksGen = [
  { label: "Dashboard", icon: <TbLayoutDashboardFilled /> },
  { label: "History", icon: <LuArrowDownUp /> },
  { label: "Calendar", icon: <FaCalendarDays /> },
  { label: "Appointments", icon: <CgAddR /> },
  { label: "Statistics", icon: <SiStatista /> },
];

const linksTools = [
  { label: "Chat", icon: <IoChatbubbleEllipses /> },
  { label: "Support", icon: <FaPhoneAlt /> },
];

const linksSettings = [{ label: "Setting", icon: <IoSettings /> }];

const Sidebar = () => (
  <aside className={styles.sidebar}>
    <div className={styles.sidebarContainer}>
      <h3 className={styles.headingHealth}>
        Heath<span className={styles.headingCare}>care.</span>
      </h3>
      <div className={styles.subContainer}>
        <div className={styles.smallHeading}>General</div>
        <ul className={styles.navList}>
          {linksGen.map((link, idx) => (
            <li key={idx} className={styles.navItem}>
              {link.icon}
              <span className={styles.headingSpan}>{link.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.subContainer}>
        <div className={styles.smallHeading}>Tools</div>
        <ul className={styles.navList}>
          {linksTools.map((link, idx) => (
            <li key={idx} className={styles.navItem}>
              {link.icon}
              <span className={styles.headingSpan}>{link.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    {linksSettings.map((link, idx) => (
      <li key={idx} className={styles.navItemSettings}>
        {link.icon}
        <span className={styles.headingSpan}>{link.label}</span>
      </li>
    ))}
  </aside>
);

export default Sidebar;
