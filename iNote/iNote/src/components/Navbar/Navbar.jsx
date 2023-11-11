import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const handleBuscarClick = () => {
    navigate(`/zona/${busqueda}`);
  };
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        iNote
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/close.png")
              : getImageUrl("nav/menu.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <div className={styles.searchbox}>
              <input
                type="text"
                className={styles.searchinput}
                placeholder="Buscar noticias por ciudad"
                onChange={(e) => setBusqueda(e.target.value)}
              />
              <a>
                <button
                  className={styles.searchbutton}
                  onClick={handleBuscarClick}
                >
                  Buscar
                </button>
              </a>
            </div>
          </li>
          <li>
            <a href="/">Ultimas noticias</a>
          </li>
          <li>
            <a href="/about">Acerca de</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
