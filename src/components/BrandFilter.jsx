import React, { Component } from "react";
import { connect } from "react-redux";
import { filterByBrand } from "../Redux/Action/filterProductAction";

export class BrandFilter extends Component {
  handleSelectBrandName = (item) => {
    this.props.filterByBrand(item);
  };

  render() {
    const brandName = [
      {
        id: 11,
        name: "apple",
      },
      {
        id: 22,
        name: "samsung",
      },
      {
        id: 33,
        name: "dell",
      },
      {
        id: 44,
        name: "nokia",
      },
      {
        id: 55,
        name: "asus",
      },
      {
        id: 66,
        name: "lenova",
      },
      {
        id: 77,
        name: "rolex",
      },
      {
        id: 88,
        name: "all",
      },
    ];

    return (
      <div>
        <div className="card-body">
          <div>
            <h5 className="card-title text-secondary fs-6 text-uppercase">
              Filter by Brand
            </h5>
            <div>
              {brandName.map((item) => (
                <div
                  key={item.id}
                  onClick={() => this.handleSelectBrandName(item)}
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-base"
                    id={item.id}
                  />
                  <label className="btn" htmlFor={item.id}>
                    {item.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    filterByBrand,
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandFilter);
