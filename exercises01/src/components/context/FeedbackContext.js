import React from "react";
import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoadding, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const deleteFeedback = (id) => {
    console.log("App", id);
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feeback
  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:5000/feedback?_sort=id&_order=desc`
    );
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  const addFeedback = (newFeedback) => {
    const response = fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "aplication:json"
      },
       body: JSON.stringify(newFeedback)
    }
    
    )
    // newFeedback.id = uuidv4()
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };
  //Update feedback
  const updateFeedback = (id, updItem) => {
    console.log(id);
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoadding,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
