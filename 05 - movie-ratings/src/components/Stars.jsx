import { useState } from "react";
import { FaStar } from "react-icons/fa";

function Stars({ noOfStars, onRate }) {
  const [hover, setHover] = useState(0)
  const [rating, setRating] = useState(0)

  function handleClick(getCurrentIndex){
    setRating(getCurrentIndex);
    if(onRate) onRate(getCurrentIndex)
  }

  function handleMouseHover(getCurrentIndex){
    setHover(getCurrentIndex)
  }

  function handleMouseLeave(){
    setHover(rating);
  }

  return (
    <div className="stars">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            tabIndex={0}
            role="radio"
            aria-label = {`Rate ${index} star${index > 1 ? "s" : ""}`}
            className={`star ${index <= (hover || rating) ? "active" : "inactive"}`}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseHover(index)}
            onMouseLeave={() => handleMouseLeave()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleClick(index);
            }}
            size={30}
          />
        );
      })}
    </div>
  );
}

export default Stars;

{
  /* <p>Thank you for rating!</p> */
}
