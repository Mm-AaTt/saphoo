import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/AuthorProfile.css';

const AuthorProfile = () => {
  const { authorId } = useParams();
  
  // Mock data for demonstration purposes
  const authorData = {
    name: 'Author Name',
    image: 'Author Image URL',
    ratings: '4.5',
    reviews: '150',
    details: [
      'Detail line 1',
      'Detail line 2',
      'Detail line 3',
      'Detail line 4',
      'Detail line 5',
    ],
    followers: 120,
    booksRead: 10,
    totalBooks: 20,
  };

  return (
    <div className="author-profile-container">
      <header>
        <div className="logo">सफू मिचा</div>
        <nav>
          <ul>
            <li>HOME</li>
            <li>MY BOOKS</li>
            <li>BROWSE</li>
            <li>COMMUNITY</li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search Books" />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </header>
      <div className="main-content">
        <aside>
          <div className="author-image">Author Image</div>
          <div className="author-info">
            <p>{authorData.ratings} ratings (avg)</p>
            <p>{authorData.reviews} reviews</p>
            <button>Follow Author</button>
          </div>
          <div className="followers">
            <p>Followers</p>
            <div className="follower-pics">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="follower-pic"></div>
              ))}
            </div>
          </div>
          <div className="author-bookshelves">Author's Bookshelves</div>
        </aside>
        <section className="details-section">
          <h1>{authorData.name}</h1>
          <div className="details">
            {authorData.details.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>
          <div className="actions">
            <button>Ask The Author</button>
            <button>Books</button>
            <button>Series</button>
          </div>
        </section>
        <aside className="reading-challenge">
          <h2>2024 Reading Challenge</h2>
          <div>
            <p>Author has read {authorData.booksRead} of {authorData.totalBooks} books</p>
            <button>View Books</button>
          </div>
        </aside>
      </div>
      <footer>© 2024 SaphooMhicha</footer>
    </div>
  );
};

export default AuthorProfile;
