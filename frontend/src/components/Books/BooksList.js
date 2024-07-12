// BooksList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from backend...'); // Log when data fetching starts
        const response = await axios.get('http://localhost:5000/data'); // Adjust URL as per your backend API endpoint
        console.log('Data from backend:', response.data); // Log data received from backend
        setBooks(response.data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data', error); // Log any errors during data fetching
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures effect runs once

  console.log('Books state:', books); // Log current state of books

  return (
    <div>
      <h2>List of Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>Title:</strong> {book.title}, <strong>Author:</strong> {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
