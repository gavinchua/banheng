import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class BackButton extends Component {
  goBack = props => {
    this.props.history.goBack();
  };

  render() {
    return <button onClick={this.goBack.bind(this)}>Back</button>;
  }
}

export default (BackButton = withRouter(BackButton));
