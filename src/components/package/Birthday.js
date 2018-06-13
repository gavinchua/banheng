import React, { Component } from "react";

export default class PackageBirthday extends Component {
  render() {
    var birthdayPackageList = this.props.birthdaypackagesdata.map(
      (birthdaypackages, index) => (
        <li key={birthdaypackages.id}>
          <a
            href={`${birthdaypackages.name
              .replace(/\s+/g, "-")
              .toLowerCase()}.pdf`}
          >
            {birthdaypackages.name} {birthdaypackages.desc}
          </a>
        </li>
      )
    );
    return (
      <div>
        <h4>Birthday</h4>
        <ul>{birthdayPackageList}</ul>
      </div>
    );
  }
}
