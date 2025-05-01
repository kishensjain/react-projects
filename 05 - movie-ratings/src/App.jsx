import { useState } from "react";
import movies from "./data";

function App() {
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState(new Set());

  function handleSingleSelection(movieId) {
    setSelected(selected === movieId ? null : movieId);
  }

  function handleMultiSelection(movieId) {
    let newSet = new Set(multiple); // using set to improve lookup
    if(newSet.has(movieId)){
      newSet.delete(movieId);
    }else{
      newSet.add(movieId);
    }
    setMultiple(newSet);
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
                      ? multiple.has(movie.id)
                        ? "-"
                        : "+"
                      : selected === movie.id
                      ? "-"
                      : "+"}
                  </span>
                </div>
                {enableMultiSelection
                  ? multiple.has(movie.id) && (
                      <div className="movie-description">
                        {movie.description}
                      </div>
                    )
                  : selected ===
                    movie.id &&(
                      <div className="movie-description">
                        {movie.description}
                      </div>
                    )}
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
