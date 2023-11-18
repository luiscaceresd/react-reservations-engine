// timesReducer.js
export const timesInitialState = [];

export const timesReducer = (state, action) => {
  switch (action.type) {
    case 'update_times':
      return action.payload;
    default:
      return state;
  }
};
