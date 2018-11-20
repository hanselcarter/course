import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import "../materialize/css/materialize.css";

export const LoginPage = ({ startLogin }) => (
  <div>
    <nav className="black">
      <button title="login" onClick={startLogin} className="btn-flat waves-effect waves-light white-text right">
        LOGIN
      <i title="Login" className="Large material-icons white-text right">
          cloud_queue
      </i>
      </button>
    </nav>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
