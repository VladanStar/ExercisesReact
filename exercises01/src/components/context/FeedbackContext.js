import React from "react";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from context 1",
      rating: 7,
    },
    {
        id: 2,
        text: "This item is from context 2",
        rating: 9,
      },
      {
        id: 3,
        text: "This item is from context 3",
        rating: 10,
      },
      {
        id: 4,
        text: "This item is from context 4",
        rating: 6,
      },
      {
        id: 5,
        text: "This item is from context 5",
        rating: 10,
      },
  ]);
  const [feedbackEdit,setFeedbackEdit] = useState({
    item:{},
    edit:false,
  })
  const deleteFeedback = (id) => {
    console.log("App", id);
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const editFeedback = (item) =>{
    setFeedbackEdit({
        item,
        edit:true
    })
  }

  const addFeedback = (newFeedback) => {
    // newFeedback.id = uuidv4()
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
