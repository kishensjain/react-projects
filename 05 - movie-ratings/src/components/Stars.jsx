import { useState } from "react";
import { FaStar } from "react-icons/fa";

function Stars({ noOfStars, onRate, currentRating }) {
  const [hover, setHover] = useState(0)

  function handleClick(getCurrentIndex){
    if(onRate) onRate(getCurrentIndex)
  }

  function handleMouseHover(getCurrentIndex){
    setHover(getCurrentIndex)
  }

  function handleMouseLeave(){
    setHover(currentRating);
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
            className={`star ${index <= (hover || currentRating) ? "active" : "inactive"}`}
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
