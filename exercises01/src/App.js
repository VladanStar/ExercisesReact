import {useState} from "react"
import './App.css';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import FeedbackData from "./data/FeedbackData";

function App() {

  const[feedback, setFeedback] = useState(FeedbackData)
  return (
   <>
   <Header />

    <FeedbackItem />
    </>
  );
}

export default App;
