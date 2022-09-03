import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";
import Spinner from "./shared/Spinner";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);
  // const {handleDelete} = useContext(FeedbackContext);
  console.log(feedback);
  if (!isLoading && (!feedback || feedback.lenth === 0)) {
    return <Spinner />
  }
  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
