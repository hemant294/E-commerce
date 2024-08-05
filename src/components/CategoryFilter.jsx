import React, { Component } from "react";
import { filterbrandType } from "../Redux/Action/filterProductAction";
import { connect } from "react-redux";

export class CategoryFilter extends Component {
  handleSelectBrandType = (item) => {
    this.props.filterbrandType(item);
  };

  render() {
    const brandType = [
      {
        id: 1,
        name: "mobile",
      },
      {
        id: 2,
        name: "computer",
      },
      {
        id: 3,
        name: "laptop",
      },
      {
        id: 4,
        name: "watch",
      },
      {
        id: 5,
        name: "accessories",
      },
      {
        id: 6,
        name: "all",
      },
    ];

    return (
      <div>
        <div className="card-body">
          <div>
            <h5 className="card-title text-secondary fs-6 text-uppercase">
              Filter by category
            </h5>
            <div>
              {brandType.map((item) => (
                <div
                  key={item.id}
                  onClick={() => this.handleSelectBrandType(item)}
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
  filterbrandType,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
