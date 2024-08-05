import React, { Component } from "react";
import { connect } from "react-redux";
import { selectColor } from "../Redux/Action/cartAction";
import withRouter from "../Router/withRouter";

class SelectColors extends Component {
  handleSelectColor = (id) => {
    this.props.selectColor(id);
  };

  render() {
    const Selctcolors = this.props.colors.map((color, index) => {
      return (
        <p
          className="p-3 mx-1 rounded-circle"
          style={{ backgroundColor: color, height: "15px", width: "15px" }}
          key={index}
          onClick={() => this.handleSelectColor(index)} // Correctly reference the method
        ></p>
      );
    });

    return <div className="d-flex">{Selctcolors}</div>;
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart.cart,
});

const mapDispatchToProps = {
  selectColor,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SelectColors));
