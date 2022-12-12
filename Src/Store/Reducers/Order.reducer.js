import { GET_ORDERS } from "../Acciones/Orden.action";

const initalState = {
  list: [],
};

const OrderReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default OrderReducer