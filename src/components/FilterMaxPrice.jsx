import React, { Component } from "react";
import { connect } from "react-redux";
import { filterByMaxPrice } from "../Redux/Action/filterProductAction";

class FilterMaxPrice extends Component {
  handleFilter = () => {
    this.props.filterByMaxPrice();
  };

  render() {
    const { filteredProducts } = this.props;

    return (
      <div>
        <div className="card-body">
          <div>
            <h5 className="card-title text-secondary fs-6 text-uppercase">
              Filter by Minimum Price
            </h5>
            <div onClick={this.handleFilter}>
              <input
                type="radio"
                className="btn-check"
                name="options-base"
                id="priceMax"
              />
              <label className="btn" htmlFor="priceMax">
                Sort by Max Price
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filteredProducts: state.products.filteredProducts,
});

const mapDispatchToProps = {
  filterByMaxPrice,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterMaxPrice);
