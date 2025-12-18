import { useEffect, useState } from "react";
import "../CSS/FAQ.css";
import { data } from "react-router-dom";

function FaqInput() {
  const [selectedFeedback, setSelectedFeedback] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e) => {
    setSelectedFeedback(e.target.value);
  };

  const handleFeedbackSubmit = async () => {
    if (!loggedInUser) {
      alert("You must be logged in to submit feedback");
      return;
    }

    if (!selectedFeedback) {
      alert("Pleace select a feedback option first.");
      return;
    }

    if (!feedbackMessage.trim()) {
      alert("Please write something before submitting.");
      return;
    }

    const feedbackData = {
      username: loggedInUser.username,
      type: selectedFeedback,
      message: feedbackMessage,
    };

    try {
      const res = await fetch("http://localhost:3000/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData),
      });
      const data = await res.json();
      console.log("Server response:", data);

      if (res.ok) {
        alert("Feedback submitted successfully!");
        setFeedbackMessage("");
        setSelectedFeedback("");
      } else {
        alert("Failed to submit feedback.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("loggedInUser"));
    if (userData) {
      setLoggedInUser(userData);
    }
  }, []);
  console.log(loggedInUser);

  return (
    <>
      <div className="faq-context-question-3">
        {loggedInUser ? (
          <>
            <p style={{ fontWeight: "bold" }}>What went wrong?</p>

            {/* Option 1 */}
            <div className="faq-inputfield">
              <div>
                <input
                  onChange={handleChange}
                  type="radio"
                  id="que-1"
                  name="feedback"
                  value="not-helpful"
                  checked={selectedFeedback === "not-helpful"}
                />
                <label htmlFor="que-1">
                  The steps in the article did not resolve my problem
                </label>
              </div>
              {selectedFeedback === "not-helpful" && (
                <div className="faq-que-area">
                  <textarea
                    value={feedbackMessage}
                    onChange={(e) => setFeedbackMessage(e.target.value)}
                    placeholder="(Optional) Let us know how we can do better. We do not respond to individul feedback. Pleace do not leave personal information."
                  ></textarea>
                  <button onClick={handleFeedbackSubmit}>Submit</button>
                </div>
              )}
            </div>

            {/* Option 2 */}
            <div className="faq-inputfield">
              <div>
                <input
                  onChange={handleChange}
                  type="radio"
                  id="que-2"
                  name="feedback"
                  value="not-found"
                  checked={selectedFeedback === "not-found"}
                />
                <label htmlFor="que-2">
                  This article did not address what I was searching for
                </label>
              </div>
              {selectedFeedback === "not-found" && (
                <div className="faq-que-area">
                  <textarea
                    value={feedbackMessage}
                    onChange={(e) => setFeedbackMessage(e.target.value)}
                    placeholder="(Optional) Let us know how we can do better. We do not respond to individul feedback. Pleace do not leave personal information."
                  ></textarea>
                  <button onClick={handleFeedbackSubmit}>Submit</button>
                </div>
              )}
            </div>

            {/* Option 3 */}
            <div className="faq-inputfield">
              <div>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="feedback"
                  value="confusing"
                  id="que-3"
                  checked={selectedFeedback === "confusing"}
                />
                <label htmlFor="que-3">
                  The wording used in this article made it confusing
                </label>
              </div>
              {selectedFeedback === "confusing" && (
                <div className="faq-que-area">
                  <textarea
                    value={feedbackMessage}
                    onChange={(e) => setFeedbackMessage(e.target.value)}
                    placeholder="(Optional) Let us know how we can do better. We do not respond to individul feedback. Pleace do not leave personal information."
                  ></textarea>
                  <button onClick={handleFeedbackSubmit}>Submit</button>
                </div>
              )}
            </div>

            {/* Option 4 */}
            <div className="faq-inputfield">
              <div>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="feedback"
                  id="que-4"
                  value="other"
                  checked={selectedFeedback === "other"}
                />
                <label htmlFor="que-4">Other</label>
              </div>
              {selectedFeedback === "other" && (
                <div className="faq-que-area">
                  <textarea
                    value={feedbackMessage}
                    onChange={(e) => setFeedbackMessage(e.target.value)}
                    placeholder="(Optional) Let us know how we can do better. We do not respond to individul feedback. Pleace do not leave personal information."
                  ></textarea>
                  <button onClick={handleFeedbackSubmit}>Submit</button>
                </div>
              )}
            </div>
          </>
        ) : (
          <p style={{ color: "red" }}>Pleace sign in to send feedback.</p>
        )}
      </div>
    </>
  );
}

export default FaqInput;
