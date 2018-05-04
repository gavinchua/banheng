import React, { Component } from "react";
import RestaurantContact from "../components/restaurant/Contact";
import RestaurantCarousel from "../components/restaurant/Carousel";

const pagename = "boonkeng";
const myslides = [
  { src: "https://placeimg.com/1000/300/any", altText: "" },
  { src: "https://placeimg.com/1000/300/any", altText: "" },
  { src: "https://placeimg.com/1000/300/any", altText: "" }
];
const lat = 1.317953;
const lng = 103.861279;
const zoom = 16;
const restaurant = "Boon Keng";
const address = "Blk 22 Boon Keng Road #01-21";
const postalcode = "330022";
const businesshours = `Lunch: 11:30pm – 3:00pm
Dinner: 6:00pm – 10:30pm
No Service Charge`;
const contact = `Tel: 6291 0407 / 6298 5285
Fax: 6392 4240`;
const slug = `boonkeng`;
const mailto = `mailto:${slug}@banheng.com.sg`;
const directions = "One minute walk from Boon Keng MRT Station (NE9)";

export default class BoonKeng extends Component {
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
