import React, { Component } from "react";

export default class PackageBirthday extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var birthdayPackageList = this.props.birthdaypackagesdata.map(
      (birthdaypackages, index) => (
        <li key={birthdaypackages.id}>
          <a href={birthdaypackages.file}>
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