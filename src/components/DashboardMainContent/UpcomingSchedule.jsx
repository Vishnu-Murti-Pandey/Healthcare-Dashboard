import React from "react";
import styles from "../../styles/components/UpcomingSchedule.module.css";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

const schedule = [
  {
    day: "On Thursday",
    appointments: [
      { title: "Health checkup complete", time: "10:00 AM" },
      { title: "Ophthalmologist", time: "11:30 AM" },
    ],
  },
  {
    day: "On Saturday",
    appointments: [
      { title: "Cardiologist", time: "09:00 AM" },
      { title: "Neurologist", time: "01:00 PM" },
    ],
  },
];

const UpcomingSchedule = () => (
  <section className={styles.schedule}>
    <h3>The Upcoming Schedule</h3>
    <div className={styles.scheduleContainer}>
      <div className={styles.daySection}>
        <div className={styles.dayTitle}>On Thursday</div>
        <div className={styles.cardGroup}>
          <div className={styles.cardUp}>
            <div className={styles.titleUp}>
              Health checkup complete <span className={styles.emojiUp}>💉</span>
            </div>
            <div className={styles.timeUp}>11:00 AM</div>
          </div>
          <div className={styles.cardUp}>
            <div className={styles.titleUp}>
              Ophthalmologist <span className={styles.emojiUp}>👁️</span>
            </div>
            <div className={styles.timeUp}>14:00 PM</div>
          </div>
        </div>
      </div>
      <div className={styles.daySection}>
        <div className={styles.dayTitle}>On Saturday</div>
        <div className={styles.cardGroup}>
          <div className={styles.cardUp}>
            <div className={styles.titleUp}>
              Cardiologist <span className={styles.emojiUp}>❤️</span>
            </div>
            <div className={styles.timeUp}>12:00 AM</div>
          </div>
          <div className={styles.cardUp}>
            <div className={styles.titleUp}>
              Neurologist <span className={styles.emojiUp}>🧑‍⚕️</span>
            </div>
            <div className={styles.timeUp}>16:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default UpcomingSchedule;
