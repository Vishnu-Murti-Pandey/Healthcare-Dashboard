import React from "react";
import styles from "../../styles/components/CalendarView.module.css";
import { RiArrowLeftFill } from "react-icons/ri";
import { RiArrowRightFill } from "react-icons/ri";

const CalendarView = () => {
  const days = [
    { day: "Mon", date: 25, times: ["10:00", "11:00", "12:00"] },
    {
      day: "Tues",
      date: 26,
      times: ["08:00", "09:00", "10:00"],
      active: "09:00",
      colActive: true,
    },
    { day: "Wed", date: 27, times: ["12:00", "-", "13:00"] },
    {
      day: "Thurs",
      date: 28,
      times: ["10:00", "11:00", "-"],
      highlight: "11:00",
    },
    { day: "Fri", date: 29, times: ["-", "14:00", "16:00"] },
    {
      day: "Sat",
      date: 30,
      times: ["12:00", "14:00", "15:00"],
      range: ["12:00", "09:00"],
    },
    {
      day: "Sun",
      date: 31,
      times: ["09:00", "10:00", "11:00"],
      range: ["12:00", "09:00"],
      disable: true,
    },
  ];

  return (
    <section className={styles.calendar}>
      <div className={styles.calCont}>
        <h4>October 2021</h4>
        <div className={styles.arrowFill}>
          <RiArrowLeftFill />
          <RiArrowRightFill />
        </div>
      </div>
      <div className={styles.schedule}>
        {days.map(
          (
            { day, date, times, active, highlight, range, colActive, disable },
            index
          ) => (
            <div
              key={index}
              className={styles.dayColumn}
              style={{
                backgroundColor: colActive ? "#c8e7fa" : "none",
                borderRadius: colActive ? "10px" : "0px",
                padding: colActive ? "10px 6px" : "10px 0px",
              }}
            >
              <div
                className={styles.day}
                style={{ opacity: disable ? "0.3" : "1" }}
              >
                {day}
              </div>
              <div
                className={styles.date}
                style={{ opacity: disable ? "0.3" : "1" }}
              >
                {date}
              </div>
              <div className={styles.times}>
                {times.map((time, idx) => (
                  <div
                    key={idx}
                    style={{ opacity: disable ? "0.3" : "" }}
                    className={`${styles.time} 
                    ${active === time ? styles.activeTime : ""} 
                    ${highlight === time ? styles.highlightTime : ""} 
                    ${range && range.includes(time) ? styles.rangeTime : ""}
                `}
                  >
                    {time}
                    {(highlight === time ||
                      (range && range.includes(time))) && (
                      <span
                        style={{
                          color: "#FFF",
                          fontWeight: 700,
                          height: "8px",
                        }}
                      >
                        *
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
      <div className={styles.cardContainerDen}>
        <div className={`${styles.cardDen} ${styles.dentist}`}>
          <div className={styles.titleDen}>
            Dentist <span className={styles.emoji}>🦷</span>
          </div>
          <div className={styles.timeTask}>09:00–11:00</div>
          <div className={styles.doctor}>Dr. Cameron Williamson</div>
        </div>

        <div className={`${styles.cardDen} ${styles.physio}`}>
          <div className={styles.titleDen}>
            Physiotherapy Appointment <span className={styles.emoji}>💪</span>
          </div>
          <div className={styles.timeTaskApp}>11:00–12:00</div>
          <div className={styles.doctor}>Dr. Kevin Djones</div>
        </div>
      </div>
    </section>
  );
};

export default CalendarView;
