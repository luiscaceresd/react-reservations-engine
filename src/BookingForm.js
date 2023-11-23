import React, { useContext, useState } from "react";
import AvailableTimesContext from "./AvailableTimesContext";
import BookingContext from "./BookingContext";

function BookingForm() {
  const { availableTimes, dispatch, updateTimes, submitForm } = useContext(AvailableTimesContext);
  const { setBookingDetails } = useContext(BookingContext);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [guests, setGuests] = useState("");
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  // Custom form validation logic
  const isFormValid = () => {
    return (
      fName.trim() !== "" &&
      lName.trim() !== "" &&
      guests.trim() !== "" &&
      resDate.trim() !== "" &&
      occasion.trim() !== ""
    );
  };

  // Handlers for changing state
  const handleFNameChange = (e) => setFName(e.target.value);
  const handleLNameChange = (e) => setLName(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleResDateChange = (e) => {
    setResDate(e.target.value);
    // Update times and set default time
    updateTimes(e.target.value, dispatch, (times) => {
      if (times && times.length > 0) {
        setResTime(times[0]);
      }
    });
  };
  const handleResTimeChange = (e) => setResTime(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionError("");

    const formData = {
      fName,
      lName,
      guests,
      resDate,
      resTime,
      occasion,
    };

    setBookingDetails(formData);

    try {
      await submitForm(formData);
    } catch (error) {
      setSubmissionError("Failed to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={handleFormSubmit}>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="fName" className="mb-3 block text-base font-medium text-[#07074D]">First Name*</label>
                <input type="text" name="fName" id="fName" placeholder="First Name" value={fName} onChange={handleFNameChange} required className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" aria-label="First Name"/>
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="lName" className="mb-3 block text-base font-medium text-[#07074D]">Last Name*</label>
                <input type="text" name="lName" id="lName" placeholder="Last Name" value={lName} onChange={handleLNameChange} required className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" aria-label="Last Name"/>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="guests" className="mb-3 block text-base font-medium text-[#07074D]">Numbers of guests*</label>
            <input type="number" name="guests" id="guests" placeholder="5" min="0" max="10" value={guests} onChange={handleGuestsChange} required className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" aria-label="Number of Guests"/>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="res-date" className="mb-3 block text-base font-medium text-[#07074D]">Date*</label>
                <input type="date" name="res-date" id="res-date" value={resDate} onChange={handleResDateChange} required className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" aria-label="Reservation Date"/>
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="res-time" className="mb-3 block text-base font-medium text-[#07074D]">Time*</label>
                <select name="res-time" id="res-time" value={resTime} onChange={handleResTimeChange} required className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" aria-label="Reservation Time">
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">Occasion?*</label>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <input type="radio" name="occasion" id="radioButton1" value="Birthday" checked={occasion === "Birthday"} onChange={handleOccasionChange} className="h-5 w-5" aria-label="Occasion Birthday"/>
                <label htmlFor="radioButton1" className="pl-3 text-base font-medium text-[#07074D]">Birthday</label>
              </div>
              <div className="flex items-center">
                <input type="radio" name="occasion" id="radioButton2" value="Anniversary" checked={occasion === "Anniversary"} onChange={handleOccasionChange} className="h-5 w-5" aria-label="Occasion Anniversary"/>
                <label htmlFor="radioButton2" className="pl-3 text-base font-medium text-[#07074D]">Anniversary</label>
              </div>
            </div>
          </div>

          <div>
            <button type="submit" disabled={!isFormValid() || isSubmitting} className={`hover:shadow-form rounded-md transition py-3 px-8 text-center text-base font-semibold outline-none ${!isFormValid() || isSubmitting ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "hover:bg-primaryGreen hover:text-white bg-primaryYellow text-black"}`} aria-label="Submit Reservation">
              {isSubmitting ? "Submitting..." : "Make Your Reservation"}
            </button>
            {submissionError && <div className="text-red-500">{submissionError}</div>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;