import { Link } from "react-router-dom";

const links = [
  { id: 1, name: "Terms to Use", path: "/in/terms-to-use" },
  { id: 2, name: "Privacy", path: "/in/privacy" },
  { id: 3, name: "Cookies Preferences", path: "/in/cookies-preferences" },
  { id: 4, name: "Corporate Information", path: "/in/corporate-information" },
  // { id: 5, name: "Users Feedback", path: "/in/feedback-list" },
];

function LinkFooter() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "0.4rem",
      }}
    >
      <footer className="footer">
        <div style={{paddingLeft:"8%"}}>
          <div className="footer-support">
            <h2 className="footer-heading">Need more help?</h2>
            <button className="contact-btn">Contact Us</button>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-language">
            <select className="language-select">
              <option value="English">English</option>
              <option value="हिन्दी">हिन्दी</option>
            </select>
          </div>
          <div className="footer-links">
            {links.map((item) => (
              <div key={item.id}>
                <Link id="footer-link" to={item.path}>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LinkFooter;
