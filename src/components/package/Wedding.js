import React, { Component } from "react";

export default class PackageWedding extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var weddingPackageList = this.props.weddingpackagesdata.map(
      (weddingpackages, index) => (
        <li key={weddingpackages.id}>
          <p className="bullet-menu-selection bold">{weddingpackages.name}</p>
          <a href={weddingpackages.file} className="prewrap bg-none">
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