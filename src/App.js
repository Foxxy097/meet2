import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';

class App extends Component {
  state ={
    events:[],
    locations: [],
    numberOfEvents: 32,
  }

  updateEvents = (location, eventCount = this.state.numberOfEvents) => {
    this.setState({ isOnline: navigator.onLine ? true: false });
    getEvents().then((events) => {
      const locationEvents = (location === 'all') 
      ? events
      : events.filter((event) => event.location === location);
      if(this.mounted) {
        this.setState({
        events: locationEvents.slice(0, eventCount),
        location: location,
        currentLocation: location
      });
      }
        });    
    };
  
    updateNumberOfEvents = async (e) => {
      const newNumber = e.target.value ? parseInt(e.target.value) : 100;
  
      if(newNumber < 1 || newNumber > 100){
        await this.setState({ 
          numberOfEvents: newNumber,
        errorText: 'Please choose a number between 0 and 100' 
      });
      } else {
        await this.setState({
          errorText:'',
          numberOfEvents: newNumber
        });
        this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
      } 
    }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }


  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events}/>
        <NumberOfEvents 
        numberOfEvents={this.state.numberOfEvents}
        updateNumberOfEvents={this.updateNumberOfEvents}
        errorText ={this.state.errorText}/>
  
        </div>);
  }
}

export default App;