import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { connect } from "react-redux"
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import RemovedItemPage from "./pages/RemovedItemPage"
import './App.css';
import './components/MainNavigation.css';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      
      <BrowserRouter>
      <div>
      <header className="main-navigation">
          <nav>
            <ul>
              <li>
                <NavLink to="/">Products</NavLink>
              </li>
              <li>
                <NavLink to="/cart">Carts ({this.props.cartItemCount})</NavLink>
              </li>
              <li>
                <NavLink to="/removed">Removed Item ({this.props.removedItemCount})</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/cart" component={CartPage} exact />
          <Route path="/removed" component={RemovedItemPage} exact />

        </Switch>
        </div>
      </BrowserRouter>
      
      
    );
  }
}
const mapStateToProps = state => {
  return {
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0),
    removedItemCount: state.removedItems.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  }
}
export default connect(mapStateToProps)(App);
