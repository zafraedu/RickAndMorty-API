import CharacterText from "./CharacterText";
const Character = ({ value }) => {
  return (
    <div className="characterCard">
      <img src={value.image} />
      <CharacterText value={value} />
    </div>
  );
};
export default Character;
