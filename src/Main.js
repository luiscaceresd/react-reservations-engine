import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import { useState } from 'react';
import AvailableTimesContext from './AvailableTimesContext';

function Main() {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00", "18:00", "19:00", "20:00", "21:00"
  ]);

  const handleAvailableTimesChange = (e) => { setAvailableTimes(e.target.value) };

  return (
    <AvailableTimesContext.Provider value={{ availableTimes, setAvailableTimes }}>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </AvailableTimesContext.Provider>
  );
}

export default Main;
