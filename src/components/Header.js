import React from "react";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import "../materialize/css/style.css";
import "../materialize/css/materialize.css";
import moment from "moment";

export const Header = ({ startLogout }) => (
  <nav className="red">
    <div className="row">
      <h1 className="white-text left">
        {moment().format("MMMM Do YYYY, h:mm:ss a")}
      </h1>

      <button
        onClick={startLogout}
        className="btn-flat waves-effect red waves-light white-text right"
        title="Logout"
      >
        LOGOUT
        <i title="Logout" className="Large material-icons right white-text">
          cloud_queue
        </i>
      </button>
    </div>
  </nav>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
