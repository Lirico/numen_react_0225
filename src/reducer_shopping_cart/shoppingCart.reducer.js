import { TYPES } from "./shoppingCart.Actions";


const {ADD_TO_CART, REMOVE_ONE_ITEM, REMOVE_ALL_ITEMS, CLEAR_CART} = TYPES;

export function shoppingReducer(state, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            // state -> products -> product.id -> id de database
            // action -> payload -> id de card
            // product -> referencia
            // id -> referencia
            // db -> referencia
            // coincide -> ===
            // buscar -> find()
            // Programar es -> describir la solucion a un problema computacional
            const newItem = state.products.find(product => product.id === action.payload)

            return {
                ...state,
                cart: [...state.cart, newItem]
            }
        }
        case REMOVE_ONE_ITEM: {}
        case REMOVE_ALL_ITEMS: {}
        case CLEAR_CART: {}
        default:
            return state;
    }
}
