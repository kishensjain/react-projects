import { useState } from "react";
import StarRating from "./StarRating";

function MovieItem({ movie, isSelected, onClick }) {
  const [rating, setRating] = useState({});

  return (
    <div className="item">
      <div className="title"
        onClick = {onClick}
        role = "button"
        tabIndex={0}
        aria-expanded = {isSelected}
        onKeyDown={(e)=>{
          if(e.key === "Enter" || e.key === " ") onClick()
        }}
        >
        <h3>{movie.name}</h3>
        <span>{isSelected ? "-" : "+"}</span>
      </div>
      {isSelected && (
        <>
        <div className="movie-description">{movie.description}</div>
        <StarRating
          noOfStars={10}
          userRating = {rating[movie.id]}
          setUserRating={(newRating) => {
            // Update the rating for the current movie
            setRating(prev => ({ ...prev, [movie.id]: newRating }));
          }}
        />
        </>
      )}
    </div>
  );
}

export default MovieItem;
