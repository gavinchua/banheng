import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { compose, withStateHandlers } from "recompose";

export default class Map extends Component {
  render() {
    const {
      zoom,
      lat,
      lng,
      restaurant,
      address,
      postalcode
    } = this.props;

    const MapWithAMakredInfoWindow = compose(
      withStateHandlers(
        () => ({
          isOpen: false
        }),
        {
          onToggleOpen: ({ isOpen }) => () => ({
            isOpen: !isOpen
          })
        }
      ),
      withScriptjs,
      withGoogleMap
    )(props => (
      <GoogleMap
        defaultZoom={zoom}
        defaultCenter={{ lat, lng }}
      >
        <Marker
          position={{ lat, lng }}
          onClick={props.onToggleOpen}
        >
          {props.isOpen && (
            <InfoWindow onCloseClick={props.onToggleOpen}>
              <div>
                <h6>{restaurant}</h6>
                <p className="prewrap">
                  {address}
                  <br />
                  Singapore {postalcode}
                </p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    ));

    return (
      <div>
        <MapWithAMakredInfoWindow
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDdRshmfLX-xGjkhAbMa85qY4Msq8pBYWU&js&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `500px`, width: "500px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
