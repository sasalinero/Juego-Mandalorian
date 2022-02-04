import React from "react";
import { Link } from "react-router-dom";
import "../styles/rules.scss";
const Rules = () => {
  return (
    <div>
      <Link to="/">
        <button>MENU</button>
      </Link>
      <h1>Reglas del Juego</h1>
      <p>
        El juego es muy sencillo. Dispondremos de 6 casillas que representan un
        camino en la zona de carga de la Razor Crest que lleva hasta el armario
        donde se encuentra segura la mercancía. De este modo tendremos 7
        casillas, 6 del camino y una que representa al armario: 🔲🔲🔲🔲🔲🔲❎
        <p>
          Durante el viaje has hecho muy bien tu trabajo pero ahora debes vaciar
          el armario. Para ello deberás descargar la mercancía poco a poco. Este
          es el momento más delicado ya que Grogu puede aprovechar y llegar
          hasta el armario. Si eso ocurre se comerá lo que encuentre y Mando
          perderá la oportunidad de saber dónde esta Ahsoka. Ergo, te has
          quedado sin recompensa.
        </p>
        <p>
          Además de esas 7 piezas tendrás tres recipientes donde se guarda cada
          tipo de mercancía.
        </p>
        <p>
          De esta manera quedaría:
          <ul>
            <li>
              <strong> Recipiente de las galleta_azuls:</strong> Tendrá 3 cajas
              de galleta_azuls azules dentro
            </li>
            <li>
              <strong>Recipiente de los huevo_blancos de rana_verde:</strong>{" "}
              Tendrá dentro 3 huevo_blancos de rana_verde (sin fertilizar){" "}
            </li>
            <li>
              {" "}
              <strong>Recipiente de las rana_verdes:</strong> Tendrá dentro 3
              rana_verdes
            </li>
          </ul>
        </p>
        <p>
          Además de estas piezas tendremos <strong>un dado de 5 caras</strong>{" "}
          donde cada cara representa una de las siguientes acciones:
          <ul>
            <li> Descargas una caja de galleta_azuls azules 🍪</li>
            <li>
              Descargas un huevo_blanco de rana_verde (con mucho cuidado) 🥚
            </li>
            <li>Descargas una rana_verde 🐸</li>
            <li>Grogu se mueve una casilla 👣</li>
          </ul>
        </p>
        <p> Además habrá una ficha que represente dónde está Grogu.</p>
        <p>
          <strong>
            Ganarás el juego si consigues descargar toda la mercancía.
            <p> Perderás si Grogu llega a la última casilla (el armario).</p>
          </strong>{" "}
        </p>
      </p>
    </div>
  );
};

export default Rules;
