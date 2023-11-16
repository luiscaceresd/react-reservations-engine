import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import { useReducer } from 'react';
import AvailableTimesContext from './AvailableTimesContext';

function initializeTimes() {
  // Logic to determine initial available times
  // For now, returns a hardcoded list of times
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

const updateTimes = (selectedDate) => {
  // Logic to update available times based on selected date
  // For now, it returns the same times regardless of the date
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

const timesReducer = (state, action) => {
    if(action.type === 'update_times') {
        return updateTimes(action.payload);
    }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, initializeTimes());

  return (
    <AvailableTimesContext.Provider value={{ availableTimes, dispatch }}>
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
