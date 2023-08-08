import React, { useState, useEffect } from 'react';
import './TVShowsList.css';
import { Link } from 'react-router-dom';

const TVShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching show data:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div>
      <h1>My Book-Movie App</h1>
      <h1>TV Shows</h1>
      <div className="show-container">
        {shows.map((show) => {
          console.log('Show Name:', show.show.name);
          console.log('Genres:', show.show.genres);

          return (
            <div key={show.show.id} className="show-box">
              <h2>
                <Link to={`/show/${show.show.id}`}>{show.show.name}</Link>
              </h2>
              {show.show.genres && (
                <p>
                  <strong>Genres:</strong> {show.show.genres.join(', ')}
                </p>
              )}
              <p>
                <strong>Average Rating:</strong> {show.show.rating.average}
              </p>
              <p>
                <strong>Official Site:</strong>{' '}
                <a href={show.show.officialSite} target="_blank" rel="noopener noreferrer">
                  {show.show.officialSite}
                </a>
              </p>
              {show.show.image && show.show.image.medium && (
                <img src={show.show.image.medium} alt={show.show.name} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TVShowList;
