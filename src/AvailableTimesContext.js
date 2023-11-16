import React from 'react';

// Define a default value for the context
// This should match the shape of the value you expect in your components
const defaultContextValue = {
    availableTimes: [], // Default to an empty array or any initial value
    dispatch: () => {}  // Default to a no-op function
};

const AvailableTimesContext = React.createContext(defaultContextValue);

export default AvailableTimesContext;
