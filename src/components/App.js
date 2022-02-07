import "../styles/main.scss";
//Incluimos estos componentes para la gestion del router
import { Route, Routes } from "react-router-dom";
//Aquí importamos los componentes
import Layout from "./Layout";
import Pieces from "./Pieces";
import Game from "./Game";
import Rules from "./Rules";
import Start from "./Start";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/game" element={<Game />} />
        <Route path="/pieces" element={<Pieces />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </div>
  );
}

export default App;
