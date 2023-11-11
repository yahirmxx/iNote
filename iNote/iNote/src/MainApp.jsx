import { Routes, Route } from "react-router-dom";
import { App } from "./Routes/App";
import { Zona } from './Routes/Zona'
import { Aboutus } from '../src/components/Aboutus/Aboutus'

import React from "react";

import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

function MainApp() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/zona/:busqueda" element={<Zona />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MainApp;
