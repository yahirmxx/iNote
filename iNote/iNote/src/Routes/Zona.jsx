import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Zona.css";

export const Zona = () => {
  const { busqueda } = useParams();
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/ciudad/${busqueda}`)
      .then((response) => response.json())
      .then((data) => {
        setNoticias(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, [busqueda]);

  return (
    <>
      <div className="container">
        <div className="">
          <h4>Estas buscando noticias en {busqueda}</h4>
          {loading ? (
            <p>Cargando noticias...</p>
          ) : (
            <div>
              <div>
                {noticias.map((noticia) => (
                  <section className="">
                    <div className="">
                      <h1 className="title">{noticia.titulo}</h1>
                      <p className="">by {noticia.autor  + " - Noticia en " + noticia.ciudad}</p>

                      <img className="Img" src={noticia.img_url} />

                      <div className="card2">
                        <h3 className="">{noticia.descripcion}</h3><br />
                        <p className="">Fecha: {noticia.fecha}</p>
                      </div>
                      <div className="divider"></div>

                    </div>
                  </section>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
