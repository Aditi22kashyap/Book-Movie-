import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Remove the useHistory import
import './ShowDetails.css';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetails();
  }, [id]);

  const handleBookingClick = () => {
    const bookingData = {
      showName: show.name,
      genres: show.genres.join(', '),
      averageRating: show.rating.average,
      officialSite: show.officialSite,
      imageSrc: show.image.medium,
    };

    localStorage.setItem('bookingData', JSON.stringify(bookingData));

    // Use history.push to navigate to the booking page
    // You can't use useHistory directly here, it should be used where Router context is available
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Details'>
      <h1>{show.name}</h1>
      <p><b>Genres: </b> {show.genres.join(', ')}</p>
      <p><b>Average Rating:</b>  {show.rating.average}</p>
      <p>
        <b>Official Site:</b>
        <a href={show.officialSite} target="_blank" rel="noopener noreferrer">
          {show.officialSite}
        </a>
      </p>
      <div>
        <div dangerouslySetInnerHTML={{ __html: show.summary }} />
      </div>
      <div>
        {show.image && show.image.medium && (
          <img src={show.image.medium} alt={show.name} />
        )}
      </div>
      <button onClick={handleBookingClick}>Book Ticket</button>
    </div>
  );
};

export default ShowDetails;
