import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import GoogleMapReact from "google-map-react";
import { withRouter } from "react-router-dom";
import UserMapMarker from "../UserMapMarker/UserMapMarker";

class CourseMap extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_USER_COURSES",
    });
  }
  static defaultProps = {
    center: {
      lat: 39.099789,
      lng: -94.57856,
    },
    zoom: 10,
  };

  addCourse = (event) => {
    // console.log("Clicked");
    this.props.history.push("/newcourse");
  };

  render() {
    const userCourseList = this.props.store.userCoursesReducer;
    const userCourseName = userCourseList.map((item, index) => {
      return (
        <UserMapMarker
          item={item}
          key={index}
          lat={item.latitude}
          lng={item.longitude}
        ></UserMapMarker>
      );
    });
    return (
      <div>
        <div style={{ height: "60vh", width: "60%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {userCourseName}
          </GoogleMapReact>

          <button onClick={this.addCourse}>Add Course</button>
          {/* <br />
          <div>Your Courses</div>
          <br />
          <div>{userCourseName}</div> */}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (reduxState) => ({
//   reduxState,
// });

export default withRouter(connect(mapStoreToProps)(CourseMap));
