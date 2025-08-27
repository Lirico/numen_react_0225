import { createContext, useReducer } from "react";
import { shoppingInitialState } from "@/reducer_shopping_cart/shoppingCart.initialState";
import { shoppingReducer } from "@/reducer_shopping_cart/shoppingCart.reducer";
import { TYPES } from "@/reducer_shopping_cart/shoppingCart.Actions";

export const ShoppingCartContext = createContext();

const ShoppingCartContextProvider = ({children}) => {
  const { ADD_TO_CART, REMOVE_ONE_ITEM, REMOVE_ALL_ITEMS, CLEAR_CART } = TYPES;

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

  const addToCart = (id) => dispatch({ type: ADD_TO_CART, payload: id });

  const deleteFromCart = (id) => dispatch({ type: REMOVE_ONE_ITEM, payload: id });

  const clearCart = () => dispatch({ type: CLEAR_CART });

  const value = {state, addToCart, deleteFromCart, clearCart }

  return (
    <ShoppingCartContext.Provider value={value}>
        {children}
    </ShoppingCartContext.Provider>
  )
};

export default ShoppingCartContextProvider;



