import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TVShowList from './TVShowList';
import ShowDetails from './components/ShowDetails';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/"  element={<TVShowList />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="/show" element={<TVShowList />} />
          <Route path="/booking" element={<BookingPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
