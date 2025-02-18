import React, { useState } from "react";
import logo from "./assets/logo.png"; // Import the logo
import ReferralPopup from "./components/ReferralPopup";
import headerImage from "./assets/header-bg.png"; // Import the background image
import "./App.css";


function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="App">
      {/* Header Component */}
      <header className="header" style={{ backgroundImage: `url(${headerImage})` }}>
        <div className="top-bar">
          <div className="logo">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
          <nav className="nav-links">
            <a href="/refer">Refer</a>
            <a href="/earn">Earn</a>
            <a href="/resources">Resources</a>
            <a href="/about">About Us</a>
            <a href="/login">Login</a>
            <a href="/try" className="try-button">Try for free</a>
          </nav>
        </div>
        <div className="hero-container">
          <div className="hero-text">
            <h1>Let's Learn & Earn</h1>
            <p>Get a chance to win up-to Rs.15,000</p>
            <button className="refer-button" onClick={() => setShowPopup(true)}>Refer Now</button>
          </div>
        </div>
      </header>
      {showPopup && <ReferralPopup onClose={() => setShowPopup(false)} />}
        


      {/* Benefits Section */}
      <section className="benefits-section">
        <h2>How Do I Know?</h2>
        <h3>What Are The Natural Benefits?</h3>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Amount</th>
              <th>Number</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, i) => (
              <tr key={i}>
                <td>Total</td>
                <td>$1,000</td>
                <td>$1,000</td>
                <td>$1,000</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>
            <strong>How do I know the following types of things that you want to be able to prepare?</strong>
            <ul>
              <li>The best possible outcome is that your team can decide what kind of thing you want?</li>
              <li>What is it worth being recommended?</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Program Section */}
      <section className="program-section">
        <h2>What is other degree into the program?</h2>
        <p><strong>Are you sure that you have been working for your program?</strong></p>
      </section>

      {/* Performance Table Section */}
      <section className="performance-section">
        <h2>SECTION</h2>
        <table>
          <thead>
            <tr>
              <th>Program</th>
              <th>Score (1)</th>
              <th>Change in Category</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, i) => (
              <tr key={i}>
                <td>{i % 2 === 0 ? "Low Performance" : "High Performance"}</td>
                <td>-</td>
                <td>-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

    </div>
  );
}

export default App;
