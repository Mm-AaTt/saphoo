import React from "react";
import summerImage from '../assets/images/fresh-summer-poster-with-lemons_1015-2172.jpg';
import '../styles/SeasonalReadings.css'; // Import your CSS file for component-specific styles

function SeasonalReadings() {
  return (
    <section className="seasonal-readings">
      <h2>Seasonal Recommendations</h2>
      <div className="reading-card">
        <h3>Summer Reads</h3>
        <p>Escape into these captivating stories perfect for a warm summer day.</p>
        <img src={summerImage} alt="Summer Read Book Cover" className="reading-card-image" />
        <a href="#" className="learn-more-link">Learn More</a>
      </div>
      {/* Add more reading cards for other seasons */}
    </section>
  );
}

export default SeasonalReadings;
