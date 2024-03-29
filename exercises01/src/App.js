// import {v4 as uuidv4} from "uuid'";
import React from "react";
// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
// import FeedbackItem from "./components/FeedbackItem";
// import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
// import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./components/context/FeedbackContext";

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />

            <Route path="/about" element={<AboutPage />}>
              This is the about route
            </Route>
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
