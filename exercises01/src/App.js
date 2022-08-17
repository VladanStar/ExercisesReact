import {useState} from "react"
import './App.css';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

function App() {

  const[feedback, setFeedback] = useState(FeedbackData)
  return (
   <>
   <Header />

    <FeedbackList feedback= {feedback} />
   
    </>
  );
}

export default App;
