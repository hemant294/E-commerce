import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import { connect } from "react-redux";
import { fetchProduct } from "../Redux/Action/ProductAction";
import { addToCart, removeFromCart } from "../Redux/Action/cartAction";
import withRouter from "../Router/withRouter";
import Products from "./Products";

class Home extends Component {
  render() {
    return (
      <Products />

    );
  }
}



export default Home;
