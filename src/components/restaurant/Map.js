import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { compose, withProps, withStateHandlers } from "recompose";
import FaAnchor from "react-icons/lib/fa/anchor";

export default class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
        defaultZoom={this.props.zoom}
        defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
      >
        <Marker
          position={{ lat: this.props.lat, lng: this.props.lng }}
          onClick={props.onToggleOpen}
        >
          {props.isOpen && (
            <InfoWindow onCloseClick={props.onToggleOpen}>
              <div>
                <h6>{this.props.restaurant}</h6>
                <p className="prewrap">
                  {this.props.address}
                  <br />
                  Singapore {this.props.postalcode}
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
