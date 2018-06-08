import React, { Component } from "react";
import FormTable from "../components/restaurant/FormTable";
import BackButton from "../components/shared/BackButton";

export default class RestaurantFormComponent extends Component {
  render() {
    //console.log(RestaurantsArray["restaurants"][0]);
    return (
      <main className="{pagename}" role="main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <BackButton />
              <FormTable / >
            </div>
          </div>
        </div>
      </main>
    );
  }
}
