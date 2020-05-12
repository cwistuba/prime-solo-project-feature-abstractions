import React from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import MapAllCourses from "../MapAllCoursesPage/MapAllCoursesPage";

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

const NewCoursePage = () => (
  <div>
    <div>
      <h2>Kansas City Golf Courses</h2>
      <h3>Click on Pin to add</h3>
    </div>
    <br />

    <MapAllCourses />
  </div>
);

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(NewCoursePage);
