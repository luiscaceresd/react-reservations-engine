import React, { useEffect, useReducer } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import AvailableTimesContext from './AvailableTimesContext';
import { fetchAPI } from './mockAPI';

const timesReducer = (state, action) => {
  if (action.type === 'update_times') {
    return action.payload;
  }
  return state;
};

const initializeTimes = (dispatch) => {
  const today = new Date();
  fetchAPI(today)
    .then(availableTimes => {
      dispatch({ type: 'update_times', payload: availableTimes });
    })
    .catch(error => {
      console.error("Error fetching times:", error);
      dispatch({ type: 'update_times', payload: [] }); // Dispatching empty array on error
    });
};

const updateTimes = (selectedDate, dispatch) => {
  fetchAPI(selectedDate)
    .then(availableTimes => {
      dispatch({ type: 'update_times', payload: availableTimes });
    })
    .catch(error => {
      console.error("Error fetching times for selected date:", error);
      dispatch({ type: 'update_times', payload: [] }); // Dispatching empty array on error
    });
};

function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, []);

  useEffect(() => {
    initializeTimes(dispatch);
  }, [dispatch]);

  return (
    <AvailableTimesContext.Provider value={{ availableTimes, dispatch, updateTimes }}>
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
