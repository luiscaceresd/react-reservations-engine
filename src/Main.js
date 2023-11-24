import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import AvailableTimesContext from './AvailableTimesContext';
import BookingContext from './BookingContext';
import { fetchAPI, submitAPI } from './mockAPI';

const timesReducer = (state, action) => {
  if (action.type === 'update_times') {
    return action.payload;
  }
  return state;
};

export const initializeTimes = (dispatch) => {
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

const updateTimes = (selectedDate, dispatch, callback) => {
  fetchAPI(selectedDate)
    .then(availableTimes => {
      dispatch({ type: 'update_times', payload: availableTimes });
      callback(availableTimes); // Call the callback with the times
    })
    .catch(error => {
      console.error("Error fetching times for selected date:", error);
      dispatch({ type: 'update_times', payload: [] }); // Dispatching empty array on error
      callback([]); // Call the callback with an empty array
    });
};

function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, []);
  const [bookingDetails, setBookingDetails] = useState({
    fName: '',
    lName: '',
    guests: '',
    date: '',
    time: '',
    occasion: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    initializeTimes(dispatch);
  }, [dispatch]);

  const submitForm = async (formData) => {
    try {
      const result = await submitAPI(formData);
      if (result) {
        navigate('/confirmation');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <BookingContext.Provider value={{ bookingDetails, setBookingDetails }}>
      <AvailableTimesContext.Provider value={{ availableTimes, dispatch, updateTimes, submitForm }}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />
          <Route path="/about" element={<Homepage scrollTo="description" />} />
          <Route path="/menu" element={<Homepage scrollTo="menu" />} />
          <Route path="/order-online" element={<Homepage scrollTo="order-online" />} />
          <Route path="/login" element={<Homepage scrollTo="login" />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </AvailableTimesContext.Provider>
    </BookingContext.Provider>
  );
}

export default Main;
