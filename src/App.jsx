import { useState, useEffect } from "react";
import CharacterList from "./components/CharacterList";
import BounceLoader from "react-spinners/BounceLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="container">
      {loading ? (
        <BounceLoader id="loader" color={"#3C70FF"} size={150} />
      ) : (
        <>
          {/* <h1 className="tituloPag">Rick and Morty</h1> */}
          <div className="tituloPag"><img src="../public/logo.png" alt="Rick and Morty" /></div>
          <CharacterList />
        </>
      )}
    </div>
  );
}

export default App;
