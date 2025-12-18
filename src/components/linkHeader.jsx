import { Link } from "react-router-dom";
import "../CSS/linkHeader.css";
import logo from "../assets/logo.png";

function LinkHeader() {
  return (
    <div className="header-container">
      <header className="header">
        <div className="header-wrapper">
          <div className="header-logo">
            <Link to="/in/">
              <img src={logo} alt="logo" width={90} />
            </Link>
          </div>
          <div className="header-divider">|</div>
          <div className="header-title">Help Center</div>
        </div>
        <div className="header-action">
          <button
            className="header-btn-join"
            style={{ backgroundColor: "#000000" }}
          >
            Join Netflix
          </button>
          <button className="header-btn-signIn">
            <Link
              to="/in/sign-in"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              sign In
            </Link>
          </button>
        </div>
      </header>
    </div>
  );
}

export default LinkHeader;
