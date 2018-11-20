import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import "../materialize/css/materialize.css";

export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin} className="btn waves-effect waves-light">
      LOGIN
      <i title="Login" className="Large material-icons right">
        cloud_queue
      </i>
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
