import React from 'react';
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import AvailableTimesContext from './AvailableTimesContext';
import {initializeTimes, timesReducer, updateTimes } from './Main';

  // Mock the context values
  const mockAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const mockDispatch = jest.fn(); 

  // Create a custom render function that includes the context provider
  const renderWithProvider = (component) => {
      return render(
          <AvailableTimesContext.Provider value={{ availableTimes: mockAvailableTimes, dispatch: mockDispatch }}>
              {component}
          </AvailableTimesContext.Provider>
      );
  };

test('Renders the BookingForm heading', () => {
    // Use the custom render function to render BookingForm
    renderWithProvider(<BookingForm />);
    const makeReservationButton = screen.getByText("Make Your Reservation");
    expect(makeReservationButton).toBeInTheDocument();
});

test('initializeTimes returns the correct initial times', () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const actualTimes = initializeTimes();
  expect(actualTimes).toEqual(expectedTimes);
});

test('timesReducer updates times correctly using updateTimes function', () => {
  // Initial state from initializeTimes
  const initialState = initializeTimes();

  // Expected new state (hardcoded list of times from updateTimes)
  const expectedNewState = updateTimes();

  // Dispatch an 'update_times' action to the reducer
  const newState = timesReducer(initialState, { type: 'update_times', payload: '2023-01-01' });

  // Check if the new state matches the expected new state
  expect(newState).toEqual(expectedNewState);
});
