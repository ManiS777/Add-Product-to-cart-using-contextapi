import React, { Component } from 'react';
import { connect } from 'react-redux';
// import MainNavigation from "../components/MainNavigation"
import { removeProductFromCart } from '../store/actions';
import './Cart.css';

class RemovedItemPage extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <MainNavigation cartItemNumber={this.props.cartItemCount} /> */}
        <main className="cart">
          {this.props.removedItems.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {this.props.removedItems.map(removedItem => (
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

const mapStateToProps = state => {
  return {
    removedItems: state.removedItems,
     removedItemCount: state.removedItems.reduce((count, curItem) => {
       return count + curItem.quantity;
     }, 0)
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     removeProductFromCart: id => dispatch(removeProductFromCart(id))
//   };
// };

export default connect(
  mapStateToProps
)(RemovedItemPage);
