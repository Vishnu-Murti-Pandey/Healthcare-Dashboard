import React from "react";
import styles from "../styles/components/Header.module.css";
import { FaBell } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import DashboardOverview from '../components/DashboardMainContent/DashboardOverview';
import ActivityFeed from "./DashboardMainContent/ActivityFeed";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.inputContainer}>
      <IoSearchOutline className={styles.searchIcon} />
      <input type="text" placeholder="Search" className={styles.search} />
      <FaBell className={styles.bellIcon} />
    </div>
    <div className={styles.dashCont}>
      <h3 className={styles.headingDashboard}>Dashboard</h3>
      <div className={styles.weekContainer}>
        <div className={styles.week}>This Week</div>
        <IoIosArrowDown className={styles.downIcon} />
      </div>
    </div>
    <DashboardOverview />
    <ActivityFeed />
  </header>
);

export default Header;
