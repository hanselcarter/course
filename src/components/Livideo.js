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
        <a
          className="collection-item"
          href={this.props.video.url}
          target="_blank"
        >
          {this.props.video.description}
        </a>
      </div>
    );
  }
}
