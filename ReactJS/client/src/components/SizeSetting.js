import React, { Component } from "react";

class SizeSetting extends Component {
  setFontSize(param) {
    this.props.changeSize(param);
  }
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.fontSize}</h3>
        </div>
        <div className="panel-body">
          <button
            type="button"
            className="btn btn-large btn-block btn-success"
            onClick={() => this.setFontSize(-2)}
          >
            Giam
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-large btn-block btn-success"
            onClick={() => this.setFontSize(2)}
          >
            Tang
          </button>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
