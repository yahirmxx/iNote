import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2023 iNote. Todos los derechos reservados.</p>
        <a href="/" className={styles.inoeLink}>
          iNote
        </a>
      </div>
    </footer>
  );
};

