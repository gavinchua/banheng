import React, { Component } from "react";
import RestaurantForm from "../components/restaurant/Form";
import BackButton from "../components/shared/BackButton";

export default class RestaurantFormComponent extends Component {
  render() {
    //console.log(RestaurantsArray["restaurants"][0]);
    return (
      <div>
        <BackButton />
        <RestaurantForm />
      </div>
    );
  }
}
