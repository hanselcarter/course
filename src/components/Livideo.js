import React from "react";
import "../materialize/css/materialize.css";
import "../materialize/css/style.css";

export class Livideo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li className="collection-item">{this.props.videoid}</li>
      </div>
    );
  }
}
