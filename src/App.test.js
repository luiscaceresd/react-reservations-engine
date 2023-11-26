// import React from "react";
// import { render, screen } from "@testing-library/react";
// import BookingForm from "./BookingForm";
// import AvailableTimesContext from "./AvailableTimesContext";
// import { initializeTimes, timesReducer, updateTimes } from "./Main";
// import { fetchAPI, submitAPI } from "./mockAPI";

// // Mock the context values
// const mockAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
// const mockDispatch = jest.fn();
// jest.mock("./mockAPI");

// // Create a custom render function that includes the context provider
// const renderWithProvider = (component) => {
//   return render(
//     <AvailableTimesContext.Provider
//       value={{ availableTimes: mockAvailableTimes, dispatch: mockDispatch }}
//     >
//       {component}
//     </AvailableTimesContext.Provider>
//   );
// };

// describe("initializeTimes", () => {
//   it("should dispatch correct times for a given date", async () => {
//     const expectedTimes = ["10:00", "11:00", "12:00"];
//     fetchAPI.mockResolvedValue(expectedTimes); // Mock the API response with resolved value

//     const dispatch = jest.fn(); // Mock dispatch function

//     // Call initializeTimes and wait for its completion
//     await initializeTimes(dispatch);

//     // Expect the dispatch to have been called with the correct action
//     expect(dispatch).toHaveBeenCalledWith({
//       type: "update_times",
//       payload: expectedTimes,
//     });
//   });
//   // Add more test cases as needed...
// });

// test("Renders the BookingForm heading", () => {
//   // Use the custom render function to render BookingForm
//   renderWithProvider(<BookingForm />);
//   const makeReservationButton = screen.getByText("Make Your Reservation");
//   expect(makeReservationButton).toBeInTheDocument();
// });

// test('Last name input should have correct attributes', () => {
//   render(<BookingForm />);
//   const lNameInput = screen.getByPlaceholderText('Last Name');
//   expect(lNameInput).toHaveAttribute('type', 'text');
//   expect(lNameInput).toHaveAttribute('name', 'lName');
//   expect(lNameInput).toHaveAttribute('id', 'lName');
//   expect(lNameInput).toBeRequired();
// });

// test('Number of guests input should have correct attributes', () => {
//   render(<BookingForm />);
//   const guestsInput = screen.getByPlaceholderText('5');
//   expect(guestsInput).toHaveAttribute('type', 'number');
//   expect(guestsInput).toHaveAttribute('name', 'guests');
//   expect(guestsInput).toHaveAttribute('id', 'guests');
//   expect(guestsInput).toHaveAttribute('min', '0');
//   expect(guestsInput).toHaveAttribute('max', '10');
//   expect(guestsInput).toBeRequired();
// });

// test('Reservation date input should have correct attributes', () => {
//   render(<BookingForm />);
//   const resDateInput = screen.getByLabelText('Date');
//   expect(resDateInput).toHaveAttribute('type', 'date');
//   expect(resDateInput).toHaveAttribute('name', 'res-date');
//   expect(resDateInput).toHaveAttribute('id', 'res-date');
//   expect(resDateInput).toBeRequired();
// });

// test('Reservation time select should have correct attributes', () => {
//   render(<BookingForm />);
//   const resTimeSelect = screen.getByLabelText('Time');
//   expect(resTimeSelect).toHaveAttribute('name', 'res-time');
//   expect(resTimeSelect).toHaveAttribute('id', 'res-time');
//   expect(resTimeSelect).toBeRequired();
// });

// test('Occasion radio buttons should have correct attributes', () => {
//   render(<BookingForm />);
//   const birthdayRadio = screen.getByLabelText('Birthday');
//   const anniversaryRadio = screen.getByLabelText('Anniversary');
//   expect(birthdayRadio).toHaveAttribute('type', 'radio');
//   expect(birthdayRadio).toHaveAttribute('name', 'occasion');
//   expect(birthdayRadio).toHaveAttribute('value', 'Birthday');
//   expect(anniversaryRadio).toHaveAttribute('type', 'radio');
//   expect(anniversaryRadio).toHaveAttribute('name', 'occasion');
//   expect(anniversaryRadio).toHaveAttribute('value', 'Anniversary');
// });

