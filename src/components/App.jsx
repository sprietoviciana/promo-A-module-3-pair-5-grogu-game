import "../scss/App.scss";
import Header from "./Header";
import Board from "./Board";
import Warehouse from "./Warehouse";
import Dice from "./Dice";
import Reset from "./Reset";

function App() {
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
