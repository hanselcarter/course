import React from "react";
import { connect } from "react-redux";
import {
  setName,
  add_video,
  startAddExpense,
  startSetVideos
} from "../actions/person";
import { fetchDog } from "../actions/results";

class AddVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newname: ""
    };
  }

  handlesetName = e => {
    this.setState({ newname: e.target.value });
  };

  changeName = () => {
    console.log(this.props.results, this.props.person);
  };

  addOneVideo = () => {
    //this.props.dispatch(add_video({id:5,video_name:'aerosmith'}));
    this.props.dispatch(fetchDog());
    this.props.dispatch(
      startAddExpense({ url: "p.com", description: "the turtles featuring" })
    );
    console.log(this.props.results);
  };

  render() {
    return (
      <div className="container">
        <h1>ji</h1>
        <input type="text" onChange={this.handlesetName} />
        <button onClick={this.changeName}>change</button>
        <button onClick={this.addOneVideo}>add AddVideo</button>
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
