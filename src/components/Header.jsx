import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { connect } from "react-redux";
import withRouter from "../Router/withRouter";
import { removeCurrentUser } from "../Redux/Action/currentUserAction";
import { removeRole } from "../Redux/Action/currentUserRoleAction";
import { searchData } from "../Redux/Action/filterProductAction";

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: ""
    }
  }
  handleLogOut = () => {
    localStorage.removeItem("auth-token");
    this.props.removeCurrentUser();
    this.props.removeRole();
    this.props.navigate("/");
  };

  hendleSearch = (e) => {
    this.setState({ search: e.target.value})
    console.log(e.target.value)
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    this.props.searchData(this.state.search)
  }

  render() {
    const { cart, currentUser } = this.props;
    const cartLength = cart?.cart?.length || 0;

    return (
      <nav className="navbar navbar-expand-lg bg-dark header">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contect"
                  className="nav-link active"
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/product"
                  className="nav-link active"
                  aria-current="page"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                {currentUser.isLogin ? (
                  <div className="d-flex align-items-center">
                    <Link
                      to="/"
                      className="nav-link active"
                      aria-current="page"
                      onClick={this.handleLogOut}
                    >
                      Logout
                    </Link>
                    <span className="nav-link active">
                      <a>( {currentUser.fullName} )</a>
                    </span>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={this.handleSearchSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.state.search}
                onChange={(e) => this.hendleSearch(e)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div className="mx-3">
              <Link to="/cart">
                <FaCartPlus className="text-light fs-3" />
                {currentUser.isLogin && (
                  <span className="position-absolute top-1 start-98 translate-middle badge rounded-pill bg-danger">
                    {cartLength}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currentUser: state.currentUser,
});

const mapDispatchToProps = {
  removeCurrentUser,
  removeRole,
  searchData
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
