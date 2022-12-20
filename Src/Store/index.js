import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./Reducers/Auth.reducers";
import CartReducer from "./Reducers/Cart.reducer";
import CategoriaReducer from "./Reducers/Categoria.reducer";
import MoldeReducer from "./Reducers/Molde.reducer";
import OrderReducer from "./Reducers/Order.reducer"

const RootReducer = combineReducers({
  categorias: CategoriaReducer,
  breads: MoldeReducer,
  cart: CartReducer,
  orders: OrderReducer,
  auth: AuthReducer,

});

export default createStore(RootReducer, applyMiddleware(thunk));