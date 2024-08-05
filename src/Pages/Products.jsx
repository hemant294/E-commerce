import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import { connect } from "react-redux";
import { fetchProduct } from "../Redux/Action/ProductAction";
import { addToCart, removeFromCart } from "../Redux/Action/cartAction";
import withRouter from "../Router/withRouter";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProduct();
  }

  handleAddToCart = (product) => {
    if (!this.props.currentUser.isLogin) {
      alert("Plese Login...");
    } else {
      this.props.addToCart(product);
    }
  };

  handleRemoveFromCart = (productId) => {
    this.props.removeFromCart(productId);
  };

  handleShowProduct = (product) => {
    this.props.navigate(`/product/${product.id}`);
  };

  isInCart = (productId) => {
    return this.props.cart.some((item) => item.id === productId);
  };

  render() {
    const { filteredProducts, currentUser } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <div className="row">
              {filteredProducts.map((product) => (
                <div
                  role="button"
                  className="card col-3 m-2"
                  style={{ width: "300px" }}
                  key={product.id}
                  onClick={() => this.handleShowProduct(product)}
                >
                  <img
                    src={product.image}
                    className="card-img-top h-100 w-100 my-2"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <div className="d-flex justify-content-between">
                      <p>{product.company}</p>
                      <p>{product.category}</p>
                    </div>
                    <p>{product.price}</p>
                    <p
                      className="card-text"
                      style={{ height: "45px", overflow: "hidden" }}
                    >
                      {product.description}
                    </p>
                    {this.isInCart(product.id) ? (
                      <>
                        {currentUser.isLogin === true ? (
                          <button
                            className="btn btn-danger px-1-5"
                            onClick={(e) => {
                              e.stopPropagation();
                              this.handleRemoveFromCart(product.id);
                            }}
                          >
                            Remove from Cart
                          </button>
                        ) : (
                          <button
                            className="btn btn-primary px-1-5"
                            onClick={(e) => {
                              e.stopPropagation();
                              this.handleAddToCart(product);
                            }}
                          >
                            Add To Cart
                          </button>
                        )}
                      </>
                    ) : (
                      <button
                        className="btn btn-primary px-1-5"
                        onClick={(e) => {
                          e.stopPropagation();
                          this.handleAddToCart(product);
                        }}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filteredProducts: state.products.filteredProducts,
  cart: state.cart.cart,
  currentUser: state.currentUser,
});

const mapDispatchToProps = {
  fetchProduct,
  addToCart,
  removeFromCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Products));
