import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faLock,
  faEnvelope,
  faCircleQuestion,
  faCreditCard,
  faBullhorn,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import "../CSS/ContactUs.css";
import LinkFooter from "./linkFooter";
import LinkHeader from "./linkHeader";

function ContactUs() {
  return (
    <>
      <LinkHeader />
      <div className="contact-us-main">
        <h1>Contact us</h1>
        <p>Tell us more and we'll find the best solution for you</p>
        <input type="text" placeholder="Describe your issue" />
        <div className="contact-us-links">
          <h2>Quick Links</h2>
          <div className="contact-us-links-con">
            <ul>
              <li className="links-con-li">
                <FontAwesomeIcon className="icon" icon={faCircleExclamation} />
                <strong>Content Grievances in India</strong>
              </li>
              <li className="links-con-li">
                {" "}
                <FontAwesomeIcon className="icon" icon={faLock} />{" "}
                <strong>Reset password</strong>
              </li>
              <li className="links-con-li">
                {" "}
                <FontAwesomeIcon className="icon" icon={faEnvelope} />{" "}
                <strong>Update email</strong>
              </li>
              <li className="links-con-li">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faCircleQuestion}
                />{" "}
                <strong>Get help signing in</strong>
              </li>
              <li className="links-con-li">
                <FontAwesomeIcon className="icon" icon={faCreditCard} />{" "}
                <strong>Update payment method</strong>
              </li>
              <li className="links-con-li">
                {" "}
                <FontAwesomeIcon className="icon  " icon={faBullhorn} />{" "}
                <strong>Request TV shows or movies</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <LinkFooter />
    </>
  );
}

export default ContactUs;
