import React, { Component } from "react";

// Data
import WeddingPackageData from "../data/WeddingPackages.json";
import MonthlyPackageData from "../data/MonthlyPackages.json";
import BirthdayPackageData from "../data/BirthdayPackages.json";
import RestaurantsArrayData from "../data/RestaurantsArray.json";

// Components
import RestaurantCarousel from "../components/restaurant/Carousel";
import PackageWedding from "../components/package/Wedding";
import PackageMonthly from "../components/package/Monthly";
import PackageBirthday from "../components/package/Birthday";
import RestaurantContact from "../components/restaurant/Contact";

// Global
const pagename = "harbourfront";

export default class HabourFront extends Component {
  render() {
    console.log(WeddingPackageData);

    console.log(RestaurantsArrayData);
    const RestaurantArrayData = RestaurantsArrayData.filter(
      e => e.pagename === "harbourfront"
    );
    console.log(RestaurantArrayData);

    const myslides = RestaurantArrayData.map(restaurant => restaurant.myslides);
    console.log(myslides[0]);

    const email = RestaurantArrayData.map(restaurant => restaurant.email);
    const mailto = `mailto:${email}`;
    const lat = Number(
      RestaurantArrayData.map(restaurant => restaurant.latlng.lat)
    );
    const lng = Number(
      RestaurantArrayData.map(restaurant => restaurant.latlng.lng)
    );
    const zoom = parseInt(
      RestaurantArrayData.map(restaurant => restaurant.zoom)
    );

    return (
      <div className={pagename}>
        <RestaurantCarousel myslides={myslides[0]} />
        <PackageMonthly monthlypackagesdata={MonthlyPackageData} />
        <PackageBirthday birthdaypackagesdata={BirthdayPackageData} />
        <PackageWedding weddingpackagesdata={WeddingPackageData} />
        <RestaurantContact
          restaurant={RestaurantArrayData.map(restaurant => restaurant.name)}
          address={RestaurantArrayData.map(restaurant => restaurant.address)}
          postalcode={RestaurantArrayData.map(
            restaurant => restaurant.postalcode
          )}
          businesshours={RestaurantArrayData.map(
            restaurant => restaurant.businesshours
          )}
          contact={RestaurantArrayData.map(restaurant => restaurant.contact)}
          email={email}
          mailto={mailto}
          directions={RestaurantArrayData.map(
            restaurant => restaurant.directions
          )}
          lat={lat}
          lng={lng}
          zoom={zoom}
        />
      </div>
    );
  }
}
