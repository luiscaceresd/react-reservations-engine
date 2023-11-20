import React from "react";
import { useState } from "react";
import AvailableTimesContext from "./AvailableTimesContext";
import BookingContext from "./BookingContext";

function BookingForm() {
  const { availableTimes, dispatch, updateTimes, submitForm } = React.useContext(AvailableTimesContext);
  const { setBookingDetails, bookingDetails } = React.useContext(BookingContext);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [guests, setGuests] = useState("");
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const [submissionError, setSubmissionError] = useState(""); // Track any submission errors

  // Handlers for changing state
  const handleFNameChange = (e) => {
    setFName(e.target.value);
  };
  const handleLNameChange = (e) => {
    setLName(e.target.value);
  };
  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };
  const handleResDateChange = (e) => {
    const newDate = e.target.value;
    setResDate(newDate);
    updateTimes(newDate, dispatch);
    console.log('changing')
  };
  const handleResTimeChange = (e) => {
    setResTime(e.target.value);
  };
  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Indicate that submission is in progress
    setSubmissionError(""); // Reset any existing errors

    const formData = {
      fName,
      lName,
      guests,
      resDate,
      resTime,
      occasion,
    };

    setBookingDetails({
      fName: formData.fName,
      lName: formData.lName,
      guests: formData.guests,
      date: formData.resDate, 
      time: formData.resTime,
      occasion: formData.occasion,
    })

    try {
      await submitForm(formData);
    } catch (error) {
      setSubmissionError("Failed to submit the form. Please try again."); // Provide feedback on error
    } finally {
      setIsSubmitting(false); // Reset submission state whether it was successful or not
    }
  };


  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={handleFormSubmit}>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="fName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="First Name"
                  value={fName}
                  onChange={handleFNameChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="lName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Last Name"
                  value={lName}
                  onChange={handleLNameChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="guests"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Numbers of guests
            </label>
            <input
              type="number"
              name="guests"
              id="guests"
              placeholder="5"
              min="0"
              max="10"
              value={guests}
              onChange={handleGuestsChange}
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="res-date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="res-date"
                  id="res-date"
                  value={resDate}
                  onChange={handleResDateChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="res-time"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Time
                </label>
                <select
                  name="res-time"
                  id="res-time"
                  value={resTime}
                  onChange={handleResTimeChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Occassion?
            </label>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="occasion"
                  id="radioButton1"
                  value="Birthday"
                  checked={occasion === "Birthday"}
                  onChange={handleOccasionChange}
                  className="h-5 w-5"
                />
                <label
                  htmlFor="radioButton1"
                  className="pl-3 text-base font-medium text-[#07074D]"
                >
                  Birthday
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="occasion"
                  id="radioButton2"
                  value="Anniversary"
                  checked={occasion === "Anniversary"}
                  onChange={handleOccasionChange}
                  className="h-5 w-5"
                />
                <label
                  htmlFor="radioButton2"
                  className="pl-3 text-base font-medium text-[#07074D]"
                >
                  Anniversary
                </label>
              </div>
            </div>
          </div>
          <div>
            <button
               type="submit"
               disabled={isSubmitting} // Disable button while submitting
               className={`hover:shadow-form rounded-md transition py-3 px-8 text-center text-base font-semibold outline-none ${
                 isSubmitting
                   ? "bg-gray-300 text-gray-500 cursor-not-allowed" // Styles for disabled state
                   : "hover:bg-primaryGreen hover:text-white bg-primaryYellow text-black"
               }`}
            >
              {isSubmitting ? "Submitting..." : "Make Your Reservation"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
