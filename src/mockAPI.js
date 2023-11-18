// Mock data: Available times hashed by the day of the month
const availableTimesByDay = {
  '1': ['10:00', '11:00', '12:00'],
  '2': ['14:00', '15:00', '16:00'],
  '3': ['10:00', '11:00', '12:00'],
  '4': ['14:00', '15:00', '16:00'],
  '5': ['10:00', '11:00', '12:00'],
  '6': ['14:00', '15:00', '16:00'],
  '7': ['10:00', '11:00', '12:00'],
  '8': ['14:00', '15:00', '16:00'],
  '9': ['10:00', '11:00', '12:00'],
  '10': ['14:00', '15:00', '16:00'],
  '11': ['10:00', '11:00', '12:00'],
  '12': ['14:00', '15:00', '16:00'],
  '13': ['10:00', '11:00', '12:00'],
  '14': ['14:00', '15:00', '16:00'],
  '15': ['10:00', '11:00', '12:00'],
  '16': ['14:00', '15:00', '16:00'],
  '17': ['10:00', '11:00', '12:00'],
  '18': ['14:00', '15:00', '16:00'],
  '19': ['10:00', '11:00', '12:00'],
  '20': ['14:00', '15:00', '16:00'],
  '21': ['10:00', '11:00', '12:00'],
  '22': ['14:00', '15:00', '16:00'],
  '23': ['10:00', '11:00', '12:00'],
  '24': ['14:00', '15:00', '16:00'],
  '25': ['10:00', '11:00', '12:00'],
  '26': ['14:00', '15:00', '16:00'],
  '27': ['10:00', '11:00', '12:00'],
  '28': ['14:00', '15:00', '16:00'],
  '29': ['10:00', '11:00', '12:00'],
  '30': ['14:00', '15:00', '16:00'],
  '31': ['10:00', '11:00', '12:00']
};


// Fetch available times based on the day of the month
const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dayOfMonth = new Date(date).getUTCDate().toString();
      const availableTimes = availableTimesByDay[dayOfMonth];

      if (availableTimes) {
        resolve(availableTimes);
      } else {
        reject(new Error('No available times for the selected date.'));
      }
    }, 1000);
  });
};

// Handle form submission and update available times
const submitAPI = (formData) => {
  const dayOfMonth = new Date(formData.date).getUTCDate().toString();

  availableTimesByDay[dayOfMonth] = availableTimesByDay[dayOfMonth].filter(time => time !== formData.time);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error('Form submission failed.'));
      }
    }, 1000); // Simulate API delay
  });
};

export { fetchAPI, submitAPI };
