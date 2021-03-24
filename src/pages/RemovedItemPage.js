import React, { Component } from 'react';
//import { connect } from 'react-redux';
 import MainNavigation from "../components/MainNavigation"
import shopContext from '../context/shop-context';
//import { removeProductFromCart } from '../store/actions';
import './Cart.css';
import ShopContext from "../context/shop-context"
class RemovedItemPage extends Component {
    static contextType=ShopContext;
  render() {
    return (
      <React.Fragment>
        <MainNavigation removedcartItemNumber={this.context.removedItems.reduce((count, curItem) => {
       return count + curItem.quantity;
     }, 0)} 
     cartItemNumber={this.context.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
      }, 0)}/>
        <main className="cart">
          {this.context.removedItems.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {this.context.removedItems.map(removedItem => (
              <li key={removedItem.id}>
                <div>
                  <strong>{removedItem.title}</strong> - ${removedItem.price} (
                  {removedItem.quantity})
                </div>
                <div>
                  <button
                    
                  >
                      Return the item to the product page 
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
//     removedItems: state.removedItems,
//      removedItemCount: state.removedItems.reduce((count, curItem) => {
//        return count + curItem.quantity;
//      }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     removeProductFromCart: id => dispatch(removeProductFromCart(id))
//   };
// };

export default RemovedItemPage;
