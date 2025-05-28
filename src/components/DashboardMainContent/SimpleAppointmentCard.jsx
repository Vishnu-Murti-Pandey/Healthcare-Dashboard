// components/DashboardMainContent/SimpleAppointmentCard.jsx
import React from 'react';
import styles from '../../styles/components/SimpleAppointmentCard.module.css';
import { FaCalendarCheck } from 'react-icons/fa';

const SimpleAppointmentCard = ({ title, time }) => (
  <div className={styles.card}>
    <div className={styles.iconWrapper}>
      <FaCalendarCheck className={styles.icon} />
    </div>
    <div className={styles.details}>
      <div className={styles.title}>{title}</div>
      <div className={styles.time}>{time}</div>
    </div>
  </div>
);

export default SimpleAppointmentCard;
