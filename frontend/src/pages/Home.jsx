import React from "react";
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const authors = [
    { id: 1, name: 'Author 1' },
    { id: 2, name: 'Author 2' },
    // Add more authors as needed
];

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-header1">READ. DREAM. REPEAT</h1>
            <h1 className="home-header2">WELCOME TO THE WORLD OF READING!</h1>
            <p className="home-content">Welcome to our cozy corner of bookish delights! From thrilling mysteries to fantastical journeys, our shelves are packed with stories to whisk you away. Dive in, explore, and let the adventures begin. Happy reading!</p>
            <div className="author-section">
                <h1>Authors</h1>
                <ul>
                    {authors.map(author => (
                        <li key={author.id}>
                            <Link to={`/author/${author.id}`}>{author.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Home;
