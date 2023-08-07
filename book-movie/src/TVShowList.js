import React, { useState, useEffect } from 'react';
import './TVShowsList.css';
const TVShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching show data:', error);
      }
    };

    fetchShows();
  }, []);

  // Function to sanitize the HTML content and remove <p> and <b> tags
  const sanitizeHTML = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    const text = div.textContent || div.innerText || '';
    return text;
  };

  return (
    <div>
      <h1>TV Shows</h1>
      <div className="show-container">
        {shows.map((show) => (
          <div key={show.show.id} className="show-box">
            <h2>{show.show.name}</h2>
            <p>
              <strong>Type:</strong> {show.show.type}
            </p>
            <p>
              <strong>Language:</strong> {show.show.language}
            </p>
            <p>
              <strong>Genres:</strong> {show.show.genres.join(', ')}
            </p>
            <p>
              <strong>Status:</strong> {show.show.status}
            </p>
            <p>
              <strong>Premiered:</strong> {show.show.premiered}
            </p>
            <p>
              <strong>Runtime:</strong> {show.show.runtime} minutes
            </p>
            <p>
              <strong>Average Rating:</strong> {show.show.rating.average}
            </p>
            <p>
              <strong>Official Site:</strong>{' '}
              <a href={show.show.officialSite} target="_blank" rel="noopener noreferrer">
                {show.show.officialSite}
              </a>
            </p>
            <div>{sanitizeHTML(show.show.summary)}</div>
            {show.show.image && show.show.image.medium && (
              <img src={show.show.image.medium} alt={show.show.name} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShowList;


