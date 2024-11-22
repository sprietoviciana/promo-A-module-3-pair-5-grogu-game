function Form({ onName }) {
  const handleChangeName = (event) => {
    onName(event.target.value);
  };
  return (
    <div>
      <form action="">
        <label htmlFor="name">Nombre</label>
        <input id="name" type="text" onChange={handleChangeName} />
      </form>
    </div>
  );
}

export default Form;
