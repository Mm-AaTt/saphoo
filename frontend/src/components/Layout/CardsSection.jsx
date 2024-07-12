import React from 'react';

function CardsSection() {
  return (
    <div id="cards-container">
      <div className="card" id="card1">
        <div className="overlay">
          <h4>Book Of The Month</h4>
          <p>"The Cruel Prince" is a gripping dark fantasy where mortal Jude Duarte battles deadly faeries and sinister politics to carve out her place in the ruthless world of Faerie.</p>
        </div>
      </div>
      <div className="card" id="card2">
        <div className="overlay">
          <h4>Author Of The Month</h4>
          <p>Madeline Miller is a celebrated author known for her compelling retellings of classical myths, weaving intricate narratives that breathe new life into ancient tales with depth and emotion.</p>
        </div>
      </div>
      <div className="card" id="card3">
        <div className="overlay">
          <h4>Book Of The Year</h4>
          <p>"A Thousand Boy Kisses" by Tillie Cole is a poignant romance about Poppy and Rune, childhood sweethearts whose love must endure a heartbreaking journey of separation, longing, and unforgettable moments.</p>
        </div>
      </div>
    </div>
  );
}

export default CardsSection;
