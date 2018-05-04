import React, { Component } from "react";
import RestaurantContact from "../components/restaurant/Contact";
import RestaurantCarousel from "../components/restaurant/Carousel";

const pagename = "arandacountryclub";
const myslides = [
  { src: "https://placeimg.com/1000/300/any", altText: "" },
  { src: "https://placeimg.com/1000/300/any", altText: "" },
  { src: "https://placeimg.com/1000/300/any", altText: "" }
];
const lat = 1.375975;
const lng = 103.953444;
const zoom = 16;
const restaurant = "Aranda Country Club";
const address = "60 Pasir Ris Drive 3";
const postalcode = "519497";
const businesshours = `Lunch - 11:30am - 3:00pm
Dinner - 6:00pm – 10:30pm
Closed on every Monday (Excluding PHs & CNY period)`;
const contact = `Steven ( Mr. ) / Sammi Lin ( Ms )
6585 1770 / 9233 7816 / 9109 4064
Fax: 6585 1679`;
const slug = "acc";
const mailto = `mailto:${slug}@banheng.com.sg`;
const directions = "Open To Public , Next to NTUC Downtown East";

export default class ArandaCountryClub extends Component {
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
