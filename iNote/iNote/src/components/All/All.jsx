import React, { useState, useEffect } from "react";
import { AllCard } from "./AllCard";

import styles from "./All.module.css";

export const All = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/last")
      .then((response) => response.json())
      .then((data) => {
        setNoticias(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <section className={styles.container} id="design">
      <h2 className={styles.title}>Categorías</h2>
      <h5 className={styles.Subtitle}>Las ultimas noticias de todo para ti</h5>
      <div className={styles.projects}>
        {noticias.map((noticia, id) => {
          return <AllCard key={id} noticias={noticia} />;
        })}
      </div>
    </section>
  );
};
