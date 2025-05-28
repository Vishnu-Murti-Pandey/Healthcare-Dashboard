import React from "react";
import styles from "../../styles/components/AnatomySection.module.css";
import humanMuscularSystem from "../../assets/human-muscular-system.png";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";

const AnatomySection = () => (
  <div className={styles.anatomy}>
    <FaMagnifyingGlassPlus
      style={{ position: "absolute", top: "5%", right: "55%", color:"#7d838f" }}
    />
    <img src={humanMuscularSystem} alt="Anatomy" className={styles.image} />
    <div className={`${styles.label} ${styles.heart}`}>❤️ Healthy Heart</div>
    <div className={`${styles.label} ${styles.leg}`}>🦵 Healthy Leg</div>
  </div>
);

export default AnatomySection;
