import React, { Component } from "react";
import { connect } from "react-redux";
import { selectColor } from "../Redux/Action/cartAction";
import withRouter from "../Router/withRouter";

class SelectSingleColors extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Selctcolors  = this.props.color;
    return (
      <div className="d-flex">
        <div
          className="p-3 mx-1 "
          style={{
            backgroundColor: `${Selctcolors}`,
            height: "10px",
            width: "20px",
          }}
        >
        </div>
      </div>
    );
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
)(withRouter(SelectSingleColors));
