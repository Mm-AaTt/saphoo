import React from "react";
import '../styles/ReadingChallenges.css'; // Import your CSS file for component-specific styles

function ReadingChallenges() {
  return (
    <section className="reading-challenges">
      <h2>Reading Challenges</h2>
      <p>Join our exciting reading challenges and set yourself new goals!</p>
      <ul>
        <li>Read a book a month challenge.</li>
        <li>Explore different genres challenge.</li>
        {/* Add more challenges */}
      </ul>
      <button className="join-button">Join a Challenge!</button>
    </section>
  );
}

export default ReadingChallenges;
