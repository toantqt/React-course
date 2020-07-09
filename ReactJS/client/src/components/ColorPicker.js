import React, { Component } from "react";
class ColorPicker extends Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "#ccc"],
    };
  }

  //showColor(color)
  showColor(color) {
    return {
      backgroundColor: color,
    };
  }

  //setActiveColor(color)
  setActiveColor(color) {
    //tra du lieu qua thang parent
    this.props.onReceiveColor(color);
  }
  render() {
    //color return <span></span> in panel-body
    var elmColors = this.state.colors.map((color, index) => {
      return (
        <span
          key={index}
          style={this.showColor(color)}
          className={this.props.color === color ? "acctive" : ""}
          //vi onclick la event nen phai viet arrow function
          onClick={() => this.setActiveColor(color)}
        ></span>
      );
    });
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Color Picker</h3>
          </div>
          <div className="panel-body">
            {elmColors}
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
