import React, { Component } from "react";
import AstronomyCard from "../components/AstronomyCard";
import axios from "axios";

export default class RestaurantFormComponent extends Component {
  constructor() {
    super();
    this.state = {
      astronomy: []
    }
  }

  componentDidMount() {
    const API_KEY = 'nxKl8yTvpvsXEqRz06mTPnn29uyckFmFCYrnqEIz';
    const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='

    axios.get(END_POINT + API_KEY)
      .then(response => {
        console.log(response.data);
        this.setState({
          astronomy: response.data
        });
      })
      .catch(error => {
        console.log(error, 'failed to fetch data')
      });
  }

  render() {
    const { astronomy } = this.state;
    return (
			<AstronomyCard data={astronomy} />
		);
  }
}
