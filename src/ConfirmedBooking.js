import React, { useContext } from 'react';
import BookingContext from './BookingContext'; // Import the context

const ConfirmationPage = () => {
  const { bookingDetails } = useContext(BookingContext); // Use context to get booking details

  // A mapping from variable names to user-friendly labels
  const labels = {
    fName: 'First Name',
    lName: 'Last Name',
    guests: 'Guests',
    resDate: 'Reservation Date',
    resTime: 'Reservation Time',
    occasion: 'Occasion',
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Booking Confirmation
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Your reservation details are confirmed as below.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              {Object.entries(bookingDetails).map(([key, value]) => (
                <div key={key} className={`${key % 2 === 0 ? 'bg-gray-50' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                  <dt className="text-sm font-medium text-gray-500">
                    {labels[key]} {/* Use the labels mapping here */}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {value} 
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
