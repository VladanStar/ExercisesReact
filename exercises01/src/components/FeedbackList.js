import React from "react";
import FeedbackItem from "./FeedbackItem";
import {useContext} from "react";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackList({ handleDelete }) {
  const {feedback} = useContext(FeedbackContext);
  console.log(feedback);
  if (!feedback || feedback.lenth === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default FeedbackList;
