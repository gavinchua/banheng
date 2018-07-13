import React, { Component } from "react";

// Data
import WeddingPackageData from "../data/weddingPackages.json";
import MonthlyPackageData from "../data/monthlyPackages.json";
import BirthdayPackageData from "../data/birthdayPackages.json";
import IndividualPackageData from "../data/individualPackages.json";
import RestaurantsArrayData from "../data/restaurantsArray.json";

// Components
import RestaurantCarousel from "../components/restaurant/Carousel";
import PackageWedding from "../components/package/Wedding";
import PackageMonthly from "../components/package/Monthly";
import PackageBirthday from "../components/package/Birthday";
import PackageIndividual from "../components/package/Individual";
import RestaurantContact from "../components/restaurant/Contact";

// Global
const pagename = "boonkeng";

export default class BoonKeng extends Component {
  render() {
    //console.log(WeddingPackageData);

    //console.log(RestaurantsArrayData);
    const RestaurantArrayData = RestaurantsArrayData.filter(
      e => e.pagename === pagename
    );
    //console.log(RestaurantArrayData);
    const {
      name,
      address,
      postalcode,
      businesshours,
      contact,
      email,
      directions
    } = RestaurantArrayData[0];

    const myslides = RestaurantArrayData.map(restaurant => restaurant.myslides);
    //console.log(myslides[0]);

    const mailto = `mailto:${email}`;
    const lat = Number(
      RestaurantArrayData.map(restaurant => restaurant.latlng.lat)
    );
    const lng = Number(
      RestaurantArrayData.map(restaurant => restaurant.latlng.lng)
    );
    const zoom = parseInt(
      RestaurantArrayData.map(restaurant => restaurant.zoom), 10
    );

    return (
      <main className={pagename} role="main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <RestaurantCarousel myslides={myslides[0]} />
              <PackageMonthly monthlypackagesdata={MonthlyPackageData} />
              <PackageBirthday birthdaypackagesdata={BirthdayPackageData} />
              <PackageIndividual individualpackagesdata={IndividualPackageData} />
              <PackageWedding weddingpackagesdata={WeddingPackageData} />
              <RestaurantContact
                restaurant={name}
                address={address}
                postalcode={postalcode}
                businesshours={businesshours}
                contact={contact}
                email={email}
                mailto={mailto}
                directions={directions}
                lat={lat}
                lng={lng}
                zoom={zoom}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
