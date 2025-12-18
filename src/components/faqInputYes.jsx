import { Button } from "bootstrap";
import { useEffect, useState } from "react";

function FaqInputYes() {
  const [selectedFeedback, setSelectedFeedback] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  console.log(selectedFeedback);

  const handleFeedbackSubmit = async () => {
    if (!feedbackMessage.trim()) {
      alert("Please write something before submitting.");
      return;
    }

    const feedbackData = {
      username: loggedInUser.username,
      message: feedbackMessage,
    };

    try {
      const res = await fetch("http://localhost:3000/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData),
      });
      const data = await res.json();
      console.log("Server response: ", data);

      if (res.ok) {
        alert("Feedback submitted successfully!");
        setFeedbackMessage("");
      } else {
        alert("Failed to submit feedback.");
      }
    } catch (error) {
      console.error("Error submitting feedback: ", error);
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
      {loggedInUser ? (
        <div className="faq-context-question-2">
          <p>
            Thanks for your feedback! Any suggestions for further improvement?
          </p>
          <textarea
            value={feedbackMessage}
            onChange={(e) => setFeedbackMessage(e.target.value)}
            placeholder="(Optional) We do not respond to individual feedback. Please do not leave personal information."
          ></textarea>
          <button onClick={handleFeedbackSubmit}>Submit</button>
        </div>
      ) : (
        <p style={{ color: "red" }}>Pleace sign in to send feedback.</p>
      )}
    </>
  );
}

export default FaqInputYes;
