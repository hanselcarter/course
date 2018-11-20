import React from "react";
import { connect } from "react-redux";
import getVideos from "../selectors/person";
import { TRvideo } from "./TRvideo";

const VideoList = props => {
  return (
    <div className="container">
      <div className="responsive-table table-status-sheet">
        <table className="bordered">
          <thead>
            <tr>
              <th className="left">Name</th>
              <th className="centered">{props.videos.length}</th>
            </tr>
          </thead>

          <tbody>
            {props.videos.map((video, i) => (
              <tr key={i}>
                <TRvideo key={i} videoid={video.id} />
              </tr>
            ))}
          </tbody>
        </table>
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
