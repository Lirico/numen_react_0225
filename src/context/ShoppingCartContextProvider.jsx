import { createContext, useReducer, useEffect } from "react";
import { shoppingInitialState } from "@/reducer_shopping_cart/shoppingCart.initialState";
import { shoppingReducer } from "@/reducer_shopping_cart/shoppingCart.reducer";
import { TYPES } from "@/reducer_shopping_cart/shoppingCart.Actions";

export const ShoppingCartContext = createContext();

const ShoppingCartContextProvider = ({ children }) => {
  const {
    ADD_TO_CART,
    REMOVE_ONE_ITEM,
    REMOVE_ALL_ITEMS,
    CLEAR_CART,
    READ_STATE,
  } = TYPES;

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  // ASYNC AWAIT
  // Declarar una funcion como asincona -> ASYNC
  // Declarar que instrucciones seran asincronas -> AWAIT

  const readState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:5000/products",
      cart: "http://localhost:5000/cart",
    };

    const productsResponse = await fetch(ENDPOINTS.products);
    const cartResponse = await fetch(ENDPOINTS.cart);
    const products = await productsResponse.json();
    const cart = await cartResponse.json();

    dispatch({type: READ_STATE, payload: {
      products: products,
      cart: cart
    }})
  };

  useEffect(() => {
    readState();
  }, []);

  const addToCart = (id) => dispatch({ type: ADD_TO_CART, payload: id });

  const deleteFromCart = (id, all = false) => {
    // all -> true, all -> false
    if (all) {
      dispatch({ type: REMOVE_ALL_ITEMS, payload: id });
    } else {
      dispatch({ type: REMOVE_ONE_ITEM, payload: id });
    }
  };

  const clearCart = () => dispatch({ type: CLEAR_CART });

  const value = { state, addToCart, deleteFromCart, clearCart };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContextProvider;
