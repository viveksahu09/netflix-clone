import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Privacy() {
  return (
    <div className="privacy-wrapper" style={{backgroundColor:"#fff"}}>
      <header className="privacy-header">
        <div className="privacy-header-logo-container">
          <img src={logo} alt="logo" width={100}/>
          <p>INVESTORS</p>
        </div>
        <div className="privacy-header-list">
          <ul>
            <li>OVERVIEW</li>
            <li>FINANCIALS</li>
            <li>NEWS & EVENTS</li>
            <li>STOCK INFO</li>
            <li>ENVIRONMENTAL, SOCIAL, & GOVERNANCE</li>
            <li>RESOURCES</li>
          </ul>
        </div>
        <div className="privacy-header-search">
          <div><FontAwesomeIcon icon={faSearch}/></div>
        </div>
      </header>
      <main className="privacy-main"></main>
      <footer className="privacy-footer"></footer>
    </div>
  );
}

export default Privacy;