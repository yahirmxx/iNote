import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./AllCard.module.css";

export const AllCard = ({ noticias }) => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <a href={noticias.link}>
          <img
            className={styles.image}
            src={noticias.img_url}
          />
        </a>
        <div className={styles.card2}>
          <h3 className={styles.title}>{noticias.tipo}</h3>
        </div>
      </div>

    </section>
  );
};
