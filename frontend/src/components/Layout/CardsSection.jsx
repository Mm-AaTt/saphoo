import React from 'react';
import madelineMillerImage from '../../assets/images/Madeline-Miller-black-by-Nina-Subin-copy-2-scaled.webp';
import thousandImage from '../../assets/images/a-thousand-boy-kisses.jpeg';
import cruelImage from '../../assets/images/The-Cruel-Prince-Series-1-Paperback-9780316310314_262d4186-8f18-4375-8b59-d4d95ee735be.39532b1fe42886348ffa481bed286aba.webp';
import '../../styles/CardsSection.css'; // Import your CSS file for component-specific styles

function CardsSection() {
  return (
    <div id="cards-container">
      <div className="card">
        <div className="overlay">
          <img src={cruelImage} alt="The Cruel Prince" className="card-image" />
          <div className="card-info">
            <h4>Book Of The Month</h4>
            <p>"The Cruel Prince" is a gripping dark fantasy where mortal Jude Duarte battles deadly faeries and sinister politics to carve out her place in the ruthless world of Faerie.</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="overlay">
          <img src={madelineMillerImage} alt="Madeline Miller" className="card-image" />
          <div className="card-info">
            <h4>Author Of The Month</h4>
            <p>Madeline Miller is a celebrated author known for her compelling retellings of classical myths, weaving intricate narratives that breathe new life into ancient tales with depth and emotion.</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="overlay">
          <img src={thousandImage} alt="A Thousand Boy Kisses" className="card-image" />
          <div className="card-info">
            <h4>Book Of The Year</h4>
            <p>"A Thousand Boy Kisses" by Tillie Cole is a poignant romance about Poppy and Rune, childhood sweethearts whose love must endure a heartbreaking journey of separation, longing, and unforgettable moments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsSection;
