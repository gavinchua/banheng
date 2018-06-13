import React, { Component } from "react";

export default class PackageMonthly extends Component {
  render() {
    var monthlyPackageList = this.props.monthlypackagesdata.map(
      (monthlypackages, index) => (
        <li key={monthlypackages.id}>
          <a href={monthlypackages.file}>{monthlypackages.name}</a>
        </li>
      )
    );
    return (
      <div>
        <h4>Monthly Promotion Menu</h4>
        <ul>{monthlyPackageList}</ul>
      </div>
    );
  }
}
