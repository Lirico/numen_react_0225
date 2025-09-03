import { TYPES } from "./shoppingCart.Actions";
import { shoppingInitialState } from "./shoppingCart.initialState";

const { ADD_TO_CART, REMOVE_ONE_ITEM, REMOVE_ALL_ITEMS, CLEAR_CART, READ_STATE } = TYPES;

export function shoppingReducer(state, action) {
  switch (action.type) {
    case READ_STATE: {
        return {
            ...state,
            products: action.payload.products,
            cart: action.payload.cart
        }
    }
    case ADD_TO_CART: {
      // state -> products -> product.id -> id de database
      // action -> payload -> id de card
      // product -> referencia
      // id -> referencia
      // db -> referencia
      // coincide -> ===
      // buscar -> find()
      // Programar es -> describir la solucion a un problema computacional
      const newItem = state.products.find(
        (product) => product.id === action.payload
      );

      const itemInCart = state.cart.find((item) => item.id === newItem.id);
      // itemInCart puede haberse encontrado, como no.
      // Si encuentra -> {}
      // Sino -> undefined
      // Sabemos que itemInCart existe (true) o no existe (false)

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case REMOVE_ONE_ITEM: {
      const itemToDelete = state.cart.find(
        (item) => item.id === action.payload
      );

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemToDelete.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter(item => item.id !== itemToDelete.id)
        };
    }
    case REMOVE_ALL_ITEMS: {
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
        }
    }
    case CLEAR_CART: {
        return shoppingInitialState
    }
    default:
      return state;
  }
}
