import { useState, useEffect } from "react";
import Screen from "./Screen";

const Pokedex = () => {
  const [numPokemon, setNumPokemon] = useState(1);
  const [shiny, setShiny] = useState(false);
  const [viewFront, setViewFront] = useState(true);
  const [namePokemon, setNamePokemon] = useState("bulbasaur");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + numPokemon)
      .then((response) => response.json())
      .then((data) => setNamePokemon(data.name));
  }, [numPokemon]);

  const handleClickPrevious = () => {
    console.log(numPokemon);
    if (numPokemon === 1) {
      setNumPokemon(898);
    } else {
      setNumPokemon(numPokemon - 1);
    }
  };

  const handleClickNext = () => {
    if (numPokemon === 898) {
      setNumPokemon(1);
    } else {
      setNumPokemon(numPokemon + 1);
    }
  };

  return (
    <div id="pokedex">
      <div>
        <div id="circle1"></div>
        <div id="circle2" className="circleRed"></div>
        <div id="circle2" className="circleYellow"></div>
        <div id="circle2" className="circleGreen"></div>
      </div>
      <div id="screen-row">
        <div id="screen-border">
          <div id="top-screen-decoration">
            <div id="circle3" style={{ marginRight: "20px" }}></div>
            <div id="circle3" style={{ marginLeft: "20px" }}></div>
          </div>
          <Screen numPokemon={numPokemon} shiny={shiny} viewFront={viewFront} />
          <div id="bottom-screen-decoration">
            <div id="circle4"></div>
            <div id="menu-button">
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="22" y2="0.5" stroke="black" />
                <line y1="15.5" x2="22" y2="15.5" stroke="black" />
                <line y1="10.5" x2="22" y2="10.5" stroke="black" />
                <line y1="5.5" x2="22" y2="5.5" stroke="black" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div id="name-row">
        <div id="name-container">
          <div id="name-screen">{namePokemon}</div>
          <div id="buttons-container">
            <div id="button-red" onClick={() => setShiny(false)}>
              {shiny ? (
                <div className="light off"></div>
              ) : (
                <div className="light on"></div>
              )}
            </div>
            <div id="button-blue" onClick={() => setShiny(true)}>
              <div className={`light ${shiny ? "on" : "off"}`}></div>
            </div>
          </div>
          <div id="arrows-container">
            <div id="cross">
              {/*
                TO-DO: Al pulsar el boton izquierdo o derecho, la variable viewFront 
                debe establecerse al valor contrario del actual
              */}
              <div
                id="leftcross"
                onClick={() => {
                  console.log("Clicked left");
                  if (viewFront === false) setViewFront(true);
                }}
              >
                <div id="leftT"></div>
              </div>
              <div id="topcross" onClick={() => handleClickPrevious()}>
                <div id="upT"></div>
              </div>
              {/*
                TO-DO: Al pulsar el boton izquierdo o derecho, la variable viewFront 
                debe establecerse al valor contrario del actual
              */}
              <div
                id="rightcross"
                onClick={() => {
                  console.log("Clicked right");
                  if (viewFront === true) setViewFront(false);
                }}
              >
                <div id="rightT"></div>
              </div>
              <div id="midcross">
                <div id="midCircle"></div>
              </div>
              <div id="botcross" onClick={() => handleClickNext()}>
                <div id="downT"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
