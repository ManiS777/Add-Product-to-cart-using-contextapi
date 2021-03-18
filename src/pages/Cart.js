import React, { Component } from 'react';
import { connect } from 'react-redux';
// import MainNavigation from "../components/MainNavigation"
import { addProductToRemovedCart } from '../store/actions';
import './Cart.css';

class CartPage extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <MainNavigation cartItemNumber={this.props.cartItemCount} /> */}
        <main className="cart">
          {this.props.cartItems.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {this.props.cartItems.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
                <div>
                  <button
                    onClick={this.props.addProductToRemovedCart.bind(
                      this,
                      cartItem
                    )}
                  >
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
    addProductToRemovedCart:id=>dispatch(addProductToRemovedCart(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
