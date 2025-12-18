import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../CSS/CookiePreferences.css";
import powerLogo from "../assets/powered_by_logo.svg";

function CookiePreferences({onClose}) {
  return (
    <div className="cookie-pref-main-container">
      <div className="cookie-pref-container">
        <header className="Privacy-center-header">
          <div className="privacy-header-link">
            <Link to="/in/">
              <img src={logo} alt="logo" width={80} />
            </Link>
          </div>
          <div className="privacy-header-heading">
            <h1>Privacy Preference Center</h1>
          </div>
          <div className="privacy-header-btn" onClick={onClose} >
            <button>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </header>
        <main className="Privacy-center-main">
          <div className=" privacy-main-sidebar">
            <div className="privacy-sidebar-btn">
              <button>General Description</button>
              <button>Essential Cookies</button>
              <button>First Party Performance and Functionality Cookies</button>
              <button>Third Party Performance and Functionality Cookies</button>
              <button>Advertising Cookies</button>
            </div>
          </div>
          <div className="privcy-main-contant">
            <div className="privacy-main-contant-container">
              <h2 className="privacy-contain-heading">General Description</h2>
              <p className="privacy-contant-text">
                This cookie tool will help you understand the use of cookies on
                the Netflix service, and how you can control the use of these
                cookies.
              </p>
              <p className="privacy-contant-text">
                Privacy settings in most browsers allow you to prevent your
                browser from accepting some or all cookies, notify you when it
                receives a new cookie, or disable cookies altogether. If your
                browser disables all cookies, then information will not be
                collected or stored via the cookies listed in this tool. This
                means that your use of the Netflix service may be impaired.
              </p>
              <p className="privacy-contant-text">
                Please note that when you use this cookie tool to opt out of
                certain cookies, your opt out preferences are recorded by
                placing a cookie on your device. Therefore, your browser must be
                configured to accept cookies in order for your preferences to
                take effect. Also, if you delete or clear your cookies, or
                change your web browser, you will need to reset your cookie
                preferences.
              </p>
              <p className="privacy-contant-text">
                For more information on our use of cookies, please visit the{" "}
                <span> Cookies and Internet Advertising </span> section of our{" "}
                <span> Privacy Statement </span>.
              </p>
            </div>
          </div>
        </main>
        <footer className="Privacy-center-footer">
          <button> Save settings </button>
          <div className="privacy-center-footer-logo">
             <img src={powerLogo} alt="power-logo"/>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CookiePreferences;
