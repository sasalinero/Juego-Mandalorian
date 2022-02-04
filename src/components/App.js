import "../styles/main.scss";
import { useState } from "react";
//Incluimos estos componentes para la gestion del router
import { Route, Routes } from "react-router-dom";
//Aquí importamos los componentes
import Layout from "./Layout";
import Pieces from "./Pieces";
import Game from "./Game";
import Rules from "./Rules";
//import data from "./data.json";
import Start from "./Start";

function App() {
  let grogu = 0;
  let rana = 3;
  let huevo = 3;
  let galleta = 3;
  let cesped = [0, 0, 0, 0, 0, 0];
  let dado = ["rana", "huevo", "galleta", "grogu"];

  console.log(dado);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route
          path="/game"
          element={
            <Game
              ranaPrueba={rana}
              huevoPrueba={huevo}
              galletaPrueba={galleta}
              cespedPrueba={cesped}
              dadoPrueba={dado}
            />
          }
        />
        <Route path="/pieces" element={<Pieces />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/start" element={<Start />} />
      </Routes>

      <p>Hola mundo</p>
    </div>
  );
}

export default App;
