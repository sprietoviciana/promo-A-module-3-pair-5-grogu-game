import "../scss/App.scss";

function App() {
  return (
    <>
      <header>
        <h1>¡Cuidado con Grogu!</h1>
      </header>
      <main className="page">
        <section className="Nameboard">
          <div className="cell">
            <div className="grogu">:huellas:</div>
          </div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
        </section>
        <section>
          <button className="dice">Lanzar Dado</button>
          <div className="game-status">En curso</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">:galleta:</div>
          <div className="goods-item">:galleta:</div>
          <div className="goods-item">:galleta:</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">:huevo:</div>
          <div className="goods-item">:huevo:</div>
          <div className="goods-item">:huevo:</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">:rana:</div>
          <div className="goods-item">:rana:</div>
          <div className="goods-item">:rana:</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </>
  );
}

export default App;
