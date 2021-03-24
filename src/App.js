import React, { Component ,useContext} from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { connect } from "react-redux"
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import RemovedItemPage from "./pages/RemovedItemPage"
import ShopContext from "./context/shop-context"
import './App.css';

//import './components/MainNavigation.css';




class App extends Component {
  
  constructor(props) {
    super(props)
    this.state={
      products: [
        { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
        { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
        { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
        { id: 'p4', title: 'Half-dried plant', price: 2.99 }
      ],
      cart: [],
      removedItems:[]
    }
  }
  addProductToCart=product=>{
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    const updatedCart = [...this.state.cart];
      //updatedProducts=[...state.products]
     const updatedItemIndex = updatedCart.findIndex(
        item => item.id === product.id
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...product, quantity: 1 });
        
      } 
      else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      this.setState({cart:updatedCart})

  }
  addProductToRemovedCart=productId=>{
    console.log("hhhhhhhhhhhhhhhhhhhhh")
   let updatedRemovedCart=[...this.state.removedItems]
        let updatedCart = [...this.state.cart];
       let updatedItemIndex = updatedRemovedCart.findIndex(
          item => item.id === productId
        );
       let updatedItemIndexForCart = updatedCart.findIndex(
          item => item.id === productId
        );
        if (updatedItemIndex < 0) {
          updatedRemovedCart.push({ ...productId, quantity: 1 });
          
          
          
        } 
        else{
          const updatedItemForRemove = {
            ...updatedRemovedCart[updatedItemIndex]
        }
        updatedItemForRemove.quantity++;
       
        updatedRemovedCart[updatedItemIndex] = updatedItemForRemove;
      }
        const updatedItemforCart = {
          ...updatedCart[updatedItemIndexForCart]
        };
        updatedItemforCart.quantity--;
        console.log(" the updated cart is ", updatedItemforCart)
        if (updatedItemforCart.quantity <= 0) {
          console.log("i am inside if for updtaed cart")
        
          updatedCart.splice(updatedItemIndexForCart, 1);
  
        }
        else {
          
          updatedCart[updatedItemIndexForCart] = updatedItemforCart;
          console.log(" the updated cart in else is ", updatedCart)
        }
       this.setState({removedItems: updatedRemovedCart},()=>{
         this.setState({cart:updatedCart})
       })




      
  }
  render() {
    return (
      <ShopContext.Provider value={{
        products:this.state.products,
        cart:this.state.cart,
        removedItems:this.state.removedItems,
        addProductToCart:this.addProductToCart,
        addProductToRemovedCart:this.addProductToRemovedCart
      }}>
      <BrowserRouter>
      <div>
      {/* <header className="main-navigation">
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
        </header> */}
        <Switch>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/cart" component={CartPage} exact />
          <Route path="/removed" component={RemovedItemPage} exact />

        </Switch>
        </div>
      </BrowserRouter>
      </ShopContext.Provider>
      
      
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0),
//     removedItemCount: state.removedItems.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   }
// }
export default App;
