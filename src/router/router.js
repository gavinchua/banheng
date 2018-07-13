import React from "react";
import { Route } from "react-router-dom";

// Shared
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

// Pages
import Home from "../pages/home";
import HarbourFront from "../pages/harbourFront";
import TheCathay from "../pages/theCathay";
import ArandaCountryClub from "../pages/arandaCountryClub";
import OrchardCentral from "../pages/orchardCentral";
import BoonKeng from "../pages/boonKeng";
import RestaurantFormComponent from "../pages/form";
import NasaComponent from "../pages/nasa";

export default class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/HarbourFront" component={HarbourFront} />
        <Route path="/TheCathay" component={TheCathay} />
        <Route path="/ArandaCountryClub" component={ArandaCountryClub} />
        <Route path="/OrchardCentral" component={OrchardCentral} />
        <Route path="/BoonKeng" component={BoonKeng} />
        <Route path="/Form" component={RestaurantFormComponent} />
        <Route path="/Nasa" component={NasaComponent} />
        <Footer />
      </React.Fragment>
    );
  }
}
