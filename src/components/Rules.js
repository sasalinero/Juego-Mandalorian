import React from "react";
import { Link } from "react-router-dom";
import "../styles/rules.scss";
import arrow from "../images/volverm.png";

const Rules = () => {
  return (
    <div className="background_rules">
      <h1 className="title">Reglas del Juego</h1>
      <Link to="/">
        <button>
          <img className="arrow" src={arrow} alt="arrow" />
        </button>
      </Link>{" "}
      <p className="text1">
        El juego es muy sencillo. Dispondremos de 6 casillas que representan un
        camino en la zona de carga de la Razor Crest que lleva hasta el armario
        donde se encuentra segura la mercancía. De este modo tendremos 7
        casillas, 6 del camino y una que representa al armario: 🔲🔲🔲🔲🔲🔲❎
        <p className="text2">
          Durante el viaje has hecho muy bien tu trabajo pero ahora debes vaciar
          el armario. Para ello deberás descargar la mercancía poco a poco. Este
          es el momento más delicado ya que Grogu puede aprovechar y llegar
          hasta el armario. Si eso ocurre se comerá lo que encuentre y Mando
          perderá la oportunidad de saber dónde esta Ahsoka. Ergo, te has
          quedado sin recompensa.
        </p>
        <p className="text3">
          Además de esas 7 piezas tendrás tres recipientes donde se guarda cada
          tipo de mercancía.
        </p>
        <p className="text4">De esta manera quedaría: </p>
        <ul>
          <li>
            Recipiente de las galletas azules: Tendrá 3 cajas de galletas azules
            azules dentro
          </li>
          <li>
            Recipiente de los huevo blancos de rana verde: Tendrá dentro 3
            huevos blancos de rana verde (sin fertilizar){" "}
          </li>
          <li> Recipiente de las rana verdes: Tendrá dentro 3 rana verdes</li>
        </ul>
        <p className="text5">
          Además de estas piezas tendremos un dado de 5 caras donde cada cara
          representa una de las siguientes acciones:
          <ul>
            <li> Descargas una caja de galletas azules 🍪</li>
            <li>
              Descargas un huevo blanco de rana verde (con mucho cuidado) 🥚
            </li>
            <li>Descargas una rana verde 🐸</li>
            <li>Grogu se mueve una casilla 👣</li>
            <li>Además habrá una ficha que represente dónde está Grogu.</li>
          </ul>
        </p>
        <ul className="win">
          <li>Ganarás el juego si consigues descargar toda la mercancía.</li>
          <li>
            Perderás si Grogu llega a la última casilla (el armario).
          </li>{" "}
        </ul>
      </p>
    </div>
  );
};

export default Rules;
