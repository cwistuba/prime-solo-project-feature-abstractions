const userCoursesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_USER_COURSES":
      return action.payload;
    default:
      return state;
  }
};

export default userCoursesReducer;
