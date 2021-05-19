// import { useReducer } from "react";
<<<<<<< HEAD
import {
    UPDATE_CANINE,
    UPDATE_EMPLOYEE,
    UPDATE_VOLUNTEER,
    
  } from "./actions";
  
  const initialState = {
    products: [],
    categories: [],
    currentCategory: '',
    cart: [],
    cartOpen: false
  
  }
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_PRODUCTS:
        return {
          ...state,
          products: [...action.products],
        };
  
      case UPDATE_CATEGORIES:
        return {
          ...state,
          categories: [...action.categories],
        };
  
      case UPDATE_CURRENT_CATEGORY:
        return {
          ...state,
          currentCategory: action.currentCategory,
        };
      case ADD_TO_CART:
        return {
          ...state,
          cartOpen: true,
          cart: [...state.cart, action.product],
        };
  
      case ADD_MULTIPLE_TO_CART:
        return {
          ...state,
          cart: [...state.cart, ...action.products],
        };
  
      case REMOVE_FROM_CART:
        let newState = state.cart.filter((product) => {
          return product._id !== action._id;
        });
  
        return {
          ...state,
          cartOpen: newState.length > 0,
          cart: newState,
        };
  
      case UPDATE_CART_QUANTITY:
        return {
          ...state,
          cartOpen: true,
          cart: state.cart.map((product) => {
            if (action._id === product._id) {
              product.purchaseQuantity = action.purchaseQuantity;
            }
            return product;
          }),
        };
  
      case CLEAR_CART:
        return {
          ...state,
          cartOpen: false,
          cart: [],
        };
  
      case TOGGLE_CART:
        return {
          ...state,
          cartOpen: !state.cartOpen,
        };
  
      default:
        return state;
    }
  };
=======
// import {
//     UPDATE_CANINE,
//     UPDATE_EMPLOYEE,
//     UPDATE_VOLUNTEER,
    
//   } from "./actions";
  
//   const initialState = {
//     products: [],
//     categories: [],
//     currentCategory: '',
//     cart: [],
//     cartOpen: false
  
//   }
  
//   export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case UPDATE_PRODUCTS:
//         return {
//           ...state,
//           products: [...action.products],
//         };
  
//       case UPDATE_CATEGORIES:
//         return {
//           ...state,
//           categories: [...action.categories],
//         };
  
//       case UPDATE_CURRENT_CATEGORY:
//         return {
//           ...state,
//           currentCategory: action.currentCategory,
//         };
//       case ADD_TO_CART:
//         return {
//           ...state,
//           cartOpen: true,
//           cart: [...state.cart, action.product],
//         };
  
//       case ADD_MULTIPLE_TO_CART:
//         return {
//           ...state,
//           cart: [...state.cart, ...action.products],
//         };
  
//       case REMOVE_FROM_CART:
//         let newState = state.cart.filter((product) => {
//           return product._id !== action._id;
//         });
  
//         return {
//           ...state,
//           cartOpen: newState.length > 0,
//           cart: newState,
//         };
  
//       case UPDATE_CART_QUANTITY:
//         return {
//           ...state,
//           cartOpen: true,
//           cart: state.cart.map((product) => {
//             if (action._id === product._id) {
//               product.purchaseQuantity = action.purchaseQuantity;
//             }
//             return product;
//           }),
//         };
  
//       case CLEAR_CART:
//         return {
//           ...state,
//           cartOpen: false,
//           cart: [],
//         };
  
//       case TOGGLE_CART:
//         return {
//           ...state,
//           cartOpen: !state.cartOpen,
//         };
  
//       default:
//         return state;
//     }
//   };
>>>>>>> 1ccff4cb6b376eaeaf215d2311c13511a84a7ea7
  
  // export function useProductReducer(initialState) {
  //   return useReducer(reducer, initialState);
  // }
  
  
  // redux 
<<<<<<< HEAD
  export default reducer;
=======
//   export default reducer;
>>>>>>> 1ccff4cb6b376eaeaf215d2311c13511a84a7ea7
