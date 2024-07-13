import React from 'react';
import '../styles/BookPage.css';

const BookPage = () => {
  return (
    <div className="book-page">
      
      <div className="main-content">
        <div className="book-info">
          <div className="book-cover">
            <img src="book-cover.jpg" alt="Book Cover" />
          </div>
          <div className="book-details">
            <h1>Caught Up</h1>
            <h2>Liz Tomforde</h2>
            <div className="rating">
              <span>4.45</span>
              <span>⭐️⭐️⭐️⭐️⭐️</span>
              <span>141,111 ratings • 16,346 reviews</span>
            </div>
            <p className="book-description">
              I’m a single dad and starting pitcher for Chicago’s MLB team.
              I’m stretched too thin, but I don’t want help raising my son.
            </p>
            <button className="want-to-read">Want to read</button>
            <button className="buy-on-amazon">Buy on Amazon</button>
            <p className="rate-this-book">Rate this book</p>
            <div className="rating-stars">⭐️⭐️⭐️⭐️⭐️</div>
            <div className="genres">
              <span>Romance</span>
              <span>Sports Romance</span>
              <span>Sports</span>
              <span>Contemporary</span>
              <span>Adult</span>
            </div>
          </div>
        </div>
        <div className="about-author">
          <h3>About the author</h3>
          <div className="author-info">
            <img src="author-photo.jpg" alt="Author" />
            <p>
              Liz Tomforde writes sports romance novels that depict realistic
              and healthy relationships. Her books offer a mix of witty banter
              and real-life struggles. Her heroes are alpha yet vulnerable, and
              her heroines are strong.
            </p>
          </div>
        </div>
        <div className="ratings-reviews">
          <h3>Ratings & Reviews</h3>
          <p>What do you think?</p>
          <button className="write-review">Write a Review</button>
          <div className="community-reviews">
            <div className="review">
              <span>⭐️⭐️⭐️⭐️⭐️</span>
              <p>
                They had me giggling & kicking my feet so much I cannot wait to
                start the next one. 🤍
              </p>
              <span>151 likes • 3 comments</span>
            </div>
            <div className="review">
              <span>⭐️⭐️⭐️⭐️⭐️</span>
              <p>Omg I can’t wait for this one!!</p>
              <span>1,069 likes • 7 comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
