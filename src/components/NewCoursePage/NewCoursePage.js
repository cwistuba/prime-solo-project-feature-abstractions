import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import GoogleMapReact from "google-map-react";
import Marker from "google-map-react";

class NewCourse extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_COURSES",
    });
  }
  static defaultProps = {
    center: {
      lat: 39.099789,
      lng: -94.57856,
    },
    zoom: 10,
  };

  homeBack = (event) => {
    // console.log("Clicked");
    this.props.history.push("/user");
  };

  render() {
    const courseList = this.props.store.courses || [];
    const courseName = courseList.map((item, index) => {
      return (
        <div key={index}>
          <p>{item.name}</p>
        </div>
      );
    });
    console.log("THIS IS A TEST", courseName);

    return (
      <div>
        <div>
          <h2>Kansas City Golf Courses</h2>
          <h3>Click on Pin to add</h3>
        </div>
        <br />
        <div style={{ height: "60vh", width: "60%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {/* {this.props.store.courses_list.map((item, index) => {
              <Marker
                key={index.id}
                position={{
                  lat: item.latitude,
                  lng: item.longitude,
                }}
              />;
            })} */}
          </GoogleMapReact>
          <button onClick={this.homeBack}>Go Back</button>
          <div>
            {/* {courseList.map((item, index) => {
              return (
                <div key={index}>
                  <p>{item.name}</p>
                </div>
              );
            })} */}
            {/* <p>{courseList.name}</p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewCourse);
