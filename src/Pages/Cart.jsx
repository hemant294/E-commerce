// components/Cart.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import './Cart.css';
import { removeFromCart, increaseCartQty, decreaseCartQty } from '../Redux/Action/cartAction';
import PriceCount from '../components/PriceCount';
import SelectSingleColor from '../components/SelectSingleColor';

class Cart extends Component {
  constructor(props) {
    super(props);
    // Initialize local state with quantities from props
    this.state = {
      quantities: this.props.cart.cart.reduce((acc, item) => {
        acc[item.id] = item.qty || 1; // Default to 1 if qty is not set
        return acc;
      }, {})
    };
  }

  handleRemoveFromCart = (id) => {
    this.props.removeFromCart(id);
  };

  handleDecrease = (id) => {
    this.setState(
      (prevState) => ({
        quantities: {
          ...prevState.quantities,
          [id]: Math.max((prevState.quantities[id] || 1) - 1, 1) // Ensure qty does not go below 1
        }
      }),
      () => {
        this.props.decreaseCartQty(id);
      }
    );
  };

  handleIncrease = (id) => {
    this.setState(
      (prevState) => ({
        quantities: {
          ...prevState.quantities,
          [id]: (prevState.quantities[id] || 1) + 1
        }
      }),
      () => {
        this.props.increaseCartQty(id);
      }
    );
  };

  render() {
    const { cart, currentUser } = this.props;
    const carts = cart.cart;

    if (!currentUser.isLogin) {
      return <h1>Cart is empty</h1>;
    }

    return (
      <div className="container">
        <div className="row mt-2">
          <div className="col-8">
            {carts.map((item) => (
              <div key={item.id} className="card m-2">
                <div className="card-flex">
                  <div className="d-flex">
                    <div>
                      <img src={item.image} className="img" alt="" />
                    </div>
                    <div className="item-name">
                      <h4 className="fs-5">{item.name}</h4>
                    </div>
                    <div className="item-inc-dec">
                      <p>
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            this.handleDecrease(item.id);
                          }}
                          className="fs-5"
                        >
                          -
                        </span>
                        {this.state.quantities[item.id] || 1}
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            this.handleIncrease(item.id);
                          }}
                          className="fs-5"
                        >
                          +
                        </span>
                      </p>
                    </div>
                    <div className="item-val">
                      <p>{(this.state.quantities[item.id] || 1) * (item.price)}</p>
                    </div>
                    <div className="item-val">
                      <SelectSingleColor color={item.colors[cart.selectColor]} />
                    </div>
                  </div>
                  <div className="item-remove">
                    <MdDelete
                      className="fs-2 text-danger me-2"
                      onClick={() => this.handleRemoveFromCart(item.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {carts.length >= 1 ? (
            <div className="col-4">
              <h5>Total billing</h5>
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  {carts.map((item) => (
                    <div className="d-flex justify-content-between" key={item.id}>
                      <h6 className="card-subtitle mb-2 text-body-secondary">
                        {item.name}:
                      </h6>
                      <h6 className="card-subtitle mb-2 text-body-secondary">
                        {(this.state.quantities[item.id] || 1) * (item.price)}
                      </h6>
                    </div>
                  ))}
                  <div>
                    <hr />
                    <PriceCount />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-4">Cart is Empty</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currentUser: state.currentUser,
});

const mapDispatchToProps = {
  removeFromCart,
  increaseCartQty,
  decreaseCartQty,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
