import React from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "./MapMarker.css";

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

const MapMarker = (props) => <div className="marker">{props.item.name}</div>;

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(MapMarker);
