import { useEffect, useState } from "react";
import "../CSS/FeedbackList.css";
import LinkFooter from "./linkFooter";
import LinkHeader from "./linkHeader";

function FeedbackList() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      let res = await fetch("http://localhost:3000/feedback");
      res = await res.json();
      setFeedback(res);
    };

    fetchFeedback();
  }, []);

  return (
    <>
      <LinkHeader />
      <div
        className="feedback-container"
        //   style={{ backgroundImage: `url(${backimg})` }}
      >
        <div className="feedback-content">
          <h2>Feedback</h2>
          {feedback.length === 0 ? (
            <p>No feedback yet. Be the first to share your throughts!</p>
          ) : (
            <ul className="feedback-list">
              {[...feedback].reverse().map((item) => (
                <li key={item.id}>
                  <strong>{item.username}</strong>: {item.message}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <LinkFooter />
    </>
  );
}

export default FeedbackList;
