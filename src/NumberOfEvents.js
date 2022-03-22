import React, { Component } from "react";
import { ErrorAlert } from "./alert";

 export class NumberOfEvents extends Component {
  state = {
    numberOfEvents: "32",
    infoText:""
  };

  handleInputChange = (e) => {
    const eventCount = e.target.value;
    if (eventCount < 1 || eventCount > 32) {
      this.setState({
        numberOfEvents: eventCount,
        infoText: "Please enter a number between 1 and 32",
      });
    } else {
      this.setState({
        numberOfEvents: eventCount,
        infoText: "",
      });
    } 
    this.props.updateNumberOfEvents(eventCount);
  };

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className='NumberOfEvents'>
        <input
          type='number'
          onChange={this.handleInputChange}
          value={numberOfEvents}
          className='numberOfEvents'
        />
        
        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default NumberOfEvents;