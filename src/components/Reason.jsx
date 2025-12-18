import { useRef, useEffect, useState } from "react";
import "../CSS/Home.css";
import "../CSS/Reason.css";
import { FaTv, FaDownload, FaSmile, FaRocket } from "react-icons/fa";
import ReactLinks from "../Links/Links";

const faqs = [
  {
    id: 1,
    question: "What is Netflix?",
    answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
  },
  {
    id: 2,
    question: "How much does Netflix cost?",
    answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.`,
  },
  {
    id: 3,
    question: "Where can I watch?",
    answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web or on your devices.`,
  },
  {
    id: 4,
    question: "How do I cancel?",
    answer: `Netflix is flexible. There are no contracts and no commitments. You can easily cancel your account online in two clicks.`,
  },
  {
    id: 5,
    question: "What can I watch on Netflix?",
    answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
  },
  {
    id: 6,
    question: "Is Netflix good for kids?",
    answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. 
        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
  },
];
// console.log(faqs);

function Reason() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [toggle, setToggle] = useState(false);
  const inputRef = useRef(null);
  

  const handleInput = () => {
    inputRef.current.focus();
    console.log(inputRef.current); // Logs the <input> element after render
  };

  return (
    <>
      <div className="card-container swc">
        <h2>More reasons to join</h2>
        <div className="reason-wrapper">
          <div className="card-wrapper">
            <div className="card-wrap">
              <h2>Enjoy on your TV</h2>
              <p>
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
              <div className="card-img">
                <FaTv size={80} color="white" />
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card-wrap">
              <h2>Download your shows to watch offline</h2>
              <p>Download your shows to watch offline</p>
              <div className="card-img">
                <FaDownload size={60} className="reason-icon" />
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card-wrap">
              <h2>Watch everywhere</h2>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop and TV.
              </p>
              <div className="card-img">
                <FaRocket size={60} className="reason-icon" />
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card-wrap">
              <h2>Create profiles for kids</h2>
              <p>
                Send kids on adventures with their favourite characters in a
                space made just for them — free with your membership.
              </p>
              <div className="card-img">
                <FaSmile size={60} className="reason-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-section swc">
        <h2>Frequently Asked Questions</h2>
        {/* <div className="faq-item">
          <button class="faq-question">
            What is Netflix?
            <span class="icon">+</span>
          </button>
          <div className="faq-answer">
            <span>
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
              </p>
              <br />
              <br />
              <p>
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </p>
            </span>
          </div>
        </div>  */}
        <div className="faq-item">
          {faqs.map((faq) => (
            <div key={faq.id} style={{ backgroundColor: "#2d2d2d" }}>
              <button
                onClick={() =>
                  setActiveFaq(activeFaq === faq.id ? null : faq.id)
                }
                className="faq-question"
                id="faq-item-que"
              >
                {faq.question}
                <span className="icon">{activeFaq === faq.id ? "-" : "+"}</span>
              </button>
              {activeFaq === faq.id && (
                <div className="faq-answer">
                  <span>
                    <p>{faq.answer}</p>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="cta-section swc">
        <div className="cta-text-wrapper">
          <h3 className="cta-heading">Ready to watch?</h3>
          <p className="cta-text">
            Enter your email to create or restart your membership.
          </p>
        </div>
        <div className="cta-form">
          <input
            ref={inputRef}
            type="email"
            className="cta-input"
            placeholder="Email address"
          />
          <button onClick={handleInput} type="submit" className="cta-btn">
            Get Started ❯
          </button>
        </div>
      </div>
      <footer>
        <div className="footer-container">
          <div className="footer-head">
            <p>Questions? Call 000-800-919-1743</p>
          </div>
          <div className="footer-links">
                <ReactLinks />
            <ul>
              {/* <li> */}
              {/* </li> */}
              {/* <li>Helf Center</li>
              <li>Account</li>
              <li>Media Center</li>
              <li>Investor Relations</li>
              <li>Jobs</li>
              <li>Way to Watch</li>
              <li>Term to Use</li>
              <li>Privacy</li>
              <li>Cookies Preferences</li>
              <li>Corporate Information</li>
              <li>Contact Us</li>
              <li>Speed Test</li>
              <li>Legal Notices</li>
              <li>Only on Netflix</li> */}
            </ul>
          </div>
          <div className="footer-section">
            <select>
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
          <div className="footer-text">
            <p>Netflix india</p>
          </div>
          <div className="footer-info">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              {!toggle && (
                <span>
                  <button onClick={() => setToggle(true)}>Learn more</button>
                </span>
              )}
            </p>
          </div>
          {toggle && (
            <div className="footer-hide">
              <p>
                The information collected by Google reCAPTCHA is subject to the
                Google
                <span>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </span>
                and
                <span>
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </a>
                </span>
                , and is used for providing, maintaining, and improving the
                reCAPTCHA service and for general security purposes (it is not
                used for personalised advertising by Google).
              </p>
            </div>
          )}
        </div>
      </footer>
    </>
  );
}

export default Reason;
