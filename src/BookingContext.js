// BookingContext.js
import React from 'react';

const BookingContext = React.createContext({
  bookingDetails: {},
  setBookingDetails: () => {},
});

export default BookingContext;
