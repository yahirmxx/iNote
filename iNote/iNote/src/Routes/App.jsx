import { useState } from "react";
import { Main } from "../components/Main/Main";
import { All } from "../components/All/All";
import { Carousel } from "../components/Carousel/Carousel";
import styles from "../App.module.css";

export const App = () => {
  return (
    <>
      <Main />
      <All />
      <Carousel />
    </>
  );
}

