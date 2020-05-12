const coursesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_COURSES":
      return action.payload;
    case "UNSET_COURSES":
      return {};
    default:
      return state;
  }
};

export default coursesReducer;
