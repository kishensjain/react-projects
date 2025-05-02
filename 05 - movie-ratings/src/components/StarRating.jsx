import React from "react";
import { useState } from "react";
import Stars from "./Stars";
import { FaTrashAlt } from "react-icons/fa";

function StarRating({ noOfStars = 10, userRating, setUserRating }) {
  const willRate = userRating !==  null;

  return (
    <div className="star-rating">
      {!willRate && (
        <button
          className="btn"
          onClick={() => setUserRating(0)}
          aria-label="Rate the movie"
        >
          Rate the movie
        </button>
      )}
      {willRate && (
        <>
          <Stars noOfStars={noOfStars} onRate={setUserRating}  currentRating = {userRating}/>
          {userRating >0 && (
            <p>
              You rated this movie {userRating} out of {noOfStars} stars.
            </p>
          )}
          <button
            className="btn remove-rating"
            onClick={() => setUserRating(null)}
            aria-label="Cancel rating"
          >
            <FaTrashAlt /> Cancel
          </button>
        </>
      )}
    </div>
  );
}

export default StarRating;
