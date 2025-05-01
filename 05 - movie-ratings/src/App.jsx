import { useState } from "react";
import movies from "./data";
import MovieItem from "./components/MovieItem";

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
            {movies.map((movie) => (
              <MovieItem
                key = {movie.id}
                movie = {movie}
                isSelected = {enableMultiSelection ? multiple.has(movie.id) : selected === movie.id}
                onClick={() =>
                  enableMultiSelection
                    ? handleMultiSelection(movie.id)
                    : handleSingleSelection(movie.id)
                }
                />
              ))}
        </div>
      </div>
    </>
  );
}

export default App;
