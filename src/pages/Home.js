import React, { Component } from "react";
import { Link } from "react-router-dom";

const pagename = "home";

export default class Home extends Component {
  render() {
    return (
      <div className="{pagename}">
        <nav>
          <ul>
            <li>
              <Link to="/HarbourFront">Harbour Front</Link>
            </li>
            <li>
              <Link to="/TheCathay">The Cathay</Link>
            </li>
            <li>
              <Link to="/ArandaCountryClub">Aranda Country Club</Link>
            </li>
            <li>
              <Link to="/OrchardCentral">Orchard Central</Link>
            </li>
            <li>
              <Link to="/BoonKeng">Boon Keng</Link>
            </li>
          </ul>
        </nav>
        <div>Promotions</div>
        <div className="hidden-sm-down">About</div>
      </div>
    );
  }
}
