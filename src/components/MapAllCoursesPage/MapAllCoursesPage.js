import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import GoogleMapReact from "google-map-react";
import MapMarker from "../MapMarker/MapMarker";
import { withRouter } from "react-router-dom";

class MapAllCourses extends Component {
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

    zoom: 9,
    zoomControl: true,
    scaleControl: true,
  };

  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       clicked: false,
  //     };
  //   }

  //   clickMarker = (message) => (event) => {
  //     this.setState({
  //       clicked: !this.state.clicked,
  //     });
  //     console.log("golf course marker", event);
  //   };

  homeBack = (event) => {
    this.props.history.push("/user");
  };

  render() {
    // let addMessage = <div></div>;

    // if (this.state.clicked) {
    //   addMessage = <div className="add-message">Would you like to add?</div>;
    // }
    const courseList = this.props.store.courses;
    const courseName = courseList.map((item, index) => {
      return (
        <MapMarker
          item={item}
          key={index}
          lat={item.latitude}
          lng={item.longitude}
        ></MapMarker>
      );
    });

    return (
      <div>
        <div style={{ height: "70vh", width: "80%" }}>
          {/* {addMessage} */}
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            // onClick={this.clickMarker("Golf Course")}
          >
            {courseName}
          </GoogleMapReact>
          <button onClick={this.homeBack}>Go Back</button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(MapAllCourses));
