import React from "react";
import styles from "./DefaultOverlay.module.css";
interface props {
  label: string;
  description: string;
}
const DefaultOverlay: React.FC<props> = ({ label, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>Custom Order</button>
        <button
          style={{ background: "#fff", color: "#1a1720", opacity: "0.65" }}
          className={`${styles.button}`}
        >
          Existing Inventory
        </button>
      </div>
    </div>
  );
};

export default DefaultOverlay;
