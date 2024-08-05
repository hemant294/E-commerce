import React, { Component } from "react";
import { filterbrandType } from "../Redux/Action/filterProductAction";
import { connect } from "react-redux";
import "./Sidebar.css";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import FilterMinPrice from "./FilterMinPrice";
import FilterMaxPrice from "./FilterMaxPrice";

export class Sidebar extends Component {
  render() {
    return (
      <div className="container">
        <div className="mt-3">
          <h4 className="text-center text-uppercase text-info">
            Filter Product
          </h4>
          <div className="card" style={{ width: "18rem" }}>
            <CategoryFilter />
            <BrandFilter />
            <FilterMinPrice />
            <FilterMaxPrice />
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
