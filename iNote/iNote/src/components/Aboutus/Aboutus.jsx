import React from "react";
import styles from "./About.module.css";

export const Aboutus = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.title}>Acerca de iNote</div>
          <p className={styles.descripcion}>
            iNote es un portal de noticias dedicado a brindar información
            precisa, oportuna y variada que abarca desde eventos locales hasta
            noticias globales. Con un compromiso inquebrantable con la
            integridad periodística, iNote se ha ganado la confianza de sus
            lectores al ofrecer una cobertura imparcial y objetiva. Explora
            nuestro sitio para descubrir una amplia gama de categorías, desde
            ciencia y tecnología hasta cultura y deportes. iNote se esfuerza por
            mantener a sus usuarios informados sobre los acontecimientos más
            relevantes de la actualidad, presentando noticias de manera clara y
            accesible.
          </p>
          <p className={styles.descripcion}>
            Además de las noticias de última hora, iNote se enorgullece de
            ofrecer análisis profundos, reportajes especiales y entrevistas
            exclusivas con expertos y líderes de opinión. Nuestro objetivo es
            proporcionar a nuestros lectores una comprensión completa de los
            eventos que dan forma a nuestro mundo. La plataforma iNote está
            diseñada para adaptarse a tus preferencias, brindándote una
            experiencia personalizada. Navega por nuestras secciones temáticas,
            utiliza nuestras funciones de búsqueda avanzada y mantente conectado
            con las noticias a través de nuestras notificaciones instantáneas.
            En iNote, creemos en el poder de la información para transformar la
            manera en que entendemos y participamos en el mundo que nos rodea.
            Únete a nosotros en este viaje informativo mientras exploramos
            juntos los titulares, las historias y los acontecimientos que
            definen nuestra era. iNote: Tu ventana al mundo de las noticias,
            siempre abierta.
          </p>
          <div className={styles.divider}></div>
        </div>
      </div>
    </>
  );
};
