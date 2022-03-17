import React, { Component } from "react";

export class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        infoText: "",
    }

  render() {
    return <div className="NumberOfEvents">
      <p>Number of shown events</p>
      <input
        type="number"
        className="number"
        value={this.props.numberOfEvents}
        onChange={(e) => this.props.updateNumberOfEvents(e)}/>
    </div>
  }
}
export default NumberOfEvents;