import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ReactRoute from "./Routes/ReactRoute.jsx";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import MovieDetail from "./components/MovieDetail";
import MoveSlider from "./components/MoveSlider";
import ContactUs from "./components/ContactUs";
import FeedbackList from "./components/FeedbackList";

import "./App.css";
import "./CSS/Home.css";
import "./CSS/Login.css";
import "./CSS/MoveSlider.css";
import "./CSS/MovieDetail.css";
import "./CSS/ContactUs.css";

import backImg from './assets/back-img.jpg'; // path relative to App.jsx


function App() {
  return (
    <BrowserRouter>
      <ReactRoute />
        {/* <img src={backImg} alt="Background" /> */}
        
    </BrowserRouter>
  );
}

export default App;
