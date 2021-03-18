export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
//export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODCUT_FROM_CART';
export const ADD_PRODUCT_TO_REMOVEDITEMCART = 'ADD_PRODUCT_TO_REMOVEDITEMCART';
export const addProductToCart = product => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product
      });
    }, 700);
  };
};

// export const removeProductFromCart = productId => {
//     return dispatch => {
//       setTimeout(() => {
//         dispatch({
//           type: REMOVE_PRODUCT_FROM_CART,
//           payload: productId
//         });
//       }, 700);
//     };
//   };
  export const addProductToRemovedCart = productId => {
    console.log("the action called", productId)
    return dispatch => {
      setTimeout(() => {
        dispatch({
          type: ADD_PRODUCT_TO_REMOVEDITEMCART,
          payload: productId
        });
      }, 700);
    };
  };
