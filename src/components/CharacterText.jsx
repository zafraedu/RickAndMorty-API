const CharacterText = ({ value }) => {
  const estado = {
    alive: { backgroundColor: "#55CD45" },
    unknow: { backgroundColor: "#dd0" },
    dead: { backgroundColor: "#D73C2E" },
  };
  return (
    <div className="characterText">
      <h2>{value.name}</h2>
      <p>
        <span
          className="status"
          style={
            value.status == "Alive"
              ? estado.alive
              : value.status == "Dead"
              ? estado.dead
              : estado.unknow
          }
        ></span>
        {value.status} - {value.species}
      </p>
      <div>
        <span>Origin:</span> <br /> {value.origin.name}
      </div>

      <div>
        <span>Gender:</span> <br /> {value.gender}
      </div>
    </div>
  );
};
export default CharacterText;
