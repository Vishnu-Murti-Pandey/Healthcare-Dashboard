import React from 'react';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import { FaPlus } from "react-icons/fa";
import styles from "../../styles/components/DashboardMainContent.module.css";

const DashboardMainContent = () => (
  <main className={styles.dashboardMain}>
    <div className={styles.actions}>
      <img
        src="https://i.pravatar.cc/40"
        alt="User Avatar"
        className={styles.avatar}
      />
      <button className={styles.addBtn}>
        <FaPlus />
      </button>
    </div>
    <CalendarView />
    <UpcomingSchedule />
  </main>
);

export default DashboardMainContent;