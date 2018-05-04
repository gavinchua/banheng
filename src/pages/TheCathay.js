import React, { Component } from "react";
import RestaurantContact from "../components/restaurant/Contact";
import RestaurantCarousel from "../components/restaurant/Carousel";

const pagename = "thecathay";
const myslides = [
  { src: "https://placeimg.com/1000/300/any", altText: "" },
  { src: "https://placeimg.com/1000/300/any", altText: "" },
  { src: "https://placeimg.com/1000/300/any", altText: "" }
];
const lat = 1.2993889;
const lng = 103.847398;
const zoom = 16;
const restaurant = "The Cathay";
const address = `2 Handy Road
#02-01 The Cathay`;
const postalcode = "229233";
const businesshours = `Lunch - 11:30am - 3:00pm
Dinner - 6:00pm – 10:00pm`;
const contact = `Dennis Zhao ( Mr. ) / Sammi Lin ( Ms )
6732 7888 / 9230 2513 / 9109 4064
Fax: 6732 1203`;
const slug = "thecathay";
const mailto = `mailto:${slug}@banheng.com.sg`;
const directions = "Dhoby Ghaut MRT Exit A";

export default class TheCathay extends Component {
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
