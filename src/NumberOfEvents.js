import React, { Component } from "react";

 export class NumberOfEvents extends Component {
  state = {
    numberOfEvents: "32",
  };

  handleInputChange = (e) => {
    const eventCount = e.target.value;
    this.setState({ numberOfEvents: eventCount });
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
      </div>
    );
  }
}

export default NumberOfEvents;