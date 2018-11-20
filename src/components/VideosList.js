import React from "react";
import { connect } from "react-redux";
import getVideos from "../selectors/person";

const VideoList = props => {
  return (
    <div>
      {props.videos.length}
      <ul>
        {props.videos.map((video, i) => (
          <li key={i}>{video.id}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    videos: getVideos(state.person)
  };
};

export default connect(mapStateToProps)(VideoList);
