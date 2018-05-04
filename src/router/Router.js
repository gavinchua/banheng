import React from "react";
import { Route } from "react-router-dom";

// Shared
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

// Pages
import Home from "../pages/Home";
import HabourFront from "../pages/HabourFront";
import TheCathay from "../pages/TheCathay";
import ArandaCountryClub from "../pages/ArandaCountryClub";
import OrchardCentral from "../pages/OrchardCentral";
import BoonKeng from "../pages/BoonKeng";
import RestaurantFormComponent from "../pages/Form";

export default class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/HabourFront" component={HabourFront} />
        <Route path="/TheCathay" component={TheCathay} />
        <Route path="/ArandaCountryClub" component={ArandaCountryClub} />
        <Route path="/OrchardCentral" component={OrchardCentral} />
        <Route path="/BoonKeng" component={BoonKeng} />
        <Route path="/Form" component={RestaurantFormComponent} />
        <Footer />
      </React.Fragment>
    );
  }
}
