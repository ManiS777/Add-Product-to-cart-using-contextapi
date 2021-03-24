import React, { Component } from 'react';
//import { connect } from 'react-redux';
 import MainNavigation from "../components/MainNavigation"
//import { addProductToRemovedCart } from '../store/actions';
import './Cart.css';
import ShopContext from "../context/shop-context"


class CartPage extends Component {
  static contextType=ShopContext;
  render() {
  
    return (
      <React.Fragment>
        <MainNavigation cartItemNumber={this.context.cart.reduce((count, curItem) => {
     return count + curItem.quantity;
     }, 0)} 
     removedcartItemNumber={this.context.removedItems.reduce((count, curItem) => {
      return count + curItem.quantity;
   }, 0)}/>
        <main className="cart">
          {this.context.cart.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {this.context.cart.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
                <div>
                  <button
                    onClick={this.context.addProductToRemovedCart.bind(
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

// const mapStateToProps = state => {
//   return {
//     cartItems: state.cart,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
    
//     addProductToRemovedCart:id=>dispatch(addProductToRemovedCart(id))
//   };
// };

export default CartPage;
