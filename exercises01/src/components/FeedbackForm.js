import React from "react";
import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackForm() {

  const { addFeedback, feedbackEdit,updateFeedback } = useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);


  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 carachters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if(feedbackEdit.edit == true){
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }
      else{

      }
      addFeedback(newFeedback)
     
    }
    setText('')
  };
  useEffect(()=>{
// console.log("Hello")
if(feedbackEdit.edit ===true){
  setBtnDisabled(false)
  setText(feedbackEdit.item.text);
  setRating(feedbackEdit.item.rating)
}

  },[feedbackEdit])
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={() => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            SEND
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
