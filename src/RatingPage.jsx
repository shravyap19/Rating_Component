import { useState } from "react";
import ThankyouCard from "./ThankyouCard";

function RatingPage() {
  let [active, setActive] = useState(null);
  let [feedbackValue, setFeedbackvalue] = useState("");
  let [isSubmitted, setIsSubmitted] = useState(false);
  let [isInvalidInput, setIsInvalidInput] = useState(false);
  function handleRatingBtnClick(number) {
    setActive(number);
    setFeedbackvalue(number);
  }

  function submit() {
    if (feedbackValue > 0) {
      setIsInvalidInput(false);
      setIsSubmitted(true);
    } else {
      setIsInvalidInput(true);
    }
  }

  return (
    <div>
      {!isSubmitted ? (
        <div>
          <div className="circle">
            <img className="star" src="./icon-star.svg" />
          </div>
          <p className="main-title"> How did we do?</p>
          <p className="feedback-text">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="ratings">
            {[1, 2, 3, 4, 5].map((number) => (
              <button
                key={number}
                className={`rating-btn ${active === number ? "active" : ""}`}
                onClick={() => handleRatingBtnClick(number)}
              >
                {number}
              </button>
            ))}
          </div>
          <button onClick={submit} className="submit-btn">
            Submit
          </button>
          {isInvalidInput && (
            <p className="error-msg">Enter a valid feedabck</p>
          )}
        </div>
      ) : (
        <div>
          <ThankyouCard feedbackValue={feedbackValue} />
        </div>
      )}
    </div>
  );
}

export default RatingPage;
