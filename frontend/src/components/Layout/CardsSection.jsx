import React from 'react';
import madellineMillerImage from '../../assets/images/Madeline-Miller-black-by-Nina-Subin-copy-2-scaled.webp';
import thousandImage from '../../assets/images/a-thousand-boy-kisses.jpeg'
import cruelImage from '../../assets/images/The-Cruel-Prince-Series-1-Paperback-9780316310314_262d4186-8f18-4375-8b59-d4d95ee735be.39532b1fe42886348ffa481bed286aba.webp'
function CardsSection() {
  return (
    <div id="cards-container">
      <div className="card" id="card1">
        <div className="overlay">
        <img src={cruelImage} alt="Madelline Miller" className="image-size" />
          <h4>Book Of The Month</h4>
          <p>"The Cruel Prince" is a gripping dark fantasy where mortal Jude Duarte battles deadly faeries and sinister politics to carve out her place in the ruthless world of Faerie.</p>
        </div>
      </div>
      <div className="card" id="card2">
        <div className="overlay">
          <img src={madellineMillerImage} alt="Madelline Miller" className="image-size" />
          <h4>Author Of The Month</h4>
          <p>Madeline Miller is a celebrated author known for her compelling retellings of classical myths, weaving intricate narratives that breathe new life into ancient tales with depth and emotion.</p>
        </div>
      </div>
      <div className="card" id="card3">
        <div className="overlay">
          <img src={thousandImage} alt="a thousand boy kisses" className='image-size' />
          <h4>Book Of The Year</h4>
          <p>"A Thousand Boy Kisses" by Tillie Cole is a poignant romance about Poppy and Rune, childhood sweethearts whose love must endure a heartbreaking journey of separation, longing, and unforgettable moments.</p>
        </div>
      </div>
    </div>
  );
}

export default CardsSection;
