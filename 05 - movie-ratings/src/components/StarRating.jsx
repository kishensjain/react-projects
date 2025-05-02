import React from "react";
import { useState } from "react";
import Stars from "./Stars";
import { FaTrashAlt } from "react-icons/fa";

function StarRating({ noOfStars = 10 }) {
  const [willRate, setWillRate] = useState(false);
  const [userRating, setUserRating] = useState(null);

  return (
    <div className="star-rating">
      {!willRate && (
        <button className="btn" onClick={() => setWillRate(true)}>
          Rate the movie
        </button>
      )}
      {willRate && (
        <>
          <Stars noOfStars={noOfStars} onRate={setUserRating} />
          {userRating && (
            <p>You rated this movie {userRating} out of {noOfStars} stars.</p>
          )}
          <button 
            className="btn remove-rating"
            onClick={() =>{ 
              setWillRate(false)
              setUserRating(null)
          }}
            aria-label="Cancel rating"
          ><FaTrashAlt/></button>
        </>
      )}
    </div>
  );
}

export default StarRating;
