import React from "react";
import styles from "../../styles/components/HealthStatusCards.module.css";
import lungs from "../../assets/lungs.png";
import tooth from "../../assets/tooth.svg";
import bone from "../../assets/bone.png";
import { FaArrowRight } from "react-icons/fa";

const cards = [
  {
    label: "Lungs",
    date: "Date: 26 Okt 2021",
    status: "critical",
    image: lungs,
  },
  {
    label: "Teeth",
    date: "Date: 26 Okt 2021",
    status: "healthy",
    image: tooth,
  },
  { label: "Bone", date: "Date: 26 Okt 2021", status: "critical", image: bone },
];

const HealthStatusCards = () => (
  <div className={styles.cards}>
    {cards.map((card, idx) => (
      <div key={idx} className={styles.card}>
        <div className={styles.cardCont}>
          <img src={card.image} alt={card.label} className={styles.imageCont} />
          <div className={styles.title}>{card.label}</div>
        </div>
        <div className={styles.date}>{card.date}</div>
        <div className={`${styles.status} ${styles[card.status]}`}></div>
      </div>
    ))}
    <div className={styles.detailsCont}>
      <div className={styles.details}>Details</div>
      <FaArrowRight className={styles.rightArrowIcon} />
    </div>
  </div>
);

export default HealthStatusCards;
