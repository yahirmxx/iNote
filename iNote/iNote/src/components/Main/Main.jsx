import React, { useState, useEffect } from "react";

import styles from "./Main.module.css";

import { getImageUrl } from "../../utils";

export const Main = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/last-noticias")
      .then((response) => response.json())
      .then((data) => {
        setNoticias(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Últimas Noticias</h1>
          <br />

          {loading ? (
            <p>Cargando...</p>
          ) : (
            <>
              <h1 className={styles.title2}>{noticias[0].titulo}</h1>
              <img
                className={styles.Img}
                src={noticias[0].img_url}
                alt="Imagen de noticia"
              />
              <p className={styles.description}>{noticias[0].descripcion}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};
