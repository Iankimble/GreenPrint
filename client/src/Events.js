import React, { Component } from "react";
import { getAllEvents } from "./MainApi.js";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    getAllEvents().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ events: data });
      }
      console.log(this.state.events);
    });
  }

  render() {
    const { events } = this.state;
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Events</h2>
      </div>
    );
  }
}

// Map data and create layout

export default Events;
