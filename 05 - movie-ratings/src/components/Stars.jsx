import { useState } from "react";
import { FaStar } from "react-icons/fa";

function Stars({ noOfStars }) {
  const [hover, setHover] = useState(0)
  const [rating, setRating] = useState(0)

  function handleClick(getCurrentIndex){
    setRating(getCurrentIndex);
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
            className={index <= (hover || rating) ? "active stars" : "inactive stars" }
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseHover(index)}
            onMouseLeave={() => handleMouseLeave()}
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
