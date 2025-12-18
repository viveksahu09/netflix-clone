import MovieSlider from "./MoveSlider";
import "../CSS/Home.css";
import "../CSS/MoveSlider.css";
import logo from "../assets/logo.png";
import Reason from "./Reason";
import { Link } from "react-router-dom";
import { useRef } from "react";

function HomePage() {

  const inputRef = useRef(null)

  const inputFocus =()=>{
    inputRef.current.focus()
  }

  return (
    <div>
      <div className="hero">
        <div className="background-img">
          <div className="header">
            <div className="logo">
              <Link to="/in/">
                <img src={logo} alt="Logo" height="42px" />
              </Link>
            </div>
            <div className="header-section">
              <select className="select-language">
                <option>English</option>
                <option>Hindi</option>
              </select>
              <button className="header-btn">
                <Link to='/in/login' style={{color:"white"}}>Sign In</Link>
              </button>
            </div>
          </div>
          <div className="hero-contant">
            <div className="contant">
              <div className="contant-h1">
                <h1>Unlimited movies, TV shows and more</h1>
                <p id="con-h-p">Starts at ₹149. Cancel at any time.</p>
              </div>
              <p id="con-p">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>
            <div className="email-form">
              <input ref={inputRef} type="email" placeholder="Email address" />
              <button onClick={inputFocus}>Get Started &gt;</button>
            </div>
          </div>
        </div>

        <div className="slider-container">
          <MovieSlider />
          <Reason />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
