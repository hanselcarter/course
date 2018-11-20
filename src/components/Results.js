import React from "react";
import { connect } from "react-redux";
import { startAddVideo } from "../actions/person";

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  addOneVideo = () => {
    this.props.dispatch(
      startAddVideo({
        url: `https://www.youtube.com/embed/${this.props.video.id.videoId}`,
        description: this.props.video.snippet.title
      })
    );
  };

  render() {
    return (
      <div className="container">
        <br />
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`}
          frameBorder="0"
          allowFullScreen
        />
        <button
          title="save result"
          onClick={this.addOneVideo}
          className="btn waves-effect waves-light"
        >
          SAVE
          <i title="Login" className="Large material-icons right">
            save
          </i>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    results: state.results
  };
};

export default connect(mapStateToProps)(Results);
