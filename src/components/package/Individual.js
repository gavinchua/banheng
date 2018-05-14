import React, { Component } from "react";

export default class PackageIndividual extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var individualPackageList = this.props.individualpackagesdata.map(
      (individualpackages, index) => (
        <li key={individualpackages.id}>
          <a
            href={`${individualpackages.name
              .replace(/\s+/g, "-")
              .toLowerCase()}.pdf`}
          >
            {individualpackages.name} {individualpackages.desc}
          </a>
        </li>
      )
    );
    return (
      <div>
        <h4>Individual Promotion Set Menu</h4>
        <ul>{individualPackageList}</ul>
      </div>
    );
  }
}
