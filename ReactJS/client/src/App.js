import React, { Component } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 16,
    };
  }

  //onSetColor(param) colorPicker -> app.js
  onSetColor = (param) => {
    this.setState({
      color: param,
    });
  };
  //set fontsize
  setSize = (param) => {
    this.setState({
      fontSize: this.state.fontSize + param,
    });
    // console.log(param);
  };

  //reset FontSize
  reset = (value) => {
    if (value) {
      this.setState({
        color: "red",
        fontSize: 16,
      });
    }
  };
  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker
            color={this.state.color}
            onReceiveColor={this.onSetColor}
          />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting
              fontSize={this.state.fontSize}
              changeSize={this.setSize}
            />
            <Reset
              fontsize={this.state.fontSize}
              resetFontSizeDefault={this.reset}
            />
          </div>

          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

export default App;
