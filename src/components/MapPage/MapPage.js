import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";

class CourseMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.099789,
      lng: -94.57856,
    },
    zoom: 9,
  };

  render() {
    return (
      <div style={{ height: "60vh", width: "60%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_API }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        ></GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(CourseMap);
