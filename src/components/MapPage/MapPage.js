import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import GoogleMapReact from "google-map-react";

class CourseMap extends Component {
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
    return (
      <div>
        <div style={{ height: "60vh", width: "60%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          ></GoogleMapReact>
          <button onClick={this.addCourse}>Add Course</button>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (reduxState) => ({
//   reduxState,
// });

export default connect(mapStoreToProps)(CourseMap);
