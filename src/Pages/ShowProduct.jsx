import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchShowProduct } from "../Redux/Action/showProductAction";
import withRouter from "../Router/withRouter";
import "./ShowProducts.css";
import { addToCart, removeFromCart } from "../Redux/Action/cartAction";
import ProductReating from "../components/ProductReating";
import SelectColors from "../components/SelectColors";

class ShowProduct extends Component {
  constructor() {
    super();
    this.state = {
      imageShow: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.params;
    this.props.fetchShowProduct(id);
  }

  handleAddToCart = (product) => {
    if (!this.props.currentUser.isLogin) {
      alert("Please Login...");
    } else {
      this.props.addToCart(product);
    }
  };

  handleRemoveFromCart = (productId) => {
    this.props.removeFromCart(productId);
  };

  handleMouseImage = (id) => {
    this.setState({ imageShow: id });
  };

  handleMouseOut = () => {
    this.setState({ imageShow: null });
  };

  isInCart = (productId) => {
    return this.props.cart.some((item) => item.id === productId);
  };

  render() {
    const { showProduct, currentUser } = this.props;
    const { imageShow } = this.state;

    if (!showProduct || !showProduct.image || showProduct.image.length === 0) {
      return <div>Loading...</div>;
    }

    const defaultImage = showProduct.image[0];

    return (
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 mt-5">
            <div className="d-flex">
              <div className="image-list">
                {showProduct.image.map((img) => (
                  <div key={img.id} className="image-item">
                    <img
                      src={img.url}
                      alt=""
                      className="img-styl"
                      onMouseOver={() => this.handleMouseImage(img.id)}
                      onMouseOut={this.handleMouseOut}
                    />
                  </div>
                ))}
              </div>
              <div className="full-size-image-container">
                {showProduct.image.map((img) =>
                  imageShow === img.id ? (
                    <div key={img.id} className="full-size-image">
                      <img src={img.url} alt="Full Size" className="main-img" />
                    </div>
                  ) : null
                )}
                {imageShow === null && defaultImage && (
                  <div className="full-size-image">
                    <img
                      src={defaultImage.url}
                      alt="Default Size"
                      className="main-img"
                    />
                  </div>
                )}
              </div>
              <div className="product-content">
                <h4 className="text-body-secondary">{showProduct.name}</h4>
                <p>{showProduct.company}</p>
                <div className="d-flex">
                  <ProductReating stars={showProduct.stars} />
                  <p className="ps-5">reviews: {showProduct.reviews}</p>
                </div>
                <p>Price: {showProduct.price}</p>
                <div className="color">
                  color: <SelectColors colors={showProduct.colors} />
                </div>
                <p className="overflow-hidden discription">
                  {showProduct.description}
                </p>
                <p className="overflow-hidden discription">
                  {showProduct.stock >= 1 ? (
                    <h1>In Stock</h1>
                  ) : (
                    <h1>Out of stock</h1>
                  )}
                </p>
                {this.isInCart(showProduct.id) ? (
                  <button
                    className="btn btn-danger px-1-5"
                    onClick={(e) => {
                      e.stopPropagation();
                      this.handleRemoveFromCart(showProduct.id);
                    }}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="btn btn-primary px-1-5"
                    onClick={(e) => {
                      e.stopPropagation();
                      this.handleAddToCart(showProduct);
                    }}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showProduct: state.showProduct,
  products: state.products,
  cart: state.cart.cart,
  currentUser: state.currentUser,
});

const mapDispatchToProps = {
  fetchShowProduct,
  addToCart,
  removeFromCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ShowProduct));
