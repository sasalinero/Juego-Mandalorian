import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/game.scss";
import green_grass from "../images/cesped.png";
import grogu_image from "../images/yoda.jpg";
import dice_start from "../images/dado.jpg";
import blue_cookie from "../images/galleta.jpg";
import white_egg from "../images/huevo.jpg";
import green_frog from "../images/rana.png";
import recipient from "../images/vasija.png";

import wardrobe from "../images/armario2.png";
import arrow from "../images/flecha.png";

const Game = () => {
  /////////////////////////////////////////VARIABLES DE ESTADO/////////////////////////////////////////////////////////////////////////////////

  const [frog, setFrog] = useState(3);
  const [egg, setEgg] = useState(3);
  const [cookie, setCookie] = useState(3);
  const [dice, setDice] = useState(["frog", "egg", "cookie", "grogu"]);
  const [grogu, setGrogu] = useState(0);

  const [classFrog1, setClassFrog1] = useState("");
  const [classFrog2, setClassFrog2] = useState("");
  const [classFrog3, setClassFrog3] = useState("");

  const [classEgg1, setClassEgg1] = useState("");
  const [classEgg2, setClassEgg2] = useState("");
  const [classEgg3, setClassEgg3] = useState("");

  const [classCookie1, setClassCookie1] = useState("");
  const [classCookie2, setClassCookie2] = useState("");
  const [classCookie3, setClassCookie3] = useState("");

  const [classMoveGrogu1, setClassMoveGrogu1] = useState("hidden");
  const [classMoveGrogu2, setClassMoveGrogu2] = useState("hidden");
  const [classMoveGrogu3, setClassMoveGrogu3] = useState("hidden");
  const [classMoveGrogu4, setClassMoveGrogu4] = useState("hidden");
  const [classMoveGrogu5, setClassMoveGrogu5] = useState("hidden");
  const [classMoveGrogu6, setClassMoveGrogu6] = useState("hidden");

  ///////////////////////////////////////////////////////////FUNCIONES DEL SWITCH PARA ELIMINAR COMIDAS DEL ARMARIO//////////////////////////////////////////////////////
  ////////////////ELIMINAR LAS RANAS///////////////////
  const removeFrog = () => {
    if (frog === 3) {
      setClassFrog3("hidden");
    } else if (frog === 2) {
      setClassFrog2("hidden");
    } else if (frog === 1) {
      setClassFrog1("hidden");
    } else if (frog === 0) {
      moveGrogu();
    }
    setFrog(frog - 1);
  };
  /////////////////////////ELIMINAR LOS HUEVOS////////////////////
  const removeEgg = () => {
    if (egg === 3) {
      setClassEgg3("hidden");
    } else if (egg === 2) {
      setClassEgg2("hidden");
    } else if (egg === 1) {
      setClassEgg1("hidden");
    } else if (egg === 0) {
      moveGrogu();
    }
    setEgg(egg - 1);
  };
  ///////////////////////ELIMINAR LAS GALLETAS/////////////////////
  const removeCookie = () => {
    if (cookie === 3) {
      setClassCookie3("hidden");
    } else if (cookie === 2) {
      setClassCookie2("hidden");
    } else if (cookie === 1) {
      setClassCookie1("hidden");
    } else if (cookie === 0) {
      moveGrogu();
    }
    setCookie(cookie - 1);
  };

  //////////////////////MOVER A GROGU//////////////////////////////////

  const moveGrogu = () => {
    setGrogu(grogu + 1);

    if (grogu === 0) {
      setClassMoveGrogu1("");
    } else if (grogu === 1) {
      setClassMoveGrogu2("");
      setClassMoveGrogu1("hidden");
    } else if (grogu === 2) {
      setClassMoveGrogu3("");
      setClassMoveGrogu2("hidden");
    } else if (grogu === 3) {
      setClassMoveGrogu4("");
      setClassMoveGrogu3("hidden");
    } else if (grogu === 4) {
      setClassMoveGrogu5("");
      setClassMoveGrogu4("hidden");
    } else if (grogu === 5) {
      setClassMoveGrogu6("");
      setClassMoveGrogu5("hidden");
    }
  };

  ////////////////////////////////////////CUANDO PRESIONO EL DADO/////////////////////////////////////////////////////////

  const handleClick = () => {
    let imagen = Math.floor(Math.random() * dice.length);
    let diceResult = dice[imagen];

    switch (diceResult) {
      case "frog":
        removeFrog();

        break;
      case "egg":
        removeEgg();
        break;
      case "cookie":
        removeCookie();
        break;
      case "grogu":
        moveGrogu();
        break;
      default:
        break;
    }
  };

  /////////////////////////////LO QUE SE PINTA////////////////////////////////////

  return (
    <div className="background_game">
      <Link to="/">
        <button>
          <img className="arrow" src={arrow} alt="arrow" />
        </button>
      </Link>{" "}
      <section className="display_dice">
        <button onClick={handleClick} className="dice">
          {" "}
          <img className="dice_imagen" src={dice_start} alt="dice" />
        </button>{" "}
      </section>{" "}
      <section className="grid">
        <img src={recipient} className="recipient2" alt="recipient" />
        <img src={recipient} className="recipient3" alt="recipient" />
        <img src={recipient} className="recipient1" alt="recipient" />
        <section className="grid_cookies">
          <img
            className={`cookie1 images_cookies ${classCookie1}`}
            src={blue_cookie}
            alt="blue_cookie"
          />
          <img
            className={`cookie2 images_cookies ${classCookie2}`}
            src={blue_cookie}
            alt="blue_cookie"
          />
          <img
            className={`cookie3 images_cookies ${classCookie3}`}
            src={blue_cookie}
            alt="blue_cookie"
          />
        </section>
        <img
          className={`images_egg ${classEgg1}`}
          src={white_egg}
          alt="white_egg"
        />
        <img
          className={`images_egg ${classEgg2}`}
          src={white_egg}
          alt="white_egg"
        />
        <img
          className={`images_egg ${classEgg3}`}
          src={white_egg}
          alt="white_egg"
        />

        <img
          className={`images_frog ${classFrog1}`}
          src={green_frog}
          alt="green_frog"
        />
        <img
          className={`images_frog ${classFrog2}`}
          src={green_frog}
          alt="green_frog"
        />
        <img
          className={`images_frog ${classFrog3}`}
          src={green_frog}
          alt="green_frog"
        />
        <img
          className={`grogu grogu1  ${classMoveGrogu1}`}
          src={grogu_image}
          alt="babgrogu"
        />
        <img
          className={`grogu grogu2  ${classMoveGrogu2}`}
          src={grogu_image}
          alt="babgrogu"
        />
        <img
          className={`grogu grogu3  ${classMoveGrogu3}`}
          src={grogu_image}
          alt="babgrogu"
        />
        <img
          className={`grogu grogu4  ${classMoveGrogu4}`}
          src={grogu_image}
          alt="babgrogu"
        />
        <img
          className={`grogu grogu5  ${classMoveGrogu5}`}
          src={grogu_image}
          alt="babgrogu"
        />
        <img
          className={`grogu grogu6  ${classMoveGrogu6}`}
          src={grogu_image}
          alt="babgrogu"
        />

        <img className="grass grass1" src={green_grass} alt="green_grass" />
        <img className="grass grass2" src={green_grass} alt="green_grass" />
        <img className="grass grass3" src={green_grass} alt="green_grass" />
        <img className="grass grass4" src={green_grass} alt="green_grass" />
        <img className="grass grass5" src={green_grass} alt="green_grass" />
        <img className="grass grass6" src={green_grass} alt="green_grass" />
        <img className="wardrobe" src={wardrobe} alt="wardrobe" />

        {/* <img className="wardrobe" src={wardrobe} alt="wardrobe" /> */}
      </section>
    </div>
  );
};
export default Game;
