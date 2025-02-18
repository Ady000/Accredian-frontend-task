import React, { useState } from "react";
import "./ReferralPopup.css";

const ReferralPopup = ({ onClose }) => {
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://accredian-backend-task-l6kg.onrender.comreferral", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ referrerName, referrerEmail, refereeName, refereeEmail }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Referral submitted successfully!");
      onClose(); // Close popup after submitting
    } else {
      alert(data.error || "Something went wrong!");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Refer a Friend</h2>
        <form onSubmit={handleSubmit}>
          <label>Friend's Name:</label>
          <input type="text" value={referrerName} onChange={(e) => setReferrerName(e.target.value)} required />

          <label>Friend's Email:</label>
          <input type="email" value={referrerEmail} onChange={(e) => setReferrerEmail(e.target.value)} required />

          <label>Your Name:</label>
          <input type="text" value={refereeName} onChange={(e) => setRefereeName(e.target.value)} required />

          <label>Your Email:</label>
          <input type="email" value={refereeEmail} onChange={(e) => setRefereeEmail(e.target.value)} required />

          <button type="submit" className="submit-button">Submit</button>
          <button type="button" className="close-button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default ReferralPopup;
