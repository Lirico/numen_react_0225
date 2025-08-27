import { TYPES } from "./counterActions"

const { INCREMENTAR, DECREMENTAR, RESETEAR, MOSTRAR, OCULTAR } = TYPES;

export function reducer(state, action){
  switch(action.type){
    case INCREMENTAR: {
      return {
        ...state,
        contador: state.contador + action.payload // 1
      }
    }
    case RESETEAR: {
      return {
        ...state,
        contador: 0
      }
    }
    case DECREMENTAR: {
      return {
        ...state,
        contador: state.contador - action.payload // 1
      }
    }
    case MOSTRAR: {
      return {
        ...state,
        visible: true
      }
    }
    case OCULTAR: {
      return {
        ...state,
        visible: false
      }
    }
    default:
      return state
  }
}