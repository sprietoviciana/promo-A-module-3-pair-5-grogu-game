import Grogu from "./Grogu";

function Board() {
  //Array(7).fill(null).map();

  return (
    <section className="board">
      <div className="cell">
        <Grogu />
      </div>
    </section>
  );
}
export default Board;
