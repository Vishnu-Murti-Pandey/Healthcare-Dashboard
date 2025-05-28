import React from "react";
import styles from "../../styles/components/ActivityFeed.module.css";

const ActivityFeed = () => (
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <h2>Activity</h2>
      <span>3 appointment on this week</span>
    </div>

    <div className={styles.chart}>
      <div className={styles.day}>
        <div className={styles.bars}>
          <div
            className={`${styles.bar} ${styles.gray}`}
            style={{ height: "80px" }}
          ></div>
          <div
            className={`${styles.bar} ${styles.cyan}`}
            style={{ height: "40px", display: "flex", alignSelf: "center" }}
          ></div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            <div
              className={`${styles.bar} ${styles.gray}`}
              style={{ height: "20px" }}
            ></div>
            <div
              className={`${styles.bar} ${styles.gray}`}
              style={{ height: "20px" }}
            ></div>
          </div>
          <div
            className={`${styles.bar} ${styles.gray}`}
            style={{ height: "30px" }}
          ></div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexDirection: "column",
            }}
          >
            <div
              className={`${styles.bar} ${styles.cyan}`}
              style={{ height: "30px" }}
            ></div>
            <div
              className={`${styles.bar} ${styles.indigo}`}
              style={{ height: "40px" }}
            ></div>
          </div>
        </div>
        <div className={styles.dayLabel}>Mon</div>
      </div>
      <div className={styles.day}>
        <div className={styles.bars}>
          <div
            className={`${styles.bar} ${styles.indigo}`}
            style={{ height: "40px", display: "flex", alignSelf: "center" }}
          ></div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            <div
              className={`${styles.bar} ${styles.gray}`}
              style={{ height: "20px" }}
            ></div>
            <div
              className={`${styles.bar} ${styles.gray}`}
              style={{ height: "20px" }}
            ></div>
          </div>
          <div
            className={`${styles.bar} ${styles.cyan}`}
            style={{ height: "30px" }}
          ></div>
          <div
            className={`${styles.bar} ${styles.gray}`}
            style={{ height: "80px" }}
          ></div>
        </div>
        <div className={styles.dayLabel}>Tues</div>
      </div>
      <div className={styles.day}>
        <div className={styles.bars}>
          <div
            className={`${styles.bar} ${styles.gray}`}
            style={{ height: "40px", display: "flex", alignSelf: "center" }}
          ></div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            <div
              className={`${styles.bar} ${styles.cyan}`}
              style={{ height: "20px" }}
            ></div>
            <div
              className={`${styles.bar} ${styles.indigo}`}
              style={{ height: "20px" }}
            ></div>
          </div>
          <div
            className={`${styles.bar} ${styles.indigo}`}
            style={{ height: "30px" }}
          ></div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexDirection: "column",
            }}
          >
            <div
              className={`${styles.bar} ${styles.gray}`}
              style={{ height: "30px" }}
            ></div>
            <div
              className={`${styles.bar} ${styles.gray}`}
              style={{ height: "40px" }}
            ></div>
          </div>
        </div>
        <div className={styles.dayLabel}>Wed</div>
      </div>

      <div className={styles.day}>
        <div className={styles.bars}>
          <div
            className={`${styles.bar} ${styles.cyan}`}
            style={{ height: "40px", display: "flex", alignSelf: "center" }}
          ></div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            <div
              className={`${styles.bar} ${styles.cyan}`}
              style={{ height: "20px" }}
            ></div>
            <div
              className={`${styles.bar} ${styles.indigo}`}
              style={{ height: "20px" }}
            ></div>
          </div>
          <div
            className={`${styles.bar} ${styles.gray}`}
            style={{ height: "30px" }}
          ></div>
          <div
            className={`${styles.bar} ${styles.gray}`}
            style={{ height: "80px" }}
          ></div>
        </div>
        <div className={styles.dayLabel}>Thurs</div>
      </div>

      <div className={styles.day}>
        <div className={styles.bars}>
          <div
            className={`${styles.bar} ${styles.indigo}`}
            style={{ height: "40px", display: "flex", alignSelf: "center" }}
          ></div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            <div
              className={`${styles.bar} ${styles.gray}`}
              style={{ height: "20px" }}
            ></div>
            <div
              className={`${styles.bar} ${styles.gray}`}
              style={{ height: "20px" }}
            ></div>
          </div>
          <div
            className={`${styles.bar} ${styles.gray}`}
            style={{ height: "30px" }}
          ></div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexDirection: "column",
            }}
          >
            <div
              className={`${styles.bar} ${styles.cyan}`}
              style={{ height: "30px" }}
            ></div>
            <div
              className={`${styles.bar} ${styles.indigo}`}
              style={{ height: "40px" }}
            ></div>
          </div>
        </div>
        <div className={styles.dayLabel}>Fri</div>
      </div>

      <div className={styles.day}>
        <div className={styles.bars}>
          <div
            className={`${styles.bar} ${styles.cyan}`}
            style={{ height: "40px", display: "flex", alignSelf: "center" }}
          ></div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            <div
              className={`${styles.bar} ${styles.gray}`}
              style={{ height: "20px" }}
            ></div>
            <div
              className={`${styles.bar} ${styles.gray}`}
              style={{ height: "20px" }}
            ></div>
          </div>
          <div
            className={`${styles.bar} ${styles.indigo}`}
            style={{ height: "30px" }}
          ></div>
          <div
            className={`${styles.bar} ${styles.gray}`}
            style={{ height: "80px" }}
          ></div>
        </div>
        <div className={styles.dayLabel}>Sat</div>
      </div>

      <div className={styles.day}>
        <div className={styles.bars}>
          <div
            className={`${styles.bar} ${styles.gray}`}
            style={{ height: "40px", display: "flex", alignSelf: "center" }}
          ></div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            <div
              className={`${styles.bar} ${styles.cyan}`}
              style={{ height: "20px" }}
            ></div>
            <div
              className={`${styles.bar} ${styles.indigo}`}
              style={{ height: "20px" }}
            ></div>
          </div>
          <div
            className={`${styles.bar} ${styles.indigo}`}
            style={{ height: "30px" }}
          ></div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexDirection: "column",
            }}
          >
            <div
              className={`${styles.bar} ${styles.gray}`}
              style={{ height: "30px" }}
            ></div>
            <div
              className={`${styles.bar} ${styles.gray}`}
              style={{ height: "40px" }}
            ></div>
          </div>
        </div>
        <div className={styles.dayLabel}>Sun</div>
      </div>
    </div>
  </div>
);

export default ActivityFeed;
