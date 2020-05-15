import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* getUserCourses() {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.get("api/user/usercourses", config);

    yield put({ type: "SET_USER_COURSES", payload: response.data });
  } catch (error) {
    console.log("User Courses get request failed", error);
  }
}

function* deleteUserCourses(action) {
  try {
    const response = yield axios.delete(`api/user/${action.payload}`);
  } catch (error) {
    console.log("Error Deleting", error);
  }
}

function* userCoursesSaga() {
  yield takeLatest("GET_USER_COURSES", getUserCourses);
  yield takeLatest("DELETE_LISTING", deleteUserCourses);
}

export default userCoursesSaga;
