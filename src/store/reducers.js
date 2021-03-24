// import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART , ADD_PRODUCT_TO_REMOVEDITEMCART} from './actions';

// const initialState = {
//   products: [
//     { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
//     { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
//     { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
//     { id: 'p4', title: 'Half-dried plant', price: 2.99 }
//   ],
//   cart: [],
//   removedItems:[]
// };

// const shopReducer = (state = initialState, action) => {
//   let updatedCart;
//   let updatedItemIndex;
//   let updatedRemovedCart;
//   let updatedItemIndexForCart;
//   //let updatedProducts;
//   switch (action.type) {
//     case ADD_PRODUCT_TO_CART:
//       updatedCart = [...state.cart];
//       //updatedProducts=[...state.products]
//       updatedItemIndex = updatedCart.findIndex(
//         item => item.id === action.payload.id
//       );

//       if (updatedItemIndex < 0) {
//         updatedCart.push({ ...action.payload, quantity: 1 });
        
//       } 
//       else {
//         const updatedItem = {
//           ...updatedCart[updatedItemIndex]
//         };
//        // const updatedItemForProduct={...updatedProducts[updatedItemIndex]}
//         updatedItem.quantity++;
//         //updatedItemForProduct.quantity--;
//         updatedCart[updatedItemIndex] = updatedItem;
//         //updatedProducts[updatedItemIndex]=updatedItemForProduct
//       }
//       // if(updatedProducts.quantity<=0){
//       //   updatedProducts.splice(updatedItemIndex, 1);
//       // }
      
//       return { ...state,cart: updatedCart };
//     // case REMOVE_PRODUCT_FROM_CART:
//     // updatedCart = [...state.cart];
    
//     //   updatedItemIndex = updatedCart.findIndex(
//     //     item => item.id === action.payload
//     //   );

//     //   const updatedItem = {
//     //     ...updatedCart[updatedItemIndex]
//     //   };
//     //   updatedItem.quantity--;
//     //   if (updatedItem.quantity <= 0) {
        
//     //     updatedCart.splice(updatedItemIndex, 1);

//     //   } else {
//     //     //let newItem;
//     //     //newItem=updatedCart[updatedItemIndex]
//     //     //updatedRemovedCart.push(newItem)
//     //     updatedCart[updatedItemIndex] = updatedItem;
//     //   }
      
//     //   return { ...state, cart: updatedCart ,removedItems:updatedRemovedCart};
//       case ADD_PRODUCT_TO_REMOVEDITEMCART:
//         updatedRemovedCart=[...state.removedItems]
//         updatedCart = [...state.cart];
//         updatedItemIndex = updatedRemovedCart.findIndex(
//           item => item.id === action.payload.id
//         );
//         updatedItemIndexForCart = updatedCart.findIndex(
//           item => item.id === action.payload.id
//         );
//         if (updatedItemIndex < 0) {
//           updatedRemovedCart.push({ ...action.payload, quantity: 1 });
          
          
          
//         } 
//         else{
//           const updatedItemForRemove = {
//             ...updatedRemovedCart[updatedItemIndex]
//         }
//         updatedItemForRemove.quantity++;
       
//         updatedRemovedCart[updatedItemIndex] = updatedItemForRemove;
//       }
//         const updatedItemforCart = {
//           ...updatedCart[updatedItemIndexForCart]
//         };
//         updatedItemforCart.quantity--;
//         if (updatedItemforCart.quantity <= 0) {
        
//           updatedCart.splice(updatedItemIndexForCart, 1);
  
//         }
//         else {
          
//           updatedCart[updatedItemIndexForCart] = updatedItemforCart;
//         }
       
       
        
      
      
//         return { ...state,removedItems: updatedRemovedCart, cart:updatedCart };
      

//     default:
//       return state;
//   }
// };

// export default shopReducer;
const shopReducer = () => {}
export default shopReducer;