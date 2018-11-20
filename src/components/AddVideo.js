import React from "react";
import { connect } from "react-redux";
import {
  setName,
  add_video,
  startAddExpense,
  startSetVideos
} from "../actions/person";
import { fetchDog } from "../actions/results";
import Results from "./Results";

class AddVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleSetName = e => {
    this.setState({ name: e.target.value });
  };

  changeName = () => {
    console.log(this.props.results, this.props.person);
  };

  search = () => {
    if (this.state.name) {
      this.props.dispatch(fetchDog(this.state.name));
    }
    console.log(this.props.results);
  };

  render() {
    return (
      <div className="container">
        <input
          placeholder="search a youtube video"
          type="text"
          onChange={this.handleSetName}
        />
        <button
          title="search"
          className="btn waves-effect waves-light right"
          onClick={this.search}
        >
          <i title="Login" className="Large material-icons right">
            search
          </i>
        </button>
        {this.props.results.map((video, i) => (
          <Results key={i} video={video} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    person: state.person,
    results: state.results
  };
};

export default connect(mapStateToProps)(AddVideo);
