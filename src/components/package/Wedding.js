import React, { Component } from "react";

export default class PackageWedding extends Component {
  render() {
    var weddingPackageList = this.props.weddingpackagesdata.map(
      (weddingpackages, index) => (
        <li key={weddingpackages.id}>
          <p className="bullet-menu-selection bold">{weddingpackages.name}</p>
          <a
            href={`wedding-menu-${weddingpackages.name
              .replace(/\s+/g, "")
              .toLowerCase()}.pdf`}
            className="prewrap bg-none"
          >
            {weddingpackages.desc}
          </a>
        </li>
      )
    );
    return (
      <div>
        <h4>Wedding</h4>
        <ul>{weddingPackageList}</ul>
      </div>
    );
  }
}
