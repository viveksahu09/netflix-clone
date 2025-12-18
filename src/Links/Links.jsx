import { Link } from "react-router-dom";
import { useState } from "react";
import CookiePreferences from "../components/CookiePerferences";

function ReactLinks() {
  const [showInfo, setShowInfo] = useState(false);

  const links = [
    // { name: "", path: "/in" },
    { name: "FAQ", path: "/in/faq" },
    { name: "Help Center", path: "/in/help-center" },
    { name: "Account", path: "/in/account" },
    { name: "Media Center", path: "/in/media-center" },
    { name: "Investor Relations", path: "/in/investor-relations" },
    { name: "Jobs", path: "/in/jobs" },
    { name: "Ways to Watch", path: "/in/ways-to-watch" },
    { name: "Terms to Use", path: "/in/terms-to-use" },
    { name: "Privacy", path: "/in/privacy" },
    // { name: "Cookie Preferences", path: "/in/cookie-perferences" },
    { name: "Corporate Information", path: "/in/corporate-information" },
    { name: "Contact Us", path: "/in/contact-us" },
    { name: "Speed Test", path: "/in/speed-test" },
    { name: "Legal Notices", path: "/in/legal-notices" },
    { name: "Only on Netflix", path: "/in/only-on-netflix" },
  ];

  return (
    <>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            <Link style={{color:"#fff", textDecoration:"1px underline" }} to={item.path}>{item.name}</Link>
          </li>
        ))}
        <li>
          <button style={{color:"#fff", textDecoration:"1px underline", padding:"0", backgroundColor:"#000", border:"none" }} onClick={() => setShowInfo(true)}>
            Cookie Perferences
          </button>
          {showInfo && <CookiePreferences onClose={() => setShowInfo(false)} />}
        </li>
      </ul>
    </>
  );
}

export default ReactLinks;
