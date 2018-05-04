import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class BackButton extends Component {
  constructor(props) {
    super(props);
  }

  goBack = props => {
    this.props.history.goBack();
  };

  render() {
    return <button onClick={this.goBack.bind(this)}>Back</button>;
  }
}

export default (BackButton = withRouter(BackButton));
