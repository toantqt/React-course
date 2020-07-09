import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "test",
      password: "test",
      fullName: "test",
      sltGender: 0,
      rdLang: "vn",
      chkbStatus: false,
    };
  }

  //onHandleChange khi onchange thì sẻ có 1 biết event
  onHandleChange = (event) => {
    //save input to username in state
    // this.setState({
    //   username: event.target.value,
    // });
    //truy cap den tung input thong qua name
    var target = event.target;
    var name = target.name;
    //checkbox la truong hop dac biet
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  //handle form submit
  onHandleSubmit = (event) => {
    //block event submit
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      onChange={this.onHandleChange}
                      value={this.state.username}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={this.onHandleChange}
                      value={this.state.password}
                    />
                  </div>
                  <div className="form-group">
                    <label>Full Name</label>

                    <textarea
                      name="fullName"
                      className="form-control"
                      rows="3"
                      onChange={this.onHandleChange}
                      value={this.state.fullName}
                    ></textarea>
                    <br />
                    <label>Giới Tính</label>
                    <select
                      className="form-control"
                      name="sltGender"
                      value={this.state.sltGender}
                      onChange={this.onHandleChange}
                    >
                      <option value={0}>Nữ</option>
                      <option value={1}>Nam</option>
                    </select>
                    <br />
                    <label>Ngon Ngu</label>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="rdLang"
                          value="vn"
                          onChange={this.onHandleChange}
                          checked={this.state.rdLang === "vn"}
                        />
                        Tiếng Việt
                      </label>{" "}
                      <br />
                      <label>
                        <input
                          type="radio"
                          name="rdLang"
                          value="en"
                          onChange={this.onHandleChange}
                          checked={this.state.rdLang === "en"}
                        />
                        Tiếng Anh
                      </label>
                    </div>

                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name="chkbStatus"
                          value={true}
                          onChange={this.onHandleChange}
                          checked={this.state.chkbStatus === true}
                        />
                        Trạng thái
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>{" "}
                  &nbsp;
                  <button type="reset" className="btn btn-primary">
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
