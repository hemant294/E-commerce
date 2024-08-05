import React, { Component } from "react";
import { connect } from "react-redux";
import { filterByMinPrice } from "../Redux/Action/filterProductAction";

class FilterMinPrice extends Component {
  handleFilter = () => {
    this.props.filterByMinPrice();
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
                id="priceMin"
              />
              <label className="btn" htmlFor="priceMin">
                Sort by Min Price
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
  filterByMinPrice,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterMinPrice);
