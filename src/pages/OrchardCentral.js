import React, { Component } from "react";
import RestaurantContact from "../components/restaurant/Contact";
import RestaurantCarousel from "../components/restaurant/Carousel";

const pagename = "orchardcentral";
const myslides = [
  { src: "https://placeimg.com/1000/300/any", altText: "" },
  { src: "https://placeimg.com/1000/300/any", altText: "" },
  { src: "https://placeimg.com/1000/300/any", altText: "" }
];
const lat = 1.300934;
const lng = 103.840008;
const zoom = 16;
const restaurant = "Orchard Central";
const address = `181 Orchard Road
#11-01/02 Orchard Central`;
const postalcode = "238896";
const businesshours = `Lunch - 11:30am - 3:00pm
Dinner - 6:00pm – 10:00pm`;
const contact = `Jae Soh ( Mr. ) / Sammi Lin ( Ms )
6238 1516 / 9298 9344 / 9109 4064
Fax: 6238 8007`;
const slug = "oc";
const mailto = `mailto:${slug}@banheng.com.sg`;
const directions = `Non driver: One minute walking distant from 313 building, exit from 313 building, facing Orchard Road and turn right to Orchard Central building, take the lift labeled as orange colour to level 11, Roof Garden.
Driver: Valet parking is available at level 1, beside the taxi stand of the Orchard Central building along the Killney Road or you could drive to level 10C and take one staircase up to level 11.`;

export default class OrchardCentral extends Component {
  render() {
    return (
      <div className={pagename}>
        <RestaurantCarousel myslides={myslides} />
        <RestaurantContact
          restaurant={restaurant}
          address={address}
          postalcode={postalcode}
          businesshours={businesshours}
          contact={contact}
          slug={slug}
          mailto={mailto}
          directions={directions}
          lat={lat}
          lng={lng}
          zoom={zoom}
        />
      </div>
    );
  }
}
