import "../scss/App.scss";
import Header from "./Header";
import Board from "./Board";
import Warehouse from "./Warehouse";
import Dice from "./Dice";
import Reset from "./Reset";
//import React, { useState } from "react";

function App() {
  // const [groguPosition, setGroguPosition] = useState(0);
  // const [mercancias, setMercancias] = useState(['Huevo', 'Galleta', 'Rana']);
  // const [gameMessage, setGameMessage] = useState('En curso');
  // const rollDice = () => {
  //   const diceResult = Math.floor(Math.random() * 4) + 1;
  //   if (diceResult === 4)
  //     { setGroguPosition((prevPosition)=>prevPosition+1);
  //       setGameMessage('Grogu ha avanzado una casilla.');
  // }

  return (
    <>
      <Header />
      <main className="page">
        <Board />
        <Dice />
        <Warehouse />
        <Reset />
      </main>
    </>
  );
}

export default App;
