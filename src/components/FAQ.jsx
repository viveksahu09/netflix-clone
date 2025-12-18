import LinkFooter from "./linkFooter";
import LinkHeader from "./linkHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../CSS/FAQ.css";
import netflix1 from "../assets/what_is_netflix_1_en.png";
import netflix2 from "../assets/what_is_netflix_2_en.png";
import netflix3 from "../assets/what_is_netflix_3_en.png";
import netflix4 from "../assets/what_is_netflix_4_en.png";
import netflix5 from "../assets/what_is_netflix_5_en.png";
import { useState } from "react";
import FaqInput from "./faqInput";
import FaqInputYes from "./faqInputYes";

function FAQ() {
  const [faqDisplay, setFaqDispaly] = useState(false);
  const [dispaly, setDispaly] = useState(false);
  const [toggle, setToogle] = useState(true);

  const handleYes = () => {
    setDispaly(true);
    setToogle(false);
  };

  const handleNo = () => {
    setFaqDispaly(true);
    setToogle(false);
  };

  return (
    <div style={{ height: "900px", width: "100vw", color: "#fff" }}>
      <LinkHeader />
      <div className="hero-container">
        <div className="faq-back">
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
        <h1 className="faq-heading">What is Netflix? </h1>
        <div className="faq-context">
          <section>
            <div className="faq-img">
              <img
                src={netflix1}
                alt="what_is_netflix_1_en.png"
                title="what_is_netflix_1_en.png"
                width="60%"
              />
            </div>
            <div className="faq-text">
              <p>
                Netflix is a subscription-based <span> streaming service </span>
                that allows our members to watch TV shows and movies on an
                internet-connected device.
              </p>
              <p>
                <span id="faq-para"> Depending on your plan </span>, you can
                also
                <span> download TV shows and movies </span> to your Android
                phone or tablet, iPhone, iPad, or Google Chromebook device and
                watch without an internet connection.
              </p>
              <p>
                If you're already a member and would like to learn more about
                using Netflix, visit
                <span id="faq-para"> Getting started with Netflix. </span>
              </p>
            </div>
          </section>
          <div className="faq-divider"></div>
          <section>
            <h2 className="faq-section-heading">TV Shows & Movies</h2>
            <div className="faq-img">
              <img
                src={netflix2}
                alt="what_is_netflix_2_en.png"
                title="what_is_netflix_2_en.png"
                width="60%"
              />
            </div>
            <div className="faq-text">
              <p>
                Netflix content varies by region and may change over time. You
                can watch a variety of{" "}
                <span>
                  award-winning Netflix originals, TV shows, movies,
                  documentaries, and more.
                </span>
              </p>
              <p>
                The more you watch, the better Netflix gets at{" "}
                <span> recommending </span>TV shows and movies.
              </p>
            </div>
          </section>
          <div className="faq-divider"></div>
          <section>
            <h2 className="faq-section-heading">Supported Devices</h2>
            <div className="faq-img">
              <img
                src={netflix3}
                alt="what_is_netflix_3_en.png"
                title="what_is_netflix_3_en.png"
                width="60%"
              />
            </div>
            <div className="faq-text">
              <p>
                You can watch Netflix through any{" "}
                <span>supported internet-connected device</span> that offers the
                Netflix app, including smart TVs, game consoles, streaming media
                players, cable boxes, smartphones, and tablets. You can also
                watch Netflix on your computer using an internet browser. To get
                the best performance, you can review the{" "}
                <span> system requirements </span> for web browser compatibility
                and check our <span> internet speed recommendations </span>.
              </p>
              <p id="faq-para-span">
                <span className="faq-span-bold" id="faq-span">
                  Note
                </span>
                :A small percentage of devices may not be supported by{" "}
                <span id="faq-para"> all plans </span>.
              </p>
              <p>
                Need help getting set up? Search our<span> Help Center </span>{" "}
                for the manufacturer of the device you're using.
              </p>
              <p id="faq-para-span">
                <span id="faq-span"> Note </span>:The Netflix app may come
                pre-loaded on certain devices, or you may need to download the
                Netflix app onto your device. Netflix app functionality may
                differ between devices.
              </p>
            </div>
          </section>
          <div className="faq-divider"></div>
          <section>
            <h2 className="faq-section-heading">Plans and Pricing</h2>
            <div className="faq-img">
              <img
                src={netflix4}
                alt="what_is_netflix_4_en.png"
                title="what_is_netflix_4_en.png"
                width="60%"
              />
            </div>
            <div className="faq-text">
              <p>
                Each <span> Netflix plan </span> determines the number of
                devices you can watch Netflix on{" "}
                <span id="faq-span-black"> at the same time </span> and whether
                you can watch in High Definition (HD), Full High Definition
                (FHD), or Ultra High Definition (UHD).
              </p>
              <p>
                You can <span> change your plan </span> or <span> cancel </span>{" "}
                online at any time.
              </p>
            </div>
          </section>
          <div className="faq-divider"></div>
          <section>
            <h2 className="faq-section-heading">Get Started</h2>
            <div className="faq-img">
              <img
                src={netflix5}
                alt="what_is_netflix_5_en.png"
                title="what_is_netflix_5_en.png"
                width="60%"
              />
            </div>
            <div className="faq-text">
              <p>To start watching Netflix:</p>
              <ul>
                <li>
                  Visit <span> netflix.com/signup.</span>
                </li>
                <li>
                  <span>Choose a plan</span>.
                </li>
                <li>
                  Create an account by entering your email address and creating
                  a password.
                </li>
                <li>
                  Enter a <span> payment method</span>.
                </li>
              </ul>
              <p>
                As a Netflix member, you are charged once a month on the date
                you signed up.
              </p>
            </div>
          </section>
          <div className="faq-divider"></div>
          <div className="faq-context-question">
            {toggle ? (
              <div className="faq-context-question-1">
                <span>Was this article helpful?</span>
                <button onClick={handleYes}>Yes</button>
                <button onClick={handleNo}>No</button>
              </div>
            ) : null}
            {dispaly && (
              <>
                <FaqInputYes />
              </>
            )}
            {faqDisplay && <FaqInput />}
          </div>
        </div>
      </div>
      <LinkFooter />
    </div>
  );
}

export default FAQ;
