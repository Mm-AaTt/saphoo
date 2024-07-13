// src/pages/AfterSignIn.js
import React from 'react';
import '../styles/AfterSignIn.css';
import recImage from '../assets/images/a-thousand-boy-kisses.jpeg';

const AfterSignIn = () => {
    return (
        <div className="acontainer">
            <header>
                <div className="alogo">सफू मिचा</div>
                <nav className='anav'>
                    <button>HOME</button>
                    <button>MY BOOKS</button>
                    <button>BROWSE</button>
                    <button>COMMUNITY</button>
                </nav>
                <div className="search-bar">
                    <input type="text" placeholder="Search Books" />
                    <button>🔍</button>
                </div>
            </header>

            <main>
                <aside>
                    <section className="currently-reading">
                        <h2>Currently Reading</h2>
                        <input type="text" placeholder="book name" />
                    </section>

                    <section className="reading-challenge">
                        <h2>2024 Reading Challenge</h2>
                        <img src={recImage} alt="Reading Challenge" style={{ width: '100px', height: 'auto', borderRadius: '5px' }} /> {/* Adjusted image size */}
                        <input type="text" placeholder="books completed" />
                    </section>

                    <section className="want-to-read">
                        <h2>Want to read</h2>
                        <div>
                            <img src="img-placeholder.png" alt="Want to read 1" style={{ width: '60px', height: '60px', borderRadius: '5px' }} />
                            <img src="img-placeholder.png" alt="Want to read 2" style={{ width: '60px', height: '60px', borderRadius: '5px' }} />
                            <img src="img-placeholder.png" alt="Want to read 3" style={{ width: '60px', height: '60px', borderRadius: '5px' }} />
                        </div>
                    </section>

                    <section className="bookshelves">
                        <h2>Bookshelves</h2>
                        <button>Want to read</button>
                        <button>Currently Reading</button>
                        <button>Read</button>
                    </section>
                </aside>

                <section className="main-content">
                    <section className="seasonal-updates">
                    <h2>Seasonal Updates</h2>
          </section>
          <section className="personal-feed">
            <h2>Personal Feed</h2>
            <p>Content goes here...</p>
            <p>Content goes here...</p>
            <p>Content goes here...</p>
            <p>Content goes here...</p>
            <p>Content goes here...</p>
            <p>Content goes here...</p>
            <p>Content goes here...</p>
          </section>
        </section>
        
        <aside>
          <section className="recommendations">
            <h2>Recommendations</h2>
            <div className="recommendation-grid">
              <img src="img-placeholder.png" alt="Recommendation 1" />
              <img src="img-placeholder.png" alt="Recommendation 2" />
              <img src="img-placeholder.png" alt="Recommendation 3" />
              <img src="img-placeholder.png" alt="Recommendation 4" />
              <img src="img-placeholder.png" alt="Recommendation 5" />
              <img src="img-placeholder.png" alt="Recommendation 6" />
              <img src="img-placeholder.png" alt="Recommendation 7" />
              <img src="img-placeholder.png" alt="Recommendation 8" />
              <img src="img-placeholder.png" alt="Recommendation 9" />
              <img src="img-placeholder.png" alt="Recommendation 10" />
            </div>
          </section>

                    <section className="choice-awards">
                        <h2>SaphooMicha Choice Awards</h2>
                        <button>Cast Votes</button>
                        <button>See Winners</button>
                    </section>
                </aside>
            </main>
        </div>
    );
}

export default AfterSignIn;
