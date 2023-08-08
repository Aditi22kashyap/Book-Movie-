import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import './BookingPage.css';
const BookingPage = () => {
  const [formData, setFormData] = useState({
    showName: '',
    genres: '',
    averageRating: '',
    officialSite: '',
    imageSrc: '',
  });

//   const history = useHistory(); // Get the history object

  useEffect(() => {
    // Load booking data from local storage
    const bookingData = JSON.parse(localStorage.getItem('bookingData'));
    if (bookingData) {
      setFormData(bookingData);
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Tickets have been booked!');
     // Redirect to the home page
  window.location.href = '/';
    // history.push('/'); // Redirect to the home page
  };

  return (
    <div className='BookingPage'>
      <h1>Book Ticket</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label>
          Show Name:
          <input type='text' value={formData.showName} readOnly />
        </label>
        </div>
        <div>
        <label>
          Genres:
          <input type='text' value={formData.genres} readOnly />
        </label>
        </div>
        <div>
        <label>
          Average Rating:
          <input type='text' value={formData.averageRating} readOnly />
        </label>
        </div>
        <div>
        <label>
          Official Site:
          <input type='text' value={formData.officialSite} readOnly />
        </label>
        </div>
        <div>
          <img src={formData.imageSrc} alt={formData.showName} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default BookingPage;
