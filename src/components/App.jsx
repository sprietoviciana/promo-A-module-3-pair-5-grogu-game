import "../scss/App.scss";
import Header from "./Header";
import Cells from "./Cells";
import Warehouse from "./Warehouse";
import Dices from "./Dices";
import Reset from "./Reset";

function App() {
  return (
    <>
      <Header />
      <main className="page">
        <Cells />
        <Dices />
        <Warehouse />
        <Reset />
      </main>
    </>
  );
}

export default App;
