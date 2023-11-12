import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage'; // Import the BookingPage component

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
