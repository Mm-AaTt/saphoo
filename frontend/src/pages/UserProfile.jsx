import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/UserProfile.css';

const UserProfile = () => {
    const { userId } = useParams();
    
    // Mock data for demonstration purposes
    const userData = {
      name: 'User Name',
      image: 'User Image URL',
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
      <div className="profile-page">
        

        <div className="profile-content">
          <div className="left-column">
            <div className="user-image">User Image</div>
            <div className="user-stats">
              <div>{userData.ratings} ({userData.avg})</div>
              <div>{userData.reviews}</div>
            </div>
          </div>

          <div className="main-column">
            <div className="username-section">
              <h2>{userData.name}</h2>
              <button>Follow</button>
            </div>
            <section className="details-section">
              <div className="details">
                {userData.details.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))}
              </div>
            </section>
            <div className="bookshelves">
              <h3>{userData.name}'s Bookshelves</h3>
            </div>
            <div className="recent-updates">
              <h3>Recent Updates</h3>
            </div>
          </div>

          <div className="right-column">
            <div className="reading-challenge">
              <h3>2024 Reading Challenge</h3>
              <div>User has read {userData.booksRead} of {userData.totalBooks} books</div>
              <button>View Books</button>
            </div>
            <div className="following">
              <h3>Following</h3>
              <div className="following-grid">
                {[...Array(9)].map((_, index) => (
                  <div key={index} className="following-item"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserProfile;
