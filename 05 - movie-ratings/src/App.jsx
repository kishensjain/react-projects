import { useState } from "react";
import movies from "./data";

function App() {
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(movieId) {
    setSelected(selected === movieId ? null : movieId);
  }

  function handleMultiSelection(movieId) {
    let copyMultiple = [...multiple];
    let findIdxOfCurrId = copyMultiple.indexOf(movieId);

    findIdxOfCurrId === -1
      ? copyMultiple.push(movieId)
      : copyMultiple.splice(findIdxOfCurrId, 1);
    setMultiple(copyMultiple);
  }

  return (
    <>
      <div className="container">
        <button
          className="btn"
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
          {enableMultiSelection
            ? "Disable Multiple Selection"
            : "Enable Multiple Selection"}
        </button>

        <div className="accordian">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <div className="item" key={movie.id}>
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(movie.id)
                      : () => handleSingleSelection(movie.id)
                  }
                  className="title"
                >
                  <h3>{movie.name}</h3>
                  <span>
                    {enableMultiSelection
                      ? multiple.indexOf(movie.id) !== -1
                        ? "-"
                        : "+"
                      : selected === movie.id
                      ? "-"
                      : "+"}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <h1>No Data Found</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
