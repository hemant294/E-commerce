import React, { Component } from "react";
import { connect } from "react-redux";

export class PriceCount extends Component {
  constructor(props) {
    super(props);
  }

  calculateTotalPrice = () => {
    return this.props.cart.cart.reduce((total, item) => total + item.price, 0);
  };

  render() {
    const { cart } = this.props;
    const totalCount = this.calculateTotalPrice();

    return (
      <div className="d-flex justify-content-between">  
        <h6>Total : </h6>
        <h6>{totalCount}</h6>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart,
});

export default connect(mapStateToProps)(PriceCount);
