import StarRating from "./StarRating";

function MovieItem({ movie, isSelected, onClick }) {
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
        <StarRating/>
        </>
      )}
    </div>
  );
}

export default MovieItem;
