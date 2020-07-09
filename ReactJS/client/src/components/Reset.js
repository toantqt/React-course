import React, { Component } from "react";

class Reset extends Component {
  resetFontSize = () => {
    this.props.resetFontSizeDefault(true);
  };
  render() {
    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.resetFontSize}
      >
        reset
      </button>
    );
  }
}

export default Reset;
