import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* getCourses() {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.get("api/user/courses", config);
    yield put({ type: "SET_COURSES", payload: response.data });
  } catch (error) {
    console.log("Courses get request failed", error);
  }
}

function* postCourses(action) {
  try {
    const response = yield axios.post("api/user/courses", action.payload);
  } catch (error) {
    console.log("Error posting", error);
  }
}

function* coursesSaga() {
  yield takeLatest("GET_COURSES", getCourses);
  yield takeLatest("SEND_ADD", postCourses);
}

export default coursesSaga;
