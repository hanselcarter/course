import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import "../materialize/css/materialize.css";

export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin} className="btn">
      Login
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
