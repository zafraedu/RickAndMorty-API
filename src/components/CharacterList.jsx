import { useEffect, useState } from "react";
import Character from "./Character";
import Page from "./Page";

const CharacterList = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacter(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div>
      <Page page={page} setPage={setPage} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="characterList">
          {character.map((e) => (
            <Character key={e.id} value={e} />
          ))}
        </div>
      )}
      <Page page={page} setPage={setPage} />
    </div>
  );
};
export default CharacterList;
