import React from "react";
import { useState } from "react";
import Stars from "./Stars";

function StarRating({ noOfStars = 10 }) {
  const [willRate, setWillRate] = useState(false);

  return (
    <div className="star-rating">
      {!willRate && (
        <button className="btn" onClick={() => setWillRate(true)}>
          Rate the movie
        </button>
      )}
      {willRate && <Stars noOfStars={10}/>}
    </div>
  );
}

export default StarRating;
