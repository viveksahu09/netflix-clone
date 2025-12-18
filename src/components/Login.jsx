import { useRef, useState } from "react";
import "../CSS/Login.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const link = [
  { name: "FAQ", path: "/in/faq" },
  { name: "Help Center", path: "/in/help-center" },
  { name: "Term to Use", path: "/in/term-to-use" },
  { name: "Privacy", path: "/in/privacy" },
  { name: "Cookie Preferences", path: "/in/cookie-preferences" },
  { name: "Corporate Information", path: "/in/corporate-information" },
];

function Logins() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const url = "http://localhost:3000/users";

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    setSubmitted(true) // show validation message

    // if(email.trim() === ""){
    //   return; // stop if email is empty 
    // }

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const responce = await fetch(url)
    const users = await responce.json();

    const user = users.find(
      (u) => u.username === emailRef.current.value && u.password === passwordRef.current.value
    )

    if(!user){
      alert("Invalid email or password");
      return; // stop the function if user not found
    }

    // ✅ Step 2: Save logged-in user to localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(user))

     // ✅ Read it back to confirm
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

    if(loggedInUser){
      console.log("User is logged in:", loggedInUser.username);
    }else{
      console.log("No user looged in");
      
    }

    alert("Login successful!")
    // let responce = await fetch(url, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password }),
    // });
    // responce = await responce.json();
  };

  return (
    <div className="container-login">
      <div className="container">
        {/* Header */}
        <div className="container-header">
          <div className="Logo">
            <Link to="/in">
              <img src={logo} alt="Netflix Logo" height="42px" />
            </Link>
          </div>
        </div>

        {/* Login Box */}
        <div className="login-container" style={{ paddingBottom: "4rem" }}>
          <div className="login-con">
            <h1 className="l-h1">Sign In</h1>
            <form>
              <input
                ref={emailRef}
                className="inp-e"
                id="inp-e"
                type="text"
                autoComplete="email"
                placeholder="Email or mobile number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {submitted && email.trim() === "" && (
                <span>
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    style={{
                      color: "#f51d05",
                      paddingRight: "0.4rem",
                      fontSize: "15px",
                      marginLeft: "-7.5rem",
                    }}
                  />
                  Please enter a valid email or mobile number.
                </span>
              )}
              <div>
                <input
                ref={passwordRef}
                className="inp-e"
                id="inp-p"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
                {/* <h3 style={{ margin: "0" }}>OR</h3> */}
              </div>
              <button onClick={handleSubmit} id="btn-s">
                Sign In
              </button>
            </form>
            <div>
              <button id="wraper" onClick={() => setToggle(!toggle)}>
                Get Help{" "}
                <FontAwesomeIcon icon={toggle ? faChevronUp : faChevronDown} />
              </button>
              {toggle ? (
                <div className="for-link">
                  <div style={{ textAlign: "start", paddingTop: "0.3rem" }}>
                    <Link to="/" style={{ color: "#fff" }}>
                      Forgot email or mobile number?
                    </Link>
                  </div>
                  <div style={{ textAlign: "start", paddingTop: "0.5rem" }}>
                    <a
                      style={{ color: "#fff" }}
                      href="https://help.netflix.com/node/311830241325668"
                      target="_blank"
                    >
                      Learn more about sign-in
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
            <div>
              {/* <p id="for-p">Forgot password?</p> */}

              {/* <div id="input-main">
              <div className="input-con">
                <input type="checkbox" id="check" />
                <label htmlFor="check">Remember me</label>
              </div>
            </div> */}

              {/* <p className="log-p" id="inp-p">
              New to Netflix? <span>Sign up now.</span>
            </p> */}
            </div>
            <p id="inp-pp">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>

            <div
              style={{
                textAlign: "start",
                paddingLeft: "0.7rem",
                marginBottom: "2.5rem",
              }}
            >
              <Link to="/in/learn-more" className="learn-more-link">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="login-footer">
        <div className="footer-container">
          <p>Questions? Call 000-800-919-1743 (Toll-Free)</p>
          <div className="footer-link">
            <ul>
              <li>
                <Link to="/in/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/in/help-center">Help Center</Link>
              </li>
              <li>
                <Link to="/in/terms">Terms of Use</Link>
              </li>
              <li>
                <Link to="/in/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/in/cookie">Cookie Preferences</Link>
              </li>
              <li>
                <Link to="/in/corporate">Corporate Information</Link>
              </li>
            </ul>
          </div>
          <div className="footer-select">
            <select>
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logins;
