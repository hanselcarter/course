import React from "react";
import { connect } from "react-redux";
import getVideos from "../selectors/person";
import { Livideo } from "./Livideo";

const VideoList = props => {
  return (
    <div className="container">
      <h5>saved videos</h5>
      <div className="collection">
        {props.videos.map((video, i) => (
          <Livideo key={i} video={video} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    videos: getVideos(state.person)
  };
};

export default connect(mapStateToProps)(VideoList);
