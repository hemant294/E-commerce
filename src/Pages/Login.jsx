import React, { Component } from "react";
import { setRole } from "../Redux/Action/currentUserRoleAction";
import { currentUser } from "../Redux/Action/currentUserAction";
import { connect } from "react-redux";
import withRouter from "../Router/withRouter";

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const res = {
      token: "2a$10$L9Ou1szmSNxQd/QhyWt3jeWv7a.lntrw/ByhSd",
      role: "User",
      fullName: "Hemant Patidar",
      userName: "hemant123",
      email: "hemant123@gmail.com",
    };
    const user = {
      fullName: res.fullName,
      userName: res.userName,
      email: res.email,
    };
    localStorage.setItem("auth-token", res.token);
    localStorage.setItem("user-role", res.role);
    localStorage.setItem("user-info", JSON.stringify(user));
    this.props.setRole(res.role);
    this.props.currentUser({ ...user, isLogin: true });
    this.props.navigate("/");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 mt-4">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  autoComplete="off"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setRole,
  currentUser,
};

export default connect(null, mapDispatchToProps)(withRouter(Login));
