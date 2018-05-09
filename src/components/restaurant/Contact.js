import React, { Component } from "react";
import RestaurantMap from "./Map";

export default class RestaurantContact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>{this.props.restaurant}</div>
        <address>
          <h4 className="margin-top-10">Address</h4>
          <p className="prewrap">
            {this.props.address}
            <br />
            Singapore {this.props.postalcode}
          </p>
          <h4 className="margin-top-10">Business Hours</h4>
          <p className="prewrap">{this.props.businesshours}</p>
          <h4 className="margin-top-10">Contact</h4>
          <p className="prewrap">
            Wedding Package:
            <br />
            {this.props.contact}
            <br />
            <a href={this.props.mailto}>{this.props.email}</a>
          </p>
          <h4 className="margin-top-10">Directions</h4>
          <p className="prewrap">{this.props.directions}</p>
          <RestaurantMap
            lat={this.props.lat}
            lng={this.props.lng}
            zoom={this.props.zoom}
            address={this.props.address}
            postalcode={this.props.postalcode}
            restaurant={this.props.restaurant}
          />
        </address>
      </div>
    );
  }
}
