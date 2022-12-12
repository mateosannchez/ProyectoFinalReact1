import { createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import CartReducer from "./Reducers/Cart.reducer";
import CategoriaReducer from "./Reducers/Categoria.reducer";
import MoldeReducer from "./Reducers/Molde.reducer";

const RootReducer = combineReducers({
  categorias: CategoriaReducer,
  breads: MoldeReducer,
  cart: CartReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));