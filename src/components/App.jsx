import "../scss/App.scss";
import Header from "./Header";
import Board from "./Board";
import Warehouse from "./Warehouse";
import Dice from "./Dice";
import Reset from "./Reset";
import Form from "./Form";
import { useState } from "react";
import PropTypes from "prop-types";

function App() {
  const [groguPosition, setGroguPosition] = useState(0);
  const [mercancias, setMercancias] = useState(["Huevo", "Galleta", "Rana"]);
  const [gameMessage, setGameMessage] = useState("En curso");
  const [name, setName] = useState("");
  const handleChange = (value) => {
    setName(value);
  };
  const rollDice = () => {
    const diceResult = Math.floor(Math.random() * 4) + 1;
    if (diceResult === 4) {
      setGroguPosition((prevPosition) => prevPosition + 1);
      setGameMessage("Grogu ha avanzado una casilla.");
    } else {
      const removedItem = mercancias[diceResult - 1];
      setMercancias((prevMercancias) =>
        prevMercancias.filter((_, index) => index !== diceResult - 1)
      );
      setGameMessage(`Se ha descargado la mercancía: ${removedItem}`);
    }
  };

  return (
    <>
      <Header />
      <main className="page">
        <Form onName={handleChange} />
        <Board />
        <Dice />
        <Warehouse />
        <Reset />
      </main>
    </>
  );
}

export default App;
