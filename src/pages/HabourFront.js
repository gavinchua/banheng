import React, { Component } from "react";
import RestaurantContact from "../components/restaurant/Contact";
import RestaurantCarousel from "../components/restaurant/Carousel";
//import RestaurantsArray from "../data/RestaurantsArray";

const pagename = "habourfront";
const myslides = [
  { src: "https://placeimg.com/1000/300/any", altText: "" },
  { src: "https://placeimg.com/1000/300/any", altText: "" },
  { src: "https://placeimg.com/1000/300/any", altText: "" }
];
const lat = 1.264553;
const lng = 103.819304;
const zoom = 16;
const restaurant = "HabourFront Center";
const address = `1 Maritime Square
#04-01 HarbourFront Centre`;
const postalcode = "099253";
const businesshours = `Lunch - 11:30am - 2:30pm
Dinner - 6:00pm – 10:00pm`;
const contact = `9297 0134 / 9720 8018
Please contact Sales Team: <br /> Jessie, Candy, Sammi ( Ms ).
Tel: 6278 0288 / 6278 1354 / 6278 1361
Fax: 6278 6080`;
const slug = `pavillion`;
const mailto = `mailto:${slug}@banheng.com.sg`;
const directions =
  "Alight from HarbourFront MRT Station (NE1), take Exit B. Follow the Cruise Centre sign; take lift at Lobby C (next to Cruise Departure/ Arrival Hall) to Level 4.";

export default class HabourFront extends Component {
  render() {
    //console.log(RestaurantsArray["restaurants"][0]);
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
