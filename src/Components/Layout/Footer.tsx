import React from "react";
import styles from "./Footer.module.css";
const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>Interface-Clone</li>
        <li>made with ❤️</li>
        <li>by Micael Silveira</li>
      </ul>
    </div>
  );
};

export default Footer;
