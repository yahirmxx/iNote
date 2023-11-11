import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/noticias")
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
        <h1 className={styles.title}>Descubre las últimas noticias</h1>
      </div>
      <div className={styles.carouselContainer}>
        {loading ? (
          <p>Cargando noticias...</p>
        ) : (
          <Slider {...settings} className={styles.slider}>
            {noticias.map((noticia) => (
              <div key={noticia.id}>
                <div>
                  <h1>{noticia.titulo}</h1>
                  <div className={styles.card}>
                    <img
                      src={noticia.img_url}
                      alt={noticia.titulo}
                      className={styles.Img}
                    />
                  </div>
                  <p>by {noticia.autor}</p>
                </div>
                <div className={styles.card2}>
                  <h3 className={styles.title2}>by {noticia.autor}</h3>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </>
  );
};
