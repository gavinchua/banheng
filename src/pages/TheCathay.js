import React, { Component } from "react";

// Data
import WeddingPackageData from "../data/WeddingPackages.json";
import MonthlyPackageData from "../data/MonthlyPackages.json";
import BirthdayPackageData from "../data/BirthdayPackages.json";
import IndividualPackageData from "../data/IndividualPackages.json";
import RestaurantsArrayData from "../data/RestaurantsArray.json";

// Components
import RestaurantCarousel from "../components/restaurant/Carousel";
import PackageWedding from "../components/package/Wedding";
import PackageMonthly from "../components/package/Monthly";
import PackageBirthday from "../components/package/Birthday";
import PackageIndividual from "../components/package/Individual";
import RestaurantContact from "../components/restaurant/Contact";

// Global
const pagename = "thecathay";

export default class TheCathay extends Component {
  render() {
    const RestaurantArrayData = RestaurantsArrayData.filter(
      e => e.pagename === pagename
    );

    const myslides = RestaurantArrayData.map(restaurant => restaurant.myslides);

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
      <main className="{pagename}" role="main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <RestaurantCarousel myslides={myslides[0]} />
              <PackageMonthly monthlypackagesdata={MonthlyPackageData} />
              <PackageBirthday birthdaypackagesdata={BirthdayPackageData} />
              <PackageIndividual
                individualpackagesdata={IndividualPackageData}
              />
              <PackageWedding weddingpackagesdata={WeddingPackageData} />
              <RestaurantContact
                restaurant={RestaurantArrayData.map(
                  restaurant => restaurant.name
                )}
                address={RestaurantArrayData.map(
                  restaurant => restaurant.address
                )}
                postalcode={RestaurantArrayData.map(
                  restaurant => restaurant.postalcode
                )}
                businesshours={RestaurantArrayData.map(
                  restaurant => restaurant.businesshours
                )}
                contact={RestaurantArrayData.map(
                  restaurant => restaurant.contact
                )}
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
          </div>
        </div>
      </main>
    );
  }
}
