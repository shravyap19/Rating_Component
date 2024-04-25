// eslint-disable-next-line react/prop-types
function ThankyouCard({ feedbackValue }) {
  return (
    <div className="thank-you-grid">
      <img className="thank-you-img" src="./illustration-thank-you.svg" />
      <p className="feedback-result">You selected {feedbackValue} out of 5</p>
      <p className="Thank-you-note">Thank you!</p>
      <p className="support-message">
        We really appreciate the time you took to rate our service. Your
        feedback is crucial in helping us continue to improve and provide you
        with the best possible experience.If you ever need more support, don’t
        hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankyouCard;
