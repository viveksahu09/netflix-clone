import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkFooter from "./linkFooter";
import LinkHeader from "./linkHeader";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../CSS/CorporateInformation.css"

function CorporateInformation() {
  return (
    <>
      <LinkHeader />
      <main className="page-content">
        <div className="page-content-back">
          <span>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ color: "#000", fontSize: "15px" }}
            />
          </span>
          <div>
            <Link to="/in/" style={{ textDecoration: "none", color: "#000" }}>
              Back to Home Page
            </Link>
          </div>
        </div>
        <div className="language-selector">
          <span>
            <p>Currently viewing information for:</p>
          </span>
          <select>
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>New Zealand</option>
            <option>Singapore</option>
            <option>Ireland</option>
            <option>South Africa</option>
            <option>Philippines</option>
            <option>Nigeria</option>
            <option>Kenya</option>
            <option>United Arab Emirates</option>
            <option>Pakistan</option>
            <option>Malaysia</option>
          </select>
        </div>
        <div className="corporate-info-artical">
          <section>
            <h1>Corporate Information</h1>
            <p>
              We're here to help if you need it -- for the fastest answer to
              your questions, we encourage you to reach out to our customer
              service. Visit the <span> Help Center </span> for more info or{" "}
              <span> contact us </span>.
            </p>
            <p>
              If you have a request for a TV show or movie, see{" "}
              <span> Request TV shows or movies </span>.
            </p>
          </section>

          <section>
            <h2>
              Contractual partner and point of contact for Netflix members:
            </h2>
            <p>Netflix Entertainment Services India LLP</p>
            <p>Level 11, Godrej BKC, Plot C-68</p>
            <p>G Block, BKC- Bandra (East)</p>
            <p>Mumbai 400051, India</p>
          </section>

          <section>
            <h2>Data Controller:</h2>
            <p>Netflix Entertainment Services India LLP</p>
            <p>Level 11, Godrej BKC, Plot C-68</p>
            <p>G Block, BKC- Bandra (East)</p>
            <p>Mumbai 400051, India</p>
          </section>
        </div>
        <div className="corporate-info-feedback">
          <h2>Was this article helpful?</h2>
          <button>Yes</button>
          <button>No</button>
        </div>
      </main>
      <LinkFooter />
    </>
  );
}

export default CorporateInformation;
