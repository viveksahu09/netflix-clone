import { Route, Routes } from "react-router-dom";
import FAQ from "../components/FAQ";
import HomePage from "../components/HomePage";
import Logins from "../components/Login";
import LearnMore from "../components/LearnMore";
import FeedbackList from "../components/FeedbackList";
import ContactUs from "../components/ContactUs";
import CorporateInformation from "../components/CorporateIInformation";
import CookiePreferences from "../components/CookiePerferences";
import Privacy from "../components/Privacy";

function ReactRoute() {
  return (
    <Routes>
      <Route path="/in" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/in/login" element={<Logins/>}/>
      <Route path="/in/sign-in" element={<Logins/>}/>
      <Route path="/in/faq" element={<FAQ />} />
      <Route path="/in/learn-more" element={<LearnMore/>}/>
      <Route path="/in/feedback-list" element={<FeedbackList/>}/>
      <Route path="/in/contact-us" element={<ContactUs/>}/>
      <Route path="/in/corporate-information" element={<CorporateInformation/>}/>
      <Route path="/in/cookies-perferences" element={<CookiePreferences/>}/>
      <Route path="/in/privacy" element={<Privacy/>}/>
    </Routes>
  );
}

export default ReactRoute;
