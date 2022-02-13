import React from "react";
import styles from "./Header.module.css";
import { BurgerSVG } from "../../Assets/IconsSVG";
const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/742/6812533742_e1929b3c-4d04-4a32-8f7b-195fa85bcd48.png?cb=1644721829" />
      </div>
      <div className={styles.menu}>
        <BurgerSVG />
      </div>
    </div>
  );
};

export default Header;
