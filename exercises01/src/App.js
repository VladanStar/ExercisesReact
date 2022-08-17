import {useState} from "react"
import './App.css';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import Card from "./components/shared/Card";

function App() {

  const[feedback, setFeedback] = useState(FeedbackData)
  return (
   <>
   <Header />
    <div className="container">
    <FeedbackList feedback= {feedback} />
    <Card>
      Hello World
    </Card>
    </div>
    </>
  );
}

export default App;
